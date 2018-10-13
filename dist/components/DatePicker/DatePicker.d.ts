import * as React from "react";
import "./styles.css";
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
export declare class DatePicker extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    private generateDays;
    private generateMonths;
    private generateYears;
    private goToMonth;
    private onSelectDate;
    private showMonthView;
    private hideMonthView;
    private showYearView;
    private hideYearView;
    private isToday;
}
export {};
//# sourceMappingURL=DatePicker.d.ts.map