import React, { useState, useRef } from "react";
import Navigation from "./Navigation";
import Confetti from "./ConfettiPuzzle";
import { Grid } from "@material-ui/core";
import TextBlock from "./TextBlock";
import ItemGrid from "./ItemGrid";
import ContentStructure from "./DetailContent";
import ImageGrid from "./ImageGrid";

const getCurrentPage = () => {
  let url = window.location.href.toString();
  let startIndex = url.indexOf("?");
  let page = "";

  for (var i = startIndex + 1; i < url.length; i++) {
    page += url[i];
  }
  return page;
};

const DetailPage = () => {
  console.log(ContentStructure);
  document.body.classList.add("single");
  return (
    <>
      <div>
        <Navigation
          logo={false}
          title={ContentStructure[getCurrentPage()].Title}
        />
        <TextBlock
          justify="center"
          textType="large-paragraph centered"
          text={ContentStructure[getCurrentPage()].Description}
        />
        <ImageGrid
          justify="center"
          spacing={4}
          imgs={ContentStructure[getCurrentPage()].imgs}
        />
      </div>
    </>
  );
};

export default DetailPage;
