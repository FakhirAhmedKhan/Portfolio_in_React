# 🚀 Portfolio in React

A modern, single-page portfolio built with React, Vite, and Tailwind CSS. Features animated hero, responsive navigation, project showcase, and a feedback form.

## ✨ Features

- ⚡ Single Page Application (SPA) with smooth hash navigation
- 📱 Responsive design for all devices
- 👋 Modern hero section with animated role
- 🖼️ Project cards with AVIF images for performance
- ♿ Accessible, keyboard-friendly navigation
- 🧊 Glassmorphic feedback form
- 🧹 Minimal, clean codebase

## 🛠️ Getting Started

### Prerequisites

- 🟢 Node.js (v16+ recommended)
- 📦 npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173/portfolio_in_React/](http://localhost:5173/portfolio_in_React/) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

- `src/` — React components (Home, About, Project, Footer, NavBar)
- `public/assets/` — AVIF images and icons
- `tailwind.config.js` — Tailwind CSS configuration
- `vite.config.js` — Vite configuration (note: `base` is set to `/portfolio_in_React/`)

## 🖼️ Image Handling

- All images use the AVIF format for best performance.
- Place your images in `public/assets/` and reference them with the correct base path.

## ♿ Accessibility & Best Practices

- ⌨️ All navigation and forms are keyboard accessible.
- 🏷️ Images have descriptive alt text.
- 🏗️ Layout uses semantic HTML and ARIA where needed.

## 🎨 Customization

- 📝 Edit `src/` components to update content, projects, or styles.
- 🎨 Update Tailwind config for custom colors or themes.

## 📄 License

MIT
