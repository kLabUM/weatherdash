import * as React from 'react';
import { Box, Button } from '@mui/material';
import get2WeekSentry from './get2WeekSentry';
import { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
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

export default function Sentry2Week() {
    const [valueMap, setValueMap] = React.useState(0);

    const handleChangeMap = (event, newValue) => {
        setValueMap(newValue);
    };

    const placeholder = {
        "columns": ["..."],
        "downtown_precipitation": ["..."],
    }
    const [data, setData] = useState(placeholder);

    React.useEffect(() => {
        async function call() {
            setData(await get2WeekSentry());
        }
        call();
      }, []);
      
    return(
        <Box sx={{maxWidth: "90vw"}} marginRight="30px" display="flex" alignItems="center" flexDirection="column">
            <h1>Weather Sentry 7 Day Forecast</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueMap} onChange={handleChangeMap} aria-label="tabs">
                <Tab label="Precipitation" {...a11yProps(0)} />
                <Tab label="Temperature" {...a11yProps(1)} />
                <Tab label="Dew Point" {...a11yProps(2)} />
                <Tab label="Humidity" {...a11yProps(3)} />
                <Tab label="Windspeed" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={valueMap} index={0} width="inherit">
            <LineChart
            xAxis={[{ 
                scaleType: "point",
                data: data["columns"]


                }]}
            series={[
                {
                data: data["downtown_precipitation"],
                label: "Downtown"
                },
                {
                data: data["troy_precipitation"],
                label: "Troy"
                },
                {
                data: data["dtw_precipitation"],
                label: "DTW"
                },
            ]}
            width={1300}
            height={300}
            />
            </CustomTabPanel>
            <CustomTabPanel value={valueMap} index={1} width="inherit">
            <LineChart
            xAxis={[{ 
                scaleType: "point",
                data: data["columns"]


                }]}
            series={[
                {
                data: data["downtown_max_t"],
                label: "Downtown"
                },
                {
                data: data["troy_max_t"],
                label: "Troy"
                },
                {
                data: data["dtw_max_t"],
                label: "DTW"
                },
            ]}
            width={1300}
            height={300}
            />
            </CustomTabPanel>
            <CustomTabPanel value={valueMap} index={2} width="inherit">
            <LineChart
            xAxis={[{ 
                scaleType: "point",
                data: data["columns"]


                }]}
            series={[
                {
                data: data["downtown_dew"],
                label: "Downtown"
                },
                {
                data: data["troy_dew"],
                label: "Troy"
                },
                {
                data: data["dtw_dew"],
                label: "DTW"
                },
            ]}
            width={1300}
            height={300}
            />
            </CustomTabPanel>
            <CustomTabPanel value={valueMap} index={3} width="inherit">
            <LineChart
            xAxis={[{ 
                scaleType: "point",
                data: data["columns"]


                }]}
            series={[
                {
                data: data["downtown_humidity"],
                label: "Downtown"
                },
                {
                data: data["troy_humidity"],
                label: "Troy"
                },
                {
                data: data["dtw_humidity"],
                label: "DTW"
                },
            ]}
            width={1300}
            height={300}
            />
            </CustomTabPanel>
            <CustomTabPanel value={valueMap} index={4} width="inherit">
            <LineChart
            xAxis={[{ 
                scaleType: "point",
                data: data["columns"]


                }]}
            series={[
                {
                data: data["downtown_wind"],
                label: "Downtown"
                },
                {
                data: data["troy_wind"],
                label: "Troy"
                },
                {
                data: data["dtw_wind"],
                label: "DTW"
                },
            ]}
            width={1300}
            height={300}
            />
            </CustomTabPanel>
            
            
            
    </Box>
    );
}


/*
<LineChart
xAxis={[{scaleType: "band", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] }]}
series={[
    {
    data: data["downtown_precipitation"],
    label: "Downtown"
    },
    {
    data: data["troy_precipitation"],
    label: "Troy"
    },
    {
    data: data["dtw_precipitation"],
    label: "DTW"
    },

]}
width={500}
height={300}
/>

<LineChart
xAxis={[{ 
    scaleType: "point",
    data: data["columns"]


    }]}
series={[
    {
    data: data["downtown_precipitation"],
    label: "Downtown"
    },
    {
    data: data["troy_precipitation"],
    label: "Troy"
    },
    {
    data: data["dtw_precipitation"],
    label: "DTW"
    },
]}
width={1300}
height={300}
/>
*/