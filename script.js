
// DOM elements
const app = document.getElementById('app');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const header = document.getElementById('header');
const instructions = document.getElementById('instructions');
const doorsContainer = document.getElementById('doors-container');
const particlesContainer = document.getElementById('particles-container');
const toastContainer = document.getElementById('toast-container');

// Door data
const doors = [
  {
    to: "warrior.html",
    imageSrc: "lovable-uploads/daf6d98a-de59-49b2-b06c-ee84b1687687.png",
    label: "Warrior",
    color: "#D90429",
    delay: 300
  },
  {
    to: "water-breather.html",
    imageSrc: "lovable-uploads/a077f559-77fa-46dc-bf68-243b7b7b87f1.png",
    label: "Water Breather",
    color: "#0096C7",
    delay: 600
  },
  {
    to: "creature.html",
    imageSrc: "lovable-uploads/064364bd-a24d-4abf-8223-cc11c7c8eb4a.png",
    label: "Creature",
    color: "#2B9348",
    delay: 900
  }
];

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

// Create door elements
function createDoors() {
  doors.forEach(door => {
    const doorElement = document.createElement('div');
    doorElement.className = 'door-container';
    doorElement.style.transitionDelay = `${door.delay}ms`;
    
    doorElement.innerHTML = `
      <div class="door-group">
        <!-- Suzume-inspired door frame with reduced opacity (80%) -->
        <div class="door-frame-outer" style="
          border: 8px solid ${door.color}; 
          background: radial-gradient(circle at center, ${door.color}10 0%, transparent 70%);
          box-shadow: 0 0 20px ${door.color}40;
        "></div>
        
        <!-- Frame decorative elements - top left -->
        <div class="door-frame-element door-frame-element-tl">
          <div class="door-frame-ring" style="border-color: ${door.color};"></div>
          <div class="door-frame-ring-inner" style="border-color: ${door.color};"></div>
        </div>
        
        <!-- Frame decorative elements - bottom right -->
        <div class="door-frame-element door-frame-element-br">
          <div class="door-frame-ring" style="border-color: ${door.color};"></div>
          <div class="door-frame-ring-inner" style="border-color: ${door.color};"></div>
        </div>
        
        <!-- Secondary frame for depth - also with reduced opacity -->
        <div class="door-frame-secondary" style="
          border: 4px solid ${door.color};
        "></div>
        
        <!-- Main door frame -->
        <div class="door-frame aspect-2-3" data-to="${door.to}" data-label="${door.label}">
          <!-- Door image -->
          <img src="${door.imageSrc}" alt="${door.label} door" class="door-image" />
          
          <!-- Overlay -->
          <div class="door-overlay"></div>
          
          <!-- Door handle -->
          <div class="door-handle" style="box-shadow: 0 0 10px ${door.color}, 0 0 20px white;"></div>
          
          <!-- Door hinges -->
          <div class="door-hinge door-hinge-top"></div>
          <div class="door-hinge door-hinge-bottom"></div>
        </div>
        
        <!-- Mystical seal runes around the door frame -->
        <div class="door-seal">
          ${Array.from({length: 8}).map((_, i) => `
            <div class="door-seal-rune" style="
              background: ${door.color};
              top: ${10 + i * 10}%;
              left: ${i % 2 === 0 ? '-10px' : 'calc(100% + 6px)'};
              animation-delay: ${i * 0.2}s;
            "></div>
          `).join('')}
        </div>
        
        <!-- Light effect behind the door -->
        <div class="light-effect" style="
          background: radial-gradient(circle at center, ${door.color} 0%, transparent 70%);
        "></div>
      </div>
    `;
    
    doorsContainer.appendChild(doorElement);
  });
}

// Create particle effects
function createParticles(count = 30, color = 'rgba(59, 130, 246, 0.5)') {
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

// Create door particles
function createDoorParticles(doorElement, count = 5, color) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = Math.random() * 0.7 + 0.3;
    particle.style.backgroundColor = color;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    doorElement.querySelector('.door-frame-element-tl').appendChild(particle.cloneNode(true));
    doorElement.querySelector('.door-frame-element-br').appendChild(particle.cloneNode(true));
  }
}

// Show toast notification
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s forwards';
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, duration);
}

// Door click handler
function handleDoorClick(event) {
  // Find the closest door-frame element
  const doorFrame = event.target.closest('.door-frame');
  if (!doorFrame) return;
  
  const to = doorFrame.getAttribute('data-to');
  const label = doorFrame.getAttribute('data-label');
  
  // Prevent multiple clicks
  if (doorFrame.classList.contains('opening')) return;
  
  // Show animation and navigate
  doorFrame.classList.add('opening');
  showToast(`Entering ${label} world...`);
  
  // Delay navigation to allow door animation to complete
  setTimeout(() => {
    window.location.href = to;
  }, 1500);
}

// Initialize the page
function init() {
  // Apply saved theme
  updateTheme();
  
  // Create doors
  createDoors();
  
  // Create particles
  createParticles();
  
  // Add door click listener
  doorsContainer.addEventListener('click', handleDoorClick);
  
  // Add hover particles to doors
  document.querySelectorAll('.door-container').forEach(doorContainer => {
    const doorGroup = doorContainer.querySelector('.door-group');
    const color = doorGroup.querySelector('.door-frame-outer').style.borderColor;
    
    doorGroup.addEventListener('mouseenter', () => {
      // Create additional particles on hover
      const frameElements = doorContainer.querySelectorAll('.door-frame-element');
      frameElements.forEach(el => {
        for (let i = 0; i < 5; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.opacity = Math.random() * 0.7 + 0.3;
          particle.style.backgroundColor = color;
          particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
          el.appendChild(particle);
          
          // Remove after animation
          setTimeout(() => {
            if (el.contains(particle)) {
              el.removeChild(particle);
            }
          }, 3000);
        }
      });
    });
  });
  
  // Show elements with animation
  setTimeout(() => {
    header.classList.remove('opacity-0', 'translate-y-10');
    header.classList.add('opacity-100', 'translate-y-0');
    
    setTimeout(() => {
      instructions.classList.remove('opacity-0', 'translate-y-10');
      instructions.classList.add('opacity-100', 'translate-y-0');
    }, 700);
    
    // Animate in doors
    const doorContainers = document.querySelectorAll('.door-container');
    doorContainers.forEach(container => {
      setTimeout(() => {
        container.classList.add('visible');
      }, parseInt(container.style.transitionDelay));
    });
  }, 500);
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', init);
