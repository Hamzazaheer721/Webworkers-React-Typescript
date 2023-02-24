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
  const [currentMode, setCurrentMode] = useState<boolean>(false);
  const burgerWorker: Worker = new Worker('./workers/worker.ts')

  const handleModeClick = useCallback(() => {
    setCurrentMode((prevState) => !prevState)
  }, [])

  const handlePizzaClick = useCallback(() => {
    setPizzaCount((prevCount) => prevCount + 1)
  }, [])

  const handleBurgerCickWithoutWebWorker = useCallback(() => {
    // eslint-disable-next-line no-empty
    for (let i = 0; i <= 999999999; i++) { }
    setBurgerCount((prevCount) => prevCount + 1)
  }, [])

  const handleBurgerClick = useCallback(() => {
    burgerWorker.postMessage([burgerCount])
  }, [])

  useEffect(() => {
    burgerWorker.onmessage = (event: MessageEvent) => {
      const { data } = event;
      setBurgerCount(data)
    }
  }, []);

  return (
    <Container>
      <ButtonContainer>
        <IncrementButtonsContainer>
          <Button type="button" onClick={handlePizzaClick}>
            Pizza
          </Button>
          <Button type="button" onClick={currentMode ? handleBurgerClick : handleBurgerCickWithoutWebWorker}>
            Burger
          </Button>
        </IncrementButtonsContainer>
        <ToggleButtonContainer>
          <Button type="button" onClick={handleModeClick} toggleButton>
            Toggle Mode
          </Button>
          <SmallHeading>
            Current Mode:
          </SmallHeading>
          <ModHeading>
            {currentMode ? 'With Web Worker' : 'Without Web Worker'}
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
