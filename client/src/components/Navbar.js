import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "13%",
    justifyContent: "space-between",
  },

  logoLg: {},
}));
function Navbar(props) {
  const classes = useStyle();
  const [isAdmin, setIsAdmin] = useState(true);

  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const adminHandle = () => {
    return (
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
        <Tab label="Home" />
        <Tab label="Plots Info" />
        <Tab label="Blocks Info" />
        <Tab label="Requests" />
        <Button>Log Out</Button>
      </Tabs>
    );
  };
  const sellerHandle = () => {
    return (
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
        <Tab label="Home" />
        <Tab label="Plots Info" />
        <Tab label="Cattles Info" />
        <Tab label="Business" />
        <Button>Log Out</Button>
      </Tabs>
    );
  };
  if (!props.isLoggedIn) return;
  return (
    <AppBar>
      <Toolbar className={classes.container}>
        <Typography className={classes.logoLg}>Cow Mandi</Typography>
        {isAdmin ? adminHandle() : sellerHandle()}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
