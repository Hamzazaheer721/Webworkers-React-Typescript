import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button, MainContainer, Text } from './index.styled';

const WelcomeComponent: FC<{}> = memo(() => (
  <MainContainer>
    <Text>Welcome Earthlings!</Text>
    <Link to="/loop">
      <Button>Click me First!</Button>
    </Link>
    <Link to="/multiply">
      <Button>No Click me First!</Button>
    </Link>
  </MainContainer>
))
export default WelcomeComponent;
