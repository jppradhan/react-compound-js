import * as React from "react";
interface Props {
    formValues: any;
    children: (form: State) => React.ReactNode;
    onSubmit: (values: any) => void;
    onReset: () => void;
    validate?: any;
}
interface State {
    fields: any;
    isChanged: boolean;
    isValid: boolean;
}
export declare class Form extends React.Component<Props, State> {
    private formElem;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onSubmit;
    private onReset;
    private bindEvents;
    private unBindEvents;
    private setFormFields;
    private onFieldChange;
    private isValidField;
    private getFormValidity;
}
export {};
//# sourceMappingURL=Form.d.ts.map