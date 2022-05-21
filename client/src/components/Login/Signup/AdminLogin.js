import { Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import Axios from "axios";
function AdminLogin(props) {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(id, password);
    Axios.post("http://localhost:3001/login/admin", {
      id: id,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) window.alert(response.data.message);
    });
  };

  if (!props.isAdmin) return;

  return (
    <div>
      <Typography variant="h3">LOG In As Admin</Typography>
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
      <Button onClick={login} variant="contained">
        Log in admin
      </Button>
    </div>
  );
}

export default AdminLogin;
