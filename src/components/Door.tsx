
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
        {/* Suzume-inspired wooden door frame - outer frame */}
        <div 
          className="absolute -inset-6 rounded-2xl border-8 border-opacity-20 z-0 overflow-hidden"
          style={{ 
            borderColor: `${color}60`,
            transform: 'rotate(-2deg)',
            boxShadow: `0 0 20px ${color}40`
          }}
        >
          {/* Wooden texture overlay */}
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
              backgroundSize: '200px',
              backgroundBlendMode: 'overlay',
              opacity: 0.7,
              backgroundColor: `${color}20`
            }} 
          />
          {/* Wood grain effect */}
          <div 
            className="absolute inset-0 opacity-40" 
            style={{ 
              backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.1) 50%), linear-gradient(transparent 50%, rgba(0,0,0,0.05) 50%)',
              backgroundSize: '4px 4px',
              backgroundBlendMode: 'multiply'
            }} 
          />
        </div>
        
        {/* Frame decorative elements - top left */}
        <div className="absolute -top-8 -left-8 w-16 h-16 z-10">
          <div 
            className="absolute inset-0 rounded-full border-2 overflow-hidden"
            style={{ borderColor: color, transform: 'rotate(45deg)', opacity: 0.8 }}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
              backgroundSize: '100px',
              backgroundBlendMode: 'overlay',
              backgroundColor: `${color}30`
            }} />
          </div>
          <div 
            className="absolute inset-2 rounded-full border-2 overflow-hidden"
            style={{ borderColor: color, transform: 'rotate(15deg)', opacity: 0.6 }}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
              backgroundSize: '50px',
              backgroundBlendMode: 'overlay',
              backgroundColor: `${color}20`
            }} />
          </div>
        </div>
        
        {/* Frame decorative elements - bottom right */}
        <div className="absolute -bottom-8 -right-8 w-16 h-16 z-10">
          <div 
            className="absolute inset-0 rounded-full border-2 overflow-hidden"
            style={{ borderColor: color, transform: 'rotate(45deg)', opacity: 0.8 }}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
              backgroundSize: '100px',
              backgroundBlendMode: 'overlay',
              backgroundColor: `${color}30`
            }} />
          </div>
          <div 
            className="absolute inset-2 rounded-full border-2 overflow-hidden"
            style={{ borderColor: color, transform: 'rotate(15deg)', opacity: 0.6 }}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
              backgroundSize: '50px',
              backgroundBlendMode: 'overlay',
              backgroundColor: `${color}20`
            }} />
          </div>
        </div>
        
        {/* Secondary wooden frame for depth */}
        <div 
          className="absolute -inset-3 rounded-xl border-4 border-opacity-30 z-0 overflow-hidden"
          style={{ 
            borderColor: `${color}70`,
            transform: 'rotate(1deg)',
            opacity: 0.7
          }}
        >
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
            backgroundSize: '150px',
            backgroundBlendMode: 'overlay',
            backgroundColor: `${color}15`
          }} />
        </div>
        
        {/* Main door frame */}
        <div 
          className={cn(
            "door-frame rounded-xl overflow-hidden z-10 relative",
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
          {/* Wooden frame texture */}
          <div className="absolute inset-0 pointer-events-none opacity-30 z-10" style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
            backgroundSize: '100px',
            backgroundBlendMode: 'overlay',
            mixBlendMode: 'multiply'
          }} />
          
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
            
            {/* Door handle - metallic */}
            <div 
              className={cn(
                "absolute right-4 top-1/2 w-3 h-10 rounded-full transition-all duration-500",
                isHovering ? "opacity-100 scale-110" : "opacity-70 scale-100"
              )}
              style={{
                background: "linear-gradient(90deg, #d4d4d4, #ffffff, #d4d4d4)",
                boxShadow: `0 0 10px ${color}, 0 0 20px white`
              }}
            />
            
            {/* Door hinges - metallic */}
            <div className="absolute left-3 top-1/4 w-1 h-6 rounded-full bg-gray-300" 
              style={{
                background: "linear-gradient(90deg, #a0a0a0, #d4d4d4, #a0a0a0)"
              }}
            />
            <div className="absolute left-3 bottom-1/4 w-1 h-6 rounded-full bg-gray-300"
              style={{
                background: "linear-gradient(90deg, #a0a0a0, #d4d4d4, #a0a0a0)"
              }}
            />
          </div>
        </div>
        
        {/* Mystical seal runes around the door frame */}
        <div className="absolute -inset-4 z-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: color,
                top: `${10 + (i * 10)}%`,
                left: i % 2 === 0 ? '-10px' : 'calc(100% + 6px)',
                opacity: 0.6,
                boxShadow: `0 0 8px ${color}`,
                animation: `pulse 3s infinite ${i * 0.2}s`
              }}
            />
          ))}
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
