// Configuration
const CONFIG = {
    totalSlides: 52,
    transitionDuration: 400,
    enableMouseGlow: true
};

// State Management
const state = {
    currentSlide: 1,
    isTransitioning: false,
    touchStartX: 0,
    touchEndX: 0
};

// DOM Elements
let slides = [];
let prevBtn, nextBtn, currentPageEl, totalPagesEl, progressFill, mouseGlow;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initElements();
    initEventListeners();
    initMouseGlow();
    loadFromURL();
    updateUI();
});

// Initialize DOM Elements
function initElements() {
    slides = document.querySelectorAll('.slide');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    currentPageEl = document.getElementById('currentPage');
    totalPagesEl = document.getElementById('totalPages');
    progressFill = document.getElementById('progressFill');
    mouseGlow = document.getElementById('mouseGlow');
    
    totalPagesEl.textContent = CONFIG.totalSlides;
}

// Initialize Event Listeners
function initEventListeners() {
    // Button Navigation
    prevBtn.addEventListener('click', previousSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard Navigation
    document.addEventListener('keydown', handleKeyPress);
    
    // Touch Navigation (Mobile)
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Prevent default for arrow keys
    window.addEventListener('keydown', (e) => {
        if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
    });
}

// Keyboard Handler
function handleKeyPress(e) {
    if (state.isTransitioning) return;
    
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'Backspace':
            previousSlide();
            break;
        case 'Home':
            goToSlide(1);
            break;
        case 'End':
            goToSlide(CONFIG.totalSlides);
            break;
        case 'Escape':
            toggleFullscreen();
            break;
    }
}

// Touch Handlers
function handleTouchStart(e) {
    state.touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    state.touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = state.touchStartX - state.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            previousSlide();
        }
    }
}

// Navigation Functions
function nextSlide() {
    if (state.currentSlide < CONFIG.totalSlides && !state.isTransitioning) {
        goToSlide(state.currentSlide + 1);
    }
}

function previousSlide() {
    if (state.currentSlide > 1 && !state.isTransitioning) {
        goToSlide(state.currentSlide - 1);
    }
}

function goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > CONFIG.totalSlides || state.isTransitioning) return;
    if (slideNumber === state.currentSlide) return;
    
    state.isTransitioning = true;
    
    const currentSlideEl = slides[state.currentSlide - 1];
    const nextSlideEl = slides[slideNumber - 1];
    
    // Exit animation for current slide
    currentSlideEl.classList.add('exit');
    currentSlideEl.classList.remove('active');
    
    // Wait for exit animation
    setTimeout(() => {
        currentSlideEl.classList.remove('exit');
        currentSlideEl.style.display = 'none';
        
        // Enter animation for next slide
        nextSlideEl.style.display = 'flex';
        nextSlideEl.classList.add('active');
        
        // Update state
        state.currentSlide = slideNumber;
        updateUI();
        updateURL();
        
        // Reset transition flag
        setTimeout(() => {
            state.isTransitioning = false;
        }, CONFIG.transitionDuration);
    }, CONFIG.transitionDuration);
}

// Update UI
function updateUI() {
    // Update page counter
    currentPageEl.textContent = state.currentSlide;
    
    // Update progress bar
    const progress = (state.currentSlide / CONFIG.totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update button states
    prevBtn.disabled = state.currentSlide === 1;
    nextBtn.disabled = state.currentSlide === CONFIG.totalSlides;
    
    // Update opacity for disabled state
    if (state.currentSlide === 1) {
        prevBtn.style.opacity = '0.3';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
    
    if (state.currentSlide === CONFIG.totalSlides) {
        nextBtn.style.opacity = '0.3';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// URL Management
function updateURL() {
    const url = new URL(window.location);
    url.hash = `slide-${state.currentSlide}`;
    window.history.pushState({}, '', url);
}

function loadFromURL() {
    const hash = window.location.hash;
    if (hash) {
        const match = hash.match(/slide-(\d+)/);
        if (match) {
            const slideNum = parseInt(match[1]);
            if (slideNum >= 1 && slideNum <= CONFIG.totalSlides) {
                // Hide all slides first
                slides.forEach(slide => {
                    slide.style.display = 'none';
                    slide.classList.remove('active');
                });
                
                // Show target slide
                state.currentSlide = slideNum;
                slides[slideNum - 1].style.display = 'flex';
                slides[slideNum - 1].classList.add('active');
            }
        }
    }
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
    loadFromURL();
    updateUI();
});

// Mouse Glow Effect
function initMouseGlow() {
    if (!CONFIG.enableMouseGlow || window.innerWidth < 768) {
        mouseGlow.style.display = 'none';
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth animation for glow
    function animateGlow() {
        // Lerp (linear interpolation) for smooth following
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        mouseGlow.style.left = `${glowX}px`;
        mouseGlow.style.top = `${glowY}px`;
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// Fullscreen Toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Utility: Prevent scrolling
document.body.style.overflow = 'hidden';

// Utility: Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-check if mouse glow should be visible
        if (window.innerWidth < 768) {
            mouseGlow.style.display = 'none';
        } else if (CONFIG.enableMouseGlow) {
            mouseGlow.style.display = 'block';
        }
    }, 250);
});

// Accessibility: Focus management
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Console Easter Egg
console.log('%c🚀 Membangun Apps Dalam Semalam', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cBuilt with: HTML, Tailwind CSS, Vanilla JavaScript', 'font-size: 12px; color: #8b5cf6;');
console.log('%cKeyboard shortcuts:', 'font-size: 14px; color: #00ffff; font-weight: bold;');
console.log('%c  → / Space / Enter : Next slide', 'font-size: 12px; color: #fff;');
console.log('%c  ← / Backspace    : Previous slide', 'font-size: 12px; color: #fff;');
console.log('%c  Home             : First slide', 'font-size: 12px; color: #fff;');
console.log('%c  End              : Last slide', 'font-size: 12px; color: #fff;');
console.log('%c  Escape           : Toggle fullscreen', 'font-size: 12px; color: #fff;');

// Performance monitoring (optional)
if (window.performance && window.performance.memory) {
    console.log('%cPerformance Info:', 'font-size: 14px; color: #00d4ff; font-weight: bold;');
    console.log(`%cMemory: ${(window.performance.memory.usedJSHeapSize / 1048576).toFixed(2)} MB`, 'font-size: 12px; color: #8b5cf6;');
}
