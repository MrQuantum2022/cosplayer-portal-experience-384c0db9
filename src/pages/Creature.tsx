
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { ParticleEffect } from "@/components/ParticleEffect";

const Creature = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-green-950 text-white">
      {/* Textured background */}
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/134ff52d-4fb3-4954-9bff-399a8141faa3.png')] bg-cover bg-center opacity-5" />

      {/* Green particle effects */}
      <ParticleEffect color="rgba(16, 185, 129, 0.6)" count={25} />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Back button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/")}
        className={cn(
          "fixed top-4 left-4 z-50 rounded-full w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20",
          "hover:bg-white/20 active:scale-95 transition-all"
        )}
        aria-label="Back to portal"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Back to portal</span>
      </Button>

      {/* Eerie light effects */}
      <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-red-500/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-red-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image section */}
          <div 
            className={cn(
              "w-full lg:w-1/2 transition-all duration-1000",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-emerald-500 blur-xl opacity-30 rounded-xl animate-pulse" />
              <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/50">
                <img
                  src="/lovable-uploads/064364bd-a24d-4abf-8223-cc11c7c8eb4a.png"
                  alt="Creature Cosplay"
                  className="w-full h-auto object-cover aspect-[3/4] transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-600/30 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-700/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Text content */}
          <div 
            className={cn(
              "w-full lg:w-1/2 transition-all duration-1000",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="glass-panel rounded-xl p-8 backdrop-blur-md bg-green-950/30 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Ghost className="h-6 w-6 text-emerald-400" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent">
                  Ethereal Creature
                </h1>
              </div>
              
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 mb-6" />
              
              <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
                This haunting creature cosplay pushes the boundaries of transformation with its otherworldly design and glowing red eyes. The teal robe creates an ethereal silhouette, while the intricate mask showcases exceptional prop-making skills and attention to detail.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <p className="text-emerald-200">Custom-crafted mask with built-in LED lighting effects</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <p className="text-emerald-200">Layered fabric techniques for the flowing supernatural appearance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <p className="text-emerald-200">Atmospheric staging and specialized photography methods</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">View Gallery</Button>
                <Button variant="outline" className="border-emerald-500 text-emerald-100 hover:bg-green-800/30">Making Process</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creature;
