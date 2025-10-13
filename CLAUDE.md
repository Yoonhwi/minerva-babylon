# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**minerva-babylon** is a React application built with TypeScript and Vite. The project uses SWC for Fast Refresh via `@vitejs/plugin-react-swc`. This is currently a minimal template setup with basic React components.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Vite dev server with HMR (Hot Module Replacement) enabled.

### Build for Production
```bash
npm run build
```
Runs TypeScript compiler (`tsc -b`) followed by Vite build. Build output goes to `dist/`.

### Lint Code
```bash
npm run lint
```
Runs ESLint on all TypeScript/TSX files. Uses flat config format (`eslint.config.js`).

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

## TypeScript Configuration

The project uses TypeScript project references with separate configs:
- `tsconfig.json` - Root config that references other configs
- `tsconfig.app.json` - Application code config (src directory)
  - Target: ES2022
  - Strict mode enabled with additional linting flags
  - Module resolution: bundler mode
  - JSX: react-jsx
- `tsconfig.node.json` - Node/build tools config

TypeScript compiler options include strict type checking with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch` enabled.

## Code Architecture

### Project Structure
```
src/
  main.tsx          - Application entry point, renders root React component
  App.tsx           - Main App component
  index.css         - Global styles
  assets/           - Static assets
```

### Entry Point Flow
1. `main.tsx` creates React root on `#root` element
2. Wraps `<App />` in `<StrictMode>`
3. App.tsx contains main application logic

### React Version
Uses React 19.1.1 with React DOM 19.1.1. Components are wrapped in StrictMode.

## Linting

ESLint configuration (`eslint.config.js`) uses flat config format with:
- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` recommended-latest config
- `eslint-plugin-react-refresh` Vite config

Ignores `dist/` directory.

## Build System

Vite 7.x is used as the build tool and dev server. Configuration is minimal with just the React SWC plugin enabled.

### Note on React Compiler
The React Compiler is currently not compatible with SWC plugin. Track progress at: https://github.com/vitejs/vite-plugin-react/issues/428
