import React from "react";
import Panorama from "./Panorama";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Panorama />
    </div>
  );
}

export default App;
