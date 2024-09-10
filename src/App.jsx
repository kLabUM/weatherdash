
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
  return (
        <ThemeProvider theme={theme} colorMode='dark'>
            <Authenticator>
            {({ signOut, user }) => (
                    <main>
                        <nav id='navbar'>
                            <h2>Detroit Weather Dashboard</h2>
                            <ul>
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
