
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
//import '@aws-amplify/ui-react/styles.css';
import Dashboard from './components/Dashboard';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

Amplify.configure(outputs);

/*
export default function App() {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100%" justifyContent="center">
        <Box alignItems="center" display="flex" justifyContent="space-between" height="70px">
            <AppBar position="fixed" top="0">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Detroit Weather Dashboard
                    </Typography>
                    <Button variant="outlined" color="inherit" sx="margin-right: 40px">Download PDF</Button>
                    <Button variant="outlined" color="inherit">Log Out</Button>
                </Toolbar>
            </AppBar>
            
        </Box>
        <Dashboard/>
        </Box>
      </ThemeProvider>
    );
  };
*/

export default function App() {
    const [colorMode, setColorMode] = React.useState('system');
  return (
            <Authenticator>
            {({ signOut, user }) => (
                <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box height="100%" justifyContent="center">
                    <Box alignItems="center" display="flex" justifyContent="space-between" height="70px">
                        <AppBar position="fixed" top="0">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Detroit Weather Dashboard
                                </Typography>
                                <Button variant="outlined" color="inherit" sx="margin-right: 40px">Download PDF</Button>
                                <Button onClick={signOut} variant="outlined" color="inherit">Log Out</Button>
                            </Toolbar>
                        </AppBar>
                        
                    </Box>
                    <Dashboard/>
                    </Box>
                </ThemeProvider>
            )}
            </Authenticator>
           
  );
};
