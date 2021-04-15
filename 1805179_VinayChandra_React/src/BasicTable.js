import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import check_box from './assets';
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });
export default function BasicTable() {
  const [data,setData]= useState([])
  useEffect(() => {
    axios
       .get(`http://localhost:8080/1805179/ReactServlet.do`)
       .then((response) => {
           console.log(response.data);
           setData(response.data);
})
},[])

  return (
    
    <TableContainer component={Paper}>
      <Table>
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
          {data.map((data) => (
            <TableRow key={data.invoice_id}>
              <TableCell component="th" scope="row">
                {data.name_customer}
              </TableCell>
              <TableCell>{data.cust_number}</TableCell>
              <TableCell>{data.invoice_id}</TableCell>
              <TableCell>{data.total_open_amount}</TableCell>
              <TableCell>{data.due_in_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
