```jsx
import { Button } from 'components/Button/Button';

const Spinner = require("../../icons/spinner.svg").default;
<Post>
  {({ post, data, error, loading }) => {
    if (loading) {
      return <Spinner width={100} height={100}/>;
    }
    if (error) {
      return <code>{JSON.stringify(error)}</code>;
    }
    return (
      <div>
        <code>{JSON.stringify(data)}</code>
        <Button
          onClick={() =>
            post([
              {
                url: "https://reqres.in/api/users",
                body: JSON.stringify({
                  name: "morpheus",
                  job: "leader"
                })
              }
            ])
          }
        >
          POST: Make request
        </Button>
      </div>
    );
  }}
</Post>
```
