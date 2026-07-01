# Setup Instructions

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation Steps

### Step 1: Install Dependencies

Open your terminal (Command Prompt, PowerShell, or Git Bash) and navigate to the project folder:

```bash
cd myportfolio
```

Then install all dependencies:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### Step 2: Start Development Server

After installation completes, start the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will open at `http://localhost:5173`

### Step 3: Build for Production

To create an optimized production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The build output will be in the `dist` folder.

### Step 4: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

## Troubleshooting

### PowerShell Execution Policy Error

If you encounter an error about execution policies on Windows PowerShell, you have two options:

**Option 1: Use Command Prompt or Git Bash instead**
- Open Command Prompt (cmd) or Git Bash
- Navigate to the project folder and run the commands

**Option 2: Temporarily allow script execution**
- Open PowerShell as Administrator
- Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
- Confirm with 'Y'
- Now you can run npm commands

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Module Not Found Errors

If you see "Module not found" errors:
1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## Environment

This project uses:
- React 19.2.7
- Vite 8.1.1
- Tailwind CSS 3.4.17
- Three.js 0.160.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

1. **Hot Module Replacement (HMR)**: Changes to React components will reflect immediately without page reload
2. **CSS Changes**: Tailwind CSS changes will update instantly
3. **Three.js**: The 3D background may take a moment to initialize on first load
4. **Performance**: For best performance during development, keep the browser DevTools closed

## Project Structure Reference

- `src/components/` - All React components
- `src/index.css` - Global styles and Tailwind imports
- `src/App.jsx` - Main application component
- `public/` - Static assets
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite build configuration

## Next Steps

After setup, you can:
1. Customize the content in each component
2. Update images and links
3. Modify colors in `tailwind.config.js`
4. Add new sections or components
5. Update personal information

## Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Consult the official documentation:
  - [React](https://react.dev)
  - [Vite](https://vitejs.dev)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Three.js](https://threejs.org)
