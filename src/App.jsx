
import { Authenticator,
    Flex
 } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import theme from './theme';

Amplify.configure(outputs);

export default function App() {
  return (
        <ThemeProvider theme={theme}>
            <Authenticator>
            {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
            )}
            </Authenticator>
        </ThemeProvider>    
  );
};
