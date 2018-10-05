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

export class Form extends React.Component<Props, State> {
  private formElem: HTMLFormElement | null = null;

  public constructor(props: Props) {
    super(props);
    this.state = {
      fields: this.setFormFields(),
      isChanged: false,
      isValid: false
    };
  }

  public componentDidMount() {
    this.bindEvents();
  }

  public componentWillUnmount() {
    this.unBindEvents();
  }

  public render() {
    const { children } = this.props;
    return <form ref={e => (this.formElem = e)}>{children(this.state)}</form>;
  }

  private onSubmit = (e: Event) => {
    e.preventDefault();
    const newValues = {};
    const { fields } = this.state;
    for (const key in fields) {
      newValues[fields[key].name] = fields[key].value;
    }
    this.props.onSubmit(newValues);
  };

  private onReset = (e: Event) => {
    e.preventDefault();
    this.setState({
      fields: this.setFormFields(),
      isChanged: false,
      isValid: this.getFormValidity()
    });
    this.props.onReset();
  };

  private bindEvents = () => {
    if (this.formElem) {
      this.formElem.addEventListener("submit", this.onSubmit);
      this.formElem.addEventListener("reset", this.onReset);
    }
  };

  private unBindEvents = () => {
    if (this.formElem) {
      this.formElem.removeEventListener("submit", this.onSubmit);
      this.formElem.removeEventListener("reset", this.onReset);
    }
  };

  private setFormFields = () => {
    const { formValues, validate } = this.props;
    const newFormState = {};
    for (const key in formValues) {
      newFormState[key] = {
        name: key,
        value: formValues[key],
        onChange: (e: React.ChangeEvent<any>) => {
          this.onFieldChange(key, e.target.value);
        },
        format:
          validate && this.isValidField(validate[key], formValues[key])
            ? "default"
            : "error",
        isValid: validate
          ? this.isValidField(validate[key], formValues[key])
          : true
      };
    }
    return newFormState;
  };

  private onFieldChange = (key: string, newValue: any) => {
    const { validate } = this.props;
    this.setState(
      prevState => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [key]: {
            ...prevState.fields[key],
            value: newValue,
            format:
              validate && this.isValidField(validate[key], newValue)
                ? "success"
                : "error",
            isValid: validate
              ? this.isValidField(validate[key], newValue)
              : true
          }
        },
        isChanged: true
      }),
      () => {
        this.setState({
          isValid: this.getFormValidity()
        });
      }
    );
  };

  private isValidField = (rule: string, newValue: any) => {
    return new RegExp(rule).test(newValue);
  };

  private getFormValidity = () => {
    let valid = true;
    for (const key in this.state.fields) {
      if (!this.state.fields[key].isValid) {
        valid = false;
        break;
      }
    }
    return valid;
  };
}
