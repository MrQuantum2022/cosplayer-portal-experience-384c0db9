
// DOM Elements specific to the warrior page
const saveButton = document.getElementById('save-button');
const shareButton = document.getElementById('share-button');
const characterParticles = document.getElementById('character-particles');

// Create character page particles
function createCharacterParticles() {
  if (!characterParticles) return;
  
  // Clear existing particles
  characterParticles.innerHTML = '';
  
  // Create new particles
  for (let i = 0; i < 30; i++) {
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
    
    // For warrior page, add a slight orange tint to particles
    particle.style.backgroundColor = 'rgba(249, 115, 22, 0.7)';
    
    characterParticles.appendChild(particle);
  }
}

// Handle save button click
function handleSave() {
  // In a real app, this would save to localStorage or a database
  showToast({
    title: 'Saved to Collection',
    description: 'Warrior cosplay has been added to your collection.',
    variant: 'default'
  });
}

// Handle share button click
function handleShare() {
  // In a real app, this would open share dialog
  const shareData = {
    title: 'Warrior Cosplay Guide',
    text: 'Check out this amazing Warrior cosplay guide!',
    url: window.location.href
  };
  
  if (navigator.share && navigator.canShare(shareData)) {
    navigator.share(shareData)
      .then(() => console.log('Shared successfully'))
      .catch((error) => {
        console.log('Error sharing:', error);
        showShareToast();
      });
  } else {
    // Fallback for browsers that don't support Web Share API
    showShareToast();
  }
}

function showShareToast() {
  showToast({
    title: 'Link Copied',
    description: 'URL has been copied to clipboard. Share it with your friends!',
    variant: 'default'
  });
  
  // Try to copy to clipboard
  try {
    navigator.clipboard.writeText(window.location.href);
  } catch (err) {
    console.error('Failed to copy URL: ', err);
  }
}

// Initialize the character page
function initCharacterPage() {
  createCharacterParticles();
  
  // Add event listeners
  saveButton.addEventListener('click', handleSave);
  shareButton.addEventListener('click', handleShare);
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initCharacterPage);
