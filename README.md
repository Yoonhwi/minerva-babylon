# Minerva Babylon

A learning project for exploring Babylon.js and various design patterns in a React + TypeScript environment.

## Project Purpose

This project serves as a practical learning ground for:
- **Babylon.js**: 3D rendering and scene management
- **Design Patterns**: Implementing and understanding common software design patterns
- **React Integration**: Combining 3D graphics with modern React patterns

## Tech Stack

- **React 19.1.1** - UI framework
- **TypeScript 5.9** - Type-safe development
- **Vite 7.x** - Fast build tool and dev server
- **Babylon.js** - 3D engine (to be integrated)
- **SWC** - Fast TypeScript/React compilation

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

### Committing Changes

This project uses [Commitizen](https://github.com/commitizen/cz-cli) for structured commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
npm run commit
```

This will launch an interactive prompt to help you create properly formatted commit messages.

## Git Hooks

The project uses Husky to enforce code quality:

- **pre-commit**: Runs linting and formatting on staged files via lint-staged
- **commit-msg**: Validates commit messages against conventional commit format
- **pre-push**: Prevents direct pushes to the main branch

## Project Structure

```
src/
  ├── main.tsx          # Application entry point
  ├── App.tsx           # Main App component
  ├── index.css         # Global styles
  └── assets/           # Static assets
```

## Learning Goals

### Babylon.js Concepts
- Scene setup and management
- Camera controls
- Lighting systems
- Mesh creation and manipulation
- Material and texture systems
- Physics integration
- Performance optimization

### Design Patterns to Explore
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- Command Pattern
- State Pattern
- Strategy Pattern
- Composite Pattern
- Decorator Pattern

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Use `npm run commit` to create conventional commits
4. Push your branch (direct pushes to main are blocked)
5. Create a pull request for review

## TypeScript Configuration

The project uses strict TypeScript settings:
- Strict mode enabled
- No unused locals or parameters
- No fallthrough cases in switch statements
- Module resolution: bundler mode

## License

This is a personal learning project.
