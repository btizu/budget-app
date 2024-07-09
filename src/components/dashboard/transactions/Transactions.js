import * as React from 'react';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper } from '@mui/material';

import './transactions.css';

export default function Transactions() {
    //tabel cu ultimele tranzactii adaugate
    return (
        <div className='transactions-container'>
            <Typography variant="h6" gutterBottom sx={{ padding: '10px', fontWeight: 700 }}>Transactions</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Sum</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}