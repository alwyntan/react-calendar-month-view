# react-calendar-month-view [![npm version](https://badge.fury.io/js/react-calendar-month-view.svg)](https://badge.fury.io/js/react-calendar-month-view)

A simple and customizable monthly calendar component view.

## Demo & Examples

[Live Demo](https://alwyntan.github.io/react-calendar-month-view/)

To build the examples locally, clone this repo and run:

```js
npm install
npm start
```

or

```js
yarn install
yarn start
```

Then open [`localhost:8080`](http://localhost:8080) in a browser.

## Installation

Install directly from NPM:

```js
npm install react-calendar-month-view --save
```

or

```js
yarn add react-calendar-month-view
```

## Usage

Use this component to display a month view of a calendar with supplied event duration indicators.

```jsx
import CalendarMonthView from 'react-calendar-month-view';

class App extends Component {
  // date is given as an ISO-8601 string
  _renderDay = date => {
    // return a component to render for the given date
  };

  render() {
    return <CalendarMonthView renderDay={this._renderDay} />;
  }
}
```

### Props

The defaults for the props are null, except for renderDay, which is a function that returns nothing.

| prop             | type     | description                                                                                                                                                        |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| renderDay        | function | Callback used to render a given day. renderDay will be called a string parameter in the format of a ISO-8601 string that represents the current day being rendered |
| titleTextStyle   | object   | Custom styles for the title text                                                                                                                                   |
| dayNameTextStyle | object   | Custom styles for the day names (header row of the calendar)                                                                                                       |
| dayTextStyle     | object   | Custom styles for the numbers that correspond to the days on the calendar                                                                                          |
| activeDayStyle   | object   | Custom styles for the calendar tile corresponding to the current day                                                                                               |
| inactiveDayStyle | object   | Custom styles for the calendar tile corresponding days that are not the current day                                                                                |
