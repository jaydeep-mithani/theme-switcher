# Theme Switcher App

A beautiful, responsive Next.js application featuring dynamic theme switching with three distinct visual styles. Built with modern web technologies and designed for optimal user experience.

## 🌟 Features

- **Dynamic Theme Switching**: Three unique themes with completely different visual styles
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI Components**: Custom-built components with smooth animations and transitions
- **Type Safety**: Built with TypeScript for enhanced developer experience
- **Performance Optimized**: Utilizes Next.js App Router for optimal performance

## 🎨 Available Themes

### Theme 1 - Clean & Professional

- Light, minimalist design with blue accents
- Clean typography and subtle shadows
- Traditional top navigation layout
- Perfect for business and professional applications

### Theme 2 - Dark & Bold

- Dark mode with emerald green accents
- Sidebar navigation layout
- Bold serif typography (Playfair Display)
- Dramatic shadows and modern gradients

### Theme 3 - Colorful & Playful

- Vibrant, multi-color gradient design
- Playful typography (Pacifico font)
- Animated elements and emoji decorations
- Fun, engaging user experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd theme-switcher
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
theme-switcher/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── appWrapper/
│   │   │   └── index.tsx
│   │   ├── card/
│   │   │   └── index.tsx
│   │   ├── contactCard/
│   │   │   └── index.tsx
│   │   ├── form/
│   │   │   ├── check/
│   │   │   │   └── index.tsx
│   │   │   ├── inputControl/
│   │   │   │   └── index.tsx
│   │   │   ├── label/
│   │   │   │   └── index.tsx
│   │   │   └── index.tsx
│   │   ├── navbar/
│   │   │   └── index.tsx
│   │   ├── statCard/
│   │   │   └── index.tsx
│   │   ├── themeButton/
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── constants/
│   │   └── index.tsx
│   ├── context/
│   │   ├── index.ts
│   │   └── themeContext.tsx
│   ├── hooks/
│   │   └── useTheme.tsx
│   └── themes/
│       ├── theme1.css
│       ├── theme2.css
│       └── theme3.css
├── public/
│   └── logo.png
└── package.json
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Reactive javascript library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## 🎨 Theme Architecture

Each theme is implemented as a separate CSS file with:

- **Scoped styling** using theme-specific classes
- **CSS custom properties** for consistent color schemes
- **Component-level styling** for buttons, cards, forms, etc.
- **Page-specific layouts** and animations
- **Responsive design** considerations

### Theme Switching Logic

The theme system works by:

1. Applying a theme class to the root container (`theme-theme1`, `theme-theme2`, `theme-theme3`)
2. Each theme CSS file contains all component styles scoped under its theme class
3. Components maintain the same HTML structure across all themes
4. CSS handles all visual differences through the theme scoping

## 📱 Responsive Design

- **Mobile First**: Designed with mobile devices as the primary consideration
- **Breakpoint System**: Utilizes Tailwind's responsive breakpoints
- **Adaptive Layouts**: Themes adjust their layouts for different screen sizes

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Modifying Existing Themes

Each theme file contains:

- **Color variables** at the top for easy customization
- **Component styles** for buttons, cards, forms, etc.
- **Layout styles** for navigation and page structure
- **Animation definitions** for smooth interactions

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **Next.js team** for the excellent React framework
- **Lucide** for the beautiful icon library
- **Google Fonts** for the typography options
