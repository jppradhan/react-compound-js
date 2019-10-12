TagSelect example:

```js
class App extends React.component {
  constructor() {
    this.state = {
      tags: []
    };
  }

  handleRemove = tag => {
    this.setState({
      tags: this.state.tags.filter(tag => tag.label !== tag.label)
    });
  };

  handleUpdate = newTags => {
    this.setState({
      tags: newTags
    });
  };

  render() {
    return (
      <TagSelect
        placeholder="Add tags"
        onRemove={handleRemove}
        tags={this.state.tags}
        onUpdate={handleUpdate}
      />
    );
  }
}

<App />;
```
