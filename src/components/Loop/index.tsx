import {
  useRef,
  FC, memo, useCallback, useEffect, useState,
} from 'react';

import {
  Button, ButtonContainer, Container,
  CountContainer, Heading, IncrementButtonsContainer,
  ModHeading,
  SmallHeading, StateHeading, ToggleButtonContainer,
} from './index.styled';

const LoopComponent : FC = memo(() => {
  const [tomatoCount, setTomatoCount] = useState<number>(0)
  const [appleCount, setAppleCount] = useState<number>(0);
  const [currentMod, setCurrentMod] = useState<boolean>(false);
  const appleRef = useRef<number>(appleCount);
  const appleWorker: Worker = new Worker('./workers/worker.js')

  const handleModClick = useCallback(() => {
    setCurrentMod((prevState) => !prevState)
  }, [])

  const handleTomatoClick = useCallback(() => {
    setTomatoCount((prevCount) => prevCount + 1)
  }, [])

  const handleAppleCickWithoutWebWorker = useCallback(() => {
    for (let i = 0; i <= 999999999; i++) {
      if (i === 999999999) {
        setAppleCount((prevCount) => prevCount + 1)
      }
    }
  }, [])

  useEffect(() => {
    appleWorker.onmessage = (event: MessageEvent) => {
      const { data } = event;
      setAppleCount(data)
    }
  }, [appleWorker]);

  const handleAppleClick = () => {
    appleRef.current++;
    appleWorker.postMessage([appleRef.current])
  }

  return (
    <Container>
      <ButtonContainer>
        <IncrementButtonsContainer>
          <Button type="button" onClick={handleTomatoClick}>
            Tomato
          </Button>
          <Button type="button" onClick={currentMod ? handleAppleClick : handleAppleCickWithoutWebWorker}>
            Apple
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
        <Heading>Clicking on Apple will perform heavy Computation</Heading>
      </CountContainer>
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
