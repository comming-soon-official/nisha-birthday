
# 🎂 Modern Birthday Website — Plan

A sleek, mobile-first birthday celebration site with a dark **Black → Rose → Champagne** palette, animated 3D gradient mesh hero, auto-playing media carousels, and tasteful interactive moments. Built with placeholder content you can swap later.

---

## 🎨 Visual Direction

- **Palette**: Pure black background `#000000` → deep rose `#E11D74` / soft pink `#FFB6C1` → champagne gold `#F7E7B4` / warm amber `#D4A574`
- **Typography**: Elegant serif display (Playfair Display) for hero name + clean sans (Inter) for body — editorial, premium feel
- **Mood**: Dark, luxurious, celebratory — like an editorial magazine cover meets a midnight party
- **Motion language**: Slow drifting gradient blobs in the background, snappy spring entrances on content, subtle parallax on scroll, shimmering champagne accents
- **3D feel**: Animated gradient mesh blobs (CSS + SVG filters) and floating geometric shapes — lightweight, butter-smooth on mobile, no heavy WebGL

---

## 📱 Page Sections

### 1. Hero — "Happy Birthday" Moment
- Full-viewport dark canvas with **animated gradient mesh** (3–4 large blurred rose/champagne blobs slowly drifting and morphing)
- Floating 3D-feel geometric shapes (rings, soft orbs) with subtle rotation + parallax
- Champagne-gold shimmering particles drifting upward (confetti-lite)
- Big serif name placeholder: *"Happy Birthday, [Name]"* with a gradient text fill + soft glow
- Age / tagline below in a refined sans
- Animated scroll indicator at the bottom
- Entrance: name letters stagger-fade in, blobs scale up smoothly

### 2. Countdown Timer
- Compact pill-shaped countdown to the next birthday (Days · Hours · Minutes · Seconds)
- Each digit in a glassy card with subtle rose border glow
- Numbers flip/fade smoothly on each tick
- Adjustable target date (placeholder: next upcoming birthday)

### 3. Photo Carousel (auto-scrolling)
- Section title: *"Moments to Remember"*
- **Auto-playing horizontal carousel** of placeholder photos (8 cards)
- Cards have rounded corners, soft rose-glow shadow, subtle tilt on hover/active
- Continuous smooth motion (pauses on touch/hover), swipeable on mobile
- Dot indicators + a hint of the next/previous card peeking in

### 4. Video Carousel (auto-scrolling, separate)
- Section title: *"Our Favorite Memories"*
- **Independent auto-playing carousel** of placeholder videos (4–5 cards)
- Each video card autoplays muted in view, with a play overlay icon
- Champagne-gold accent border on the active card
- Swipe / drag support, separate timing from the photo carousel

### 5. Testimonial Quotes — Wishes from Loved Ones
- Section title: *"Words from the Heart"*
- Elegant quote cards in a marquee or fading carousel
- Each card: large opening quote mark in champagne gold, italic serif quote, author name + relationship
- 6–8 placeholder quotes, dark glassmorphism cards with rose-gradient borders
- Soft auto-rotation with manual nav

### 6. Send Your Wishes — Form
- Two-field form (Name, Wish message) + submit button
- Submitted wishes appear in a live wall below as small animated cards
- Stored locally first; can be wired to a backend later
- Confetti burst + toast on successful submit

### 7. Footer
- Soft champagne signature line: *"Made with 💖 for a special someone"*
- Subtle floating particles continue into the footer

---

## ✨ Animation & Interaction Highlights

- **Animated gradient mesh** background that subtly shifts across all sections for cohesion
- **Scroll-reveal** entrances on every section (fade + slide + scale springs)
- **Parallax** on hero shapes — they drift slower than scroll
- **Magnetic hover** on key buttons (desktop), tap-bounce on mobile
- **Marquee / auto-scroll** carousels with pause-on-interact
- **Confetti burst** on form submit
- All animations GPU-accelerated, throttled on mobile for smooth 60fps

---

## 📐 Mobile-First Optimization

- Single-column layouts everywhere; carousels show 1.1 cards on mobile (peek of next), 2–3 on tablet, 3–4 on desktop
- Larger tap targets (min 44px), generous spacing
- Reduced blob count + lower blur radius on small screens for performance
- Respects `prefers-reduced-motion` — disables auto-scroll and heavy animations
- Lazy-loaded media, optimized image placeholders
- Safe-area padding for notched devices

---

## 🧩 Tech & Components

- **shadcn/ui**: Card, Button, Input, Textarea, Carousel, Dialog, Toast, Badge
- **Embla Carousel** (shadcn carousel) with autoplay plugin for photo & video reels
- **Framer Motion** for scroll reveals, stagger, parallax, and shape morphing
- **CSS gradient mesh** + SVG `feGaussianBlur` for the 3D-feel background blobs
- **Tailwind** design tokens for the rose/champagne palette in `index.css`
- **Canvas-confetti** for celebration bursts
- All colors via semantic HSL tokens (no hardcoded colors in components)

---

## 🚧 Out of Scope (for now)
- Real photos/videos (placeholders used — easy to swap)
- Real backend for wishes (stored client-side; can add Lovable Cloud later)
- Music player (can add later if you want a background birthday tune)

Once you approve, I'll build the whole thing in one go. 🎉
