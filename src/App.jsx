import "./App.css";
import Dashboard from "./components/Dashboard";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <h1>React Context API Refactor</h1>
        <Dashboard />
      </div>
    </UserProvider>
  );
}

export default App;