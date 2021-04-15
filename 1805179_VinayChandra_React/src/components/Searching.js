import React, { useState } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { makeStyles, Table } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import { Typography } from '@material-ui/core';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  search: {
    left: '15px',
    width: '2.5vw',
    height: '2vw',
    font: 'normal normal normal 12px/15px sans-serif',
    minWidth: '2.7vw',
    minHeight: '1.8vw',
    marginRight: '1vw',
    textAlign: 'left',
    paddingLeft: '20vw',
    marginTop: '2.3vh',
    background: '#283A46 0% 0% no-repeat padding-box',
    border: '1px solid #356680',
    borderRadius: '5px',
    display: 'inline',
    float: 'right',
    opacity: 1,

  },
}));

const Searching = ({keyword,setKeyword}) => {

    const handleSearch = (e) => {
    };
  
  const classes = useStyles();
  return (
        <div className={classes.root} class="col-sm-12">
            <input 
                className={classes.search}
                key="doc_id"
                value={keyword}
                placeholder={"Search"}
                onChange={(e) => setKeyword(e.doc_id)}
            />
        </div>
  );
};

export default Searching;