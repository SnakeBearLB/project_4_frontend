import { useState, useEffect } from "react";
import Home from "./pages/Home";
// import Nav from "./components/Nav";
import CreateAccount from "./components/CreateAccount";
// import Dashboard from "./components/Dashboard";
// import Account from "./components/Account";

function App() {
  const [usersState, setUsersState] = useState({ users: [] });

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await fetch("")
        .then(response => response.json())
        setUsersState({ users })
      } catch (error) {
        console.log(error)
      }
    }
   getUsers();
}, []);
    
return (
      <div className="App">
        <Home users={usersState.users} />
      </div>
    );
}

export default App;