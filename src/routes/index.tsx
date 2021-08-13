import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';

const RoutesComponent: FC<{}> = memo(() => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </Router>
));

export default RoutesComponent;
