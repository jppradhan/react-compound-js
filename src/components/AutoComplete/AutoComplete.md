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
          { name: "Hello 7", id: 7 },
          { name: "Hello 8", id: 8 },
          { name: "Hello 9", id: 9 },
          { name: "Hello 10", id: 10 },
          { name: "Hello 11", id: 11 },
          { name: "Hello 12", id: 12 }
        ]}
        open={this.state.open}
        onEnter={value => {
          this.setState({
            text: value.name,
            open: false
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
        />
      </AutoComplete>
    );
  }
}

<App />;
```
