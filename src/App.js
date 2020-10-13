import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AppMotorista from './frontend/frontend-motorista/App-motorista'
import AppPassageiro from './frontend/frontend-passageiro/App-passageiro'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import './App.css'
function App() {
  return (
    <div className="pass-mot">
      <Router>
        <Header />
        <div className='button'>
          <Link className="l1" to="/motorista"><h3>Motorista</h3></Link>
          <Link className="l2" to="/passageiro"><h3>Passageiro</h3></Link>
        </div>
        <Switch>
          <Route path="/motorista">
            <AppMotorista />
          </Route>
          <Route path="/passageiro">
            <AppPassageiro />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>

  );
}

export default App;
