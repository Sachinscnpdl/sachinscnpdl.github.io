Personal Website of Sachin Poudel
Welcome to my personal website! This is an MIT licensed React-based Jamstack application. It offers a simple interface, easy modifications, static export capabilities, and free automatic deployments via GitHub Pages.
🚀 Features

Built with modern JavaScript, using tools and frameworks like create-react-app, React-Router, and SCSS.
Automated workflows via GitHub Actions.
And more!

🛠 Setup and Running

Clone the repository:
git clone git://github.com/sachinscnpdl/sachinscnpdl.github.io.git
cd sachinscnpdl.github.io


(Optional) Ensure you're on Node v16 or higher:
nvm install
node --version


Install dependencies:
npm install


Start the application:
npm start



By default, the application should be available at http://localhost:3000/.
🚢 Deploying
Deploying to GitHub Pages

Update the environment variables and Git remote URL in .github/workflows/github-pages.yml.
Adjust the homepage value in package.json based on your hosting preferences.
Planning on using a custom domain? Update public/CNAME. Otherwise, remove it.

After making a commit to main, simply push your changes, and the deployment will be handled automatically.
Static Export
For a static export without deploying to GitHub Pages:

Remove or disable .github/workflows/github-pages.yml.

Execute:
npm run predeploy



This will generate a static version in sachinscnpdl.github.io/build/ which you can host or deploy to a CDN.
📂 Project Structure
The project is organized as follows:
sachinscnpdl.github.io/
├── src/
│   ├── static/
│   │   └── css/
│   │       ├── pages/
│   │       │   └── _home_page.scss
│   ├── layouts/
│   │   └── Main.jsx
│   ├── pages/
│   │   └── Resume.js
│   ├── data/
│   │   ├── resume/
│   │   │   ├── degrees.js
│   │   │   ├── work.js
│   │   │   ├── skills.js
│   │   │   └── courses.js
│   ├── components/
│   │   └── Resume/
│   │       ├── Degree.js
│   │       ├── Job.js
│   │       ├── Education.jsx
│   │       ├── Experience.jsx
│   │       ├── Skills.jsx
│   │       ├── Courses.jsx
│   │       └── References.jsx
├── public/
│   ├── SachinCV.pdf
│   └── index.html


Sidebar: src/components/Template/SideBar.js
Homepage: src/pages/Index.js
Resume data: src/data/resume/
Other data (e.g., projects, posts): src/data/
Favicon: public/index.html
Styles: base/_topography.scss for typography, _home_page.scss for homepage styles
Tab ordering: src/data/routes.js

🤝 Contributing
If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Your feedback is valuable!
🔧 Dependencies
Ensure you have node >= v16. Optionally, use nvm to manage node versions.
📝 Useful Commands

Run locally:npm start


Build for production:npm run build


Serve the build:npx serve build


Deploy to GitHub Pages:npm run deploy



🙌 Acknowledgements

Initial template from Future Imperfect by @ajlkn for HTML5 UP.
Special thanks to @typpo for their invaluable assistance with node.js and React.
