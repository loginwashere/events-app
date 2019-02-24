import { combineReducers, } from 'redux';
import { connectRouter, RouterAction } from 'connected-react-router';
import { History } from 'history';
import { IRootState } from './initialState';
import progressBar from './progressBar';
import events, {Actions as EventsActions} from './events';

export type RootActions = RouterAction|EventsActions;

export default (history: History) => combineReducers<IRootState>({
  progressBar,
  events,
  router: connectRouter(history),
});
