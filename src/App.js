import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import Disclaimer from "./components/disclaimer/Disclaimer";

/* Pages */
import {
  HomePage,
  ByChaptersPage,
  ByYearsPage,
  SequentialModePage,
} from "./pages";

const App = () => {
  return (
    <div className="relative">
      <NavBar />
      <span className="mb-[64px] block"></span>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/by-chapters" element={<ByChaptersPage />} />
        <Route exact path="/by-years" element={<ByYearsPage />} />
        <Route exact path="/disclaimer" element={<Disclaimer />} />
        <Route exact path="/s-mode" element={<SequentialModePage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
