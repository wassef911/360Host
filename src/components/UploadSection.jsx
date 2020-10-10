import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "./UploadSection.scss";
import DragAndDrop from "./DragAndDrop";

function UploadSection() {
  return (
    <div className="UploadSection">
      <div className="item">
        <TextField
          className="margin"
          label="Name"
          type="name"
          variant="outlined"
        />
        <TextField
          className="margin"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <div className="item">
        <DragAndDrop />
      </div>
    </div>
  );
}

export default UploadSection;
