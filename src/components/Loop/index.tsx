/* eslint-disable no-unused-vars */
import { FC, memo, useState } from 'react';
import {
  Button, ButtonContainer, Container, CountContainer, Heading, StateHeading,
} from './index.styled';

const LoopComponent : FC = memo(() => {
  const [tomatoCount, setTomatoCount] = useState<number>(0)
  const [appleCount, setAppleCount] = useState<number>(0);

  return (
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
        <StateHeading>{tomatoCount}</StateHeading>
      </CountContainer>
      <CountContainer>
        <Heading>Apple</Heading>
        <StateHeading>{appleCount}</StateHeading>
      </CountContainer>
    </Container>
  )
});

export default LoopComponent;
