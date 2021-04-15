import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    maxHeight: 400
  }
});

export default function InceptionTable({ responseData, scrollabeTarget }) {
  // const rows = populate(responseData);
  const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      className={classes.container}
      id="scrollableDiv"
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <TableCell>Customer Name</TableCell>
            <TableCell>Customer#</TableCell>
            <TableCell>Invoice#</TableCell>
            <TableCell>Invoice Amount</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[responseData].map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {[row].name_customer}
              </TableCell>
              <TableCell>{[row].cust_number}</TableCell>
              <TableCell>{[row].invoice_id}</TableCell>
              <TableCell>{[row].total_open_amount}</TableCell>
              <TableCell>{[row].due_in_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
