import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Button, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import RainMap from './rainfallMap/rainMap';


export default function RainfallAcc() {
    const [valueMap, setValueMap] = React.useState(0);
    const [hours, setHours] = React.useState(8);

    const handleChangeMap = (event, newValue) => {
        setValueMap(newValue);
    };

    const handleSliderChange = (event, newValue) => {
        setHours(newValue);
    };

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h1>National Weather Service Rainfall Accumulation Forecast</h1>
            <RainMap/>
            <Box width="100%">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <h3>Expected rainfall over the next {hours} hours</h3>
                    <Button disabled={true} style={{maxWidth: '150px', maxHeight: '35px', minWidth: '150px', minHeight: '35px'}} variant='outlined'>Refresh Map</Button>
                </Box>
                <Slider
                aria-label="Hours"
                defaultValue={24}
                valueLabelDisplay="auto"
                onChange={handleSliderChange}
                step={1}
                marks
                min={0}
                max={24}
                />
            </Box>
        </Box>
    )
}