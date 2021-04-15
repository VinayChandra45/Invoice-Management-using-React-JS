import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export default function NewTable(){
const [data,setData] =  useState([])
useEffect(() => {
             axios
                .get("https://picsum.photos/v2/list?page=%7Bpage-number%7D&limit=%7Bcount%7D")
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
        })
    },[])
    return(
        <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow> 
              <TableCell>{data.id}</TableCell>
              <TableCell >{data.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}