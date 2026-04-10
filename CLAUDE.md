# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

chickblood is a multilingual (EN/CN/JP/KR) community website with a React frontend, Express/MongoDB backend, and a Discord bot.

## Commands

### Frontend (`chickblood-frontend/`)
```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run lint       # ESLint (JS/JSX)
npm run preview    # Preview production build
```

### Backend (`chickblood-backend/`)
```bash
npm run dev        # Start with nodemon (port 3001)
npm start          # Start with node
```
Requires `.env` with MongoDB connection string (loaded via `config/mongoConfig.js`).

### Discord Bot (`discord/`)
```bash
python main.py     # Run the bot (requires bot token)
```

## Architecture

### Frontend
- **React 18 + Vite** with React Router for client-side routing
- **MUI (Material UI v5)** for component library and theming
- **i18next** for internationalization — translations live in `src/translation/{en,chn,jpn,krn}/`
- Routes defined in `src/App.jsx` — top-level `Layout` wraps most pages with a custom cursor and fullscreen viewport
- Some routes (e.g., `/home`, `/eventhome`, `/dayone`) render outside the `Layout` wrapper

**Key custom hooks** (`src/hooks/`):
- `useColorPalette` — project color palette (skyBlue, pear, egyptianBlue, white, black)
- `useFontFamily` — language-aware font families (light/bold per language)
- `useWindowSize` — responsive breakpoints

**Shared utilities** (`src/utils/`): app bar, custom cursor, language switcher, loading page

**Media**: Images served via Cloudflare CDN (not local assets). Image preloading pattern with `LoadingPage` component is used across pages.

### Backend
- **Express + Mongoose** connecting to MongoDB
- Currently a single domain: email sending (`routes/emailRoutes.js` -> `controllers/emailController.js` -> `services/emailService.js`)
- Frontend connects to backend at `http://localhost:3001` (configured in `src/config.js`)

### Discord Bot
- Python bot using `discord.py` with scheduled daily messages in Chinese
- Uses `keep_alive.py` for uptime pinging
