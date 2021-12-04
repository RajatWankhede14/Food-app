import React from "react";
import TopNavbar from "../Components/TopNavbar";
import ServicesNav from "../Components/ServicesNav";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <header>
        <TopNavbar />
        <ServicesNav />
      </header>
    </div>
  );
}

export default HomeScreen;
