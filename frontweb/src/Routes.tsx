import Navbar from 'Components/Navbar'
import Before from 'Pages/Before'
import Home from 'Pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/before">
          <Before />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
