import React, { useState } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import NavHeader from '../components/NavHeader';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '95vh',
    flexDirection: 'column',
    overflow:'fit',
    background: 'transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box',
  },
  div: {
    overflowX:'auto',
    overflowY: 'auto',
  },
}));

const NavMenu = (props) => {

  const classes = useStyles();
  return (
    
            <div className={classes.root}>
                <Grid className={classes.root}>
                    <Grid>
                        <NavHeader />
                    </Grid>
                </Grid>
             </div>

  );
};

export default NavMenu;