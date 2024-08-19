import "./App.css";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient({
    authMode: "userPool",
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>{ client.models.User.get() }</p>
            </header>
        </div>
    );
}

export default App;
