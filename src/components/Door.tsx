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
export const Door = ({
  to,
  imageSrc,
  label,
  color,
  delay = 0
}: DoorProps) => {
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
  return <div className={cn("transition-all duration-1000 ease-out transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")} style={{
    transitionDelay: `${delay}ms`
  }}>
      <div className="relative group">
        {/* Suzume-inspired door frame with reduced opacity (80%) */}
        <div className="absolute -inset-6 rounded-2xl border-8 border-opacity-20 z-0" style={{
        borderColor: color,
        background: `radial-gradient(circle at center, ${color}10 0%, transparent 70%)`,
        transform: 'rotate(-2deg)',
        boxShadow: `0 0 20px ${color}40`,
        opacity: 0.8 // Reduced opacity to 80%
      }} />
        
        {/* Frame decorative elements - top left */}
        <div className="absolute -top-8 -left-8 w-16 h-16 z-10">
          <div className="absolute inset-0 rounded-full border-2" style={{
          borderColor: color,
          transform: 'rotate(45deg)',
          opacity: 0.6
        }} />
          <div className="absolute inset-2 rounded-full border-2" style={{
          borderColor: color,
          transform: 'rotate(15deg)',
          opacity: 0.4
        }} />
          {/* Particle effect on top left corner */}
          <ParticleEffect count={5} color={color} />
        </div>
        
        {/* Frame decorative elements - bottom right */}
        <div className="absolute -bottom-8 -right-8 w-16 h-16 z-10">
          <div className="absolute inset-0 rounded-full border-2" style={{
          borderColor: color,
          transform: 'rotate(45deg)',
          opacity: 0.6
        }} />
          <div className="absolute inset-2 rounded-full border-2" style={{
          borderColor: color,
          transform: 'rotate(15deg)',
          opacity: 0.4
        }} />
          {/* Particle effect on bottom right corner */}
          <ParticleEffect count={5} color={color} />
        </div>
        
        {/* Secondary frame for depth - also with reduced opacity */}
        <div className="absolute -inset-3 rounded-xl border-4 border-opacity-30 z-0" style={{
        borderColor: color,
        transform: 'rotate(1deg)',
        opacity: 0.4 // Slightly reduced from original 0.5
      }} />
        
        {/* Additional particle effects on the frame edges */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <ParticleEffect count={3} color={color} />
        </div>
        
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <ParticleEffect count={3} color={color} />
        </div>
        
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
          <ParticleEffect count={3} color={color} />
        </div>
        
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
          <ParticleEffect count={3} color={color} />
        </div>
        
        {/* Main door frame */}
        <div className={cn("door-frame rounded-xl overflow-hidden z-10 relative", isOpening ? "animate-door-open" : "hover:scale-105 transition-transform duration-500")} style={{
        transformOrigin: 'left center',
        boxShadow: `0 10px 30px -5px ${color}40, 0 0 10px ${color}20`,
        opacity: 0.95 // Slight opacity on the door frame itself
      }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={handleDoorClick}>
          <div className="aspect-[2/3] w-72 md:w-80 relative overflow-hidden cursor-pointer">
            {/* Door image */}
            <img src={imageSrc} alt={`${label} door`} className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110" />
            
            {/* Overlay */}
            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500", isHovering ? "opacity-80" : "opacity-50")} />
            
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 text-center p-4 transform transition-all duration-500">
              
            </div>
            
            {/* Door handle */}
            <div className={cn("absolute right-4 top-1/2 w-3 h-10 rounded-full bg-white/70 transition-all duration-500", isHovering ? "opacity-100 scale-110" : "opacity-70 scale-100")} style={{
            boxShadow: `0 0 10px ${color}, 0 0 20px white`
          }} />
            
            {/* Door hinges */}
            <div className="absolute left-3 top-1/4 w-1 h-6 rounded-full bg-white/30" />
            <div className="absolute left-3 bottom-1/4 w-1 h-6 rounded-full bg-white/30" />
          </div>
        </div>
        
        {/* Mystical seal runes around the door frame */}
        <div className="absolute -inset-4 z-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700">
          {[...Array(8)].map((_, i) => <div key={i} className="absolute w-4 h-4 rounded-full" style={{
          background: color,
          top: `${10 + i * 10}%`,
          left: i % 2 === 0 ? '-10px' : 'calc(100% + 6px)',
          opacity: 0.6,
          boxShadow: `0 0 8px ${color}`,
          animation: `pulse 3s infinite ${i * 0.2}s`
        }} />)}
        </div>
        
        {/* Particle effects when hovering */}
        {isHovering && <ParticleEffect count={15} color={color} />}
        
        {/* Light effect behind the door */}
        <div className={cn("absolute inset-0 -z-10 rounded-xl transition-opacity duration-700", isHovering || isOpening ? "opacity-70" : "opacity-0")} style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        transform: 'translateY(10%) scale(1.1)',
        filter: 'blur(20px)'
      }} />
      </div>
    </div>;
};