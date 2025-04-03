
// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const particlesContainer = document.getElementById('particles-container');
const imageSection = document.getElementById('image-section');
const textSection = document.getElementById('text-section');
const doorFrameElements = document.querySelectorAll('.door-frame-element');

// Theme handling
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function updateTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    document.body.classList.remove('dark');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode);
  updateTheme();
}

themeToggle.addEventListener('click', toggleTheme);

// Create particle effects
function createParticles(count = 25, color = 'rgba(220, 38, 38, 0.6)', container = particlesContainer) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = Math.random() * 0.7 + 0.3;
    particle.style.backgroundColor = color;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(particle);
  }
}

// Add particles to frame elements
function createFrameParticles() {
  if (doorFrameElements) {
    doorFrameElements.forEach(element => {
      createParticles(8, 'rgba(220, 38, 38, 0.4)', element);
    });
  }
}

// Initialize animations when page loads
function initAnimations() {
  setTimeout(() => {
    imageSection.classList.add('animated');
    textSection.classList.add('animated');
  }, 500);
}

// Add "pulse" effect to image
function addPulseEffectToImage() {
  const imageFrame = document.querySelector('.image-frame');
  if (imageFrame) {
    setInterval(() => {
      imageFrame.classList.add('pulse');
      setTimeout(() => {
        imageFrame.classList.remove('pulse');
      }, 1000);
    }, 5000);
  }
}

// Show toast notification
function showToast(message, duration = 3000) {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  toastContainer.style.position = 'fixed';
  toastContainer.style.top = '1rem';
  toastContainer.style.right = '1rem';
  toastContainer.style.zIndex = '100';
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.padding = '1rem';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.borderRadius = '0.5rem';
  toast.style.animation = 'toast-in 0.3s ease-out forwards';
  
  toastContainer.appendChild(toast);
  document.body.appendChild(toastContainer);
  
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s forwards';
    setTimeout(() => {
      document.body.removeChild(toastContainer);
    }, 300);
  }, duration);
}

// Initialize the page
function init() {
  // Apply saved theme
  updateTheme();
  
  // Create particles
  createParticles();
  
  // Create frame particles
  createFrameParticles();
  
  // Initialize animations
  initAnimations();
  
  // Add pulse effect
  addPulseEffectToImage();
  
  // Add event listeners for buttons
  document.querySelector('.primary-button').addEventListener('click', () => {
    showToast('Gallery feature coming soon!');
  });
  
  document.querySelector('.outline-button').addEventListener('click', () => {
    showToast('Making process documentation coming soon!');
  });
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', init);
