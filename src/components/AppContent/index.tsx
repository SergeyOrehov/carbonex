import React from "react";

//components
import Header from "../Header";
import Footer from "../Footer";

//styles
import "./styles.scss";

const AppContent = () => {
  return (
    <div className="AppContent">
      <Header />
      <main> main</main>
      <Footer />
    </div>
  );
};

export default AppContent;
