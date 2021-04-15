
import { React, Fragment } from "react";
import { pxToRem, pxToVh, pxToVw } from '../utils/theme'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  Header: {
    marginTop: pxToRem(10),
    marginLeft: pxToRem(30),
    height: pxToRem(30),
    width: pxToRem(140),
    textAlign: "left",
    font: "normal normal normal 28px/32px Ubuntu",
    letterSpacing: pxToRem(0),
    color: "#FFFFFF",
    opacity: 1,
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: "calc(0.75vh + 0.75vw)",
  },
}));

function GridPanel() {
  const classes = useStyles();

  return (
    <Fragment>
      <p className={classes.Header}>Invoice List</p>
    </Fragment >
  );
}

export default GridPanel;