import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, MainContainer, Text, Wrapper,
} from './index.styled';

const WelcomeComponent: FC<{}> = memo(() => (

  <MainContainer>
    <Wrapper>
      <Text>Welcome Earthlings!</Text>
      <Link to="/loop">
        <Button>Webworker</Button>
      </Link>
      <Link to="/filter">
        <Button>Filter with Webworker</Button>
      </Link>
    </Wrapper>
  </MainContainer>

))
export default WelcomeComponent;
