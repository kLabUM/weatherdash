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
        "downtown_precipitation": [1],
        "downtown_wind": [1],
        "downtown_humidity": [1],
        "downtown_dew": [1],
        "downtown_max_t": [1],
        "troy_precipitation": [1],
        "troy_wind": [1],
        "troy_humidity": [1],
        "troy_dew": [1],
        "troy_max_t": [1],
        "dtw_precipitation": [1],
        "dtw_wind": [1],
        "dtw_humidity": [1],
        "dtw_dew": [1],
        "dtw_max_t": [1],
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
            <h1>Weather Sentry 2 Week Forecast</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueMap} onChange={handleChangeMap} aria-label="tabs">
                <Tab label="Precipitation" {...a11yProps(0)} />
                <Tab label="High Temperature" {...a11yProps(1)} />
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
sample:
<LineChart
xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
series={[
{
    data: [2, 5.5, 2, 8.5, 1.5, 5],
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





custom tabs:
=============
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
*/
