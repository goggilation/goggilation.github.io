import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        float: "right",
        marginTop: theme.spacing(6)
    }
}));

const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.text}>
        <span class="caption">©Aleksander Djordjevic 2020</span>
    </div>
  );
};
export default Footer;
