import React from "react";
import NavBar from "../src/components/navbar";
//import logo from './logo.svg';
import CompParent from "./components/compParent";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <CompParent />
      </main>
    </React.Fragment>
  );
}
export default App;
