import React, { useState } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { makeStyles, Table } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import { Typography } from '@material-ui/core';
import { InputAdornment } from "@material-ui/core";
import {ReactComponent as SearchLogo} from '../assets/search-24px (3).svg';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import Searching from './Searching';
import EditIcon from "@material-ui/icons/Remove";
import AddModal from '../components/AddModalWrapped';
import CorrModal from '../components/CorrModelWrapped';
import DeleteModal from '../components/DeleteModalWrapped';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  predict: {
    top: '50px',
    left: '20px',
    width: 'fit-content',
    height: '22px',
    font: 'normal normal normal 12px/15px sans-serif',
    minWidth: '5vw',
    minHeight: '2.188vw',
    marginRight: '0.5rem',
    marginTop: '-0.1vh',
    float: 'left',
    alignSelf: 'center',
    color: '#FFFFFF',
    backgroundColor: '#14AFF1'
},
  button_l: {
    top: '50px',
    left: '20px',
    right: '50px',
    width: 'fit-content',
    height: '12px',
    font: 'normal normal normal 12px/15px sans-serif',
    minWidth: '5vw',
    minHeight: '2.188vw',
    border: 'solid 0.75px #3B617C',
    marginRight: '0.5vh',
    marginTop: '0.1vh',
    alignSelf: 'center',
    color: '#5DAAE0',
    float:'left',
    inline:'true',
},
button_r: {
    top: '0px',
    right: '25vw',
    width: 'fit-content',
    height: '12px',
    font: 'normal normal normal 12px/15px sans-serif',
    minWidth: '5vw',
    minHeight: '2.188vw',
    border: 'solid 0.75px #3B617C',
    marginRight: '0.5rem',
    marginTop: '0vh',
    alignSelf: 'center',
    color: '#5DAAE0',
    inline:'true',
},
button_e: {
  top: '50px',
  right: '25vw',
  width: 'fit-content',
  height: '12px',
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '5vw',
  minHeight: '2.188vw',
  border: 'solid 0.75px #3B617C',
  marginRight: '0.5rem',
  marginTop: '0vh',
  alignSelf: 'center',
  color: '#5DAAE0',
  inline:'true',
},
}));


const Buttons = (props) => {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);

  const handleSearch = (e) => {
  };

  const handlePredict = (e) => {
  };

  const handleCorrespondence = (e) => {
  };

  const handleAdd = (e) => {
    <AddModal />
  };
  const
   handleEdit = (e) => {
  };

  const handleDelete = (e) => {
  };


  const classes = useStyles();
  return (
            <div>
                <Button       //using button 
                  size="medium"
                  className={classes.predict}
                  onClick={handlePredict}
                >Predict</Button>
                <CorrModal  className={classes.button_l} /> 
                {/*using modal to open a dialog on clicking button  */}
            <div style={{float:'right'}}> 
                <AddModal  className={classes.button_r} />
                <Button
                  size="medium"
                  className={classes.button_e}
                  onClick={handleEdit}
                  disabled
                  startIcon={<EditIcon />}
                >Edit</Button>
                <Button
                  size="medium"
                  className={classes.button_r}
                  onClick={handleDelete}
                  
                ><DeleteModal /></Button>
                  
                
                <TextField
          size="small"
          label="Search by Invoice Number"
          id="outlined-full-width"
          variant="outlined"
          marginRight="0.5vw"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon style={{ color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{
            borderRadius: "10px",
            margin: "15px 15px 15px 15px",
          }}
        />
                
            </div>
        </div>
  );
};

export default Buttons;