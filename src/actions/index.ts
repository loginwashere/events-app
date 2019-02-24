import { createAsyncAction, ActionType, createAction, } from 'typesafe-actions';
import { ThunkDispatch } from 'redux-thunk';
import * as api from '../api';
import { ActionTypes } from '../constants';
import { IRootState } from '../reducers/initialState';
import { IFetchAllResponse, IFetchAllEventsParams, } from '../api';

export const fetchAllEventsActions = createAsyncAction(
  ActionTypes.EVENTS_FETCH_REQUEST,
  ActionTypes.EVENTS_FETCH_SUCCESS,
  ActionTypes.EVENTS_FETCH_FALIURE,
)<void, IFetchAllResponse, void>();

export const fetchAll = (params?: IFetchAllEventsParams) => (
  dispatch: ThunkDispatch<IRootState, null, ActionType<typeof fetchAllEventsActions>>,
  getState: () => IRootState
) => {
  dispatch(fetchAllEventsActions.request());

  const eventsState = getState().events;

  const fetchParams = {
    page: params && params.page !== undefined
      ? params.page
      : eventsState.currentPage,
    rowsPerPage: params && params.rowsPerPage
      ? params.rowsPerPage
      : eventsState.rowsPerPage,
    since: eventsState.since,
    before: eventsState.before,
    overlaps:  params && params.overlaps
      ? params.overlaps
      : eventsState.overlaps,
  };

  return api.fetchAllEvents(fetchParams)
    .then((response) => {
      return dispatch(fetchAllEventsActions.success(response.data));
    })
    .catch(() => {
      return dispatch(fetchAllEventsActions.failure());
    });
};

export const fetchAllParamsChange = createAction(ActionTypes.EVENTS_FETCH_PARAMS_CHANGE, action => {
  return (params: IFetchAllEventsParams) => {
    return action(params);
  }
});
