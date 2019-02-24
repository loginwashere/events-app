import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Header from '../../containers/Header';
import EventsList from '../../pages/EventsList';
import EventsNew from '../../pages/EventsNew';
import EventsView from '../../pages/EventsView';
import NoMatch from '../../pages/NoMatch';
import { routes } from '../../config';
import { Store } from 'redux';
import { IRootState } from '../../reducers/initialState';
import { History } from 'history';
import { Persistor } from 'redux-persist';

export interface IProps {
  store: {
    store: Store<IRootState>;
    persistor: Persistor;
  };
  history: History;
}

const Root = ({ store, history }: IProps) => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path={routes.events.list} component={EventsList} />
              <Route path={routes.events.new} component={EventsNew} />
              <Route path={routes.events.view} component={EventsView} />
              <Route path={routes.default} component={EventsList} exact={true} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    </PersistGate>
  </Provider>
);

export default Root;
