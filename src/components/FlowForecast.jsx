import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

export default function FlowForecast() {
    

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Flow Forecast @ WM-S-1 --placeholder data</h1>
            <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            width={1000}
            height={400}
            />
            
        </Box>
    );
}