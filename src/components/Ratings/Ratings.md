Ratings Component

```jsx
const Star = require("../../icons/star.svg").default;
const Circle = require("../../icons/circle.svg").default;
<div>
  <div className="ratings__container">
    <Ratings
      rate={4}
      icon={<Star />}
      width={30}
      height={30}
      topColor="#D93636"
      readonly
    />
  </div>
  <div className="ratings__container">
    <Ratings
      rate={2.5}
      icon={<Circle />}
      width={30}
      height={30}
      topColor="#37b7f2"
      bottomColor="#b3bfc8"
    />
  </div>
</div>;
```
