import { BrowserRouter, Routes as ReactRoutes, Route as ReactRoute } from 'react-router-dom';
import { ROUTES } from 'src/core/constants';
import Home from 'src/pages/home/home';

const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <ReactRoute path={ROUTES.home} element={<Home />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
