import React from 'libs/react';
import { importRemote } from '@module-federation/utilities/src/utils/importRemote';

// this would make HMR work
// import Button2 from 'remote2/Button';

function System() {
  const Component = React.lazy(() => importRemote({
    url: "http://localhost:3003",
    scope:"remote2", 
    module:"./App"
  }));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

function Remote2App() {
  const [system, setSystem] = React.useState({
    url: 'http://localhost:3003',
    scope: 'remote2',
    module: './App',
  });

  // function setApp2() {
  //   setSystem({
  //     url: 'http://localhost:3002',
  //     scope: 'app2',
  //     module: './Widget',
  //   });
  // }

  // function setApp3() {
  //   setSystem({
  //     url: 'http://localhost:3003',
  //     scope: 'app3',
  //     module: './Widget',
  //   });
  // }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      {/* <h1>Dynamic System Host</h1> */}
      <h2>Remote2App 1</h2>
      {/* <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and{' '}
        <strong>exposes</strong>. It will not load any components or modules that have been loaded
        already.
      </p> */}
      {/* <button onClick={setApp2}>Load App 2 Widget</button>
      <button onClick={setApp3}>Load App 3 Widget</button> */}
      <div style={{ marginTop: '2em' }}>
        <System system={system} />
      </div>
    </div>
  );
}

export default Remote2App;
