
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DataTable() {
  let [data, setData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  useEffect(() => {
      axios
      .get(
        `http://localhost:8080/1805179/ReactServlet.do?page=${pageCount}&limit=10%60`
      )
      .then((response) => {
        setData([...data, ...response.data]);
        isNextFunc(true);
      })
      .catch((error) => {
        console.log(error);
      });
  },[pageCount]);
  function fetchMoreData() {
     setCount(pageCount + 1);
  }
  return (  
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
          <div
            style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          >
            <CircularProgress />
          </div>
        }
      >
      <TableContainer>
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
          {[data].map((row, index) => (
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
      </InfiniteScroll>
  
  );
}
