import React from "react";

import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Texts from "./components/Texts/Texts";

const App = () => {
  return (
    <div className="bg-green-300 flex flex-col min-h-[100vh]">
      <Header />

      <div className="flex-1">
        <Content />

        <Texts />
      </div>

      <Footer />
    </div>
  );
};

export default App;
