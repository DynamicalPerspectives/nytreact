// Include React dependencies
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SearchList from "./components/SearchList";
import Result from "./components/Result";
import Saved from "./components/Saved";

// Include the main Parent component


// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(
  <div>
    <Header primaryTitle="New York Times Article Finder" primarySub="Using React JS"   />
    <SearchList headerName="Search" />
  </div>
    , document.getElementById("app"));

    // <div>
    //   <Header primaryTitle="New York Times Article Finder" primarySub="Using React JS"   />
    //   <SearchList headerName="Search" />
    // </div>
    //   , document.getElementById("app"));
