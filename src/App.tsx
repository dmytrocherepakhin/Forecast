import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/home/Home";
import City from "./components/city/City";

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
