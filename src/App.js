import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Views/Home';
import DogDetail from './Views/DogDetail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Puppers 4U</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/dogs/:id" component={DogDetail} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
