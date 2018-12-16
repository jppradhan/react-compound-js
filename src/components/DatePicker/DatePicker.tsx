import * as React from "react";
import cx from "classnames";
//@ts-ignore
import Arrow from "../../icons/right-arrow.svg";
import {
  MONTHS,
  getDaysInMonth,
  YEAR_START,
  YEAR_END,
  formatDate,
  stringToDate
} from "./utils";
import styles from "./styles.scss";

interface Props {
  currentDate: string;
  onSelectDate: (date: string) => void;
  format: string;
}

interface State {
  currentMonth: number;
  currentYear: number;
  currentDay: number;
  selectedDate: string;
  today: boolean;
  showMonth: boolean;
  showYear: boolean;
}

export class DatePicker extends React.Component<Props, State> {
  static dayStyles = (options: any) =>
    cx({
      [styles.days]: true,
      [styles.today]: options.today,
      [styles.selected]: options.selected,
      [styles.disabled]: options.disabled
    });

  public constructor(props: Props) {
    super(props);
    const strToDate = stringToDate("dd-mm-yyyy", this.props.currentDate);
    const curDate = new Date(Date.parse(strToDate));
    this.state = {
      currentMonth: curDate.getMonth(),
      currentYear: curDate.getFullYear(),
      currentDay: curDate.getDate(),
      selectedDate: strToDate,
      today: this.isToday(
        curDate.getDate(),
        curDate.getMonth(),
        curDate.getFullYear()
      ),
      showMonth: false,
      showYear: false
    };
  }

  public render() {
    const { currentDay, currentMonth, currentYear } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <span
            className={cx([styles.arrow, styles.leftArrow])}
            onClick={() => this.goToMonth(currentMonth - 1)}
          >
            <Arrow width={15} height={15} />
          </span>
          <div className={styles.monthYear}>
            <span onClick={this.showMonthView}>{MONTHS[currentMonth]}</span>
            <span onClick={this.showYearView}>{currentYear}</span>
          </div>
          <span
            className={cx([styles.arrow, styles.rightArrow])}
            onClick={() => this.goToMonth(currentMonth + 1)}
          >
            <Arrow width={15} height={15} />
          </span>
        </div>
        <div className={styles.date}>
          {this.generateDays(currentDay, currentMonth, currentYear)}
        </div>
        {this.state.showMonth ? (
          <div className={styles.monthView}>
            {this.generateMonths(currentYear)}
          </div>
        ) : null}
        {this.state.showYear ? (
          <div className={styles.yearView}>{this.generateYears()}</div>
        ) : null}
      </div>
    );
  }

  private generateDays = (day: number, month: number, year: number) => {
    const days = [];
    const daysInMonth = getDaysInMonth(month + 1, year);
    for (let i = 0; i < 31; i += 1) {
      days.push(
        <div
          className={DatePicker.dayStyles({
            today: this.state.today,
            selected: i === day,
            disabled: i >= daysInMonth
          })}
          key={`DAYS_${i}`}
          onClick={() => this.onSelectDate(i, month, year)}
        >
          {i + 1}
        </div>
      );
    }
    return days;
  };

  private generateMonths = (year: number) => {
    const months = [];
    for (let i = 0; i < MONTHS.length; i += 1) {
      months.push(
        <div
          className={styles.month}
          key={`MONTH_${i}`}
          onClick={() => {
            this.onSelectDate(0, i, year);
            this.hideMonthView();
          }}
        >
          {MONTHS[i].substring(0, 3)}
        </div>
      );
    }
    return months;
  };

  private generateYears = () => {
    const years = [];
    for (let i = YEAR_START; i < YEAR_END; i += 1) {
      years.push(
        <div
          className={styles.year}
          key={`YEAR_${i}`}
          onClick={() => {
            this.onSelectDate(0, 0, i);
            this.hideYearView();
          }}
        >
          {i}
        </div>
      );
    }
    return years;
  };

  private goToMonth = (month: number) => {
    if (month < 0 || month >= MONTHS.length) {
      return;
    }
    this.setState({
      currentMonth: month
    });
  };

  private onSelectDate = (day: number, month: number, year: number) => {
    this.setState(
      {
        currentDay: day,
        currentMonth: month,
        currentYear: year,
        selectedDate: formatDate(this.props.format, day + 1, month + 1, year)
      },
      () => {
        if (!this.state.showMonth && !this.state.showMonth) {
          this.props.onSelectDate(this.state.selectedDate);
        }
      }
    );
  };

  private showMonthView = () => {
    this.setState({
      showMonth: true
    });
  };

  private hideMonthView = () => {
    this.setState({
      showMonth: false
    });
  };

  private showYearView = () => {
    this.setState({
      showYear: true,
      showMonth: false
    });
  };

  private hideYearView = () => {
    this.setState({
      showYear: false,
      showMonth: true
    });
  };

  private isToday = (day: number, month: number, year: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };
}
