import React from "react";
import { pxToVh } from "../utils/theme";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const StyledButton = withStyles({
  root: {
    letterSpacing: "0px",
    margin: "15px 15px 15px 15px",
    borderRadius: 3,
    border: " 1px solid white",
    color: "primary",
  },
})(Button);

const DashboardBody = () => {
  return (
    <div>
      <div
        style={{
          background: "#273D49CC 0% 0% no-repeat padding-box",
          borderRadius: pxToVh(10),
        }}
      >
        <StyledButton variant="outlined" color="primary">Predict</StyledButton>
        <StyledButton variant="outlined">View Correspondence</StyledButton>
        <StyledButton variant="outlined" startIcon={<AddIcon />}>
          Add
        </StyledButton>
        <StyledButton variant="outlined" startIcon={<EditIcon />}>
          Edit
        </StyledButton>
        <StyledButton variant="outlined" startIcon={<RemoveIcon />}>
          Delete
        </StyledButton>
        <TextField
          size="small"
          label="Search by Invoice Number"
          id="outlined-full-width"
          variant="outlined"
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

export default DashboardBody;
