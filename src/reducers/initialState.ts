import { RouterState } from 'connected-react-router';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE, Overlaps } from '../api';
import {startOfWeek, endOfWeek} from 'date-fns';

export interface IProgressBarState {
  loading: boolean;
  loaded: boolean;
  date: Date;
}

export interface IEvent {
  id?: string;
  start: Date;
  end: Date;
  category: string;
  label: string;
}

export interface IEvents {
  [key: string]: IEvent;
}

export interface IPages {
  [key: number]: string[];
}

export interface IEventsState {
  items: IEvents;
  pages: IPages;
  currentPage: number;
  rowsPerPage: number;
  totalCount: number;
  since: Date;
  before: Date;
  overlaps: Overlaps;
  loading: boolean;
  loaded: boolean;
}

export interface IRootState {
  progressBar: IProgressBarState;
  events: IEventsState;
  router?: RouterState;
}

const now = new Date();

export const RootState: IRootState = {
  progressBar: {
    loading: false,
    loaded: false,
    date: new Date(),
  },
  events: {
    items: {},
    pages: [],
    currentPage: DEFAULT_PAGE,
    rowsPerPage: DEFAULT_PER_PAGE,
    since: startOfWeek(now),
    before: endOfWeek(now),
    overlaps: Overlaps.Unknown,
    totalCount: 0,
    loading: false,
    loaded: false,
  }
};
