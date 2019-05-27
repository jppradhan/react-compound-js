AutoComplete example:

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      text: ""
    };
  }

  render() {
    return (
      <AutoComplete
        values={[
          { name: "Hello", id: 1 },
          { name: "Hello 2", id: 2 },
          { name: "Hello 3", id: 3 },
          { name: "Hello 3", id: 4 },
          { name: "Hello 5", id: 5 },
          { name: "Hello 6", id: 6 },
          { name: "Hello 7", id: 7 }
        ]}
        open={this.state.open}
        onEnter={value => {
          this.setState({
            text: value.name
          });
        }}
      >
        <InputText
          type="text"
          label="Auto complete"
          name="default"
          value={this.state.text}
          onChange={e => {
            this.setState({
              text: e.target.value,
              open: !!e.target.value.length
            });
          }}
          onBlur={() => {
            this.setState({
              open: false
            });
          }}
        />
      </AutoComplete>
    );
  }
}

<App />;
```
