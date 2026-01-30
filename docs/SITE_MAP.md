# Reference Analysis: cnewton.org
**Document Version:** 1.0
**Target Aesthetic:** High-End "Design Engineer" Portfolio
**Core Philosophy:** Precision, Minimalism, Clarity.

---

## 1. Design System & Visual Language

### A. Color Palette
The site employs a strictly monochromatic palette with high contrast.
*   **Light Mode:**
    *   Background: `#FFFFFF` (Pure White) or `#FAFAFA` (Off-white for texture).
    *   Text Primary: `#000000` or `#111111`.
    *   Text Secondary: `#666666` (Gray-500).
    *   Borders: `#E5E7EB` (Gray-200) - hairline thin (1px).
*   **Dark Mode:**
    *   Background: `#0A0A0A` (Near Black, not pure #000).
    *   Text Primary: `#FFFFFF` or `#EDEDED`.
    *   Text Secondary: `#A1A1AA` (Gray-400).
    *   Borders: `#262626` (Neutral-800).
    *   Accents: Very subtle usage of system colors (e.g., blue for links, green for status).

### B. Typography
A deliberate pairing of "Humanist Sans" and "Editorial Serif".
*   **Primary Font (UI/Body):** `Inter` or `Geist Sans`.
    *   Usage: Navigation, metadata, dates, buttons, body text.
    *   Characteristics: Clean, legible, neutral, high x-height.
*   **Secondary Font (Headings/Feature):** `Newsreader` or `Playfair Display`.
    *   Usage: Hero headlines, article titles, "About" intro.
    *   Characteristics: Italicized for emphasis, elegant, editorial feel.
*   **Tertiary Font (Code/Tech):** `Geist Mono` or `JetBrains Mono`.
    *   Usage: Tags, years, "System" labels, footer credits.
    *   Characteristics: Technical, precise, uppercase tracking.

### C. Layout & Grid
*   **Grid:** 12-column grid system with wide gutters.
*   **Container:** `max-width: 1200px` (or roughly 72rem) centered.
*   **Spacing:** Heavy use of whitespace. Vertical rhythm is defined by large padding blocks (`py-24`, `py-32`).

---

## 2. Component Architecture & Styling

### A. Navigation (Header)
*   **Position:** Fixed/Sticky top.
*   **Style:** Glassmorphism (`backdrop-blur-md`, `bg-opacity-80`).
*   **Elements:**
    *   **Logo:** Text-based, uppercase, tracking-widest (e.g., "COLIN NEWTON").
    *   **Links:** Simple text links. Hover state changes color to primary black/white.
    *   **Theme Toggle:** A dedicated icon button (Sun/Moon).
*   **Mobile:** Often simplifies to just Logo + Menu Icon or a scrollable horizontal list.

### B. Hero Section
*   **Layout:** Left-aligned text, significant top padding (`pt-48`).
*   **Content:**
    *   **Status Indicator:** Green pulsing dot + "Available for..." or "Currently at...".
    *   **Headline:** Large, mixed serif/sans-serif. Focus on role (Designer/Engineer).
    *   **Subtext:** Concise bio string (2-3 sentences max).

### C. Work / Project Cards
*   **Layout:** 2 or 3 column grid.
*   **Anatomy:**
    *   **Image:** Aspect ratio `4:3` or `16:10`. Rounded corners (`rounded-sm` or none).
    *   **Hover Effect:** Slight scale (`scale-105`), opacity change, or grayscale-to-color transition.
    *   **Metadata:** Title (Sans, Medium), Description (Gray), Tags (Mono, Small, Bordered).
*   **Behavior:** Entire card is clickable.

### D. Writing / Log List
*   **Layout:** Vertical list.
*   **Style:** Minimal rows separated by hairline borders.
*   **Hover:** Row highlights (`bg-gray-50` / `bg-white/5`).
*   **Typography:** Date is often mono/small. Title is Serif/Italic.

### E. Information / Footer
*   **Layout:** Multi-column (Bio left, Links right).
*   **Content:**
    *   **Experience:** "CV" style list (Company, Role, Year).
    *   **Contact:** Direct email links.
    *   **Socials:** Text links grouped by context.
*   **Copyright:** Monospace, minimal legal text.

---

## 3. Behavior & Animations

### A. Motion Design
*   **Entrance:** Elements do not appear instantly. They use a "staggered fade-up" animation.
    *   `opacity: 0` -> `opacity: 1`
    *   `translate-y: 20px` -> `translate-y: 0`
    *   Duration: ~0.6s - 0.8s, Ease-out.
*   **Page Transitions:** Soft cross-dissolve between routes.
*   **Scroll:** "Smooth scroll" behavior on anchor links.

### B. Interactions
*   **Cursor:** Standard system cursor (custom cursors are often avoided in this specific style to maintain native feel).
*   **Buttons:** No "pill" buttons usually. Links are underlined or text-only. If buttons exist, they are solid black/white rectangles.
*   **Theme Switch:** Instant toggle, no elaborate spinning animation, just icon swap.

---

## 4. Technical Stack (Inferred)

### A. Frameworks
*   **Core:** React (likely Next.js for SSG/SSR).
*   **Styling:** Tailwind CSS (evidenced by utility-class patterns in similar sites).
*   **Animation:** Framer Motion (standard for React view transitions).
*   **Type:** TypeScript (for strict typing of content interfaces).

### B. Code Structure
*   **Components:** Small, atomic components (`Section`, `Card`, `Button`).
*   **Data:** Content is likely stored in local constants (`data.ts`) or MDX files, rather than a heavy CMS.
*   **State:** Minimal global state, primarily for Theme (`localStorage`).

---

## 5. Content Strategy

### A. Tone of Voice
*   **Persona:** "The Architect." Professional, brief, highly competent.
*   **Keywords:** "Craft", "System", "Interface", "Precision", "Human".
*   **Approach:** Avoid fluff. Focus on the *output* and the *impact*.

### B. Hierarchy
1.  **Who am I?** (Hero)
2.  **What have I built?** (Work)
3.  **How do I think?** (Writing)
4.  **What is my history?** (Experience)
5.  **How to reach me?** (Footer)
