import "./App.css";
import NavBar from "./Components/navbar";
import Content from "./Components/content";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar /> <Content />
    </React.Fragment>
  );
}

export default App;
