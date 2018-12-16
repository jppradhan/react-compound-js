import * as React from "react";
interface Props {
    value: string;
    dateFormat: string;
    label: React.ReactNode;
    name: string;
    format: "default" | "error" | "success";
    onChange?: (e: React.ChangeEvent<any>) => void;
}
interface State {
    selectedValue: string;
    showDatePicker: boolean;
}
export declare class InputDate extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    private setDateValue;
    private openDatePicker;
}
export {};
//# sourceMappingURL=InputDate.d.ts.map