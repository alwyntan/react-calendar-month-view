import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from './topBar';
import TableHeaders from './tableHeaders';
import TableContent from './tableContent';
import { COLORS, SMALL_CALENDAR_WIDTH } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '90%'};
  max-width: 1000px;
  min-width: 300px;
  padding: 1%;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  color: ${COLORS.gray};
  border-spacing: 4px;
`;

export default class CalendarMonthView extends Component {
  static propTypes = {
    // renderDay is a callback, which allows custom rendering of the given date onto the div
    // render day is called with a parameter for ISO-8601 string of the current day
    renderDay: PropTypes.func,
    width: PropTypes.string,
    style: PropTypes.object,
    titleTextStyle: PropTypes.object,
    dayNameTextStyle: PropTypes.object,
    dayTextStyle: PropTypes.object,
    activeDayStyle: PropTypes.object,
    inactiveDayStyle: PropTypes.object,
    onMonthChange: PropTypes.func
  };

  static defaultProps = {
    renderDay: (date, isSmallCalendar) => {},
    onMonthChange: () => {}
  };

  state = {
    date: moment().startOf('month'), // always set moment to the start of the month (days don't matter)
    smallCalendar: false // detects if the calendar should be rendered with the small calendar style
  };

  // detects the calendar size when the window is being resized
  // if smaller than the calendar width, we will update the state to render the small calendar styles
  _handleWindowResize = () => {
    const { smallCalendar } = this.state;
    if (this.calendar.clientWidth <= SMALL_CALENDAR_WIDTH && !smallCalendar) {
      this.setState({ smallCalendar: true });
    } else if (this.calendar.clientWidth > SMALL_CALENDAR_WIDTH && smallCalendar) {
      this.setState({ smallCalendar: false });
    }
  };

  // tracks the size of the component through window resize events
  componentDidMount() {
    this._handleWindowResize();
    window.addEventListener('resize', this._handleWindowResize);
    this.props.onMonthChange(
      moment(this.state.date)
        .startOf('month')
        .toISOString()
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleWindowResize);
  }

  _handleMonthChange = months => {
    const { onMonthChange } = this.props;

    const newDate = this.state.date.add(months, 'month');
    this.setState({ date: newDate });

    onMonthChange(
      moment(newDate)
        .startOf('month')
        .toISOString()
    );
  };

  render() {
    const { date, smallCalendar } = this.state;
    const {
      renderDay,
      style,
      titleTextStyle,
      dayNameTextStyle,
      dayTextStyle,
      activeDayStyle,
      inactiveDayStyle,
      width
    } = this.props;
    return (
      <Container ref={ref => (this.calendar = ref)} style={style} width={width}>
        <TopBar
          date={date}
          onPrevClick={() => this._handleMonthChange(-1)}
          onNextClick={() => this._handleMonthChange(1)}
          titleTextStyle={titleTextStyle}
        />
        <Table>
          <tbody>
            <TableHeaders dayNameTextStyle={dayNameTextStyle} />
            <TableContent
              date={date}
              smallCalendar={smallCalendar}
              renderDay={renderDay}
              dayTextStyle={dayTextStyle}
              activeDayStyle={activeDayStyle}
              inactiveDayStyle={inactiveDayStyle}
            />
          </tbody>
        </Table>
      </Container>
    );
  }
}
