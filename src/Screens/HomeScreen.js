import React from "react";
import TopNavbar from "../Components/TopNavbar";
import ServicesNav from "../Components/ServicesNav";
import BottomNavBar from "../Components/BottomNavBar";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <header>
        <TopNavbar />
        <ServicesNav />
        <BottomNavBar />
      </header>
    </div>
  );
}

export default HomeScreen;
