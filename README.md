# Personal Website of Sachin Poudel https://sachinscnpdl.github.io/

Welcome to my personal website! This is an MIT licensed React-based Jamstack application. It offers a simple interface, easy modifications, static export capabilities, and free automatic deployments via GitHub Pages.

---

## 🚀 Features

* Built with modern JavaScript, using tools and frameworks like Create React App, React Router, and SCSS.
* Automated workflows via GitHub Actions.
* Static export for easy hosting on any CDN.
* Free deployments powered by GitHub Pages.

---

## 🛠 Setup and Running

1. **Clone the repository**

   ```bash
   git clone https://github.com/sachinscnpdl/sachinscnpdl.github.io.git
   cd sachinscnpdl.github.io
   ```

2. **Ensure Node.js v16 or higher** (optional but recommended)

   ```bash
   nvm install
   node --version
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   By default, the application will be available at `http://localhost:3000/`.

---

## 🚢 Deploying

### Deploy to GitHub Pages

1. Review and update the environment variables and Git remote URL in `.github/workflows/github-pages.yml`.
2. Adjust the `homepage` field in `package.json` to match your GitHub Pages URL (e.g., `https://sachinscnpdl.github.io`).
3. If using a custom domain, update `public/CNAME`; otherwise, remove this file.

After committing to `main`, simply push your changes and the GitHub Actions workflow will automatically build and deploy your site.

```bash
npm run deploy
```

### Static Export (No GitHub Pages)

If you prefer to generate a static build without deploying via GitHub Pages:

1. Remove or disable `.github/workflows/github-pages.yml`.

2. Run:

   ```bash
   npm run predeploy
   ```

3. The static files will be in `build/`, which you can host on any CDN.

---

## 📂 Project Structure

```plaintext
sachinscnpdl.github.io/
├── src/
│   ├── static/css/pages/_home_page.scss
│   ├── layouts/Main.jsx
│   ├── pages/Index.js
│   ├── pages/Resume.js
│   ├── data/resume/{degrees.js, work.js, skills.js, courses.js}
│   ├── data/routes.js
│   └── components/
│       ├── Template/SideBar.js
│       └── Resume/{Degree.js, Job.js, Education.jsx, Experience.jsx, Skills.jsx, Courses.jsx, References.jsx}
├── public/
│   ├── index.html
│   └── SachinCV.pdf
├── package.json
├── .github/workflows/github-pages.yml
└── README.md
```

* **Sidebar**: `src/components/Template/SideBar.js`
* **Homepage**: `src/pages/Index.js`
* **Resume data**: `src/data/resume/`
* **Additional data** (projects, posts): `src/data/`
* **Favicon & CNAME**: defined in `public/index.html` and `public/CNAME`
* **Styles**: Typography in `src/static/css/base/_typography.scss`, homepage styles in `src/static/css/pages/_home_page.scss`

---

## 🤝 Contributing

Contributions are welcome! If you find issues or have suggestions, please open an issue or submit a pull request. Your feedback is valuable.

---

## 🔧 Dependencies

* Node.js >= v16 (use [nvm](https://github.com/nvm-sh/nvm) to manage versions)
* `gh-pages` for deployment (installed via `npm install --save-dev gh-pages`)

---

## 📝 Useful Commands

* **Run locally**: `npm start`
* **Build for production**: `npm run build`
* **Serve the build**: `npx serve build`
* **Deploy to GitHub Pages**: `npm run deploy`

---

## 🔎 Local Testing & Deployment Workflow

### Local Verification

To verify your site locally before committing:

```bash
npm start            # Start the development server
npm run build        # Create a production build
npx serve build      # Serve the production build locally
npm start            # (Optional) Re-run the dev server if needed
```

### Version Control

Commit and push your source code to the `main` branch:

```bash
git checkout main
git pull --rebase origin main
git add .
git commit -m "Your descriptive message"
git push origin main   # Update your source code on GitHub
```

### Deploy to GitHub Pages

Use the `gh-pages` package to publish your build:

```bash
npm run deploy        # Pushes build/ to gh-pages branch and triggers GitHub Pages
```

## 🙌 Acknowledgements

* Initial template from *Future Imperfect* by [@ajlkn](https://html5up.net) for HTML5 UP.
* Special thanks to [@typpo](https://github.com/typpo) for invaluable assistance with Node.js and React.
