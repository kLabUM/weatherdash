import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import updateForecast from './updateForecastData';
import { useState } from 'react';

export default function Sentry7Day() {
    const [data, setData] = useState(updateForecast());

    React.useEffect(() => {
        async function call() {
            setData(await updateForecast());
        }
        call();
      }, []);
      
    
    
    return(
        <Box sx={{maxWidth: { xs: "90vw", md: "40vw" }}} marginRight="30px" display="flex" alignItems="center" flexDirection="column">
            <h1>Weather Sentry 7 Day Forecast</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>{data[0]}</TableCell>
            <TableCell>{data[1]}</TableCell>
            <TableCell>{data[2]}</TableCell>
            <TableCell>{data[3]}</TableCell>
            <TableCell>{data[4]}</TableCell>
            <TableCell>{data[5]}</TableCell>
            <TableCell>{data[6]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Conditions</TableCell>
            <TableCell>{data[7]}</TableCell>
            <TableCell>{data[8]}</TableCell>
            <TableCell>{data[9]}</TableCell>
            <TableCell>{data[10]}</TableCell>
            <TableCell>{data[11]}</TableCell>
            <TableCell>{data[12]}</TableCell>
            <TableCell>{data[13]}</TableCell>
          </TableRow>
          <TableRow>
                <TableCell>Precipitation</TableCell>
                <TableCell>{data[14]}</TableCell>
                <TableCell>{data[15]}</TableCell>
                <TableCell>{data[16]}</TableCell>
                <TableCell>{data[17]}</TableCell>
                <TableCell>{data[18]}</TableCell>
                <TableCell>{data[19]}</TableCell>
                <TableCell>{data[20]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Chance</TableCell>
                <TableCell>{data[21]}</TableCell>
                <TableCell>{data[22]}</TableCell>
                <TableCell>{data[23]}</TableCell>
                <TableCell>{data[24]}</TableCell>
                <TableCell>{data[25]}</TableCell>
                <TableCell>{data[26]}</TableCell>
                <TableCell>{data[27]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Temp. Range</TableCell>
                <TableCell>{data[28]}</TableCell>
                <TableCell>{data[29]}</TableCell>
                <TableCell>{data[30]}</TableCell>
                <TableCell>{data[31]}</TableCell>
                <TableCell>{data[32]}</TableCell>
                <TableCell>{data[33]}</TableCell>
                <TableCell>{data[34]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Wind Speed</TableCell>
                <TableCell>{data[35]}</TableCell>
                <TableCell>{data[36]}</TableCell>
                <TableCell>{data[37]}</TableCell>
                <TableCell>{data[38]}</TableCell>
                <TableCell>{data[39]}</TableCell>
                <TableCell>{data[40]}</TableCell>
                <TableCell>{data[41]}</TableCell>
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