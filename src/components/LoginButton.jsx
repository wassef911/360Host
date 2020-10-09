import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import LoginModel from "./LoginModel";

function LoginButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        className="animate__animated animate__zoomInUp animate__delay-1s"
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {
          console.log("Login attempted");
          setOpen(true);
        }}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="login"
        aria-describedby="The login modal."
      >
        <LoginModel />
      </Modal>
    </React.Fragment>
  );
}

export default LoginButton;
