import { FC, memo } from 'react'
import RoutesComponent from './routes';
import GlobalStyle from './styles/Global';

const App:FC <{}> = memo(() => (
  <>
    <GlobalStyle />
    <RoutesComponent />
  </>
));

export default App;
