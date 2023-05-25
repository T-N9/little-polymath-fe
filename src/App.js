import React from "react";
import "./index.css";

import { fetchQuizItems } from "./contentful";

const App = () => {
  fetchQuizItems();
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Hello World!</h1>
      <button class="btn w-64 rounded-full">Button</button>
    </div>
  );
};

export default App;
