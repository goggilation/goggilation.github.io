import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        float: "right",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(2),
    }
}));

const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.text + " footer"}>
        <a href="https://www.youtube.com/watch?v=CwRttSfnfcc"><span className="caption"><span className="footerheart"/> Aleksander Djordjevic 2021</span></a>
    </div>
  );
};
export default Footer;
