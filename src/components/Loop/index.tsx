/* eslint-disable no-unused-vars */
import {
  FC, memo, useCallback, useState,
} from 'react';
import {
  Button, ButtonContainer, Container, CountContainer, Heading, StateHeading,
} from './index.styled';

const LoopComponent : FC = memo(() => {
  const [tomatoCount, setTomatoCount] = useState<number>(0)
  const [appleCount, setAppleCount] = useState<number>(0);

  const handleTomatoClick = useCallback(() => {
    setTomatoCount((prevCount) => prevCount + 1)
  }, [])

  const handleAppleCick = useCallback(() => {
    const start = Date.now();
    for (let i = start; i <= 99999999999999; i++) {
      i === 99999999999999 && setAppleCount((prevCount) => prevCount + 1)
    }
  }, [])
  return (
    <Container>
      <ButtonContainer>
        <Button type="button" onClick={handleTomatoClick}>
          Tomato
        </Button>
        <Button type="button" onClick={handleAppleCick}>
          Apple
        </Button>
      </ButtonContainer>
      <CountContainer>
        <Heading>Tomato: </Heading>
        <StateHeading>{tomatoCount}</StateHeading>
      </CountContainer>
      <CountContainer>
        <Heading>Apple: </Heading>
        <StateHeading>{appleCount}</StateHeading>
      </CountContainer>
    </Container>
  )
});

export default LoopComponent;
