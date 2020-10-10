import React from "react";
import { useDropzone } from "react-dropzone";
import CloudUpload from "@material-ui/icons/CloudUpload";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./DragAndDrop.style.scss";

export default function DragAndDrop() {
  const [Progress, setProgress] = React.useState(0);
  const onDrop = React.useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onprogress = (data) => {
        if (data.lengthComputable) {
          let progress = parseInt((data.loaded / data.total) * 100, 10);
          setProgress(progress);
        }
      };

      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(file.name, binaryStr);
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <CloudUpload className="icon" />
      <p>Drag and Drop files here, or click to select files.</p>
      {100 !== Progress && Progress > 0 ? (
        <div>
          <LinearProgress value={Progress} />
          <span>{Progress}</span>
        </div>
      ) : null}
    </div>
  );
}
