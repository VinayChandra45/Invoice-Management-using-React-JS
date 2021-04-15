import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, Modal, Grid, TextField, InputLabel, InputBase } from '@material-ui/core';
// import history from '../history';
import { green } from '@material-ui/core/colors';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  root: {
    height: '50vh',
    width: '60vw',
    background: '#2A3E4C 0% 0% no-repeat padding-box',
    borderRadius: '6px',
    opacity: 1,
    flexGrow: 1,
    position: 'absolute',
    boxShadow: theme.shadows[5],
    outline: 'none',
    overflow: 'scroll',
  },
  title: {
    textalign: 'left',
    width: '30vw',
    font: 'normal normal normal 18px/20px Ubuntu',
    justifyContent: "flex-start",
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: '5vh',
    textTransform: 'capitalize',
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'left',
    font: 'normal normal normal 14px/16px Ubuntu',
    opacity: 0.5,
    color: '#FFFFFF'
  },
  button: {
    top: '50px',
    left: '20px',
    right: '50px',
    width: 'fit-content',
    height: '12px',
    font: 'normal normal normal 12px/15px sans-serif',
    minWidth: '5vw',
    minHeight: '2.188vw',
    border: 'solid 0.75px #3B617C',
    marginRight: '0.5rem',
    marginTop: '0.1vh',
    alignSelf: 'center',
    color: '#5DAAE0',
    float:'left',
    inline:'true',
},
reqd: {
    textAlign: 'left',
    font: 'normal normal normal 14px/16px Ubuntu',
    opacity: 0.5,
    color: '#DC143C',
},
textarea: {
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '2.7vw',
  minHeight: '1.8vw',
  textAlign: 'left',
  marginRight: '3vw',
  background: '#283A46 0% 0% no-repeat padding-box',
  border: '1px solid #356680',
  borderRadius: '5px',
  display: 'inline',
  flexDirection: 'row',
  opacity: 0.8,
  float: 'left',
  color: '#FFFFFF',
},
add: {
  top: '50px',
  left: '20px',
  width: 'fit-content',
  height: '22px',
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '5vw',
  minHeight: '2.188vw',
  marginRight: '2vw',
  float: 'right',
  alignSelf: 'center',
  color: '#FFFFFF',
  backgroundColor: '#14AFF1'
},
close: {
  width: 'fit-content',
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '5vw',
  minHeight: '2.188vw',
  border: 'solid 0.75px #3B617C',
  marginRight: '0.5rem',
  marginTop: '7vh',
  alignSelf: 'center',
  color: '#5DAAE0',
  inline:'true',
  float: 'left',
},
clear: {
  width: 'fit-content',
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '5vw',
  minHeight: '2.188vw',
  border: 'solid 0.75px #3B617C',
  marginRight: '0.5rem',
  marginTop: '7vh',
  alignSelf: 'center',
  color: '#5DAAE0',
  inline:'true',
  float: 'right',
},
});

const CssTextField = withStyles({
  root: {
    color: '#FFFFFF',
    width: '10vw',
    height: '1vh',
    font: 'normal normal normal 12px/15px sans-serif',
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

class AddModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClear = () => {
    
  };

  handleAdd = () => {
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} className={classes.button} startIcon={<AddIcon />}>Add</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.root}>
            <Grid className={classes.title}>Add Invoice</Grid>
            <br /><br />
            <Grid container xs={12}>
              <Grid item xs={6}>
                <p className={classes.text}>Customer Name * 
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-4vh', marginLeft:'9vw'}}
                /></p>
                <p className={classes.text}>Customer No. *
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-1.5vh', marginLeft:'2.7vw'}}
                /></p>
                <p className={classes.text}>Invoice No. *
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-1.5vh', marginLeft:'3.7vw'}}
                /></p>
                <p className={classes.text}>Invoice Amount. *
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-1.5vh', marginLeft:'1.5vw'}}
                /></p>
              </Grid>
              <Grid item xs={6}>
                <p className={classes.text}>Due Date *
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-1.5vh', marginLeft:'3.7vw'}}
                /></p>
                <p className={classes.text}>Notes
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows="6"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  style={{marginTop:'-1.5vh', marginLeft:'5.7vw', width:'13.7vw'}}
                /></p>
              </Grid>
            </Grid>
            <Grid>
                  <Button
                    size="medium"
                    className={classes.close}
                    onClick={this.handleClose}
                  >Cancel</Button>
                  <Button
                    size="medium"
                    className={classes.add}
                    onClick={this.handleAdd}
                  >Add</Button>
                  <Button
                    size="medium"
                    className={classes.clear}
                    onClick={this.handleClear}
                  >Clear</Button>
                  </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

AddModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AddModalWrapped = withStyles(styles)(AddModal);

export default AddModalWrapped;