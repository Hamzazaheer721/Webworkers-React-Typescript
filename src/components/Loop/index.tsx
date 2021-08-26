import {
  FC, memo, useCallback, useEffect, useState,
} from 'react';

import {
  Button, ButtonContainer, Container,
  CountContainer, Heading, IncrementButtonsContainer,
  ModHeading,
  SmallHeading, StateHeading, ToggleButtonContainer,
} from './index.styled';

const LoopComponent: FC = memo(() => {
  const [pizzaCount, setPizzaCount] = useState<number>(0)
  const [burgerCount, setBurgerCount] = useState<number>(0);
  const [currentMod, setCurrentMod] = useState<boolean>(false);
  const burgerWorker: Worker = new Worker('./workers/worker.js')

  const handleModClick = useCallback(() => {
    setCurrentMod((prevState) => !prevState)
  }, [])

  const handleTomatoClick = useCallback(() => {
    setPizzaCount((prevCount) => prevCount + 1)
  }, [])

  const handleAppleCickWithoutWebWorker = useCallback(() => {
    // eslint-disable-next-line no-empty
    for (let i = 0; i <= 999999999; i++) {
    }
    setBurgerCount((prevCount) => prevCount + 1)
  }, [])

  useEffect(() => {
    burgerWorker.onmessage = (event: MessageEvent) => {
      const { data } = event;
      setBurgerCount(data)
    }
  }, [burgerWorker]);

  const handleAppleClick = useCallback(() => {
    burgerWorker.postMessage([burgerCount])
  }, [])

  return (
    <Container>
      <ButtonContainer>
        <IncrementButtonsContainer>
          <Button type="button" onClick={handleTomatoClick}>
            Pizza
          </Button>
          <Button type="button" onClick={currentMod ? handleAppleClick : handleAppleCickWithoutWebWorker}>
            Burger
          </Button>
        </IncrementButtonsContainer>
        <ToggleButtonContainer>
          <Button type="button" onClick={handleModClick} toggleButton>
            Toggle Mod
          </Button>
          <SmallHeading>
            Current Mod:
          </SmallHeading>
          <ModHeading>
            {currentMod ? 'With Web Worker' : 'Without Web Worker'}
          </ModHeading>
        </ToggleButtonContainer>
      </ButtonContainer>
      <CountContainer>
        <Heading>Clicking on Burger will perform heavy Computation</Heading>
      </CountContainer>
      <CountContainer>
        <Heading> Pizza: </Heading>
        <StateHeading>{pizzaCount}</StateHeading>
      </CountContainer>
      <CountContainer>
        <Heading> Burger: </Heading>
        <StateHeading>{burgerCount}</StateHeading>
      </CountContainer>
    </Container>
  )
});

export default LoopComponent;
