import React from "react";
import "./index.css";
import "./style.css";

/* Components */
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

/* Pages */
import { HomePage } from "./pages";

const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage />
      <Footer/>
    </div>
  );
};

export default App;
