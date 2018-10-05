```jsx
const Spinner = require("../../icons/spinner.svg").default;
<Get options={[{ url: "https://reqres.in/api/users?page=1" }]}>
  {({ data, error, loading }) => {
    if (loading) {
      return <Spinner width={100} height={100}/>;
    }
    if (error) {
      return <code>{JSON.stringify(error)}</code>;
    }
    return <code>{JSON.stringify(data)}</code>;
  }}
</Get>
```