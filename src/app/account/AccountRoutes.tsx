import React from 'react';

import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { PageActivate } from '@/app/account/PageActivate';
import { PagePassword } from '@/app/account/PagePassword';
import { PageProfile } from '@/app/account/PageProfile';
import { PageRegister } from '@/app/account/PageRegister';
import { PageResetPasswordConfirm } from '@/app/account/PageResetPasswordConfirm';
import { PageResetPasswordRequest } from '@/app/account/PageResetPasswordRequest';
import {
  AuthenticatedRouteGuard,
  PublicOnlyRouteGuard,
} from '@/app/router/guards';
import { Error404 } from '@/errors';

const AccountRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${url}/`}
        render={() => (
          <AuthenticatedRouteGuard>
            <Redirect to={`${url}/profile`} />
          </AuthenticatedRouteGuard>
        )}
      />

      <Route
        exact
        path={`${url}/register`}
        render={() => (
          <PublicOnlyRouteGuard>
            <PageRegister />
          </PublicOnlyRouteGuard>
        )}
      />
      <Route
        exact
        path={`${url}/activate`}
        render={() => (
          <PublicOnlyRouteGuard>
            <PageActivate />
          </PublicOnlyRouteGuard>
        )}
      />
      <Route
        exact
        path={`${url}/reset`}
        render={() => (
          <PublicOnlyRouteGuard>
            <PageResetPasswordRequest />
          </PublicOnlyRouteGuard>
        )}
      />
      <Route
        exact
        path={`${url}/reset/finish`}
        render={() => (
          <PublicOnlyRouteGuard>
            <PageResetPasswordConfirm />
          </PublicOnlyRouteGuard>
        )}
      />

      <Route
        exact
        path={`${url}/profile`}
        render={() => (
          <AuthenticatedRouteGuard>
            <PageProfile />
          </AuthenticatedRouteGuard>
        )}
      />
      <Route
        exact
        path={`${url}/password`}
        render={() => (
          <AuthenticatedRouteGuard>
            <PagePassword />
          </AuthenticatedRouteGuard>
        )}
      />

      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default AccountRoutes;
