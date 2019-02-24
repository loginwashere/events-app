import React, { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { IEventsState, IProgressBarState } from '../../reducers/initialState';
import { IFetchAllEventsParams } from '../../api';
import Table from '../../components/EventsTable/Table';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export interface IProps<ClassKey extends string = string> extends React.ClassAttributes<CurrencyListPage> {
  events: IEventsState;
  progressBar: IProgressBarState;
  classes: Partial<ClassNameMap<ClassKey>>;
  fetchItems(params?: IFetchAllEventsParams): any;
  changeParam(params: IFetchAllEventsParams): any;
}

class CurrencyListPage extends Component<IProps> {
  componentDidMount() {
    if (!this.props.events.loaded) {
      this.props.fetchItems();
    }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (
      this.props.events.currentPage !== nextProps.events.currentPage ||
      this.props.events.rowsPerPage !== nextProps.events.rowsPerPage ||
      this.props.events.since !== nextProps.events.since ||
      this.props.events.before !== nextProps.events.before
    ) {
      this.props.fetchItems();
    }
  }

  render() {
    const { classes, events, progressBar } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Paper className={classes.root} elevation={1}>
            <Table
              events={events}
              progressBar={progressBar}
              changeParam={this.props.changeParam}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CurrencyListPage);
