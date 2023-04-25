import { BrowserRouter, Routes as ReactRoutes, Route as ReactRoute } from 'react-router-dom';
import { ROUTES } from 'src/core/constants';
import Home from 'src/pages/home/home';
import NotAvailable from 'src/pages/not-available/not-available';
import NotFound from 'src/pages/not-found/not-found';

const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <ReactRoute path={ROUTES.home} element={<Home />} />
      <ReactRoute path={ROUTES.notAvailable} element={<NotAvailable />} />
      <ReactRoute path="*" element={<NotFound />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
