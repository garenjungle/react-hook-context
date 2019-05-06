import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages';
import { Helmet } from 'react-helmet';

const App = () => (
  <React.Fragment>
    <Helmet>
      <title>velog</title>
      <meta
        name="description"
      />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
);

export default App;
