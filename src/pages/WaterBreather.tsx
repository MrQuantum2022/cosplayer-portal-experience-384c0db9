import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { ParticleEffect } from "@/components/ParticleEffect";
const WaterBreather = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-950 text-white">
      {/* Water-like background */}
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/cd0c72d4-8a0a-4ab0-b0ae-41cfb317bde5.png')] bg-cover bg-center opacity-10" />

      {/* Blue particle effects */}
      <ParticleEffect color="rgba(56, 189, 248, 0.6)" count={35} />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Back button */}
      <Button variant="ghost" size="icon" onClick={() => navigate("/")} className={cn("fixed top-4 left-4 z-50 rounded-full w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20", "hover:bg-white/20 active:scale-95 transition-all")} aria-label="Back to portal">
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Back to portal</span>
      </Button>

      {/* Ripple effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 ripple-effect" style={{
      animationDelay: "0s"
    }} />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 ripple-effect" style={{
      animationDelay: "1s"
    }} />
      <div className="absolute top-2/3 left-1/2 w-32 h-32 ripple-effect" style={{
      animationDelay: "2s"
    }} />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image section */}
          <div className={cn("w-full lg:w-1/2 transition-all duration-1000", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20")}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-cyan-500 blur-xl opacity-30 rounded-xl animate-pulse" />
              <div className="relative overflow-hidden rounded-xl border-2 border-cyan-500/50">
                <img src="/lovable-uploads/a077f559-77fa-46dc-bf68-243b7b7b87f1.png" alt="Water Breather Cosplay" className="w-full h-auto object-cover aspect-[3/4] transform hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Decorative water elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Text content */}
          <div className={cn("w-full lg:w-1/2 transition-all duration-1000", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20")}>
            <div className="glass-panel rounded-xl p-8 backdrop-blur-md bg-blue-950/30 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-6 w-6 text-cyan-400" />
                <h1 className="font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent text-3xl">Water Breather Tanjiro</h1>
              </div>
              
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-300 mb-6" />
              
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                This elegant water-inspired cosplay combines traditional elements with flowing, dynamic patterns that evoke waves and water. The turquoise and black color scheme creates a harmonious balance, while the graphic water elements add a magical dimension to the design.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-blue-200">Handmade Patterned fabrics with wave-like designs and geometric elements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-blue-200">Cloth projection techniques for the water effects</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-blue-200">Hand-painted detailing on costume accessories and handmade sword with popsicles</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700">View Gallery</Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-100 hover:bg-blue-800/30">Making Process</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WaterBreather;