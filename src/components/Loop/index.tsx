import { FC, memo } from 'react';
import {
  Button, ButtonContainer, Container, CountContainer,
} from './index.styled';

const LoopComponent : FC = memo(() => (
  <Container>
    <ButtonContainer>
      <Button>
        Tomato
      </Button>
      <Button>
        Apple
      </Button>
    </ButtonContainer>
    <CountContainer>
      <h1> hey</h1>

    </CountContainer>
  </Container>
));

export default LoopComponent;
