
// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const particlesContainer = document.getElementById('particles-container');
const imageSection = document.getElementById('image-section');
const textSection = document.getElementById('text-section');

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
function createParticles(count = 25, color = 'rgba(220, 38, 38, 0.6)') {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = Math.random() * 0.7 + 0.3;
    particle.style.backgroundColor = color;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particlesContainer.appendChild(particle);
  }
}

// Initialize animations when page loads
function initAnimations() {
  setTimeout(() => {
    imageSection.classList.add('animated');
    textSection.classList.add('animated');
  }, 500);
}

// Initialize the page
function init() {
  // Apply saved theme
  updateTheme();
  
  // Create particles
  createParticles();
  
  // Initialize animations
  initAnimations();
  
  // Add event listeners for buttons
  document.querySelector('.primary-button').addEventListener('click', () => {
    alert('Gallery feature coming soon!');
  });
  
  document.querySelector('.outline-button').addEventListener('click', () => {
    alert('Making process documentation coming soon!');
  });
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', init);
