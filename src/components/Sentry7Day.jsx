import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

export default function Sentry7Day() {
    return(
        <Box maxWidth="40vw" marginRight="30px" display="flex" alignItems="center" flexDirection="column">
            <h1>Weather Sentry 7 Day Forecast</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Rest of MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
            <TableCell>MM/DD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Conditions</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
            <TableCell>---</TableCell>
          </TableRow>
          <TableRow>
                <TableCell>Precipitation</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Chance</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Temp. Range</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Wind Speed</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    );
}

/* 
<Table
            caption=""
            variation="bordered"
            highlightOnHover={false}>
                <TableBody>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Rest of MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Conditions</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Precipitation</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chance</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Temp. Range</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wind Speed</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                </TableBody>
            
        </Table>
*/