import { FC, memo } from 'react';
import {
  Button, ButtonContainer, Container, CountContainer, Heading, StateHeading,
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
      <Heading>Tomato</Heading>
      <StateHeading>1</StateHeading>
    </CountContainer>
    <CountContainer>
      <Heading>Apple</Heading>
      <StateHeading>1</StateHeading>
    </CountContainer>
  </Container>
));

export default LoopComponent;
