import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Views/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Puppers 4-U</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
