import * as React from 'react';
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align='right'>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow key={row.id}>
            <TableCell>{row.image}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={2} align="right">Subtotal</TableCell>
            <TableCell align="right">{cart.total}</TableCell>
          </TableRow>
          
          <TableRow>
          <TableCell rowSpan={2} />
            <TableCell colSpan={1} align="right">Total</TableCell>
            <TableCell align="right">{cart.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
