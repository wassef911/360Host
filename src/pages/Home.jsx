import React from "react";
import Button from "@material-ui/core/Button";

import "./Home.style.scss";

function Home() {
  return (
    <div className="Home">
      <div>
        <h1>360 HOST</h1>
        <h3>Host your galerie and share it.</h3>
        <hr />
        <Button variant="outlined" size="large" color="primary">
          Login
        </Button>
      </div>
      <video autoPlay muted loop>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
