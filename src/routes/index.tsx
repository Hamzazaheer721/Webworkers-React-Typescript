import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loop from './Loop';
import Virtualization from './Virtualization';
import Welcome from './Welcome';

const RoutesComponent: FC<{}> = memo(() => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/loop" component={Loop} />
      <Route exact path="/virtualization" component={Virtualization} />
    </Switch>
  </Router>
));

export default RoutesComponent;
