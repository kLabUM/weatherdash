
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
import { fetchUserAttributes, updateUserAttribute } from 'aws-amplify/auth';

async function handleUpdateUserAttribute(attributeKey, value) {
    try {
      const output = await updateUserAttribute({
        userAttribute: {
          attributeKey,
          value
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  

export default function App() {
    const [colorMode, setColorMode] = React.useState('system');
    const [emailPreference, setEmailPreference] = React.useState(false);

    const handleDownloadPDF = async (event) => {
        event.preventDefault();
    }

    const initializeEmailPreference = async () => {
        console.log("Initializing email preference")
        try {
            const userAttributes = await fetchUserAttributes();
            console.log(userAttributes["custom:emailPreference"])
            if (userAttributes["custom:emailPreference"] == undefined) {
                setEmailPreference(false);
                handleUpdateUserAttribute("customemailPreference", "false")
            }
            else {
                setEmailPreference((userAttributes["custom:emailPreference"] == 'false') ? false : true);
            }
        }
        catch (e) { 
            console.log("error :(")
            console.log(e); 
        }
    };

    const handleEmailChange = async (event) => {
        event.preventDefault();
        console.log("Handling email change")
        let newVal = event.target.checked;
        try {
            handleUpdateUserAttribute("custom:emailPreference", String(newVal))
            setEmailPreference(newVal)
        }
        catch (e) { console.log(e); }

      };

    initializeEmailPreference();

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
                        <p>Recieve Weekly Emails</p>
                        <Switch
                            checked={emailPreference}
                            onChange={handleEmailChange}
                            />
                            </Box>  
                            <Button onClick={handleDownloadPDF} variant="outlined" color="inherit" sx="margin-right: 40px">Download PDF</Button>
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
