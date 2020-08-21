import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";

const ItemGrid = (props) => {
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
        <Item
          link="/detail?lib_app"
          title="Mobile Application"
          img="../src/content/imgs/fixed/placeholder.png"
        />
        <Item
          link="/detail?mobile_app2"
          title="Mobile Application"
          img="../src/content/imgs/fixed/placeholder.png"
        />
        <Item
          link="/detail?mobile_app3"
          title="Mobile Application"
          img="../src/content/imgs/fixed/placeholder.png"
        />
        <Item
          link="/detail?mobile_app4"
          title="Mobile Application"
          img="../src/content/imgs/fixed/placeholder.png"
        />
      </Grid>
    </>
  );
};

export default ItemGrid;
