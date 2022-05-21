import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import Axios from "axios";

function SignUp(props) {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/login/register", {
      id: id,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.err) {
        window.alert(response.data.err);
      }
    });
  };

  if (!props.signUp) return;
  return (
    <div>
      <TextField
        onChange={(e) => setID(e.target.value)}
        id="outlined-basic"
        label="ID"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <br />
      <br />
      <Button onClick={register} variant="contained">
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
