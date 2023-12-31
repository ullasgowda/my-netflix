import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
