import { FC, memo } from 'react';
import { Container } from './index.styled';

const LoopComponent : FC = memo(() => (
  <Container>
    <h1> Hey</h1>
  </Container>
));

export default LoopComponent;
