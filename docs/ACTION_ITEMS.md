# Action Plan: Zenith Portfolio Refinement

**Objective:** Align functionality and aesthetics with the "Design Engineer" reference standard.

## Phase 1: Core Experience & Layout
- [x] **Mobile Navigation:**
  - Replace the hidden menu with a functional Hamburger/Overlay system. (Implemented `MobileMenu.tsx`)
- [x] **Scroll Animations (The "Reveal"):**
  - Replace static CSS `animate-in` classes with a React hook. (Implemented `ScrollReveal.tsx`)
- [ ] **Grid Architecture:**
  - Tighten the container max-width and internal padding to create more tension.

## Phase 2: Visual Fidelity
- [ ] **Typography Tuning:**
  - **Hero:** Tighten tracking (letter-spacing) on the large display text.
  - **Metadata:** Force all dates, tags, and footer credits to `Geist Mono` at 10px or 11px. (Implemented in components)
  - [x] **Smoothing:** Enforce `-webkit-font-smoothing: antialiased` globally. (Done in `index.css`)
- [x] **Image Processing:**
  - Add a global CSS class for images that applies a slight desaturation/grayscale filter by default. (Implemented in `ProjectCard.tsx`)

## Phase 3: Feature Implementation
- [x] **Live Time Component:**
  - Add a ticking digital clock. (Implemented `LiveClock.tsx`)
- [ ] **Interactive Details:**
  - Implement a Modal or Slide-over panel for Project Cards. (`ProjectModal.tsx` exists)
- [x] **AI Terminal Redesign:**
  - Style it as a raw CLI/Terminal window. (Implemented in `AIAssistant.tsx`)

## Phase 4: Polish
- [x] **Theme Toggle:**
  - Standardize SVG stroke weights. (Implemented `ThemeToggle.tsx`)
- [ ] **Footer:**
  - Add a "Back to Top" button.
