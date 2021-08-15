import { FC, memo } from 'react';
import { Button, ButtonContainer, Container } from './index.styled';

const LoopComponent : FC = memo(() => (
  <Container>
    <ButtonContainer>
      <Button>
        Tomato
      </Button>
    </ButtonContainer>
  </Container>
));

export default LoopComponent;
