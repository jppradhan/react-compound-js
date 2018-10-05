Carousel sample:

```jsx
  const Spinner = require("../../icons/spinner.svg").default;
  <Carousel loop={false} iconDimension={20}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
      <div className="imageWrapper" key={c}>
        <Image
          src={`https://placeimg.com/200/150/nature?${c}`}
          loadingIcon={<Spinner width={100} height={100}/>}
        />
      </div>
    ))}
  </Carousel>
```