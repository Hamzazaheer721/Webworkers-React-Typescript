import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loop from './Loop';
import Multiply from './Multiply';
import Welcome from './Welcome';

const RoutesComponent: FC<{}> = memo(() => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/loop" component={Loop} />
      <Route exact path="/multiply" component={Multiply} />
    </Switch>
  </Router>
));

export default RoutesComponent;
