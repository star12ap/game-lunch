import React from 'react';
import { 
  Switch, 
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { CardGame, Start, Menu } from './pages';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/game" component={CardGame} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
