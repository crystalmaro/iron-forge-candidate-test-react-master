import * as React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { DealershipInventoryActivity } from './components/activities/DealershipInventoryActivity/DealershipInventoryActivity';
import DealershipInventoryPage from './components/activities/DealershipInventoryPage/DealershipInventoryPage';
import { ApolloProvider } from '@apollo/react-hooks';
import * as apolloService from 'services/apolloService';

export const dealershipId = window.location.href.split('/').pop();

export const App: React.FC = () => {

  return (
    <ApolloProvider client={apolloService.getClient()}>
      <BrowserRouter>
        <Switch>

          <Route
            exact
            path='/'
            component={DealershipInventoryActivity} />

          <Route
            exact
            path={`/dealership/${dealershipId}`}
            component={DealershipInventoryPage} />

        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
