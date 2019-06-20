import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import moment from 'moment';
import CalendarMonthView from '../../src';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const InputsContainer = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > p {
    margin-left: 10px;
  }
`;

export default class App extends Component {
  state = {
    showDefaultStyles: true,
    showSampleEvents: false
  };

  _handleShowDefaultStyleChange = e => {
    this.setState({ showDefaultStyles: e.target.checked });
  };

  _handleShowSampleEventsChange = e => {
    this.setState({ showSampleEvents: e.target.checked });
  };

  _renderDay = day => {
    const { showDefaultStyles, showSampleEvents } = this.state;
    if (!showSampleEvents) return;
    const date = moment(day);

    const diff = date.diff(moment().startOf('day'));
    if (diff === -259200000 || diff === 259200000) {
      return (
        <div
          style={{
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            backgroundImage: 'url(https://farm2.staticflickr.com/1203/1475793643_d911a66735_m.jpg)',
            backgroundSize: 'cover',
            borderRadius: showDefaultStyles ? 0 : '10%'
          }}
        />
      );
    }
  };

  render() {
    const { showDefaultStyles, showSampleEvents } = this.state;

    return (
      <div
        className="App"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: 'monospace'
        }}
      >
        <Title>React Calendar Month View</Title>
        <CalendarMonthView
          style={showDefaultStyles ? {} : { backgroundColor: '#222222', borderRadius: 10 }}
          renderDay={this._renderDay}
          titleTextStyle={showDefaultStyles ? {} : { color: 'white' }}
          dayNameTextStyle={showDefaultStyles ? {} : { color: 'lightgray' }}
          dayTextStyle={
            showDefaultStyles
              ? {}
              : {
                  fontFamily: 'serif',
                  color: 'white',
                  borderRadius: '25%'
                }
          }
          activeDayStyle={
            showDefaultStyles ? {} : { borderRadius: '10%', backgroundColor: '#314056' }
          }
          inactiveDayStyle={
            showDefaultStyles ? {} : { borderRadius: '10%', backgroundColor: '#333333' }
          }
        />
        <InputsContainer>
          <div>
            <input
              type="checkbox"
              checked={showDefaultStyles}
              onChange={this._handleShowDefaultStyleChange}
            />
            <p>Show Default Styles</p>
          </div>
          <div>
            <input
              type="checkbox"
              checked={showSampleEvents}
              onChange={this._handleShowSampleEventsChange}
            />
            <p>Show Sample Events</p>
          </div>
        </InputsContainer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
