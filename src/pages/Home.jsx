import React from "react";

import "./Home.style.scss";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <div className="Home animate__animated ">
      <div>
        <h1>360 HOST</h1>
        <h3>Host your galerie and share it.</h3>
        <hr />
        <LoginButton />
      </div>
      <video autoPlay muted loop>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
