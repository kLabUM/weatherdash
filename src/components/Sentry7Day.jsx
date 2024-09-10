import { Table, TableHead, TableBody,TableRow, TableCell } from "@aws-amplify/ui-react";

export default function Sentry7Day() {
    return(
        <Table
            caption=""
            variation="bordered"
            highlightOnHover={false}>
                <TableBody>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Rest of MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                        <TableCell>MM/DD</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Conditions</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Precipitation</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chance</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Temp. Range</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wind Speed</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                </TableBody>
            
        </Table>
    );
}