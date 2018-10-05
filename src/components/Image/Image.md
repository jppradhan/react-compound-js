Image sample:

```jsx
  const Spinner = require("../../icons/spinner.svg").default;
  <div className="imageWrapper">
    <Image
      src={`https://placeimg.com/200/150/nature`}
      loadingIcon={<Spinner />}
    />
  </div>
```