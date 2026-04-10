# Portfolio

A single-page developer portfolio built with HTML, Tailwind CSS, and vanilla JavaScript. No frameworks, no build dependencies beyond a Tailwind CLI setup. Designed for performance, accessibility, and maintainability.

Live site: my-portfolio-link

## Tech Stack

Markup - HTML5
Styling - Tailwind CSS V4
Interactivity - Vanilla JavaScript
Icons - Lucide, font awesome
Typography - Inter - Google Fonts
deployment - vercel

## Getting Started

### Prerequisites

- Node.js >=18.x (required for the tailwind cli)
- Git
- A code editor

### Installation

Clone the repository and install dependancies

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
npm install
```

Start the Tailwind watcher during development

`npx tailwindcss -i ./main.css -o ./dist/output.css --watch`

Open index.html directly in your browser, or use the Live Server extension in VS Code for hot reload
No dev  server is required. There is no bundler

## Project structure

The project is intentionally flat. All markup lives in index.html. javaScript is unmodularised - the file is small enough that splitting it into modules would add complexity without benefit.

```project structure
my-portfolio/
|___node_modules/
|___src/
|___|___css/
|___|___|___main.css
|___|___js/
|___|___|___script.js
|___|___assets/
|___|___|___images/
|___|___|___|___projects/
|___|___|___|___oh-image.webp
|___dist/
|___|___output.css
|___package.json
|___package-lock.json
|___.gitignore
|___README.md
|___resume.pdf
```

## Features

- Sticky two-column layout - The left panel (identity, navigation, social links) is fixed to the viewport. The right panel (about, experience, projects) scrolls independently.
- Cursor spotlight - A radial gradient follows the cursor across the page, creating a subtle ambient light effect. Implemented with a mousemove listener that updates two CSS custom properties (--mouse-x, --mouse-y) on the document root.
- Scroll driven navigation - The active nav link updates as the user scrolls through sections. Uses IntersectionObserver with a rootMargin of -40% 0px -60% 0px to trigger at mid-viewport rather than section edge.
- Card hover dimming - When hovering an experience card, all other cards dim to 50% opacity. Achieved witha single CSS rule on the parent list using :not(:hover)
- Reduced motion support - All transitions and the cursor glow are disabled when prefers-reduced-motion: reduce is set.

## Design Decisions

### No framework

The interactivity on this page - active nav, cursor glow, card hover - does not justify the complexity of a component framework. Vanilla javascript handles all of it in under 60 lines.

### CSS custom properties for the design system

Every color is defined as a token on :root. This makes future palette changes a one-line edit and prevents color valued from being scattered across utility classes.

### Content last 

The layout and interactions were built and verified with placeholder content. Real copy and images were added only after the structure was stable.

## Accessibility

- Semantic HTML throughout
- Icon-only links include aria-label
- Skip to content link at the top of the document
- Keyboard navigable - no interaction requires a mouse
- Color contrast meets WCAG AA on all text

## Performance

- All images are compressed and served as webp
- Images use lazy loading and explicit width and height attributes
- No javascript excecutes on the critical render path
- No third party scripts beyond Google Fonts

## Deployment

The site deploys to Vercel on every push to main. No build command is required - vercel serves index.html as a static file.

## Acknowledgements

Design reference: Brittany Chiang. The layout architecture and interaction patterns were studied and re-implemented independently.

## License

MIT

## Bugs

- The open gragh tags are not set up correctly
