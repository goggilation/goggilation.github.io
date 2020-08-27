import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";

const Image = (props) => {
  return (
    <>
      <Grid item className="item" xs={11} sm={5} m={6} lg={6}>
        <div className="item-img grid detail">
          <img src={props.img} />
        </div>
      </Grid>
    </>
  );
};

export default Image;
