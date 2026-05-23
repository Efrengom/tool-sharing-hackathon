import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import {
  Header,
  Footer,
  Home,
  Library,
  Journal,
  Casting,
  Calendar,
  Translate,
  About,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* GLOBAL LAYOUT CONTAINER
        Uses a Flex-Column 'Sticky Footer' pattern to ensure the main viewport 
        expands to fill the screen regardless of content height.
      */}
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        {/* PRIMARY CONTENT VIEWPORT 
          The 'grow' property ensures this container occupies all available vertical space.
        */}
        <main className="grow flex flex-col">
          <Routes>
            {/* Index & Home Redundancy for SEO/Navigation reliability */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* System Pillar Routes */}
            <Route path="/journal" element={<Journal />} />
            <Route path="/library" element={<Library />} />
            <Route path="/casting" element={<Casting />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
