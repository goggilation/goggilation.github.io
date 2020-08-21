import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "./Image";

const ImageGrid = (props) => {
  return (
    <>
      <Grid
        className="item-grid"
        container
        justify={props.justify}
        spacing={props.spacing}
        direction={props.direction}
        alignItems={props.alignItems}
      >
        {Object.keys(props.imgs).map((img, index) => {
          return <Image key={index} img={props.imgs[img]} />;
        })}
      </Grid>
    </>
  );
};

export default ImageGrid;
