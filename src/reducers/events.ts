import { ActionType, getType } from 'typesafe-actions';
import { RootState, IEventsState, IEvents, IEvent, IPages, IRootState } from './initialState';
import * as actions from '../actions';
import { RehydrateAction, REHYDRATE } from 'redux-persist';
import {startOfWeek, endOfWeek} from 'date-fns';

export type Actions = ActionType<typeof actions.fetchAllEventsActions|typeof actions.fetchAllParamsChange|RehydrateAction<IRootState>>;

export default (state: IEventsState = RootState.events, action: Actions) => {
  switch (action.type) {
    case getType(actions.fetchAllEventsActions.success): {
      const items: IEvents = action.payload.results
        .reduce((result: IEvents, current: IEvent) => {
          if (!current.id) {
            return result;
          }
          return {...result, [current.id]: current}
        }, {});

      const pages: IPages = state.pages;
      pages[state.currentPage] = Object.keys(items)
        .filter((id: string) => items[id]);
      return {
        ...state,
        items: {
          ...state.items,
          ...items,
        },
        pages,
        totalCount: action.payload.count,
      };
    }
    case getType(actions.fetchAllParamsChange): {
      const change = {
        currentPage: action.payload.page !== undefined
          ? action.payload.page
          : state.currentPage,
        rowsPerPage: action.payload.rowsPerPage
          ? action.payload.rowsPerPage
          : state.rowsPerPage,
        since: action.payload.since
          ? action.payload.since
          : state.since,
        before: action.payload.before
          ? action.payload.before
          : state.before,
      }
      return {
        ...state,
        ...change,
      };
    }
    case REHYDRATE: {
      const now = new Date();
      return {
        ...state,
        since: state.since
          ? new Date(state.since)
          : startOfWeek(now),
        before: state.before
          ? new Date(state.before)
          : endOfWeek(now),
      }
    }
    default:
      return state;
  }
};
