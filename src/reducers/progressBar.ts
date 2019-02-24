import { ActionType, getType } from 'typesafe-actions';
import { RootState, IProgressBarState } from './initialState';
import * as actions from '../actions';

export type Actions = ActionType<typeof actions.fetchAllEventsActions>;

export default (state: IProgressBarState = RootState.progressBar, action: Actions) => {
  switch (action.type) {
    case getType(actions.fetchAllEventsActions.request): {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case getType(actions.fetchAllEventsActions.success): {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case getType(actions.fetchAllEventsActions.failure): {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
