
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./components/Account";
import LoginForm from "./LoginForm";
import CreateAccount from "../pages/CreateAccount";


const Main = (props) => {
  const [usersState, setUsersState] = useState({ users: [] });

  const URL = ""

  const getUsers = async () => {
    const reponse = await fetch(URL)
    const users = await response.json()
    setUsersState(users);
  }

  const createAccount = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user),
    })
    getUsers();
  }

  const createLogin = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user),
    })
    getUsers();
  }

  useEffect(() => getUsers(), [])

  return (
    <main>
      <Route path="/">
        <LoginForm users={usersState.users}/>
      </Route>
      <Route path="/CreateAccount">
        <CreateAccount createAccount={createAccount}/>
      </Route>
    </main>
  )
  
}

export default Main;