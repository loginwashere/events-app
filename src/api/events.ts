import axios, { AxiosPromise } from 'axios';
import { IEvent } from '../reducers/initialState';

export interface IFetchAllResponse {
  count: number;
  next: string|null;
  previous: string|null;
  results: IEvent[];
}

export enum Format {
  json = 'json',
}

export enum Overlaps {
  Unknown = 1,
  Yes,
  No,
}

export interface IFetchAllEventsParams {
  page?: number;
  rowsPerPage?: number;
  format?: Format;
  overlaps?: Overlaps;
  since?: Date;
  before?: Date;
}

export const DEFAULT_PAGE = 0;
export const DEFAULT_PER_PAGE = 10;

export const fetchAllEvents = ({
  since,
  before,
  page,
  rowsPerPage,
  format,
  overlaps,
}: IFetchAllEventsParams): AxiosPromise<IFetchAllResponse> => axios({
  method: 'get',
  url: '/calendar/',
  params: {
    since: since
      ? since.toISOString()
      : undefined,
    before: before
        ? before.toISOString()
        : undefined,
    overlaps: overlaps || Overlaps.Unknown,
    page: (page || DEFAULT_PAGE) + 1,
    paginate_by: rowsPerPage || DEFAULT_PER_PAGE,
    format: format || Format.json,
  },
});
