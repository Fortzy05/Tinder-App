import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<TinderCards />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
