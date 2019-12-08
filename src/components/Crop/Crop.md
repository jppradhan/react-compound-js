Image cropper

```js
class App extends React.Component {
  constructor() {
    this.state = {
      source: ""
    };
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "500px", height: "500px", marginBottom: "50px" }}>
          <Crop
            onCrop={src => {
              this.setState({
                source: src
              });
            }}
          />
        </div>
        {this.state.source && (
          <img src={this.state.source} style={{ marginLeft: "10px" }} />
        )}
      </div>
    );
  }
}
<App />;
```
