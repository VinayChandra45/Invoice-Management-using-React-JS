import React, { useState } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import Tables from '../components/Tables';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Searching from '../components/Searching';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';


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

const LandingPage = (props) => {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetStarted = (e) => {
    
  };

  const classes = useStyles();
  return (
    
            <div className={classes.root}>
                <Grid className={classes.root}>
                    <Header />
                    <p
        style={{
          marginLeft: pxToVh(30),
          font: "normal normal normal pxToVh(28/32) Poppins",
          color: "#FFFFFF",
        }}
      >
        Invoice List
      </p>
                    <Grid>
                        <Tables />
                    </Grid>
                </Grid>
                <Footer />
             </div>

  );
};

export default LandingPage;