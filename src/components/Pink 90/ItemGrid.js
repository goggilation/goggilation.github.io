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
          link="/detail?big_sur_icons"
          title="Big Sur Icons"
          img="https://cdn.dribbble.com/users/2064310/screenshots/13805408/media/56c2fe3514c004f9cb501a499fc36907.png"
        />
        <Item
          link="/detail?lib_app"
          title="Gothenburg Library App"
          img="src/content/imgs/library_app/front.jpg"
        />
        <Item
          link="/detail?ui_playground"
          title="UI Playground"
          img="https://cdn.dribbble.com/users/2064310/screenshots/6125106/design_process_4x.png?compress=1&resize=1200x900"
        />
      </Grid>
    </>
  );
};

export default ItemGrid;
