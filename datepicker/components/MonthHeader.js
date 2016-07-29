import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/DateUtilities';

class MonthHeader extends Component {

  static defaultProps = {}

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired,
    setDisplayDate: PropTypes.func.isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date)
  }

  constructor(props) {
    super(props);
  }

  displayPreviousMonth = () => {
    const { setDisplayDate, displayDate } = this.props;
    setDisplayDate(DateUtilities.addMonthsToDate(displayDate, -1));
  }

  displayNextMonth = () => {
    const { setDisplayDate, displayDate } = this.props;
    setDisplayDate(DateUtilities.addMonthsToDate(displayDate, 1));
  }

  getMonthHeaderClassName = () => {
    const { displayDate, minimumDate, maximumDate} = this.props;

    var className = 'month-header';

    if (minimumDate && DateUtilities.areSameYearMonth(displayDate, minimumDate)) {
      className += ' minimum-date-month';
    }

    if (maximumDate && DateUtilities.areSameYearMonth(displayDate, maximumDate)) {
      className += ' maximum-date-month';
    }

    return className;
  }

  render () {
    const { displayDate } = this.props;
    return (
      <div className={this.getMonthHeaderClassName()}>
        <button type="button" onClick={() => this.displayPreviousMonth()} className={""} >{String.fromCharCode(9664)}</button>
        <h3>{DateUtilities.toMonthYearString(displayDate)}</h3>
        <button type="button" onClick={() => this.displayNextMonth()} className={""} >{String.fromCharCode(9654)}</button>
      </div>
    );
  }
}

export default MonthHeader;
