import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import PropTypes from 'prop-types';


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


export default function NOAAForecast() {
    const [valueMap, setValueMap] = React.useState(0);
    const [valueHourly, setValueHourly] = React.useState(0);

    const handleChangeMap = (event, newValue) => {
        setValueMap(newValue);
    };
    const handleChangeHourly = (event, newValue) => {
        setValueHourly(newValue);
    };

    return(
        <Box display="flex" alignItems="flex-start">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="40vw" marginRight="30px">
                <h2>Map Forecast</h2>
                
                <Box width="inherit">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={valueMap} onChange={handleChangeMap} aria-label="basic tabs example">
                        <Tab label="4-5 Day Forecast" {...a11yProps(0)} />
                        <Tab label="Excess Rain" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={valueMap} index={0} width="inherit">
                        <img src="https://www.wpc.ncep.noaa.gov/qpf/95ep48iwbg_fill.gif" width="100%"></img>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueMap} index={1} width="inherit">
                        <img src="https://www.wpc.ncep.noaa.gov/qpf/94ewbg.gif" width="100%"></img>
                    </CustomTabPanel>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="40vw">
                <h2>Hourly Forecast</h2>
                <Box width="inherit">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={valueHourly} onChange={handleChangeHourly} aria-label="basic tabs example">
                        <Tab label="Macomb" {...a11yProps(0)} />
                        <Tab label="Oakland" {...a11yProps(1)} />
                        <Tab label="Wayne" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={valueHourly} index={0} width="inherit">
                        <img src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_Macomb.png" width="100%"></img>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueHourly} index={1} width="inherit">
                        <img src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_North-Metro.png" width="100%"></img>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueHourly} index={2} width="inherit">
                        <img src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_South-Metro.png" width="100%"></img>
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    
    );
}