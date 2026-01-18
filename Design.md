# RenovationMagnet Website Design

## Overview
- **Motion Style**: "Precision Craft" – A choreography of smooth reveals, decisive snaps, and fluid spatial transitions that mirror the meticulous nature of high-end renovation work.
- **Animation Intensity**: Ultra-Dynamic (High impact, highly polished)
- **Technology Stack**: GSAP (ScrollTrigger, Flip), WebGL (for specific distortion effects), CSS Custom Properties

## Brand Foundation
- **Colors**:
  - **Primary**: #007A7A (Teal/Green)
  - **Background**: #F5F5F5 (Light Gray)
  - **Text**: #333333 (Dark Gray)
  - **White**: #FFFFFF
  - **Black**: #000000
  - **Dark Background**: #1A1A1A
  - **Dark Text**: #666666
  - **Light Green**: #E6F2F2
  - **Dark Green**: #004D4D
  - **Accent**: #FFC107 (Yellow)
  - **Blue**: #4A90E2
  - **Purple**: #8E44AD
- **Typography**:
  - **Font Family**: "Plus Jakarta Sans", sans-serif
  - **Weights**: 200, 300, 400, 500, 600, 700, 800
  - **Headings**: Bold/ExtraBold (700/800)
  - **Body**: Regular/Medium (400/500)
- **Core Message**: Intelligent, reliable, and transformative growth for modern contractors.

## Global Motion System

### Animation Timing
- **Base Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (The "Renovation Snap" - fast attack, smooth settle)
- **Entrance Duration**: 0.8s - 1.2s
- **Stagger**: 0.1s delay between list items
- **Scroll Smoothing**: `lerp: 0.1` for parallax elements

### Continuous Effects
- **Micro-Interactions**: Magnetic buttons that pull towards the cursor.
- **Living Textures**: Subtle grain overlay (opacity 0.03) on solid backgrounds to prevent banding and add tactile feel.
- **Cursor**: Custom circular cursor that expands and inverts colors over clickable areas.

### Scroll Engine
- **Parallax**: Multi-layer depth system (Background 0.2x speed, Content 1.0x, Floating Elements 1.5x).
- **Pinning**: Key sections (Process, Pricing) utilize scroll-pinning to control narrative flow.
- **Reveal**: Text reveals using `clip-path` for a "blueprint unfolding" effect.

## Section 1: Navigation

### Layout
**"Glass Header"**
- **State**: Fixed top, z-index 1000.
- **Effect**: Backdrop blur (10px) with dynamic opacity based on scroll position.
- **Behavior**: Transforms from transparent to a subtle frosted glass strip on scroll.

### Motion Choreography
| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Logo | Scale-in + Fade | 0.6s | Power3.out |
| Links | Slide Down (staggered) | 0.4s | Back.out |
| CTA | Magnetic Pull | N/A | Elastic |

---

## Section 2: Hero Section

### Layout
**"The Masterpiece Reveal"**
- **Composition**: Asymmetric split. Text content floats on the left with a "broken grid" feel, overlapping the image edge slightly.
- **Spatial Innovation**: The hero image is not just a rectangle; it's a **portal**. It starts as a narrow vertical slice and expands horizontally to full width upon load.

### Content
- **Badge**: "100% Human-powered AI for exceptional results"
- **Headline**: "The #1 AI Setter for Agencies, Coaches and Consultants"
- **Subtext**: "Qualify instantly, fill your calendar, close more clients & never chase leads again."
- **CTA**: "Build My FREE AI Agent"

### Images
**Hero Image**
- **Resolution:** 1200x800
- **Aspect Ratio:** 3:2
- **Transparent Background:** No
- **Visual Style:** Contemporary lifestyle photography
- **Subject:** Young man with beard and glasses in modern office.
- **Prompt:** "A modern, professional hero image for a business website. The scene shows a young man with a beard and glasses sitting at a desk in a contemporary office, smiling confidently at the camera. He is wearing a light blue button-up shirt. The desk has a laptop, a coffee mug, a notebook, a potted plant, and some papers. The background features a whiteboard with diagrams and notes on the left, and a white cabinet with colorful stickers on the right. The lighting is bright and natural, with a shallow depth of field that blurs the background slightly. The color palette is clean and modern, with whites, light blues, and natural wood tones. The overall mood is friendly, professional, and approachable."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay |
|---------|-----------|--------|----------|-------|
| **Image Container** | Clip-Path Expand | `inset(0 45% 0 45%)` → `inset(0 0% 0 0%)` | 1.2s | 0s |
| **Image Scale** | Zoom Out | 1.4 → 1.0 | 1.4s | 0s |
| **Headline** | Split-Line Reveal | Y: 100% → 0% (masked) | 0.8s | 0.4s |
| **Badge** | Fade + Slide Right | X: -20px → 0 | 0.6s | 0.2s |
| **CTA** | Elastic Scale | 0 → 1 | 0.8s | 0.8s |

#### Interaction Effects
- **Hero Image**: **"Lens Distortion"**. On mouse move, a subtle liquid displacement effect ripples through the image (WebGL), representing the fluidity of AI.

---

## Section 3: Logo Marquee

### Layout
**"Infinite Trust Loop"**
- **Structure**: Full-width band.
- **Innovation**: Instead of a flat scroll, the track is slightly **angled** (2 degrees) to break the rigid horizontal lines.

### Content
- **Text**: "Join 5,000+ companies already ahead"
- **Logos**: [5 Company Logos]

### Motion Choreography
- **Continuous**: Linear infinite scroll (leftward).
- **Hover**: When the user hovers over a logo, the marquee **pauses**, and the hovered logo scales up (1.2x) while others dim (opacity 0.5).

---

## Section 4: Features (The Grid)

### Layout
**"Floating Modules"**
- **Concept**: Features are not static cards but "floating" modules in a loose grid.
- **Geometry**: The grid is slightly staggered. Even columns are offset vertically by 40px.

### Content
- **Header**: "Finally, an AI appointment setter that works"
- **Feature 1**: "Never Miss a Lead Again"
- **Feature 2**: "Instant Qualification & Booking"
- **Feature 3**: "Automated Follow-Ups That Convert"

### Images
**Feature Image 1**
- **Resolution:** 800x600
- **Transparent Background:** No
- **Subject:** Person with headphones at desk.
- **Prompt:** "A young professional wearing large black headphones and a light blue button-up shirt sits at a modern office desk, smiling and looking at a computer monitor. The desk is organized with a laptop, keyboard, mouse, smartphone, coffee mug, and a small potted plant. The background features a white cabinet with colorful stickers and a whiteboard with handwritten notes and diagrams. The lighting is bright and natural, creating a friendly and productive atmosphere. The color palette is clean and modern, with whites, light blues, and neutral tones. The overall mood is positive, professional, and approachable."

**Feature Image 2**
- **Resolution:** 800x600
- **Transparent Background:** No
- **Subject:** Woman at desk with laptop.
- **Prompt:** "A young woman with long dark hair, wearing a white blouse and a black headband, sits at a desk in a modern office, smiling and talking on a phone. She is working on a laptop, with a notebook and pen in front of her. The background is minimalistic with a white cabinet and a small plant, creating a clean and professional atmosphere. The lighting is bright and natural, highlighting the subject's friendly and approachable demeanor."

**Feature Image 3**
- **Resolution:** 800x600
- **Transparent Background:** No
- **Subject:** Professional woman at white desk.
- **Prompt:** "A modern, professional workspace featuring a young woman with dark hair, wearing a light blue shirt and black headband, sitting at a white desk. She is smiling and talking on a phone while working on a laptop. The desk is organized with a notebook, pen, potted plant, and a glass of water. The background is a clean, minimalistic office with a white cabinet and shelves. The lighting is soft and natural, creating a friendly and inviting atmosphere."

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End |
|---------|---------|--------|-------|-----|
| **Scroll** | **Feature Card** | **3D Tilt & Parallax** | Top 80% | Top 20% |
| **Scroll** | **Image** | **Inner Image Parallax** | Entry | Exit |

#### Interaction Effects
- **Card Hover**: **"Glare & Lift"**. The card lifts (Z-axis translation) and a subtle gradient glare moves across the surface.

---

## Section 5: "Built For" (The Rail)

### Layout
**"Kinetic Typography Rail"**
- **Concept**: A massive, bold statement block.
- **Structure**: The text is centered, but the background features a subtle, slow-moving mesh gradient that shifts colors (Teal to Dark Green) very slowly.

### Content
- **Headline**: "Built for agencies, coaches, consultants & contractors who are tired of the lead chase."
- **CTA**: "See all use cases"

### Motion Choreography
- **Text Reveal**: **"Highlight Swipe"**. As the user scrolls, the text color fills from transparent (stroke only) to solid white.
- **Button**: **"Magnetic Fill"**. The button background fills from the center out on hover.

---

## Section 6: Process (How It Works)

### Layout
**"The Blueprint Path"**
- **Concept**: A vertical scroll experience where the user "travels" down a path.
- **Structure**:
  - **Left**: Sticky text content that morphs as you scroll.
  - **Right**: A visual path (SVG line) that draws itself downwards, connecting 3 distinct visual states.

### Content
- **Header**: "Simple. Smart. Seamless."
- **Step 1**: "Capture" (Connect your forms & calendar)
- **Step 2**: "Qualify" (AI asks the right questions)
- **Step 3**: "Convert" (Appointments booked automatically)

### Images
**Process Image 1 (Capture)**
- **Resolution:** 600x400
- **Transparent Background:** No
- **Subject:** Man at desk with laptop.
- **Prompt:** "A modern, professional workspace with a young man sitting at a desk, working on a laptop. He is wearing a light blue button-up shirt, has glasses, and is smiling. The desk is organized with a coffee mug, a potted plant, a notebook, and some papers. The background features a whiteboard with handwritten notes and diagrams, as well as a white cabinet with colorful stickers. The lighting is bright and natural, creating a friendly and inviting atmosphere."

**Process Image 2 (Qualify)**
- **Resolution:** 600x400
- **Transparent Background:** No
- **Subject:** Woman with headphones at desk.
- **Prompt:** "A young woman with long dark hair, wearing a white blouse and black headband, sits at a desk in a modern office. She is smiling and talking on a phone while working on a laptop. The desk is organized with a notebook, pen, potted plant, and a glass of water. The background is a clean, minimalistic office with a white cabinet and shelves. The lighting is soft and natural, creating a friendly and inviting atmosphere."

**Process Image 3 (Convert)**
- **Resolution:** 600x400
- **Transparent Background:** No
- **Subject:** Man with glasses at desk.
- **Prompt:** "A young man with a beard and glasses, wearing a light blue button-up shirt, sits at a desk in a modern office, smiling and looking at a computer monitor. The desk is organized with a laptop, coffee mug, notebook, potted plant, and some papers. The background features a whiteboard with diagrams and notes on the left, and a white cabinet with colorful stickers on the right. The lighting is bright and natural, with a shallow depth of field that blurs the background slightly."

### Motion Choreography
- **The Path**: An SVG line draws itself vertically connecting the steps.
- **Step Activation**: As each step crosses the center of the viewport, the image **morphs** (cross-dissolve with a blur filter) into the next one.
- **Text**: The sticky text on the left **cross-fades** to reveal the description of the active step.

---

## Section 7: Social Proof (Testimonial)

### Layout
**"The Voice of Success"**
- **Structure**: A large, cinematic card.
- **Visuals**: The background is a deep, dark green (#004D4D). The "Stars" are not static; they float gently.

### Content
- **Stars**: 5 Gold Stars
- **Quote**: "We closed an extra $100K in projects in just 90 days. I didn't hire anyone new."
- **Author**: Marcus, Kitchen & Bath Contractor

### Motion Choreography
- **Entrance**: The quote text reveals word-by-word (Karaoke style) but fast and fluid.
- **Stars**: **"Pop"** animation (scale 0 -> 1.2 -> 1) with elastic bounce, staggered.

---

## Section 8: Pricing

### Layout
**"Interactive Stack"**
- **Concept**: Three cards. The "Popular" middle card is physically larger (z-index 10) and pops forward.
- **Innovation**: **"Pricing Spotlight"**. The user can hover over features to see a tooltip explaining them.

### Content
- **Toggle**: Monthly / Yearly (-20%)
- **Starter**: $97/mo
- **Popular**: $297/mo
- **Enterprise**: $697/mo

### Motion Choreography
- **Card Entrance**: The cards fan out like a hand of cards (rotation -5deg, 0, 5deg) then straighten up.
- **Toggle Switch**: **"Elastic Snap"**. The circle stretches like gum when switching sides.
- **Hover**: Hovering a card causes it to scale up (1.05x) and cast a deeper shadow.

---

## Section 9: CTA (Final Push)

### Layout
**"The Conversion Zone"**
- **Structure**: High contrast. Dark background, bright CTA.
- **Visuals**: Animated gradient border around the main CTA button.

### Content
- **Headline**: "Ready to never miss another lead?"
- **CTA**: "Get Started Free"

### Motion Choreography
- **Background**: **"Aurora Borealis"**. A slow, shifting mesh gradient in the background (Dark Green/Teal/Black).
- **Button**: **"Shimmer"**. A diagonal shine wipes across the button every 3 seconds.

---

## Section 10: Footer

### Layout
**"Minimal Anchor"**
- **Structure**: Clean 4-column grid.
- **Effect**: The footer is revealed by the previous section "lifting up" like a curtain (z-index -1, fixed position effect).

### Content
- **Brand**: Logo + Tagline
- **Links**: Product, Resources, Legal
- **Socials**: Icons

---

## Technical Implementation Notes

### Critical Performance Rules
- **Layer Promotion**: Use `will-change: transform` on hero elements and floating cards.
- **React Optimization**: NO `useState` for cursor tracking. Use `useRef` and direct DOM manipulation via GSAP `quickTo`.
- **ScrollTrigger**: Use `refresh()` on window resize to prevent layout shifts.
- **Image Loading**: Lazy load all images below the fold. Decode `async`.

### Libraries
- **GSAP (GreenSock)**: Core animation engine.
- **ScrollTrigger**: For scroll-driven effects.
- **Lenis**: For smooth scroll damping (essential for the "premium" feel).

### Accessibility
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is detected, disable parallax and smooth scrolling. Switch to simple fades.

---

## Output Path
`/mnt/okcomputer/output/design.md`
