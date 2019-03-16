import * as React from "react";
//@ts-ignore
import ArrowIcon from "../../icons/right-arrow.svg";
import {
  MONTHS,
  getDaysInMonth,
  YEAR_START,
  YEAR_END,
  formatDate,
  stringToDate
} from "./utils";
import {
  Root,
  Header,
  Arrow,
  MonthYear,
  StyledDate,
  StyledDays,
  StyledMonth,
  StyledYear,
  StyledMonthView,
  StyledYearView
} from "./styles";

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
  static dayStyles = (options: any) => ({
    today: options.today,
    selected: options.selected,
    disabled: options.disabled
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
      <Root>
        <Header>
          <Arrow onClick={() => this.goToMonth(currentMonth - 1)} leftArrow>
            <ArrowIcon width={15} height={15} />
          </Arrow>
          <MonthYear>
            <span onClick={this.showMonthView}>{MONTHS[currentMonth]}</span>
            <span onClick={this.showYearView}>{currentYear}</span>
          </MonthYear>
          <Arrow onClick={() => this.goToMonth(currentMonth + 1)} rightArrow>
            <ArrowIcon width={15} height={15} />
          </Arrow>
        </Header>
        <StyledDate>
          {this.generateDays(currentDay, currentMonth, currentYear)}
        </StyledDate>
        {this.state.showMonth ? (
          <StyledMonthView>{this.generateMonths(currentYear)}</StyledMonthView>
        ) : null}
        {this.state.showYear ? (
          <StyledYearView>{this.generateYears()}</StyledYearView>
        ) : null}
      </Root>
    );
  }

  private generateDays = (day: number, month: number, year: number) => {
    const days = [];
    const daysInMonth = getDaysInMonth(month + 1, year);
    for (let i = 0; i < 31; i += 1) {
      days.push(
        <StyledDays
          key={`DAYS_${i}`}
          onClick={() => this.onSelectDate(i, month, year)}
          {...DatePicker.dayStyles({
            today: this.state.today,
            selected: i === day,
            disabled: i >= daysInMonth
          })}
        >
          {i + 1}
        </StyledDays>
      );
    }
    return days;
  };

  private generateMonths = (year: number) => {
    const months = [];
    for (let i = 0; i < MONTHS.length; i += 1) {
      months.push(
        <StyledMonth
          key={`MONTH_${i}`}
          onClick={() => {
            this.onSelectDate(0, i, year);
            this.hideMonthView();
          }}
        >
          {MONTHS[i].substring(0, 3)}
        </StyledMonth>
      );
    }
    return months;
  };

  private generateYears = () => {
    const years = [];
    for (let i = YEAR_START; i < YEAR_END; i += 1) {
      years.push(
        <StyledYear
          key={`YEAR_${i}`}
          onClick={() => {
            this.onSelectDate(0, 0, i);
            this.hideYearView();
          }}
        >
          {i}
        </StyledYear>
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
