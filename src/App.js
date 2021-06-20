import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavHeader from './components/NavHeader';
import authOps from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';

const DefaultView = lazy(() =>
  import('./views/DefaultView' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const DefaultLoggedInView = lazy(() =>
  import(
    './views/DefaultLoggedInView' /* webpackChunkName: "not-found-view" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOps.getCurrentUser()), [dispatch]);

  return (
    <>
      <NavHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute
            path={routes.login}
            component={LoginView}
            redirectTo={routes.contacts}
            restricted
          />
          <PublicRoute
            path={routes.register}
            component={RegisterView}
            redirectTo={routes.contacts}
            restricted
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsView}
            redirectTo={routes.login}
          />
          <PublicRoute
            path={routes.home}
            component={DefaultLoggedInView}
            redirectTo={routes.login}
          />
          <Route component={DefaultView} />
        </Switch>
      </Suspense>
    </>
  );
}
