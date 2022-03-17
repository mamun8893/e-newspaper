import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./common/Main";

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Header */}
      <div className="header-warper">
        <Header />
      </div>
      {/* Main  */}
      <Main />
      {/* Footer */}
      <div className="footer-warper">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
