# Action Plan: Zenith Portfolio Refinement

**Objective:** Align functionality and aesthetics with the "Design Engineer" reference standard.

## Phase 1: Core Experience & Layout
- [ ] **Mobile Navigation:**
  - Replace the hidden menu with a functional Hamburger/Overlay system.
  - Ensure the overlay supports the glassmorphism effect and locks body scroll.
- [ ] **Scroll Animations (The "Reveal"):**
  - Replace static CSS `animate-in` classes with a React hook (using `IntersectionObserver`).
  - Implement a staggered delay for grid items so they cascade upwards as the user scrolls.
- [ ] **Grid Architecture:**
  - Tighten the container max-width and internal padding to create more tension.
  - Ensure the "Info" section columns align perfectly with the 12-column logic.

## Phase 2: Visual Fidelity
- [ ] **Typography Tuning:**
  - **Hero:** Tighten tracking (letter-spacing) on the large display text.
  - **Metadata:** Force all dates, tags, and footer credits to `Geist Mono` at 10px or 11px.
  - **Smoothing:** Enforce `-webkit-font-smoothing: antialiased` globally for sharper text rendering.
- [ ] **Image Processing:**
  - Add a global CSS class for images that applies a slight desaturation/grayscale filter by default.
  - Restore full color and scale up slightly on hover.
  - (Optional) Add a subtle SVG noise overlay for texture.

## Phase 3: Feature Implementation
- [ ] **Live Time Component:**
  - Add a ticking digital clock (e.g., "NYC 14:02") to the Hero or Header section.
  - Sync with a specific timezone (e.g., EST) to reflect the "availability" status accurately.
- [ ] **Interactive Details:**
  - Implement a Modal or Slide-over panel for Project Cards to show more details without leaving the page.
  - Make the "Log" (Writing) entries expanded on click or link to a dedicated view.
- [ ] **AI Terminal Redesign:**
  - Remove the shadow and rounded corners from the `AIAssistant`.
  - Style it as a raw CLI/Terminal window (fixed width, monospaced input, blinking cursor).

## Phase 4: Polish
- [ ] **Theme Toggle:**
  - Standardize SVG stroke weights (ensure they match the font weight).
  - Remove the background fade transition for a sharper, mechanical feel.
- [ ] **Footer:**
  - Add a "Back to Top" button that smooth-scrolls to the hero.
