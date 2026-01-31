import { useState } from "react";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contact from "./components/layouts/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
