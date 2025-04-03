// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const sunIcon = themeToggleBtn.querySelector('.sun-icon');
const moonIcon = themeToggleBtn.querySelector('.moon-icon');
const doorFrames = document.querySelectorAll('.door-frame');
const toastContainer = document.getElementById('toast-container');
const particles = {
  warrior: document.getElementById('warrior-particles'),
  creature: document.getElementById('creature-particles'),
  water: document.getElementById('water-particles')
};

// Theme Toggle
function initializeTheme() {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  
  if (isDark) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    localStorage.setItem('theme', 'dark');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }
  
  showToast({
    title: `${isDark ? 'Dark' : 'Light'} Mode Activated`,
    description: `Switched to ${isDark ? 'dark' : 'light'} theme.`,
    variant: 'default'
  });
}

// Toast Notifications
function showToast({ title, description, variant = 'default', duration = 5000 }) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${variant}`;
  toast.setAttribute('role', 'alert');
  
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${description ? `<div class="toast-description">${description}</div>` : ''}
    </div>
    <button class="toast-close" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => dismissToast(toast));
  
  toastContainer.appendChild(toast);
  
  // Force reflow to enable animation
  toast.offsetHeight;
  
  // Auto dismiss after duration
  const timeoutId = setTimeout(() => dismissToast(toast), duration);
  toast._timeoutId = timeoutId;
  
  return toast;
}

function dismissToast(toast) {
  clearTimeout(toast._timeoutId);
  toast.classList.add('toast-exiting');
  
  toast.addEventListener('animationend', () => {
    toast.remove();
  });
}

// Particle Effects
function createParticles() {
  const particleTypes = ['warrior', 'creature', 'water'];
  
  particleTypes.forEach(type => {
    const container = particles[type];
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 6 + 2;
      
      // Random animation delay
      const delay = Math.random() * 3;
      
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  });
}

// Door Interactions
function addDoorInteractions() {
  doorFrames.forEach(doorFrame => {
    doorFrame.addEventListener('click', (e) => {
      const doorBack = doorFrame.querySelector('.door-back');
      const enterButton = doorBack.querySelector('.enter-button');
      
      // If clicking on the enter button, let the default link behavior happen
      if (e.target === enterButton) return;
      
      // Otherwise, prevent default and just rotate the door
      e.preventDefault();
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      doorFrame.appendChild(ripple);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
}

// Initialize Everything
function init() {
  initializeTheme();
  createParticles();
  addDoorInteractions();
  
  // Event Listeners
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    }
  });
  
  // Show welcome toast
  setTimeout(() => {
    showToast({
      title: 'Welcome to Cosplayer Portal',
      description: 'Choose your cosplay adventure!',
      variant: 'default',
      duration: 5000
    });
  }, 1000);
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
