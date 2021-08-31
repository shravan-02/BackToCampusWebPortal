import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import BlueBtn from "./BlueBtn";

import Image from "../../src/bg.png"
const BoxStyle = makeStyles({
  root: {
    display: "flex",
    // gridTemplateColumns:"1fr 1fr",
    // position: "absolute",
    width: "876px",
    height: "449px",
    left: "300px",
    // paddingLeft: "500px;",
    // top: "145px",

    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(130, 130, 130, 0.45)",
    borderRadius: "10px",
  },
  grid: {
    display: "flex",
    flexGrow: "1",
    spacing: "3",
    padding:"0 225px",
    direction: "column",
    alignItems: "center",
    justify: "center",
    minHeight: "92vh",

  },
  centerImage: {
    paddingLeft: "-50px",
    maxHeight:"550px",
  }

  // Btn: {

  // }
});


export default function CenterBox() {
  const classes = BoxStyle();
  return (
    <Grid container className={classes.grid}>
      <Grid lg={6}>
        {/* <img className={classes.centerImage} src={Image} alt="background" /> */}
        <Card className={classes.root}> 

        <BlueBtn className={classes.Btn} txt={"Submit Form"}></BlueBtn>
        </Card>
        
      </Grid>
    </Grid>
  );
}
