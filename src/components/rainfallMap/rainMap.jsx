import { Box } from "@mui/material";
import GeoJSONMap from "./geojson-map";

export default function RainMap() {
    return(
        <Box height="600px" width="600px">
            <GeoJSONMap/>
        </Box>
    );
}