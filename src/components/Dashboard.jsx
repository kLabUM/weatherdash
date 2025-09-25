import { 
    Flex,
    Image
 } from "@aws-amplify/ui-react";

 import { Box } from "@mui/material";
 import Sentry7Day from "./Sentry7Day";
 import NOAAForecast from "./NOAAForecast";
import Sentry2Week from "./Sentry2Week";
import RainfallAcc from "./RainfallAcc";
import RainMap from "./rainfallMap/rainMap";

export default function Dashboard() {
    return(
        <Box display="flex" flexDirection="column" maxWidth="90vw" justifyContent="center" alignItems="center" margin="auto">
            <Box sx={{flexDirection: { md: "column", xl: "row" }}} display="flex" justifyContent="center" alignItems="center" width="90vw" marginBottom="50px">
                <Sentry7Day/>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{maxWidth: { md: "90vw", xl: "40vw" }}}>
                <img src="https://www.weather.gov/images/dtx/wxstory/Tab2FileL.png" style={{maxWidth: "inherit", margin: "30px"}}></img>
                </Box>
                
            </Box>
            <h1>National Weather Service Regional Forecast</h1>
            <NOAAForecast/>
            {false && <RainfallAcc/> }
            <Sentry2Week/>
        </Box>
    );
}