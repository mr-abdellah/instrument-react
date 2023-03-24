import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}
