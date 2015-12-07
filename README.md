React Component DatePicker
=====================

[![npm version](https://badge.fury.io/js/react-component-date-picker.svg)](https://badge.fury.io/js/react-component-date-picker)

Usage
=======

`npm install react-component-date-picker`

Then you can `import` or `require` with your preferred module builder.

`import { DatePicker, DateUtilities } from 'react-component-date-picker'`

Or

```
var reactDatePicker = require('react-component-date-picker);

var DatePicker = reactDatePicker.DatePicker;

```

An example in **es2015** and **jsx**:

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { DatePicker, DateUtilities } from '../datepicker/index';

function mapStateToProps(state) {
  return {
    date: state.date
  };
}

class App extends Component {

  render() {
    const { date, onChange } = this.props;
    return (
      <div>
        <input type={"text"} className={"date-picker-trigger"} value={DateUtilities.toYearMonthDateString(date)} readOnly></input>
        <DatePicker visible={true} displayDate={new Date()} selectedDate={date} onChange={onChange}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
```
