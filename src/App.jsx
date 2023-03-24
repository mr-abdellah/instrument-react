import React from "react";

import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Pages />
      </div>
    </BrowserRouter>
  );
}
