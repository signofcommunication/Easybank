import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Logo from "../../images/logo.svg";
import styles from "./style.module.css";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit" className={styles.box}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" />
          </Typography>
          <Button color="inherit" className={styles.request}>
            Request Invite
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
// main -> responsive
