import React from "react";
import { useDropzone } from "react-dropzone";
import CloudUpload from "@material-ui/icons/CloudUpload";

import "./DragAndDrop.style.scss";

export default function DragAndDrop() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <CloudUpload className="icon" />
      <p>Drag and Drop files here, or click to select files.</p>
    </div>
  );
}
