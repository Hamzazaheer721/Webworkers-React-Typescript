import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loop from './Loop';
import Filter from './Filter';
import Welcome from './Welcome';

const RoutesComponent: FC<{}> = memo(() => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/loop" component={Loop} />
      <Route exact path="/filter" component={Filter} />
    </Switch>
  </Router>
));

export default RoutesComponent;
