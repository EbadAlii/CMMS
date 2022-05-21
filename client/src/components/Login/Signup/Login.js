import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import SignUp from "./SignUp";
import Axios from "axios";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

function Login(props) {
  const classes = useStyle();

  const [signUp, isSignUp] = useState(false);
  const setSignUp = () => isSignUp(true);

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    console.log(id, password);
    Axios.post("http://localhost:3001/login", {
      id: id,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) window.alert(response.data.message);
    });
  };

  if (!props.isSeller) return;

  return (
    <div>
      {signUp ? (
        <Typography variant="h3">Sign Up</Typography>
      ) : (
        <Typography variant="h3">Log In</Typography>
      )}
      <SignUp signUp={signUp} />
      <div
        className={classes.container}
        style={signUp ? { display: "none" } : { display: "block" }}
      >
        <TextField
          onChange={(e) => {
            setID(e.target.value);
          }}
          id="outlined-basic"
          label="ID"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <br />
        <br />
        <Button onClick={logIn}>Log In</Button>
        <br />
        <br />
        <Button variant="contained" onClick={setSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Login;
