import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';

const RoutesComponent: FC<{}> = memo(() => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  </div>
));

export default RoutesComponent;
