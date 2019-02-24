import React, { ChangeEvent } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import TablePaginatedActions from './TablePaginatedActions';
import { IProgressBarState, IEventsState, IEvent } from '../../reducers/initialState';
import { IFetchAllEventsParams, DEFAULT_PAGE } from '../../api';
import {startOfWeek, endOfWeek} from 'date-fns';
import WeekPicker from './WeekPicker';

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto' as 'auto',
  },
});

export interface IProps<ClassKey extends string = string> {
  progressBar: IProgressBarState;
  events: IEventsState;
  classes: Partial<ClassNameMap<ClassKey>>;
  changeParam(params: IFetchAllEventsParams): any;
}

export interface IState {
  isDrawerOpen: boolean;
}

type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
  target: T;
}

class CustomPaginationActionsTable extends React.Component<IProps> {
  handleDateChange = (date: Date) => {
    this.props.changeParam({
      since: startOfWeek(date),
      before: endOfWeek(date),
      page: DEFAULT_PAGE,
    });
  };

  handleChangePage = (event: React.MouseEvent<HTMLElement>|null, page: number) => {
    this.props.changeParam({page});
  };

  handleChangeRowsPerPage = (event: HTMLElementEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.props.changeParam({page: DEFAULT_PAGE, rowsPerPage: parseInt(event.target.value, 10) });
  };

  render() {
    const { classes, events, } = this.props;
    const { items, pages, rowsPerPage, currentPage, totalCount } = events;
    const itemIds = pages[currentPage] || [];
    let emptyRows;
    emptyRows = rowsPerPage - Math.min(rowsPerPage, itemIds.length - currentPage * rowsPerPage);
    emptyRows = emptyRows >= rowsPerPage
      ? 0
      : emptyRows;
    return (
        <div className={classes.tableWrapper}>
          <WeekPicker value={events.since} onChange={this.handleDateChange} label="Current week" />
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">EndDate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemIds
                .filter(id => items[id])
                .map(id => items[id])
                .map((row: IEvent) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                  <TableCell align="center" style={{backgroundColor: row.category}}>
                    <span style={{backgroundColor: 'white'}}>{row.category}</span>
                  </TableCell>
                  <TableCell align="right">{new Date(row.start).toLocaleString()}</TableCell>
                  <TableCell align="right">{new Date(row.end).toLocaleString()}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={totalCount}
                  rowsPerPage={rowsPerPage}
                  page={currentPage}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginatedActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomPaginationActionsTable);
