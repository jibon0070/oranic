# Oranic - Project Overview

Oranic is a modern web application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It leverages TypeScript for type safety and uses `pnpm` as the package manager within a workspace structure.

## Core Technologies
- **Next.js 16 (App Router):** The main framework for server-side rendering, routing, and overall application structure.
- **React 19:** Utilized for building interactive user interfaces.
- **Tailwind CSS v4:** A utility-first CSS framework for modern, responsive styling.
- **TypeScript:** Provides static typing to enhance developer experience and code reliability.
- **pnpm:** Efficient package manager for managing project dependencies.

## Project Structure
- `src/app/`: Contains the main application routes and components (App Router).
  - `layout.tsx`: Root layout with font and metadata configuration.
  - `page.tsx`: The main entry point for the homepage.
  - `globals.css`: Global styles and Tailwind CSS v4 theme configuration.
- `public/`: Assets like images, icons, and static files.
- `next.config.ts`: Configuration file for Next.js.
- `pnpm-workspace.yaml`: Workspace configuration for `pnpm`.
- `postcss.config.mjs`: PostCSS configuration for CSS processing.
- `tsconfig.json`: TypeScript configuration.

## Building and Running
To manage the project, use the following commands with `pnpm`:

- **Development Server:**
  ```bash
  pnpm dev
  ```
- **Build for Production:**
  ```bash
  pnpm build
  ```
- **Start Production Server:**
  ```bash
  pnpm start
  ```
- **Linting:**
  ```bash
  pnpm lint
  ```

## Development Conventions
- **TypeScript First:** All new components and logic should be written in TypeScript (`.tsx` or `.ts`).
- **App Router:** Follow the Next.js App Router conventions (e.g., using `page.tsx` for routes, `layout.tsx` for layouts).
- **Tailwind CSS v4:** Use the new CSS-based configuration in `globals.css` with `@theme` for styling customizations.
- **Font Management:** `EB_Garamond` is the primary font, managed through `next/font/google` and integrated via CSS variables.
