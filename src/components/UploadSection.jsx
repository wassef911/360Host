import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import "./UploadSection.scss";
function UploadSection() {
  return (
    <div className="UploadSection">
      <div className="item">
        <TextField label="Name" type="name" variant="outlined" />
      </div>
      <div className="item">
        <TextField label="Name" type="name" variant="outlined" />
      </div>
      <div className="item">
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />{" "}
      </div>
      <div className="item">
        <TextField label="Name" type="name" variant="outlined" />
      </div>
    </div>
  );
}

export default UploadSection;
