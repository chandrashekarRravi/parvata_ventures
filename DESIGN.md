---
name: Ethereal Talent
colors:
  surface: '#fff8ef'
  surface-dim: '#dfd9d0'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ea'
  surface-container: '#f3ede4'
  surface-container-high: '#ede7de'
  surface-container-highest: '#e8e2d9'
  on-surface: '#1d1b16'
  on-surface-variant: '#55433c'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f6f0e7'
  outline: '#88736a'
  outline-variant: '#dbc1b8'
  surface-tint: '#974822'
  primary: '#974822'
  on-primary: '#ffffff'
  primary-container: '#d97b51'
  on-primary-container: '#521b00'
  inverse-primary: '#ffb597'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5f5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#959490'
  on-tertiary-container: '#2d2d2a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb597'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#78310c'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8ef'
  on-background: '#1d1b16'
  surface-variant: '#e8e2d9'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding-lg: 120px
  section-padding-sm: 64px
  stack-space: 16px
---

## Brand & Style

This design system is built for a premium recruitment experience that prioritizes human connection over transactional data. The brand personality is **sophisticated, intentional, and warm**, moving away from clinical corporate aesthetics toward an editorial, boutique feel.

The visual style is **Contemporary Minimalism with Tonal Depth**. It uses a "high-end gallery" approach: expansive whitespace, refined serif typography, and a palette of organic, earthy tones. The UI should evoke a sense of calm confidence and professional prestige, making the candidate feel valued rather than processed.

## Colors

The palette is anchored by a **warm cream (Tertiary)** background that provides a softer, more luxurious canvas than pure white. 

- **Sunrise Orange / Terracotta (Primary):** Used sparingly for high-intent actions, highlights, and active states to provide warmth and energy.
- **Deep Onyx (Secondary):** Used for typography and high-contrast UI elements like primary "Menu" or "Join" buttons to ensure legibility and authority.
- **Stone (Neutral):** A mid-tone used for borders, subtle backgrounds, and secondary button fills, maintaining the organic aesthetic.

## Typography

The typography strategy relies on the tension between a traditional, high-contrast Serif and a functional, modern Sans-Serif.

**Headlines:** Use **Noto Serif** for all major headings. Large display text should be set in all-caps with tight tracking to mimic editorial mastheads. It conveys wisdom and established history.

**Body & Labels:** Use **Work Sans** for all functional text. The slightly wider apertures and neutral character of Work Sans ensure high readability against the cream backgrounds. Labels and secondary navigation should use medium weights with increased letter spacing for a clean, architectural feel.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model with generous margins to create a focused "reading lane" for the user. 

- **Section Breathing Room:** Vertical spacing between major sections is aggressive (120px+) to ensure each value proposition has time to settle with the user.
- **The "Safe" Margin:** Desktop layouts should maintain a minimum of 80px side margins to keep the content from feeling crowded.
- **Mobile Reflow:** On mobile, section padding reduces to 64px, and the 12-column grid collapses to 4 columns with 16px gutters.

## Elevation & Depth

This design system rejects heavy drop shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

Depth is communicated through:
1.  **Surface Tiers:** Using the 'Neutral' Stone color to define card areas against the 'Tertiary' Cream background.
2.  **Ghost Borders:** Very thin (1px) borders in a slightly darker neutral tone define interactive elements without adding visual weight.
3.  **Backdrop Blurs:** For navigation overlays or modals, use a light blur (20px) with a semi-transparent cream tint to maintain the "airy" quality of the site.

## Shapes

The shape language is defined by **Pill-shaped (3)** elements. This choice offsets the "seriousness" of the serif typography with a friendly, approachable touch. 

- **Interactive Elements:** Buttons, tags, and input fields should utilize a fully rounded (pill) radius.
- **Imagery:** Photography should remain sharp-edged or use very subtle (Soft) rounding to maintain a professional, editorial look, creating a contrast with the rounded UI components.

## Components

### Buttons
- **Primary:** Filled with Secondary (Onyx) or Primary (Terracotta) color. Text is Tertiary (Cream). Pill-shaped.
- **Secondary/Ghost:** 1px border using the text color. No fill. These should feel light and sophisticated.
- **Hover States:** Subtle opacity shifts or color inversions. Avoid heavy lifting or "pop" effects.

### Cards
Cards should not have shadows. Use a subtle fill color (Neutral) to distinguish them from the main background, or a thin 1px border.

### Input Fields
Inputs are pill-shaped with a thin neutral border. Focus states should transition the border color to the Primary terracotta color without adding a glow.

### Chips/Tags
Used for job categories or skills. Small text, uppercase, with 0.1em letter spacing. Pill-shaped with a light neutral fill.

### Navigation
The navigation bar should be transparent over hero imagery, or Cream when scrolled. It uses a minimal footprint, prioritizing a "Join" call-to-action in a distinct pill container.