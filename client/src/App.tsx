import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResponsibleNavbar from "./components/ResponsibleNavbar";
import SocialNetworkBar from "./components/SocialNetworkBar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyle />
      <SocialNetworkBar />
      <Navbar />
      <ResponsibleNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
