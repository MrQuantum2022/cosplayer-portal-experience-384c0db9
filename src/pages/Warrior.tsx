
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sword } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { ParticleEffect } from "../components/ParticleEffect";

const Warrior = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/d3dcf9d3-cc0b-47cf-ab94-19d186bbf69b.png')] bg-cover bg-center opacity-5" />

      {/* Red particle effects */}
      <ParticleEffect color="rgba(220, 38, 38, 0.6)" count={25} />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Back button */}
      <button 
        onClick={() => navigate("/")} 
        className="fixed top-4 left-4 z-50 rounded-full w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 active:scale-95 transition-all" 
        aria-label="Back to portal"
      >
        <ArrowLeft className="h-5 w-5 mx-auto" />
        <span className="sr-only">Back to portal</span>
      </button>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image section */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-red-500 blur-xl opacity-30 rounded-xl animate-pulse" />
              <div className="relative overflow-hidden rounded-xl border-2 border-red-500/50">
                <img src="/lovable-uploads/daf6d98a-de59-49b2-b06c-ee84b1687687.png" alt="Warrior Cosplay" className="w-full h-auto object-cover aspect-[3/4] transform hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-600/30 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-red-700/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Text content */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <div className="glass-panel rounded-xl p-8 backdrop-blur-md bg-red-950/30 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Sword className="h-6 w-6 text-red-400" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Black Myth Wukong</h1>
              </div>
              
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-300 mb-6" />
              
              <p className="text-lg text-red-100 mb-6 leading-relaxed">This fierce wukong cosplay draws inspiration from journey to the west, featuring intricate armor with detailed craftsmanship and symbolic patterns. The red-tinted lighting creates an atmosphere of intensity and power, highlighting the character's commanding presence.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <p className="text-red-200">Hand-crafted metallic gold like embellishments with authentic battle-worn finish</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <p className="text-red-200">Traditional armour making techniques with contemporary styling elements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <p className="text-red-200">Custom hand painted flags showcasing the prime wukong</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">View Gallery</button>
                <button className="border border-red-500 text-red-100 hover:bg-red-800/30 px-4 py-2 rounded">Making Process</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warrior;
