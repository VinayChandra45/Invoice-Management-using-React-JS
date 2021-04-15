import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, Modal, Grid, TextField, InputLabel, InputBase } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

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
    padding:'3vw',
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
download: {
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
  float: 'right',
},
});

const CssTextField = withStyles({
  root: {
    color: '#FFFFFF',
    width: '10vw',
    height: '1vh',
    overflow: 'scroll',
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

class CorrModal extends React.Component {
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
        <Button onClick={this.handleOpen} className={classes.button}>View Correspondence</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.root}>
            <Grid className={classes.title}>View Correspondence (2)</Grid>
            <br /><br />
            <Grid container xs={12}>
              <Grid item xs={12}>
                <p className={classes.text}>Customer Name</p>
                <p className={classes.text}>Subject: Invoice Details - Account Name <br /><br /> Dear Sir/Madam, <br />Greetings!  <br /><br />
                This is to remind you that there are one or more open invoices on your account. 
                Please provide at your earliest convenience an update on the payment details 
                or clarify the reason for the delay. If you have any specific issue with the invoice(s), 
                please let us know so that we can address it to the correct Department. <br /><br />
                Please find the details of the invoices below:<br /></p>
              </Grid>
              <Grid container xs={12}>
              <p className={classes.text}>Total Amount to be Paid: $124.00K 
              <br /> In case you have already made a payment for the above items,
               please send us the details to ensure the payment is posted. <br />
               Let us know if we can be of any further assistance.
                Looking forward to hearing from you.<br /><br /> 
                 Kind Regards,<br /> <br /> 
                 [Sender’s First Name][Sender’s Last Name]
                 <br />Phone : [Sender’s contact number]
                 <br />Fax : [If any]
                 <br />Email : [Sender’s Email Address]
                 <br />Company Name[Sender’s Company Name]<br /></p>
              </Grid>
              <Grid item xs={12}>
                <Button
                    size="medium"
                    className={classes.close}
                    onClick={this.handleClose}
                  >Close</Button>
                  <Button
                    size="medium"
                    className={classes.download}
                    onClick={this.handleDownload}
                  >Download</Button>
              </Grid>
            </Grid>    
          </div>
        </Modal>
      </div>
    );
  }
}

CorrModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CorrModalWrapped = withStyles(styles)(CorrModal);

export default CorrModalWrapped;