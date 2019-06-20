/**
 * @file This file handles the rendering of the headers for the calendar (The names of the days)
 * @author Alwyn Tan
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Th = styled.th`
  font-weight: 500;

  p {
    margin: 0 0 20% 0;
  }
`;

const DAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export default class TableHeaders extends Component {
  static propTypes = {
    dayNameTextStyle: PropTypes.object
  };

  _renderDays = () => {
    const { dayNameTextStyle } = this.props;
    return DAYS.map(day => (
      <Th key={day}>
        <p style={dayNameTextStyle}>{day}</p>
      </Th>
    ));
  };

  render() {
    return <tr>{this._renderDays()}</tr>;
  }
}
