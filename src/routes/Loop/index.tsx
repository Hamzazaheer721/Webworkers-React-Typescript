import {
  FC, lazy, memo, Suspense,
} from 'react';
import LoaderComponent from '../../components/Loader';

const LazyView = lazy(() => import('./view'))

const Loop : FC = memo((props) => (
  <Suspense fallback={<LoaderComponent />}>
    <LazyView {...props} />
  </Suspense>
));

export default Loop;
