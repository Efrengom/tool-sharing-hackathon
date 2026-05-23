import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
