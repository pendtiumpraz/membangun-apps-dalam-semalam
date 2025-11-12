# Product Requirements Document (PRD)
## Interactive Presentation Slides: "Membangun ~~Candi~~ Apps Dalam Semalam"

---

## 1. PROJECT OVERVIEW

### 1.1 Project Name
**Futuristic Interactive Presentation Slides**

### 1.2 Description
An interactive, full-screen presentation system built with HTML, CSS, and JavaScript featuring a blue futuristic neon theme, animated backgrounds, and smooth transitions. The presentation will showcase content about building apps rapidly using AI.

### 1.3 Objectives
- Create engaging, modern presentation interface
- Implement smooth navigation between 43 slides
- Deliver immersive visual experience with animations
- Ensure responsive, full-screen viewing
- Zero vertical scrolling - navigation via keyboard/buttons only

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Tech Stack
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vanilla JavaScript** - Interactivity, navigation, animations
- **Tailwind CDN** - Quick setup without build process

### 2.2 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 2.3 Performance Requirements
- Initial load: < 3 seconds
- Slide transition: < 300ms
- Smooth 60fps animations
- Image lazy loading for Unsplash images

---

## 3. DESIGN REQUIREMENTS

### 3.1 Theme: Blue Futuristic Neon

#### Color Palette
```css
Primary Colors:
- Neon Blue: #00d4ff
- Deep Blue: #0a1929
- Dark Navy: #050b14
- Cyan Glow: #00ffff
- Electric Blue: #1e90ff

Accent Colors:
- Neon Pink: #ff006e
- Purple Glow: #8b5cf6
- White: #ffffff
- Light Gray: #b4c7d9

Gradient Combinations:
- Background: linear-gradient(135deg, #050b14 0%, #0a1929 50%, #001529 100%)
- Card Glow: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1))
- Text Highlight: linear-gradient(90deg, #00d4ff, #8b5cf6)
```

#### Typography
```css
Fonts:
- Headings: 'Orbitron', sans-serif (futuristic feel)
- Body: 'Inter', sans-serif (clean readability)
- Code: 'Fira Code', monospace

Font Sizes:
- Title (H1): 4rem (64px)
- Subtitle (H2): 2.5rem (40px)
- Section Title (H3): 2rem (32px)
- Body Text: 1.25rem (20px)
- Small Text: 1rem (16px)

Line Heights:
- Headings: 1.2
- Body: 1.6
```

#### Spacing System
```
Base Unit: 8px

Spacing Scale:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
```

### 3.2 Layout Structure

#### Full Screen Container
```
Structure:
┌─────────────────────────────────────────┐
│  [Animated Grid Background]             │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │     [Content Card/Slide]          │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  [◄ Prev]  [Page 1/43]  [Next ►]       │
└─────────────────────────────────────────┘

Dimensions:
- Container: 100vw x 100vh (fixed)
- Content Area: 90vw x 85vh (centered)
- Navigation Bar: 100% x 80px (bottom fixed)
```

#### Card Design System
```
Card Types:

1. COVER CARD (Slide 1)
   - Full background image with overlay
   - Centered title with strikethrough effect
   - Subtitle below
   - Animated particles

2. CHAPTER TITLE CARD
   - Split-screen or full-image background
   - Large chapter number (decorative)
   - Chapter title (animated entry)
   - Minimal text

3. CONTENT CARD (Most slides)
   - Semi-transparent glass-morphism card
   - Title at top
   - Content area (2-3 columns if needed)
   - Optional image (right or left side)
   - Glow effects on hover

4. LIST CARD
   - Bullet points with icons
   - Checkmarks with neon glow
   - Numbered lists with gradient numbers

5. COMPARISON CARD
   - Side-by-side layout
   - "Before vs After" style
   - Clear visual separation

6. CLOSING CARD
   - Contact information
   - Social media links
   - Call-to-action buttons
```

#### Content Grid System
```css
Layout Options:
- Single Column: 100% width
- Two Columns: 50% | 50%
- Text + Image: 60% | 40%
- Three Columns: 33.33% each

Responsive Breakpoints:
- Desktop: > 1024px (default layout)
- Tablet: 768px - 1024px (adjusted spacing)
- Mobile: < 768px (single column, larger touch targets)
```

---

## 4. ANIMATION REQUIREMENTS

### 4.1 Background Animations

#### Animated Grid
```javascript
Specifications:
- CSS Grid pattern overlay
- Horizontal and vertical lines
- Animated movement (slow scroll effect)
- Lines fade in/out randomly
- Perspective effect (3D depth)

Animation Parameters:
- Duration: 20s (continuous loop)
- Easing: linear
- Opacity: 0.1 to 0.3
- Line thickness: 1px
- Line color: rgba(0, 212, 255, 0.2)
```

#### Particle System (Optional Enhancement)
```javascript
Particles:
- Small dots (2-4px)
- Floating movement
- Random positions
- Glow effect
- Quantity: 50-100 particles
- Color: Neon blue/cyan variants
```

### 4.2 Mouse Glow Effect
```javascript
Implementation:
- Radial gradient following cursor
- Smooth tracking (requestAnimationFrame)
- Glow size: 300-500px diameter
- Blur radius: 150px
- Color: rgba(0, 212, 255, 0.15)
- Blend mode: screen or lighten

Performance:
- Debounce on low-end devices
- Disable on mobile (touch devices)
```

### 4.3 Slide Transitions
```css
Transition Types:

1. Fade & Slide (Default)
   - Outgoing: Fade out + slide left
   - Incoming: Fade in + slide right
   - Duration: 400ms
   - Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

2. Scale & Fade (Chapter Titles)
   - Outgoing: Scale down + fade out
   - Incoming: Scale up + fade in
   - Duration: 500ms

3. Flip Effect (Optional for special slides)
   - 3D rotation on Y-axis
   - Duration: 600ms
```

### 4.4 Content Animations
```css
Element Entry Animations:

- Titles: Fade in + slide up (100ms delay)
- Subtitles: Fade in + slide up (200ms delay)
- Content blocks: Stagger fade in (100ms between each)
- Images: Fade in + scale (300ms delay)
- Buttons: Fade in + bounce (400ms delay)

Hover Effects:
- Buttons: Scale 1.05, glow increase
- Cards: Lift up (translateY: -5px), shadow increase
- Links: Neon underline animation
- Images: Scale 1.02, brightness increase
```

---

## 5. INTERACTIVE FEATURES

### 5.1 Navigation System

#### Keyboard Controls
```javascript
Controls:
- Arrow Right / Space / Enter: Next slide
- Arrow Left / Backspace: Previous slide
- Home: Go to first slide
- End: Go to last slide
- Number Keys (1-9): Jump to slide 1-9
- Escape: Toggle fullscreen

Implementation:
- Event listener on document
- Prevent default behavior for navigation keys
- Visual feedback on key press
```

#### Button Controls
```html
Navigation Bar Layout:
┌─────────────────────────────────────────┐
│  [◄ Previous]    [15 / 43]    [Next ►] │
└─────────────────────────────────────────┘

Button Specifications:
- Previous Button: Left aligned, icon + text
- Page Counter: Center, current/total format
- Next Button: Right aligned, text + icon

Styling:
- Background: rgba(0, 212, 255, 0.1)
- Border: 1px solid rgba(0, 212, 255, 0.3)
- Hover: Glow effect, brighter background
- Active: Scale down slightly
- Disabled: Opacity 0.3 (at first/last slide)
```

#### Progress Indicator
```css
Design:
- Thin bar at bottom of navigation
- Width: 100%
- Height: 3px
- Color: Linear gradient (neon blue to purple)
- Fill percentage: (currentSlide / totalSlides) * 100%
- Smooth transition on slide change

Optional: Dot indicators
- Small dots representing each slide
- Current slide highlighted
- Clickable for direct navigation
```

### 5.2 Touch Gestures (Mobile)
```javascript
Gestures:
- Swipe Left: Next slide
- Swipe Right: Previous slide
- Tap on right side: Next slide
- Tap on left side: Previous slide

Threshold:
- Minimum swipe distance: 50px
- Swipe velocity threshold: 0.3
```

### 5.3 URL State Management
```javascript
Implementation:
- URL updates on slide change
- Format: /index.html#slide-15
- Browser back/forward support
- Shareable URLs to specific slides
- On page load, read hash and navigate to slide
```

---

## 6. CONTENT STRUCTURE

### 6.1 HTML Structure
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membangun Apps Dalam Semalam</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind Config & Custom Styles -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'neon-blue': '#00d4ff',
                        'deep-blue': '#0a1929',
                        'dark-navy': '#050b14',
                        'cyan-glow': '#00ffff',
                        'electric-blue': '#1e90ff',
                        'neon-pink': '#ff006e',
                        'purple-glow': '#8b5cf6',
                    },
                    fontFamily: {
                        'orbitron': ['Orbitron', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'slide-in-right': 'slide-in-right 0.4s ease-out',
                        'grid-move': 'grid-move 20s linear infinite',
                    }
                }
            }
        }
    </script>
    
    <style>
        /* Custom animations not available in Tailwind */
        @keyframes glow-pulse {
            0%, 100% { text-shadow: 0 0 20px #00d4ff, 0 0 40px #00d4ff; }
            50% { text-shadow: 0 0 30px #00d4ff, 0 0 60px #00d4ff, 0 0 80px #00d4ff; }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes grid-move {
            from { transform: translateY(0); }
            to { transform: translateY(50px); }
        }
    </style>
</head>
<body>
    <!-- Mouse Glow Effect -->
    <div id="mouseGlow"></div>
    
    <!-- Animated Background -->
    <div class="animated-background">
        <div class="grid-overlay"></div>
        <div class="particles"></div>
    </div>
    
    <!-- Slides Container -->
    <div id="slidesContainer">
        
        <!-- Slide 1: Cover -->
        <section class="slide active" data-slide="1">
            <div class="slide-content cover">
                <h1 class="main-title">
                    Membangun <span class="strikethrough">Candi</span> Apps Dalam Semalam
                </h1>
                <p class="subtitle">From Zero to Production with AI-Powered Development</p>
            </div>
            <div class="slide-image" style="background-image: url('https://images.unsplash.com/...')"></div>
        </section>
        
        <!-- Slide 2: Chapter Title -->
        <section class="slide" data-slide="2">
            <div class="slide-content chapter-title">
                <div class="chapter-number">01</div>
                <h2>Speed Revolution</h2>
                <p class="chapter-subtitle">Kecepatan Adalah Mata Uang Baru</p>
            </div>
        </section>
        
        <!-- Slide 3: Content -->
        <section class="slide" data-slide="3">
            <div class="slide-content content-card">
                <h2>Era Baru Telah Tiba</h2>
                <div class="content-grid">
                    <div class="content-column">
                        <h3>Sebelum AI</h3>
                        <ul>
                            <li>Developer = Tukang Ketik Kode</li>
                            <li>Kerja untuk orang lain</li>
                            <li>Terikat waktu & tempat</li>
                        </ul>
                    </div>
                    <div class="content-column">
                        <h3>Sesudah AI</h3>
                        <ul>
                            <li>Developer = Digital Architect</li>
                            <li>Build SaaS products</li>
                            <li>Scale without limits</li>
                        </ul>
                    </div>
                </div>
                <div class="stats-box">
                    <p>Kebutuhan IT meningkat 300%+ di era AI</p>
                </div>
            </div>
            <div class="slide-image" style="background-image: url('...')"></div>
        </section>
        
        <!-- More slides... -->
        
    </div>
    
    <!-- Navigation -->
    <nav id="navigationBar">
        <button id="prevBtn" class="nav-button">
            <span class="icon">◄</span> Previous
        </button>
        
        <div class="page-indicator">
            <span id="currentPage">1</span> / <span id="totalPages">43</span>
        </div>
        
        <button id="nextBtn" class="nav-button">
            Next <span class="icon">►</span>
        </button>
        
        <div class="progress-bar">
            <div id="progressFill"></div>
        </div>
    </nav>
    
    <script src="script.js"></script>
</body>
</html>
```

### 6.2 Tailwind CSS Architecture
```
Tailwind CSS Structure:
- Tailwind CDN loaded in <head>
- Custom animations in <style> tag or custom.css (minimal)
- Utility classes for all styling
- Custom CSS only for:
  ├── Complex animations (@keyframes)
  ├── Mouse glow effect
  ├── Grid background animation
  └── Custom gradient effects

Benefits:
- Rapid development with utility classes
- Easy to check and modify styles
- Consistent spacing and sizing
- Built-in responsive design
- JIT (Just-In-Time) compilation
```

### 6.3 JavaScript Architecture
```javascript
// script.js structure

// 1. Configuration
const CONFIG = {
    totalSlides: 43,
    transitionDuration: 400,
    autoSaveProgress: true,
    enableMouseGlow: true,
    enableParticles: false
};

// 2. State Management
const state = {
    currentSlide: 1,
    isTransitioning: false,
    touchStartX: 0,
    touchEndX: 0
};

// 3. Core Functions
function initSlides() { }
function navigateToSlide(slideNumber, direction) { }
function updateUI() { }
function updateProgress() { }
function updateURL() { }

// 4. Navigation Functions
function nextSlide() { }
function prevSlide() { }
function goToSlide(slideNumber) { }

// 5. Event Listeners
function initEventListeners() {
    // Keyboard events
    // Button clicks
    // Touch events
    // Window resize
}

// 6. Animation Functions
function animateSlideTransition(outSlide, inSlide, direction) { }
function animateContentEntry(slideElement) { }

// 7. Mouse Glow Effect
function initMouseGlow() { }
function updateMouseGlow(x, y) { }

// 8. Background Animations
function initGridAnimation() { }
function initParticles() { }

// 9. Utility Functions
function debounce(func, wait) { }
function isTouchDevice() { }
function saveProgress() { }
function loadProgress() { }

// 10. Initialization
document.addEventListener('DOMContentLoaded', () => {
    initSlides();
    initEventListeners();
    initMouseGlow();
    initGridAnimation();
    loadProgress();
});
```

---

## 7. SPECIFIC FEATURES IMPLEMENTATION

### 7.1 Strikethrough Effect on "Candi"
```html
<h1 class="main-title">
    Membangun <span class="strikethrough">Candi</span> Apps Dalam Semalam
</h1>
```

```css
.strikethrough {
    position: relative;
    display: inline-block;
}

.strikethrough::after {
    content: '';
    position: absolute;
    left: -5%;
    top: 50%;
    width: 110%;
    height: 3px;
    background: linear-gradient(90deg, #ff006e, #00d4ff);
    transform: translateY(-50%) rotate(-5deg);
    animation: strikethrough-draw 0.8s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
}

@keyframes strikethrough-draw {
    from {
        width: 0%;
        opacity: 0;
    }
    to {
        width: 110%;
        opacity: 1;
    }
}
```

### 7.2 Chapter Title Slide Design
```css
.chapter-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.chapter-number {
    font-size: 12rem;
    font-weight: 900;
    background: linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.15;
    position: absolute;
    z-index: 0;
    animation: float 6s ease-in-out infinite;
}

.chapter-title h2 {
    font-size: 4rem;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
    animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
    0%, 100% {
        text-shadow: 0 0 30px rgba(0, 212, 255, 0.5),
                     0 0 60px rgba(0, 212, 255, 0.3);
    }
    50% {
        text-shadow: 0 0 40px rgba(0, 212, 255, 0.8),
                     0 0 80px rgba(0, 212, 255, 0.5);
    }
}
```

### 7.3 Glass-Morphism Cards
```css
.content-card {
    background: rgba(10, 25, 41, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.content-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle,
        rgba(0, 212, 255, 0.05) 0%,
        transparent 70%
    );
    animation: rotate-glow 10s linear infinite;
    pointer-events: none;
}

@keyframes rotate-glow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

### 7.4 List Items with Neon Checkmarks
```html
<ul class="neon-list">
    <li data-icon="✓">Feature one with glow</li>
    <li data-icon="✓">Feature two with glow</li>
</ul>
```

```css
.neon-list {
    list-style: none;
    padding: 0;
}

.neon-list li {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
}

.neon-list li::before {
    content: attr(data-icon);
    position: absolute;
    left: 0;
    top: 0;
    color: #00d4ff;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px #00d4ff,
                 0 0 20px #00d4ff,
                 0 0 30px #00d4ff;
    animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}
```

### 7.5 Stats Box / Highlight Box
```css
.stats-box {
    background: linear-gradient(135deg, 
        rgba(0, 212, 255, 0.1) 0%, 
        rgba(139, 92, 246, 0.1) 100%);
    border: 2px solid #00d4ff;
    border-radius: 15px;
    padding: 1.5rem 2rem;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
}

.stats-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    animation: shine 3s infinite;
}

@keyframes shine {
    to { left: 100%; }
}

.stats-box p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #00d4ff;
}
```

---

## 8. RESPONSIVE DESIGN

### 8.1 Breakpoint Strategy
```css
/* Desktop First Approach */

/* Large Desktop: 1920px+ */
@media (min-width: 1920px) {
    .slide-content { max-width: 1400px; }
    h1 { font-size: 5rem; }
}

/* Standard Desktop: 1024px - 1919px (Default) */
/* No media query needed - base styles */

/* Tablet: 768px - 1023px */
@media (max-width: 1023px) {
    .slide-content { padding: 2rem; }
    h1 { font-size: 3rem; }
    h2 { font-size: 2rem; }
    .content-grid { grid-template-columns: 1fr; }
    .navigation-bar { height: 60px; }
}

/* Mobile: < 768px */
@media (max-width: 767px) {
    .slide-content { padding: 1.5rem; }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    body { font-size: 1rem; }
    .nav-button { padding: 0.5rem 1rem; font-size: 0.9rem; }
    .chapter-number { font-size: 6rem; }
    
    /* Hide mouse glow on mobile */
    #mouseGlow { display: none; }
}
```

### 8.2 Touch-Friendly Adjustments
```css
/* For touch devices */
@media (hover: none) and (pointer: coarse) {
    /* Larger touch targets */
    .nav-button {
        min-width: 60px;
        min-height: 60px;
        font-size: 1.2rem;
    }
    
    /* Disable hover effects */
    .content-card:hover {
        transform: none;
    }
    
    /* Show tap instructions on first slide */
    .cover::after {
        content: 'Tap right side to continue →';
        position: absolute;
        bottom: 100px;
        width: 100%;
        text-align: center;
        opacity: 0.6;
        animation: fade-pulse 2s infinite;
    }
}
```

---

## 9. PERFORMANCE OPTIMIZATION

### 9.1 Image Loading Strategy
```javascript
// Lazy load images
function lazyLoadImages() {
    const imageSlides = document.querySelectorAll('.slide-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const bgImage = img.style.backgroundImage;
                if (bgImage) {
                    // Image already set, skip
                    observer.unobserve(img);
                    return;
                }
                // Load image
                const imageUrl = img.dataset.image;
                if (imageUrl) {
                    img.style.backgroundImage = `url('${imageUrl}')`;
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '200px' // Preload images 200px before visible
    });
    
    imageSlides.forEach(img => imageObserver.observe(img));
}
```

### 9.2 Animation Performance
```css
/* Use transform and opacity for smooth 60fps animations */
.slide {
    transform: translateZ(0); /* Force GPU acceleration */
    will-change: transform, opacity; /* Hint to browser */
}

/* Disable expensive animations on low-end devices */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### 9.3 JavaScript Optimization
```javascript
// Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        adjustLayoutForScreenSize();
    }, 250);
});

// Use requestAnimationFrame for smooth animations
function updateMouseGlowPosition(x, y) {
    requestAnimationFrame(() => {
        mouseGlow.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Throttle mouse move events
let lastMoveTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastMoveTime > 16) { // ~60fps
        lastMoveTime = now;
        updateMouseGlowPosition(e.clientX, e.clientY);
    }
});
```

---

## 10. ACCESSIBILITY (A11Y)

### 10.1 Keyboard Navigation
```javascript
// Full keyboard support
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'Backspace':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(CONFIG.totalSlides);
            break;
        case 'Escape':
            toggleFullscreen();
            break;
    }
});
```

### 10.2 ARIA Labels
```html
<button id="prevBtn" class="nav-button" aria-label="Previous slide">
    <span class="icon" aria-hidden="true">◄</span> Previous
</button>

<div class="page-indicator" role="status" aria-live="polite">
    <span id="currentPage">1</span> / <span id="totalPages">43</span>
</div>

<section class="slide" role="region" aria-label="Slide 1: Cover">
    <!-- Slide content -->
</section>
```

### 10.3 Focus Management
```javascript
// Maintain focus visibility
function updateFocus() {
    const activeSlide = document.querySelector('.slide.active');
    const firstFocusable = activeSlide.querySelector('a, button, [tabindex="0"]');
    if (firstFocusable) {
        firstFocusable.focus();
    }
}

// Show focus outline for keyboard users only
let isUsingKeyboard = false;
document.addEventListener('keydown', () => {
    isUsingKeyboard = true;
    document.body.classList.add('keyboard-navigation');
});
document.addEventListener('mousedown', () => {
    isUsingKeyboard = false;
    document.body.classList.remove('keyboard-navigation');
});
```

```css
/* Hide focus outline for mouse users, show for keyboard */
body:not(.keyboard-navigation) *:focus {
    outline: none;
}

body.keyboard-navigation *:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 4px;
}
```

---

## 11. CONTENT INTEGRATION

### 11.1 Slide Data Structure
```javascript
// Slide data from slide-summary.md
const slidesData = [
    {
        id: 1,
        type: 'cover',
        title: 'Membangun <span class="strikethrough">Candi</span> Apps Dalam Semalam',
        subtitle: 'From Zero to Production with AI-Powered Development',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920',
        background: 'gradient'
    },
    {
        id: 2,
        type: 'chapter-title',
        chapterNumber: '01',
        title: 'Speed Revolution',
        subtitle: 'Kecepatan Adalah Mata Uang Baru',
        image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1920'
    },
    {
        id: 3,
        type: 'content',
        title: 'Era Baru Telah Tiba',
        layout: 'two-column',
        content: {
            left: {
                title: 'Sebelum AI',
                items: ['Developer = Tukang Ketik Kode', 'Kerja untuk orang lain', ...]
            },
            right: {
                title: 'Sesudah AI',
                items: ['Developer = Digital Architect', 'Build SaaS products', ...]
            }
        },
        statsBox: 'Kebutuhan IT meningkat 300%+ di era AI',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920'
    },
    // ... more slides
];
```

### 11.2 Dynamic Slide Generation
```javascript
function generateSlideHTML(slideData) {
    switch(slideData.type) {
        case 'cover':
            return generateCoverSlide(slideData);
        case 'chapter-title':
            return generateChapterSlide(slideData);
        case 'content':
            return generateContentSlide(slideData);
        default:
            return generateDefaultSlide(slideData);
    }
}

function generateCoverSlide(data) {
    return `
        <section class="slide" data-slide="${data.id}">
            <div class="slide-content cover">
                <h1 class="main-title">${data.title}</h1>
                <p class="subtitle">${data.subtitle}</p>
            </div>
            <div class="slide-image" data-image="${data.image}"></div>
        </section>
    `;
}

// Populate all slides on init
function initSlides() {
    const container = document.getElementById('slidesContainer');
    slidesData.forEach((slideData, index) => {
        const slideHTML = generateSlideHTML(slideData);
        container.innerHTML += slideHTML;
    });
    lazyLoadImages();
}
```

---

## 12. TESTING REQUIREMENTS

### 12.1 Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 12.2 Functionality Testing
- [ ] Keyboard navigation works
- [ ] Mouse navigation works
- [ ] Touch gestures work (mobile)
- [ ] URL updates on slide change
- [ ] Browser back/forward buttons work
- [ ] All animations run smoothly
- [ ] Images load correctly
- [ ] Fullscreen mode works
- [ ] Progress bar updates correctly
- [ ] Responsive design works on all breakpoints

### 12.3 Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Smooth 60fps animations
- [ ] No memory leaks during extended use
- [ ] Images load efficiently (lazy loading)
- [ ] CPU usage stays reasonable

### 12.4 Accessibility Testing
- [ ] Keyboard-only navigation possible
- [ ] Screen reader compatible
- [ ] ARIA labels present
- [ ] Focus management works
- [ ] Color contrast meets WCAG AA standards
- [ ] Reduced motion preference respected

---

## 13. DEPLOYMENT

### 13.1 File Structure
```
webinar-slides/
│
├── index.html           (Main HTML file)
├── styles.css           (All styles)
├── script.js            (All JavaScript)
├── README.md            (Documentation)
│
├── assets/              (Optional: local assets)
│   ├── fonts/
│   │   ├── Orbitron/
│   │   └── Inter/
│   └── icons/
│
└── slide-summary.md     (Content reference)
```

### 13.2 CDN Resources
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&family=Fira+Code&display=swap" rel="stylesheet">

<!-- Unsplash Images -->
<!-- Loaded dynamically from Unsplash URLs -->
<!-- Format: https://images.unsplash.com/photo-{id}?w=1920&q=80 -->
```

### 13.3 Hosting Options
1. **GitHub Pages** (Recommended for free hosting)
   - Push to GitHub repository
   - Enable GitHub Pages in settings
   - Access at: username.github.io/repo-name

2. **Vercel** (Fast deployment)
   - Connect GitHub repo
   - Auto-deploy on push
   - Custom domain support

3. **Netlify** (Alternative)
   - Drag-and-drop deployment
   - Continuous deployment from Git

---

## 14. FUTURE ENHANCEMENTS (Optional)

### Phase 2 Features:
- [ ] Speaker notes panel (toggleable)
- [ ] Print-to-PDF functionality
- [ ] Presentation timer
- [ ] Auto-play mode with configurable timing
- [ ] Slide thumbnails sidebar
- [ ] Drawing mode (annotate slides during presentation)
- [ ] Remote control via mobile device
- [ ] Analytics (track which slides viewed, for how long)

### Advanced Animations:
- [ ] Three.js background (3D geometric shapes)
- [ ] WebGL shaders for advanced effects
- [ ] Particle system with physics
- [ ] Interactive code examples with syntax highlighting

---

## 15. ACCEPTANCE CRITERIA

### Must-Have (MVP):
✅ 43 slides with content from slide-summary.md
✅ Blue futuristic neon theme applied
✅ Animated grid background
✅ Mouse glow effect following cursor
✅ Full-screen view (no vertical scrolling)
✅ Navigation: Next/Previous buttons + keyboard
✅ Page counter (current/total)
✅ Progress indicator
✅ Smooth slide transitions
✅ Responsive design (desktop, tablet, mobile)
✅ "Candi" strikethrough effect on cover slide
✅ Chapter titles on separate slides
✅ Unsplash images integrated
✅ Glass-morphism cards for content
✅ Neon glow effects on interactive elements

### Nice-to-Have:
☐ Touch gestures (swipe) on mobile
☐ URL state management
☐ Save/load progress
☐ Fullscreen toggle
☐ Particle system
☐ Sound effects on transitions
☐ Presentation mode vs edit mode

---

## 16. TIMELINE

### Phase 1: Structure & Content (Day 1)
- Set up HTML structure
- Integrate all 43 slides content
- Basic CSS layout
- Navigation functionality

### Phase 2: Theme & Styling (Day 1-2)
- Apply blue futuristic neon theme
- Implement glass-morphism cards
- Typography and spacing
- Responsive design

### Phase 3: Animations (Day 2)
- Animated grid background
- Mouse glow effect
- Slide transitions
- Content entry animations

### Phase 4: Polish & Testing (Day 2-3)
- Cross-browser testing
- Performance optimization
- Accessibility improvements
- Bug fixes

### Phase 5: Deployment (Day 3)
- Final testing
- Deploy to hosting
- Documentation
- Handoff

---

## 17. SUCCESS METRICS

### User Experience:
- Smooth 60fps animations throughout
- Intuitive navigation (no explanation needed)
- Visually impressive ("wow" factor on load)
- Content is readable and well-paced

### Technical:
- Page load < 3 seconds
- Works on all major browsers
- Mobile-friendly
- No console errors
- Accessible (keyboard navigation works)

### Business:
- Professional presentation quality
- Shareable (can send link to others)
- Can be reused for future presentations
- Easy to update content

---

## APPENDIX A: CSS VARIABLE REFERENCE

```css
:root {
    /* Colors */
    --color-neon-blue: #00d4ff;
    --color-deep-blue: #0a1929;
    --color-dark-navy: #050b14;
    --color-cyan-glow: #00ffff;
    --color-electric-blue: #1e90ff;
    --color-neon-pink: #ff006e;
    --color-purple-glow: #8b5cf6;
    --color-white: #ffffff;
    --color-light-gray: #b4c7d9;
    
    /* Spacing */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    --space-2xl: 64px;
    --space-3xl: 96px;
    
    /* Typography */
    --font-heading: 'Orbitron', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-code: 'Fira Code', monospace;
    
    --font-size-xs: 0.875rem;    /* 14px */
    --font-size-sm: 1rem;        /* 16px */
    --font-size-md: 1.25rem;     /* 20px */
    --font-size-lg: 1.5rem;      /* 24px */
    --font-size-xl: 2rem;        /* 32px */
    --font-size-2xl: 2.5rem;     /* 40px */
    --font-size-3xl: 4rem;       /* 64px */
    
    /* Effects */
    --blur-sm: 10px;
    --blur-md: 20px;
    --blur-lg: 40px;
    
    --glow-sm: 0 0 10px var(--color-neon-blue);
    --glow-md: 0 0 20px var(--color-neon-blue);
    --glow-lg: 0 0 40px var(--color-neon-blue);
    
    /* Transitions */
    --transition-fast: 150ms;
    --transition-normal: 300ms;
    --transition-slow: 600ms;
    
    --easing-default: cubic-bezier(0.4, 0.0, 0.2, 1);
    --easing-in: cubic-bezier(0.4, 0.0, 1, 1);
    --easing-out: cubic-bezier(0.0, 0.0, 0.2, 1);
}
```

---

## APPENDIX B: Key Animation Keyframes

```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes glow-pulse {
    0%, 100% { 
        text-shadow: 0 0 20px var(--color-neon-blue),
                     0 0 40px var(--color-neon-blue);
    }
    50% { 
        text-shadow: 0 0 30px var(--color-neon-blue),
                     0 0 60px var(--color-neon-blue),
                     0 0 80px var(--color-neon-blue);
    }
}

@keyframes slide-in-right {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-out-left {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100px);
    }
}

@keyframes grid-move {
    from { transform: translateY(0); }
    to { transform: translateY(50px); }
}

@keyframes shine {
    from { left: -100%; }
    to { left: 100%; }
}

@keyframes fade-pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
}
```

---

## NOTES FOR IMPLEMENTATION

1. **Start with Structure**: Build HTML skeleton first with all 43 slides
2. **Style Progressively**: Start with basic layout, then add theme, then animations
3. **Test Frequently**: Test navigation after each major feature
4. **Mobile-First for Interactions**: Ensure touch works before adding complex desktop features
5. **Performance First**: Use transform/opacity for animations, avoid layout thrashing
6. **Accessibility Matters**: Test with keyboard only, add ARIA labels
7. **Content Flexibility**: Make it easy to add/edit slides in the future
8. **Document Code**: Add comments for complex animations and logic

---

**END OF PRD**

**Ready for implementation!** 🚀
