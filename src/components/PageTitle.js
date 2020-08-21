import React, { useState, useRef } from "react";

const PageTitle = (props) => {
  return (
    <>
      <h5 className="centered">{props.title}</h5>
    </>
  );
};

export default PageTitle;
