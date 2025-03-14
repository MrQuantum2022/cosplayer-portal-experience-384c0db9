
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ParticleEffect } from './ParticleEffect';
import { toast } from 'sonner';

interface DoorProps {
  to: string;
  imageSrc: string;
  label: string;
  color: string;
  delay?: number;
}

export const Door = ({ to, imageSrc, label, color, delay = 0 }: DoorProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleDoorClick = () => {
    if (isOpening) return;
    
    setIsOpening(true);
    toast(`Entering ${label} world...`);
    
    // Delay navigation to allow door animation to complete
    setTimeout(() => {
      navigate(to);
    }, 1500);
  };

  return (
    <div 
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div 
          className={cn(
            "door-frame rounded-xl overflow-hidden",
            isOpening ? "animate-door-open" : "hover:scale-105 transition-transform duration-500",
          )}
          style={{ 
            transformOrigin: 'left center',
            boxShadow: `0 10px 30px -5px ${color}40, 0 0 10px ${color}20`
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleDoorClick}
        >
          <div className="aspect-[2/3] w-72 md:w-80 relative overflow-hidden cursor-pointer">
            {/* Door image */}
            <img 
              src={imageSrc} 
              alt={`${label} door`}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500",
                isHovering ? "opacity-80" : "opacity-50"
              )}
            />
            
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 text-center p-4 transform transition-all duration-500">
              <h3 className={cn(
                "text-xl font-bold text-white",
                isHovering ? "scale-110" : "scale-100"
              )}>
                {label}
              </h3>
            </div>
            
            {/* Door handle */}
            <div 
              className={cn(
                "absolute right-4 top-1/2 w-3 h-10 rounded-full bg-white/70 transition-all duration-500",
                isHovering ? "opacity-100 scale-110" : "opacity-70 scale-100"
              )}
              style={{
                boxShadow: `0 0 10px ${color}, 0 0 20px white`
              }}
            />
          </div>
        </div>
        
        {/* Particle effects when hovering */}
        {isHovering && <ParticleEffect count={15} color={color} />}
        
        {/* Light effect behind the door */}
        <div 
          className={cn(
            "absolute inset-0 -z-10 rounded-xl transition-opacity duration-700",
            isHovering || isOpening ? "opacity-70" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            transform: 'translateY(10%) scale(1.1)',
            filter: 'blur(20px)'
          }}
        />
      </div>
    </div>
  );
};
