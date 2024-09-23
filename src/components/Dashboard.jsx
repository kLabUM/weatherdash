import { 
    Flex,
    Image
 } from "@aws-amplify/ui-react";

 import { Box } from "@mui/material";
 import Sentry7Day from "./Sentry7Day";
 import NOAAForecast from "./NOAAForecast";

export default function Dashboard() {
    return(
        <Box display="flex" flexDirection="column" maxWidth="90vw" justifyContent="center" alignItems="center" margin="auto">
            <Box display="flex" justifyContent="center" alignItems="center" width="90vw">
                <Sentry7Day/>
                <img src="https://www.weather.gov/images/dtx/wxstory/Tab2FileL.png" style={{maxWidth: "40vw", marginLeft: "30px"}}></img>
            </Box>
            <NOAAForecast/>
        </Box>
    );
}