import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Views/Home';
import DogDetail from './Views/DogDetail';
import Admin from './Views/Admin';
import Edit from './Views/Edit';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Puppers 4U</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/admin" exact>
            Admin
          </NavLink>
        </header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/dogs/:id" component={DogDetail} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/dogs/:id/edit" component={Edit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
