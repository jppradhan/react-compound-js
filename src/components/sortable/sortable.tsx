import * as React from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

interface State {
  children: React.ReactElement<any>[];
  dragClassIndex: number | null;
}

export class Sortable extends React.Component<Props, State> {
  private dragElementIndex: number = 0;
  public constructor(props: Props) {
    super(props);
    this.state = {
      children: React.Children.toArray(
        this.props.children
      ) as React.ReactElement<any>[],
      dragClassIndex: null
    };
  }

  public render() {
    return (
      <div
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        className="sortable"
      >
        {this.state.children.map((child, i) => (
          <div
            className={`draggable ${
              this.state.dragClassIndex === i ? "dragging" : ""
            }`}
            draggable
            onDragStart={e => this.onDragStart(e, i)}
            onDragEnd={this.onDragEnd}
            key={`DRAGGABLE__${i}`}
            id={`draggable_${i}`}
          >
            {React.cloneElement(child, { id: `draggable_inner_${i}` })}
          </div>
        ))}
      </div>
    );
  }

  private onDrop = (e: React.DragEvent<any>) => {
    //@ts-ignore
    const idStr = e.target.getAttribute("id");
    if (!idStr) {
      e.preventDefault();
      return;
    }
    const ids = idStr.split("_");
    const dropElementIndex = parseInt(ids[ids.length - 1], 10);
    this.moveElement(this.dragElementIndex, dropElementIndex);
  };

  private onDragStart = (e: React.DragEvent<any>, index: number) => {
    this.dragElementIndex = index;
    this.setState({
      dragClassIndex: index
    });
  };

  private moveElement = (startIndex: number, endIndex: number) => {
    const children = [...this.state.children];
    const dragElem = children[startIndex];
    children.splice(startIndex, 1);
    children.splice(endIndex, 0, dragElem);

    this.setState({
      children
    });
  };

  private onDragOver = (e: React.DragEvent<any>) => {
    e.preventDefault();
  };

  private onDragEnd = (e: React.DragEvent<any>) => {
    this.setState({
      dragClassIndex: null
    });
  };
}
