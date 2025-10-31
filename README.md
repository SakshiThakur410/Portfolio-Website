# Sakshi Thakur - Portfolio

A modern, professional portfolio website built with React, Tailwind CSS, Redux Toolkit, Framer Motion, and more.

## 🌟 Features

- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Smooth Animations** - Framer Motion animations with scroll triggers
- **State Management** - Redux Toolkit for managing portfolio data
- **Modern UI** - Tailwind CSS for beautiful, customizable styling
- **Interactive Components** - Dynamic skill cards, project showcases, and more
- **SEO Friendly** - Optimized for search engines

## 📂 Project Structure

```
sakshi-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation bar
│   │   ├── Hero.jsx           # Landing page with animated intro
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Interactive skill cards
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Certificates.jsx   # Certifications display
│   │   ├── Achievements.jsx   # Awards and recognition
│   │   └── Contact.jsx        # Contact information
│   ├── store/
│   │   ├── store.js           # Redux store configuration
│   │   └── portfolioSlice.js  # Portfolio data slice
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sakshi-portfolio.git
cd sakshi-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Update vite.config.js base: `base: '/sakshi-portfolio/'`
4. Run: `npm run deploy`

## 🛠️ Technologies

- React, Vite, Tailwind CSS
- Redux Toolkit, Framer Motion
- React Router, React Icons, Axios

## 📝 Customization

Edit `src/store/portfolioSlice.js` to update your skills, projects, certificates, and achievements.
Edit `tailwind.config.js` to change colors.
Edit `src/components/Contact.jsx` to update contact info.

## 👤 Author

**Sakshi Thakur**
- Frontend Developer | B.Tech in Computer Science
- LinkedIn: [linkedin.com/in/sakshithakur](https://linkedin.com/in/sakshithakur)
- GitHub: [@SakshiThakur410](https://github.com/SakshiThakur410)

