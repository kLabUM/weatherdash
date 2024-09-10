import { Flex, Tabs, Image } from "@aws-amplify/ui-react";

export default function NOAAForecast() {
    return(
        <Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} width={"40vw"}>
                <h2>Map Forecast</h2>
                <Tabs.Container defaultValue="1">
                    <Tabs.List spacing="equal">
                        <Tabs.Item value="1">4-5 Day Forecast</Tabs.Item>
                        <Tabs.Item value="2">Excess Rain</Tabs.Item>
                    </Tabs.List>
                    <Tabs.Panel value="1"><Image src="https://www.wpc.ncep.noaa.gov/qpf/95ep48iwbg_fill.gif"></Image></Tabs.Panel>
                    <Tabs.Panel value="2"><Image src="https://www.wpc.ncep.noaa.gov/qpf/94ewbg.gif"></Image></Tabs.Panel>
                </Tabs.Container>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} width={"40vw"}>
                <h2>Hourly Forecast</h2>
                <Tabs.Container defaultValue="1">
                    <Tabs.List spacing="equal">
                        <Tabs.Item value="1">Macomb</Tabs.Item>
                        <Tabs.Item value="2">Oakland</Tabs.Item>
                        <Tabs.Item value="3">Wayne</Tabs.Item>
                    </Tabs.List>
                    <Tabs.Panel value="1"><Image src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_Macomb.png"></Image></Tabs.Panel>
                    <Tabs.Panel value="2"><Image src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_North-Metro.png"></Image></Tabs.Panel>
                    <Tabs.Panel value="3"><Image src="https://www.weather.gov/images/dtx/dot/hrqpf1h_paramguide_prob_South-Metro.png"></Image></Tabs.Panel>
                </Tabs.Container>
            </Flex>
        </Flex>
    
    );
}