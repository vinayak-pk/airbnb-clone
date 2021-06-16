import "./App.css";
import React, { useState } from "react";
// import { HomePage } from "./Components/HomePage/MainFolder/HomePage";
import Router from "./Routes/Router"
// import SearchDate from "./Components/HomePage/DateSearch/SearchDate";
// import LocationSearch from "./Components/HomePage/Navbar/LocationSearch";

function App() {
  return (
    <div className="App">
     <Router/>
      {/* <SearchDate /> */}
      {/* <LocationSearch /> */}
    </div>
  );
}

export default App;
