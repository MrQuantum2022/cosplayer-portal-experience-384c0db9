
import { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  count?: number;
  className?: string;
  color?: string;
}

export const ParticleEffect = ({ 
  count = 20, 
  className = "",
  color = "white"
}: ParticleEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('absolute', 'rounded-full', 'pointer-events-none');
      
      // Random size between 3px and 8px
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position within container
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Set color and opacity
      particle.style.backgroundColor = color;
      particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
      
      // Add animation
      const duration = Math.random() * 10 + 5;
      particle.style.animation = `particle-float ${duration}s ease-out forwards`;
      
      // Random delay to stagger animations
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Remove after animation completes
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
        createParticle();
      }, duration * 1000);
      
      container.appendChild(particle);
    };

    // Create initial particles
    for (let i = 0; i < count; i++) {
      setTimeout(() => createParticle(), Math.random() * 2000);
    }

    return () => {
      // Clean up by removing all particles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [count, color]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
