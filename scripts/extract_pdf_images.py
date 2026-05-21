#!/usr/bin/env python3
"""
Academic Paper Figure Extractor Utility
This script extracts high-resolution figures from academic PDF papers using the local `pdfimages` utility.
It automatically filters out tiny page elements (like equations, icons, bullet points) so you only see the actual figures.

Requirements:
  - Python 3
  - 'pdfimages' utility (installed by default on most Linux systems as part of poppler-utils)

Usage:
  python3 scripts/extract_pdf_images.py <path_to_paper.pdf> [output_directory]
"""

import os
import sys
import subprocess
import shutil
from PIL import Image  # Optional, falls back to file size if PIL is not installed

def extract_figures(pdf_path, output_dir=None):
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file '{pdf_path}' not found.")
        sys.exit(1)

    # Resolve output directory
    pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
    if not output_dir:
        output_dir = os.path.join(os.getcwd(), f"extracted_figures_{pdf_name}")
    
    os.makedirs(output_dir, exist_ok=True)
    print(f"[*] Extracting images from '{pdf_path}' into '{output_dir}'...")

    # Run pdfimages to extract images as PNG
    # -png flag extracts images in PNG format which is lossless and clean
    prefix = os.path.join(output_dir, "img")
    try:
        subprocess.run(["pdfimages", "-png", pdf_path, prefix], check=True)
    except FileNotFoundError:
        print("Error: 'pdfimages' command line tool not found.")
        print("Please install poppler-utils. On Ubuntu/Debian: sudo apt-get install poppler-utils")
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        print(f"Error running pdfimages: {e}")
        sys.exit(1)

    # Scan and filter extracted images
    extracted_files = [f for f in os.listdir(output_dir) if f.startswith("img-") and f.endswith(".png")]
    if not extracted_files:
        print("No images were extracted from this PDF.")
        return

    print(f"[*] Total raw images extracted: {len(extracted_files)}")
    print("[*] Filtering out small page elements (equations, icons, logos)...")

    valid_figures = []
    
    # Filtering threshold: 
    # - File size > 15 KB (removes tiny symbols)
    # - If PIL (Pillow) is available, also filter out images where width or height < 150px
    has_pil = True
    try:
        from PIL import Image
    except ImportError:
        has_pil = False
        print("[!] PIL/Pillow is not installed. Filtering will rely solely on file size (threshold: 15KB).")

    for file_name in sorted(extracted_files):
        file_path = os.path.join(output_dir, file_name)
        file_size_kb = os.path.getsize(file_path) / 1024

        # 1. Basic file size filter
        if file_size_kb < 15:
            os.remove(file_path)
            continue

        # 2. Dimensions filter (if PIL is available)
        if has_pil:
            try:
                with Image.open(file_path) as img:
                    width, height = img.size
                    # Filter out long thin lines, tiny inline images, or icons
                    if width < 150 or height < 150 or (width / height > 10) or (height / width > 10):
                        os.remove(file_path)
                        continue
            except Exception:
                pass

        valid_figures.append(file_name)

    print(f"\n[+] Successfully extracted and filtered {len(valid_figures)} potential figures/images:")
    for fig in sorted(valid_figures):
        fig_path = os.path.join(output_dir, fig)
        size_kb = os.path.getsize(fig_path) / 1024
        res_str = ""
        if has_pil:
            try:
                with Image.open(fig_path) as img:
                    res_str = f" ({img.width}x{img.height})"
            except Exception:
                pass
        print(f"  - {fig}: {size_kb:.1f} KB{res_str}")

    print("\nNext Steps:")
    print("1. Open the output directory and inspect the extracted images:")
    print(f"   xdg-open '{output_dir}'")
    print("2. Choose the best/most attractive figure representing your paper.")
    print("3. Convert/save it to JPG or PNG and place it in the public folder:")
    print("   public/images/publications/<filename>.[jpg|png]")
    print("4. Update 'image' field in 'src/data/Publications.js' to match the filename!")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/extract_pdf_images.py <path_to_paper.pdf> [output_directory]")
        sys.exit(1)

    pdf = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else None
    extract_figures(pdf, out)
