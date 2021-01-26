import { Route, Switch } from "react-router-dom"
import UserList from "./components/UserList/UserList"
import UserPage from "./components/UserPage/UserPage"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/:userId?" component={UserPage} />
    </Switch>
  )
}

export default App
