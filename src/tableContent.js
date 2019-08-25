/**
 * @file The content of the calendar rendered in 7 day columns, and 6 week rows
 * @author Alwyn Tan
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { COLORS, fadeIn } from './constants';

const TD = styled.td`
  width: 14.28571429%;
  position: relative;
  background-color: ${props =>
    props.smallCalendar ? 'white' : props.isToday ? COLORS.lightgray : COLORS.verylightgray};
  border: ${`1px solid lightgray`};
  border-width: ${props => (props.smallCalendar && props.isToday ? '0.1em' : '0px')};
  animation: ${fadeIn} 0.5s ease;
  box-sizing: border-box;

  :after {
    content: '';
    display: block;
    margin-top: 100%;
  }

  > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const DayNumber = styled.div`
  width: 30px;
  height: 30px;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.smallCalendar ? 0 : '6% 10% 0 0')};
  left: ${props => (props.smallCalendar ? 'calc(50% - 14px)' : 'unset')};
  top: ${props => (props.smallCalendar ? 'calc(50% - 14px)' : 0)};
  right: 0;

  p {
    margin: 0;
    font-weight: ${props => (props.isToday ? 800 : 400)};
  }
`;

// rows represents week of month, and each column represents a day
export default class TableContent extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(moment).isRequired,
    smallCalendar: PropTypes.bool,
    renderDay: PropTypes.func,
    dayTextStyle: PropTypes.object,
    activeDayStyle: PropTypes.object,
    inactiveDayStyle: PropTypes.object
  };

  static defaultProps = {
    renderDay: () => {}
  };

  // renders the calendar days, split by weeks per calendar row
  _renderCalendar = () => {
    const { date } = this.props;

    let currDayInMonth = moment(date).startOf('month');
    let endOfMonth = moment(date).endOf('month');

    const daysElementArray = [];

    while (currDayInMonth.isBefore(endOfMonth)) {
      daysElementArray.push(
        <tr key={currDayInMonth.format()}>{this._renderByWeek(currDayInMonth)}</tr>
      );
    }

    return daysElementArray;
  };

  // currDayInMonth is an object that will be mutated by this function!
  // as we render each day, we will increment the count by 1
  _renderByWeek = currDayInMonth => {
    const { smallCalendar, renderDay, dayTextStyle, activeDayStyle, inactiveDayStyle } = this.props;
    const currentMonth = currDayInMonth.month();

    // these change when the while loop detects the first or last day of month
    let isFirstWeek = false;
    let isLastWeek = false;

    let daysToRender = [];

    // Days rendered in a week must be at least 1, and we want to stop on the next sunday
    // Also, we want to make sure that we don't overshoot to the next month
    while (
      (daysToRender.length === 0 || currDayInMonth.isoWeekday() % 7 !== 0) &&
      currDayInMonth.month() <= currentMonth
    ) {
      const isToday = currDayInMonth.diff(moment().startOf('day'), 'days') === 0;

      daysToRender.push(
        <TD
          key={currDayInMonth.format('DDMMYY')}
          isToday={isToday}
          smallCalendar={smallCalendar}
          style={isToday ? activeDayStyle : inactiveDayStyle}
        >
          {renderDay(currDayInMonth.toISOString(), smallCalendar)}
          <DayNumber isToday={isToday} smallCalendar={smallCalendar} style={dayTextStyle}>
            <p>{currDayInMonth.format('D')}</p>
          </DayNumber>
        </TD>
      );

      // sets if the current day is the first or last week
      if (currDayInMonth.diff(moment(currDayInMonth).startOf('month'), 'days') === 0) {
        isFirstWeek = true;
      } else if (currDayInMonth.diff(moment(currDayInMonth).endOf('month'), 'days') === 0) {
        isLastWeek = true;
      }

      currDayInMonth.add(1, 'days');
    }

    if (isFirstWeek) {
      // if first week, we want to pad blank elements at the start
      for (let i = daysToRender.length; i < 7; i++) {
        daysToRender.unshift(
          <TD
            key={currDayInMonth.format('M') + i}
            smallCalendar={smallCalendar}
            style={inactiveDayStyle}
          >
            <div />
          </TD>
        );
      }
    } else if (isLastWeek) {
      //if last week, we want to pad blank elements at the end
      for (let i = daysToRender.length; i < 7; i++) {
        daysToRender.push(
          <TD
            key={currDayInMonth.format('M') + i}
            smallCalendar={smallCalendar}
            style={inactiveDayStyle}
          >
            <div />
          </TD>
        );
      }
    }

    return daysToRender;
  };

  render() {
    return <React.Fragment>{this._renderCalendar()}</React.Fragment>;
  }
}
