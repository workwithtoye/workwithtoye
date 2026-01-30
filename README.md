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

**Prerequisites:** Node.js (v20+), Python 3 (optional, for local server)

1.  **Installation:**
    ```bash
    npm install
    ```

2.  **Build Project:**
    Generates the `dist/` folder for deployment.
    ```bash
    npm run build
    ```

3.  **Run Locally:**
    To view the site (development or build):
    ```bash
    # Run dev (root)
    npm start
    
    # Run build artifact
    npm run serve:dist
    ```

4.  **AI Assistant Configuration:**
    The AI Assistant requires a valid Gemini API key.
    - Open `script.js`
    - Find `const GEMINI_API_KEY = "";`
    - Insert your key (Do not commit this!).

## Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

-   **Workflow:** `.github/workflows/deploy.yml`
-   **Method:** Standard `npm run build` -> `dist/` deployment
-   **Trigger:** Push to `main` branch

### Setup
1.  Go to repository **Settings** > **Pages**
2.  Under "Build and deployment", ensure Source is set to **GitHub Actions**.
3.  Push changes to `main`. The site will go live automatically.
