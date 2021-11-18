import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import City from "./components/City";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
