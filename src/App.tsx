
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Warrior from "./pages/Warrior";
import WaterBreather from "./pages/WaterBreather";
import Creature from "./pages/Creature";

// Initialize the query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/warrior" element={<Warrior />} />
        <Route path="/water-breather" element={<WaterBreather />} />
        <Route path="/creature" element={<Creature />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
