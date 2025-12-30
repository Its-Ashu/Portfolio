# Ashish Pipaliya - Portfolio

A modern, responsive single-page React portfolio showcasing projects, experience, and skills. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive**: Mobile-first design that works on all devices
- **Client-Side Routing**: Dynamic project detail pages with React Router
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **ESLint + Prettier** - Code quality and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ashishpipaliya/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectsGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/            # Data files
│   │   └── projects.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## 🚢 Deployment

### GitHub Pages (Manual)

1. Update `vite.config.js` with your repository name:
```js
base: '/your-repo-name/'
```

2. Build the project:
```bash
npm run build
```

3. Deploy using gh-pages:
```bash
npm run deploy
```

This will push the `dist` folder to the `gh-pages` branch.

### GitHub Pages (Automated with GitHub Actions)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages on every push to the main branch.

1. Go to your repository settings
2. Navigate to "Pages" under "Settings"
3. Select "GitHub Actions" as the source
4. Push to the main branch to trigger deployment

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the base path in `vite.config.js` if needed

## 📝 Customization

### Adding Projects

Edit `src/data/projects.js` to add or modify projects. Each project should have:

- `slug` - URL-friendly identifier
- `title` - Project name
- `date` - Project date
- `role` - Your role in the project
- `shortDescription` - Brief description for cards
- `longDescription` - Full description for detail page
- `techStack` - Array of technologies used
- `problem` - Problem statement
- `approach` - Array of approach steps
- `result` - Array of results/outcomes
- `githubUrl` - GitHub repository URL (optional)
- `liveUrl` - Live demo URL (optional)

### Updating Personal Information

Update contact information in:
- `src/components/Contact.jsx` - Contact section
- `src/components/Header.jsx` - Header navigation
- `src/components/Hero.jsx` - Hero section
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Experience section

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and spacing in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and custom utilities

## 🧪 Development

### Code Quality

Run ESLint:
```bash
npm run lint
```

Format code with Prettier:
```bash
npm run format
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ashish Pipaliya**

- Email: ashishpipaliya786@gmail.com
- Phone: +91 63543 48235
- LinkedIn: [ashishpipaliya](https://linkedin.com/in/ashishpipaliya)
- GitHub: [ashishpipaliya](https://github.com/ashishpipaliya)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons from Heroicons
- Fonts from Google Fonts (Inter & Poppins)

