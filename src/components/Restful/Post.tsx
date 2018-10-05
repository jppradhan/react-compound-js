import * as React from "react";
import { PostProps, Options, State } from "./interface";

export class Post extends React.Component<PostProps, State> {
  public constructor(props: PostProps) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      data: null
    };
  }

  public render() {
    return this.props.children({
      post: this.post,
      loading: this.state.loading,
      error: this.state.error,
      data: this.state.data
    });
  }

  private post = (options: Options[]) => {
    const DEFAULT_HEADERS = {
      "content-type": "application/json; charset=utf-8"
    };
    const promises = options.map(o => {
      return fetch(o.url, {
        method: this.props.method || "POST",
        headers: o.headers || DEFAULT_HEADERS,
        body: o.body || ""
      }).then(res => res.json());
    });

    this.setState({
      loading: true
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
