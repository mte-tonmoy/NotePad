import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Componets/Header";

const App = () => {
  return (
    <div>
      {/* Header Sections */}
      <Header/>
      {/* Content Sections */}
      <Outlet />
      {/* Footer Sections*/}
    </div>
  );
};

export default App;
