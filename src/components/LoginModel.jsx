import React from "react";
import "./LoginModel.style.scss";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
function LoginModel() {
  return (
    <div className="LoginModel animate__animated animate__fadeInDown">
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<EmailIcon />}
        onClick={() => {
          console.log("Login Gmail");
        }}
      >
        Login with Gmail
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<TwitterIcon />}
        onClick={() => {
          console.log("Login Twitter");
        }}
      >
        Login with Twitter
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<FacebookIcon />}
        onClick={() => {
          console.log("Login Facebook");
        }}
      >
        Login with Facebook
      </Button>
    </div>
  );
}

export default LoginModel;
