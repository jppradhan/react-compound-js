TagSelect example:

```jsx
const TagSelectExample = () => {
  const [tags, setTags] = React.useState([
    { label: "tag 1" },
    { label: "tag 2" },
    { label: "tag 3" },
    { label: "tag 4" }
  ]);

  const onRemove = tag => {
    const updatedTags = tags.filter(_tag => {
      return _tag.label !== tag.label;
    });
    setTags(updatedTags);
  };

  const onUpdate = tags => {
    setTags(tags);
  };

  return (
    <TagSelect
      placeholder="Add tags"
      onRemove={onRemove}
      tags={tags}
      onUpdate={onUpdate}
    />
  );
};

<TagSelectExample />;
```
