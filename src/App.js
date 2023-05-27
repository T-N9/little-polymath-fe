import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

/* Pages */
import { HomePage, ByChaptersPage, ByYearsPage } from "./pages";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/by-chapters" element={<ByChaptersPage />} />
        <Route exact path="/by-years" element={<ByYearsPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
