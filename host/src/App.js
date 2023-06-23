import React, { Suspense } from 'libs/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'libs/react-router-dom';

import Heading from 'remote1/Heading';
import Remote2App from './remotes/remote2';

const Button = React.lazy(() => import('remote1/Button'));

const App = () => {
  return (
    <Router>
      <div>
        <div
          style={{
            margin: '10px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: 'greenyellow',
          }}
        >
          <h1>HOST</h1>
          HOST1 ONLY SUPPORTS LIVE RELOAD. GO TO http://localhost:3001 to try out HMR
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/heading">Heading</Link>
            </li>
            <li>
              <Link to="/remote2App">remote2App</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/button">
              <Button />
            </Route>
            <Route path="/heading">
              <Heading />
            </Route>
            <Route path="/remote2App">
              <Remote2App />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
