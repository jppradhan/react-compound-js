Ratings Component
```jsx
const Star = require("../../icons/star.svg").default;
const Circle = require("../../icons/circle.svg").default;
<div>
  <div className="ratings__container">
    <Ratings rate={4} icon={<Star />} width={30} height={30} readonly/>
  </div>
  <div className="ratings__container">
    <Ratings rate={2.5} icon={<Circle />} width={30} height={30}/>
  </div>
</div>
```
Custom rating icons colors
```css
.bottom_layer circle{
	fill: #b3bfc8
}

.top_layer circle{
	fill: #37b7f2
}
```