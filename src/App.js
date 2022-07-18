import React from "react";
import Footer from "./components/FooterComponent";
import Portfolio from "./components/Portfolio";
import Background from "./components/BackgroundComponent";
import Announcements from "./components/AnnouncementsComponent";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Background />
        <Portfolio />
        <Announcements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
