
import { Authenticator,
    Flex,
    Button,
 } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import theme from './theme';
import Dashboard from './components/Dashboard';
import * as React from 'react';
import {
    Card,
    Text,
    ToggleButton,
    ToggleButtonGroup,
  } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

/*
export default function App() {
    return (
        <ThemeProvider theme={theme} colorMode='dark'>
            <main>
                <nav id='navbar'>
                    <h2>Detroit Weather Dashboard</h2>
                    <ul>
                        <li><Button onClick={signOut}>Log Out</Button></li>
                    </ul>
                </nav>
                <Dashboard/>
            </main>
        </ThemeProvider>
    );
  };
*/

export default function App() {
    const [colorMode, setColorMode] = React.useState('system');
  return (
        <ThemeProvider theme={theme} colorMode={colorMode}>
            <Authenticator>
            {({ signOut, user }) => (
                    <main>
                        <nav id='navbar'>
                            <h2>Detroit Weather Dashboard</h2>
                            <ul>
                                <li>

                                <ToggleButtonGroup
                                value={colorMode}
                                isExclusive
                                onChange={(value) => setColorMode(value)}
                                >
                                <ToggleButton value="light">Light</ToggleButton>
                                <ToggleButton value="dark">Dark</ToggleButton>
                                <ToggleButton value="system">System</ToggleButton>
                                </ToggleButtonGroup>

                                </li>
                                <li><Button onClick={signOut}>Log Out</Button></li>
                            </ul>
                        </nav>
                        <Dashboard/>
                    </main>
            )}
            </Authenticator>
        </ThemeProvider>    
  );
};
