import { FC, memo } from 'react';
import WelcomeComponent from '../../components/Welcome';

const ViewComponent : FC <{}> = memo(() => (
  <WelcomeComponent />
))

export default ViewComponent;
