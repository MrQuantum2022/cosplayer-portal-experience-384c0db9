
import { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { Door } from '../components/Door';
import { ParticleEffect } from '../components/ParticleEffect';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to ensure image paths work correctly on GitHub Pages
  const getCorrectImagePath = (path: string) => {
    if (path.startsWith('/')) {
      return `.${path}`;
    }
    return path;
  };

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-gray-900 transition-colors duration-700" />
      
      <div className="absolute inset-0 -z-10 bg-[url('./lovable-uploads/254a129d-44db-43fb-8e1a-20ef56e8b35a.png')] bg-cover bg-center opacity-10 dark:opacity-5" />
      
      {/* Floating particles */}
      <ParticleEffect count={30} color="rgba(59, 130, 246, 0.5)" />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Header */}
      <header className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="inline-block mb-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold title-gradient tracking-tight">
            Cosplayer Portal
          </h1>
          <div className="h-1 bg-gradient-to-r from-primary to-blue-400 dark:from-blue-400 dark:to-primary mt-2 rounded-full transform origin-left animate-pulse" />
        </div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
          Digitally Artistic <span className="text-primary dark:text-blue-400">aka</span> Tushar
        </p>
      </header>
      
      {/* Portal doors section */}
      <main className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-24 px-8 mb-16">
        <Door 
          to="/Warrior" 
          imageSrc="./lovable-uploads/daf6d98a-de59-49b2-b06c-ee84b1687687.png" 
          label="Sun Wukong" 
          color="#D90429"
          delay={300}
        />
        
        <Door 
          to="/creature" 
          imageSrc="./lovable-uploads/a077f559-77fa-46dc-bf68-243b7b7b87f1.png" 
          label="Tanjiro" 
          color="#0096C7"
          delay={600}
        />
        
        <Door 
          to="/creature" 
          imageSrc="./lovable-uploads/064364bd-a24d-4abf-8223-cc11c7c8eb4a.png" 
          label="Statue of God" 
          color="#2B9348"
          delay={900}
        />
      </main>
      
      {/* Instructions */}
      <div className={`max-w-md mx-auto text-center text-gray-500 dark:text-gray-400 transition-all duration-1000 ease-out px-4 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: '700ms' }}>
        <p className="text-sm">
          Click on a door to enter the world of each cosplay.
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-40 h-40 opacity-20 dark:opacity-10 animate-rotate-slow pointer-events-none hidden md:block">
        <img src={getCorrectImagePath("./lovable-uploads/254a129d-44db-43fb-8e1a-20ef56e8b35a.png")} alt="Decorative element" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20 dark:opacity-10 animate-float pointer-events-none hidden md:block">
        <img src={getCorrectImagePath("./lovable-uploads/d3dcf9d3-cc0b-47cf-ab94-19d186bbf69b.png")} alt="Decorative element" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Index;
