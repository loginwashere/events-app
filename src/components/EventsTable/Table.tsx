import React, { ChangeEvent, SyntheticEvent } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import TablePaginatedActions from './TablePaginatedActions';
import { IProgressBarState, IEventsState, IEvent } from '../../reducers/initialState';
import { IFetchAllEventsParams, DEFAULT_PAGE, Overlaps } from '../../api';
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
    overflowX: 'hidden' as 'hidden',
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

  handleChange = (event: HTMLElementEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    this.props.changeParam({page: DEFAULT_PAGE, overlaps: event.target.value as any});
  };

  render() {
    const { classes, events, progressBar, } = this.props;
    const { items, pages, rowsPerPage, currentPage, totalCount } = events;
    const itemIds = pages[currentPage] || [];
    let emptyRows;
    emptyRows = rowsPerPage - Math.min(rowsPerPage, itemIds.length - currentPage * rowsPerPage);
    emptyRows = emptyRows >= rowsPerPage
      ? 0
      : emptyRows;
    return (
        <div className={classes.tableWrapper}>
          <FormGroup row={true}>
            <WeekPicker value={events.since} onChange={this.handleDateChange} label="Current week" />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="overlaps">Overlaps</InputLabel>
              <Select
                value={events.overlaps}
                onChange={this.handleChange}
                inputProps={{
                  name: 'overlaps',
                  id: 'overlaps',
                }}
              >
                <MenuItem value={Overlaps.Unknown}>Unknown</MenuItem>
                <MenuItem value={Overlaps.Yes}>Yes</MenuItem>
                <MenuItem value={Overlaps.No}>No</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Label</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">EndDate</TableCell>
              </TableRow>
            </TableHead>
            <Slide direction="left" in={progressBar.loaded} mountOnEnter={true} unmountOnExit={true} exit={false}>
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
            </Slide>
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
