import * as React from "react";
import { GetProps, State } from "./interface";

export class Get extends React.Component<GetProps, State> {
  public constructor(props: GetProps) {
    super(props);
    this.state = {
      error: null,
      data: null,
      loading: true
    };
  }

  public componentDidMount() {
    this.fetch();
  }

  public render() {
    return this.props.children(this.state);
  }

  private fetch = () => {
    const { options } = this.props;
    const DEFAULT_HEADERS = {
      "content-type": "application/json; charset=utf-8"
    };
    const promises = options.map(o => {
      return fetch(o.url, {
        method: "GET",
        headers: o.headers || DEFAULT_HEADERS
      }).then(res => res.json());
    });

    return Promise.all(promises)
      .then(res => {
        this.setState({
          error: null,
          loading: false,
          data: res
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false,
          data: null
        });
      });
  };
}
