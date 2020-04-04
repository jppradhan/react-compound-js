Modal:

```jsx
import { Button } from 'components/Button/Button';

class App extends React.Component {
  constructor() {
    this.state = {
      isOpened: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  render() {
    return(
      <div>
        <Button onClick={() => this.toggleModal(true)}>Open Modal</Button>
        <Modal
          onDismiss={() => this.toggleModal(false)}
          isShowing={this.state.isOpened}
          title={"Modal header"}
        >
            <h1>Modal body</h1>
        </Modal>
      </div>
    )
  }

  toggleModal(val) {
    console.log("Open modal", val);
    this.setState({
      isOpened: val
    })
  }
}
<App />
```
