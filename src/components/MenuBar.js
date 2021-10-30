import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BlueBtn from "./BlueBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#FFFFFF",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="#000000"
            aria-label="logo"
          > hello
          <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title} >
            <a href="https://i.pinimg.com/originals/63/eb/50/63eb50a853a03196f66adeab41d48467.jpg" target="_blank"><img src={require("S:/web/BackToCampus/src/components/Images/Logo.svg").default} /></a>
          </Typography>
          <button 
                    style={{
                      border: "1px solid #7ee0ff",
                      fontSize: "15px",
                      color: "white",
                      fontWeight: "lighter",
                      height: "34px",
                      background: "linear-gradient(268.69deg, #7EE0FF 0%, #15AAD9 100%)",
                      boxShadow: "0px 7px 20px rgba(32, 175, 221, 0.35)",
                      padding: "0 25px",
                      borderRadius: "5px",
                    }}><a href="https://github.com/shravan-02/BackToCampus" target="_blank" style={{color:"white", textDecoration:"none"}}>GitHub</a></button>
          {/* <BlueBtn txt={"Github"} href="www.google.co.in">https://github.com/shravan-02/BackToCampus</BlueBtn> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
