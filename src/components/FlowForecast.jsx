import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

export default function FlowForecast() {


    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Flow Forecast @ WM-S-1 --placeholder data</h1>
            <LineChart
            xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
            series={[
                {
                data: [2, 2, 2, 2, 2, 2],
                },
            ]}
            width={1000}
            height={400}
            />
            
        </Box>
    );
}