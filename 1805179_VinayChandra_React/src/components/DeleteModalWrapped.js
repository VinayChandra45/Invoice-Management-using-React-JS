import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, Modal, Grid, TextField, InputLabel, InputBase } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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
    height: '33vh',
    width: '40vw',
    background: '#2A3E4C 0% 0% no-repeat padding-box',
    borderRadius: '6px',
    opacity: 1,
    flexGrow: 1,
    position: 'absolute',
    boxShadow: theme.shadows[5],
    padding:'2vw',
    outline: 'none',
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
  width: '10vw',
  height: '2vh',
  font: 'normal normal normal 12px/15px sans-serif',
  minWidth: '2.7vw',
  minHeight: '1.8vw',
  textAlign: 'left',
  marginRight: '3vw',
  background: '#283A46 0% 0% no-repeat padding-box',
  border: '1px solid #356680',
  borderRadius: '5px',
  display: 'inline',
  inline: 'true',
  opacity: 1,
  display: 'flex',
  float: 'right',
  color: '#FFFFFF',
},
delete: {
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
cancel: {
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

class DeleteModal extends React.Component {
  state = {
    open: false,
  };

  handleDownload = () => {
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Button onClick={this.handleOpen} className={classes.button} startIcon={<RemoveIcon />}>Delete</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.root}>
            <Grid className={classes.title}>Delete record(s)?</Grid>
            <br /><br />
            <Grid container xs={12}>
              <Grid item xs={12}>
                <p className={classes.text}>You'll lose your record(s) after this action. 
                We can't recover them once you delete. 
                <br /><br />Are you sure you want to permanently delete them?</p>
              </Grid>
              <Grid item xs={12}>
                <Button
                    size="medium"
                    className={classes.cancel}
                    onClick={this.handleClose}
                  >Cancel</Button>
                  <Button
                    size="medium"
                    className={classes.delete}
                    onClick={this.handleDownload}
                  >Delete</Button>
              </Grid>
            </Grid>    
          </div>
        </Modal>
      </div>
    );
  }
}

DeleteModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const DeleteModalWrapped = withStyles(styles)(DeleteModal);

export default DeleteModalWrapped;