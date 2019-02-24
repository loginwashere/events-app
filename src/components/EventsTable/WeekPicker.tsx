import React, { PureComponent } from "react";
import classNames from "classnames";

import { DatePicker } from "material-ui-pickers";
import { IconButton, withStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {startOfWeek, endOfWeek, getISOWeek, getYear, format, isSameDay, isWithinInterval} from 'date-fns';

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  value: Date;
  label?: string;
  onChange: (date: Date) => any;
}

class WeekPicker extends PureComponent<IProps> {
  handleWeekChange = (date: Date) => {
    this.props.onChange(startOfWeek(date));
  };

  formatWeekSelectLabel = (date: Date, invalidLabel: string) => {
    if (date === null) {
      return "";
    }

    return date ? `CW ${getISOWeek(date)}, ${getYear(date)}` : invalidLabel;
  };

  renderWrappedWeekDay = (date: Date, selectedDate: Date, dayInCurrentMonth: boolean) => {
    const { classes } = this.props;

    const start = startOfWeek(selectedDate);
    const end = endOfWeek(selectedDate);

    const dayIsBetween = isWithinInterval(date, {start, end});
    const isFirstDay = isSameDay(date, start);
    const isLastDay =isSameDay(date, end);

    const wrapperClassName = classNames({
      [classes.highlight as any]: dayIsBetween,
      [classes.firstHighlight as any]: isFirstDay,
      [classes.endHighlight as any]: isLastDay
    });

    const dayClassName = classNames(classes.day, {
      [classes.nonCurrentMonthDay as any]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay as any]: !dayInCurrentMonth && dayIsBetween
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {format(date, "d", { awareOfUnicodeTokens: true })} </span>
        </IconButton>
      </div>
    );
  };

  render() {
    const { value, label } = this.props;

    return (
      <div className="picker">
        <DatePicker
          label={label}
          value={value}
          onChange={this.handleWeekChange}
          renderDay={this.renderWrappedWeekDay}
          labelFunc={this.formatWeekSelectLabel}
        />
      </div>
    );
  }
}

const styles = (theme: Theme) => ({
  dayWrapper: {
    position: "relative" as 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit"
  },
  customDayHighlight: {
    position: "absolute" as 'absolute',
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%"
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled
  },
  highlightNonCurrentMonthDay: {
    color: "#676767"
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%"
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%"
  }
});

export default withStyles(styles, { withTheme: true })(WeekPicker);
