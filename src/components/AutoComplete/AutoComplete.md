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
        values={[{ name: "Hello", id: 1 }, { name: "Hello 2", id: 2 }]}
        open={this.state.open}
      >
        <InputText
          type="text"
          label="Auto complete"
          name="default"
          value={this.state.text}
          onChange={e => {
            this.setState({
              text: e.target.value,
              open: !!this.state.text.length
            });
          }}
        />
      </AutoComplete>
    );
  }
}

<App />;
```
