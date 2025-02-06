import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import FAQ from "./Pages/FAQ";
import Portfolio from "./Pages/Portfolio";
import BLOG from "./Pages/BLOG";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/Contact.html" element={<Contact />} />
          <Route path="/About.html" element={<About />} />
          <Route path="/Pricing.html" element={<Pricing />} />
          <Route path="/FAQ.html" element={<FAQ />} />
          <Route path="/Portfolio.html" element={<Portfolio />} />
          <Route path="/BLOG.html" element={<BLOG />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
