Image cropper

```js
class App extends React.Component {
  constructor() {
    this.state = {
      source: "",
    };
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "500px", height: "500px", marginBottom: "50px" }}>
          <Crop
            onCrop={(src) => {
              this.setState({
                source: src,
              });
            }}
          />
        </div>

        <div
          style={{
            background: "#EEF1F2",
            height: "300px",
            width: "300px",
            margin: "0 auto",
            borderRadius: "4px",
            border: "1px dashed #c7c9ca",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {this.state.source && (
            <img src={this.state.source} style={{ marginLeft: "10px" }} />
          )}
        </div>
      </div>
    );
  }
}
<App />;
```
