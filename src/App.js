import React from 'react';
import './App.scss';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Cars from "./Cars/Cars";
import About from "./About/About";
import CarDetail from "./CarDetail/CarDetail";

class App extends React.Component {

  state = {
    isLoggedIn: false
  };

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'wtf'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{color: 'orange'}}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'wtf-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <div style={{textAlign: 'center'}}>
          <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
        </div>

        <Switch>
          <Route path={'/'} exact render={() => <h1>Home Рage</h1>}/>

          {this.state.isLoggedIn ? <Route path={'/about'} component={About}/> : null}

          <Route path={'/cars/:name'} component={CarDetail}/>
          <Route path={'/cars'} component={Cars}/>
          <Redirect to={'/'}/>
          {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
        </Switch>
      </div>
    )
  }
}

export default App;
