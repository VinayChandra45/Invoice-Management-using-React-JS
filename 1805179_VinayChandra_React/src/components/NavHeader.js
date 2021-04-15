import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import theme, { pxToRem, pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Header from '../components/Header';
import { makeStyles, Table, InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import {ReactComponent as CheckBlank} from '../assets/check_box_outline_blank.svg';
import {ReactComponent as CheckBlue} from '../assets/check_box-black-18dp.svg';
import {ReactComponent as Calendar} from '../assets/calendar_today-24px.svg';
// import history from './../history';
import {ReactComponent as CompanyLogo} from '../assets/companyLogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'row',
  },
heading: {
    textalign: 'left',
    font: 'normal normal bold 22px/28px Ubuntu',
    color: '#14AFF1',
    opacity: 1,
    marginLeft: '5vw',
    marginTop: '12vh',
    
},
button_l: {
    textalign: 'left',
    width: '25vw',
    font: 'normal normal normal 14px/20px Ubuntu',
    justifyContent: "flex-start",
    color: '#FFFFFF',
    opacity: 0.8,
    marginLeft: '5vw',
    marginBottom: '3vh',
    textTransform: 'capitalize',
    float: 'left',
    inline: 'false',
    display: 'flex',
    flexDirection: 'row',
    marginRight: '0px',
},
button_r: {
    textalign: 'left',
    width: '30vw',
    font: 'normal normal normal 14px/20px Ubuntu',
    justifyContent: "flex-start",
    color: '#FFFFFF',
    opacity: 0.8,
    marginLeft: '5vw',
    marginBottom: '3vh',
    marginTop: '0px',
    textTransform: 'capitalize',
    float: 'right',
    inline: 'false',
    display: 'flex',
    flexDirection: 'row',
},
sub: {
  textalign: 'left',
  width: '30vw',
  font: 'normal normal normal 14px/20px Ubuntu',
  justifyContent: "flex-start",
  color: '#FFFFFF',
  opacity: 0.8,
  marginTop: '-2.5vh',
  marginBottom: '5vh',
  marginLeft: '5vw',
  textTransform: 'capitalize',
  float: 'left',
  display: 'flex',
  flexDirection: 'row',
},
assets: {
    textAlign: 'left',
    font: 'normal normal normal 14px/16px Ubuntu',
    color: '#97A1A9',
    float:'right',
    opacity: 1,
    marginRight: '2vw',
},
icon: {
    float:'right',
    opacity: 0.7,
    height: '2vh',
    width: '2vw',
    inline: 'true',
}
}));

function NavHeader(props) {

  const classes = useStyles();
    
  const handleLanding = (e) => {
    history.push('/LandingPage');
};

const handleRowSelect = (e) => {
  history.push('/LandingPage');
};

const handleEditBill = (e) => {
  history.push('/LandingPage');
};

const handleViewCorr = (e) => {
  history.push('/LandingPage');
};

const handleInfScroll = (e) => {
  history.push('/LandingPage');
};

const handleAddBill = (e) => {
  history.push('/LandingPage');
};

const handleDeleteWarning = (e) => {
  history.push('/LandingPage');
};

const handleSearchHighlight = (e) => {
  history.push('/LandingPage');
};

const handleEmptyDS = (e) => {
  history.push('/LandingPage');
};

const handleMandatoryAdd = (e) => {
  history.push('/LandingPage');
};

const handleAddMandatoryAddAlert = (e) => {
  history.push('/LandingPage');
};

  return (
        <div className={classes.root}>
        <Grid>
          <Header /></Grid>
        <br />
        <Grid className={classes.assets}>
            <p className={classes.assets}>Other Assets</p>
            <Grid style={{marginRight: '1.6vw'}}>
            <Calendar className={classes.icon} />
            <CheckBlank className={classes.icon} />
            <CheckBlue className={classes.icon} />
        </Grid></Grid>
            <p className={classes.heading}>UX SCENARIOS</p>
            <p className={classes.sub}>Click 'ABC Products' logo/backdrop to return</p>
        <Grid container xs={12}>
            <Grid item xs={4}>
                <Button size="small" 
                className={classes.button_l} 
                onClick={handleLanding}>
                Landing Page</Button>
                <Button size="small" 
                className={classes.button_l} 
                onClick={handleRowSelect}>
                Rows Selected (Assets)</Button>
                <Button size="small" 
                className={classes.button_l} 
                onClick={handleEditBill}>
                Edit Bill</Button>
                <Button size="small" 
                className={classes.button_l} 
                onClick={handleViewCorr}>
                View Correspondence/Multiple Template Support</Button>
                <Button size="small" 
                className={classes.button_l} 
                onClick={handleInfScroll}>
                Infinite Scroll in Grid/Loader</Button>
            </Grid>
             <Grid item xs={4}>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleAddBill}>
                Add Bill/Calendar Picker</Button>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleDeleteWarning}>
                Confirmation Pop-up: Delete Warning</Button>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleSearchHighlight}>
                Invoice Search Highlight in Grid</Button>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleEmptyDS}>
                Data Table Empty State (Assets)</Button>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleMandatoryAdd}>
                Add Bill Mandatory fields v1: ADD btn DISABLED</Button>
                <Button size="small" 
                className={classes.button_r} 
                onClick={handleAddMandatoryAddAlert}>
                Add Invoice Mandatory fields v2: ALERT NOTIFICATION (Assets)</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default NavHeader;