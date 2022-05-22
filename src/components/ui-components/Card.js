import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import {Box, Divider, Grid} from '@material-ui/core';
import { getTheme } from "../theme";

const Card = (props) => {
    const theme = getTheme()[0]
    const [hover, setHover] = useState();

    let hoverOpacity = !hover ? '.7' : '.5';

    const hoverAdaptor = () => {
        setHover(!hover)
    };

    const hoverRgbValue = theme === 'dark' ? '40,40,40' : '232, 232, 232';

    const linearGradient = `linear-gradient(0deg, rgba(${hoverRgbValue}, ${hoverOpacity}), rgba(${hoverRgbValue}, ${hoverOpacity}))`;
  return (
      <Link to={`/work/${props.slug}`}>
      <Grid container onMouseEnter={hoverAdaptor} onMouseLeave={hoverAdaptor} spacing={0} className="cardRoot" style={{
          backgroundImage: `${linearGradient}, url('${props.bg}'`
          }}>
      <Grid item>
            <Box pt={3} pb={3} pl={2} pr={2}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Grid container spacing={1}>
                            <Grid item xs={12}><p className="overline scope">{props.scope}</p></Grid>
                            <Grid item xs={12}><h4>{props.title}</h4></Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12}><Divider/></Grid> */}
                    <Grid item xs={12}><p className="body1">{props.excerpt}</p></Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
    </Link>
  );
};
export default Card;