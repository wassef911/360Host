import React from "react";
import { Pannellum } from "pannellum-react";
import image from "../360images/img2.jpg";

function Panorama(props) {
  return (
    <div className="panorama">
      <Pannellum
        width="100%"
        height="500px"
        image={image}
        pitch={10}
        yaw={180}
        hfov={110}
        author="wassef"
        title="city streets view"
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="github link"
          URL="https://github.com/wassef911"
        />
      </Pannellum>
    </div>
  );
}

export default Panorama;
