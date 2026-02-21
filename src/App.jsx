import { useState } from "react";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contact from "./components/layouts/Contact";
import About from "./components/layouts/About";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
