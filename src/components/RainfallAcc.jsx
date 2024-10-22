import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Button, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueMap} onChange={handleChangeMap} aria-label="basic tabs example">
                <Tab label="Area Map" {...a11yProps(0)} />
                <Tab label="Subcatchments" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={valueMap} index={0} width="inherit">
                <img src="#" width="1000px" height="500px"></img>
            </CustomTabPanel>
            <CustomTabPanel value={valueMap} index={1} width="inherit">
                <img src="#" width="1000px" height="500px"></img>
            </CustomTabPanel>
            <Box width="100%">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <h3>Expected rainfall over the next {hours} hours</h3>
                    <Button style={{maxWidth: '150px', maxHeight: '35px', minWidth: '150px', minHeight: '35px'}} variant='outlined'>Refresh Map</Button>
                </Box>
                <Slider
                aria-label="Hours"
                defaultValue={8}
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