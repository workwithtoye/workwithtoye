# Olutoyese Oyedepo — Portfolio

A React-based personal portfolio website built with Vite and Tailwind CSS. It features a responsive design, interactive animations, and an AI-powered assistant integration.

> Built with **Google AI Studio** and **Google Antigravity**.

## Features

-   **Modular Architecture:** Component-based structure using React.
-   **Modern Styling:** Built with Tailwind CSS (v4) for responsive and maintainable styles.
-   **Type Safety:** Component props and logic fully typed with TypeScript (Strict Mode enabled).
-   **Accessibility:** Semantic HTML, keyboard navigation support, and ARIA labels.
-   **AI Integration:** Includes a Gemini-powered AI assistant.
-   **Deployment:** Automated deployment to GitHub Pages via GitHub Actions.

## Run Locally

**Prerequisites:** Node.js (v18+)

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set up Environment:**
    Create a `.env.local` file and add your Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
3.  **Run the app:**
    ```bash
    npm run dev
    ```
    Open the localhost URL provided in the terminal.

## Architecture

-   **`src/`:** Main application source code.
-   **`components/`:** Reusable UI components (Header, Hero, ProjectCard, etc.).
-   **`docs/`:** Project documentation and audit logs.
-   **`dist/`:** Production build output.

## Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

-   **Workflow:** `.github/workflows/deploy.yml`
-   **Trigger:** Push to `main` branch
-   **URL:** `https://<your-username>.github.io`

### Setup
1.  Go to repository **Settings** > **Pages**
2.  Under "Build and deployment", ensure Source is set to **GitHub Actions**.
3.  Push changes to `main`.
