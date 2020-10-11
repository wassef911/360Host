import React from "react";
import Showcase from "../components/Showcase";

import UploadSection from "../components/UploadSection";

import "./Galerie.style.scss";

function Galerie() {
  return (
    <div className="Galerie">
      <UploadSection />
      <Showcase/>
    </div>
  );
}

export default Galerie;
