import classes from './TwoColumnsTable.module.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar, Typography } from '@mui/material';

export default function TwoColumnsTable(props) {
    const { data, title } = props;
    const columnNames = Object.keys(data[0]);
    return (
        <Paper elevation={3} sx={{ width: '100%', mb: 2,  "*": { fontFamily: '"Comfortaa", sans-serif !important' }}}>
            <Toolbar>
                <Typography
                    sx={{ flex: '1 1 100%', py:"1rem"}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {title}
                </Typography>
            </Toolbar>
            <TableContainer component={Paper}>
                <Table  aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{columnNames[0]}</strong></TableCell>
                            <TableCell align="right"><strong>{columnNames[1]}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((record) => (
                            <TableRow
                                key={record[columnNames[0]]}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {record[columnNames[0]]}
                                </TableCell>
                                <TableCell align="right">{record[columnNames[1]]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}