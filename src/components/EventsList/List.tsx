import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { routes } from '../../config';
import { IEventsState } from '../../reducers/initialState';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  fab: {
    position: 'fixed' as 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  titlePrimary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleSecondary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sideListItem: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  data: IEventsState;
}

class EventsList extends Component<IProps> {
  render() {
    const { classes, data } = this.props;

    const itemIds = data.pages[data.currentPage] || [];
    return (
      <React.Fragment>
        <List component="nav">
          {
            itemIds.map((id, index) => {
              const item = data.items[id];
              if (!item) {
                return null;
              }
              return (
                <NavLink
                  to={routes.events.view.replace(':id', id)}
                  className={classes.sideListItem}
                  key={index}
                >
                  <ListItem
                    button
                    dense={true}
                  >
                    <ListItemText
                      primary={item.label}
                      secondary={item.category}
                    />
                  </ListItem>
                </NavLink>
              )
            })
          }
        </List>
      </React.Fragment>
    );
  }
}

export const StyledEventsList = withStyles(styles, { withTheme: true })(EventsList);
