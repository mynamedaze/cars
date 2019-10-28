import React from 'react';
import './App.scss';
import {Route, NavLink} from 'react-router-dom';
import Cars from "./Cars/Cars";
import About from "./About/About";

class App extends React.Component {
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
        <Route path={'/'} exact render={() => <h1>Home Рage</h1>}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/cars'} component={Cars}/>
      </div>
    )
  }
}

export default App;
