Sneha Bajpai – Portfolio

A minimal, fast portfolio built with React + Vite + Tailwind CSS to showcase projects, experience, and skills.

Live
- https://portfolio-xtic.vercel.app

Features
- Clean sections: Home, Skills, About, Projects, Education, Achievements, Contact
- Centralized links and repo mapping in `src/data/links.js`
- Project images served from `public/` and mapped in code
- Responsive, accessible, and deploy-ready (Vercel)

Tech Stack
- React 19, Vite 7, Tailwind CSS 4
- Icons: lucide-react

Project Structure
- `src/components/*` UI components (Hero, About, Projects, etc.)
- `src/components/ProjectCard.jsx` unified card layout with fixed media height
- `src/data/links.js` social links and GitHub repo URLs
- `public/` static assets (project screenshots, profile photo)

Getting Started
1) Install dependencies
   npm install
2) Run the dev server
   npm run dev
3) Open the URL printed by Vite (usually http://localhost:5173)

Customize
- Update social links and project repository URLs in `src/data/links.js`.
- Replace or add screenshots in `public/` and ensure their names match the mapping in `src/components/Projects.jsx`.

Build
- Production build
   npm run build
- Preview the build locally
   npm run preview

Deploy
- This repo is configured to work well on Vercel. After pushing to GitHub, import the repo on Vercel and set the framework to Vite.