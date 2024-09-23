
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import Dashboard from './components/Dashboard';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Switch } from '@mui/material';
import { fetchUserAttributes } from 'aws-amplify/auth';


/*
export default function App() {
    const printUserAttributes = async () => {
        try {
          const userAttributes = await fetchUserAttributes();
          console.log('Email:', userAttributes.email);
          console.log("preference", userAttributes.emailPreference);
        }
        catch (e) { console.log(e); }
      };

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
                    <Box sx={{ p: 2, borderRadius: "5px",border: '1px solid white' }} display="flex" height="36.5px" alignItems="center" justifyContent="center" marginRight="40px">
                        <p>Recieve Weekly Emails {user.email} </p>
                        <Switch
                        />
                    </Box>  
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
    const printUserAttributes = async () => {
        try {
          const userAttributes = await fetchUserAttributes();
          console.log('Email:', userAttributes.email);
          console.log("preference", userAttributes.emailPreference);
        }
        catch (e) { console.log(e); }
      };
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
                    <Box sx={{ p: 2, borderRadius: "5px",border: '1px solid white' }} display="flex" height="36.5px" alignItems="center" justifyContent="center" marginRight="40px">
                        <p>Recieve Weekly Emails {user.email} </p>
                        <Switch
                            />
                            </Box>  
                            <Button onClick={printUserAttributes} variant="outlined" color="inherit" sx="margin-right: 40px">Download PDF</Button>
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
