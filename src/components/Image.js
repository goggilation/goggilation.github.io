import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";

const Image = (props) => {
  return (
    <>
      <Grid item className="item" xs={10} sm={5} m={3} lg={2}>
        <div className="item-img grid detail">
          <img src={props.img} />
        </div>
      </Grid>
    </>
  );
};

export default Image;
