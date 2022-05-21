import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import AdminLogin from "./Login/Signup/AdminLogin";
import Login from "./Login/Signup/Login";
import SignUp from "./Login/Signup/SignUp";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "20%",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  btn: {
    marginBottom: "10px",
  },
}));

function Startup() {
  const classes = useStyle();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const handleIsAdmin = () => {
    setIsAdmin(true);
    setIsSeller(false);
  };

  const handleIsSeller = () => {
    setIsAdmin(false);
    setIsSeller(true);
  };

  return (
    <div className={classes.container}>
      <AdminLogin isAdmin={isAdmin} />
      <Login isSeller={isSeller} />

      <Button
        className={classes.btn}
        style={isAdmin || isSeller ? { display: "none" } : { display: "block" }}
        variant="contained"
        onClick={handleIsAdmin}
      >
        LOG IN AS ADMIN
      </Button>

      <Button
        variant="contained"
        style={isAdmin || isSeller ? { display: "none" } : { display: "block" }}
        onClick={handleIsSeller}
      >
        LOG IN AS SELLER
      </Button>
    </div>
  );
}

export default Startup;
