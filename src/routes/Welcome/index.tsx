import {
  FC, lazy, memo, Suspense,
} from 'react';
import LoaderComponent from '../../components/Loader';

const Welcome:FC<{}> = memo((props) => {
  const LazyView = lazy(() => import('./view'));
  return (
    <Suspense fallback={LoaderComponent}>
      <LazyView {...props} />
    </Suspense>
  )
})

export default Welcome;
