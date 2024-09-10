import { 
    Flex,
    Image
 } from "@aws-amplify/ui-react";
 import Sentry7Day from "./Sentry7Day";
 import NOAAForecast from "./NOAAForecast";

export default function Dashboard() {
    return(
        <Flex id="dash-container">
            <Flex id="dash-row-1" maxWidth={"80vw"}>
                <Sentry7Day/>
                <Image src="https://www.weather.gov/images/dtx/wxstory/Tab2FileL.png"></Image>
            </Flex>
            <NOAAForecast/>
            <h1>Dash Comtainer</h1>
        </Flex>
    );
}