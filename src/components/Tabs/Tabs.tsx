import * as React from "react";
import "./styles.scss";

interface Props {
  tabContent: tabContent[];
  activeTab: number;
}

interface tabContent {
  label: string;
  content: React.ReactNode;
}

interface State {
  activeTab: number;
  activeTabContent: React.ReactNode;
}

export class Tabs extends React.Component<Props, State> {
  private previousTabIndex: number = 0;
  public constructor(props: Props) {
    super(props);
    const { activeTab, tabContent } = this.props;
    this.state = {
      activeTab: activeTab | 0,
      activeTabContent: tabContent[activeTab | 0].content
    };
  }

  public render() {
    const { tabContent } = this.props;
    return (
      <div className="c__tabs">
        <div className="c__tab__headers">
          {tabContent.map((tab, i) => {
            return (
              <div
                className={`c__tab ${
                  this.state.activeTab === i ? "active" : ""
                } ${
                  this.previousTabIndex < this.state.activeTab
                    ? "right"
                    : "left"
                }`}
                key={`TAB_${i}`}
                onClick={() => this.goToTab(i)}
              >
                <h4>{tab.label}</h4>
              </div>
            );
          })}
        </div>
        <div className="c__tab__content">{this.state.activeTabContent}</div>
      </div>
    );
  }

  private goToTab = (index: number) => {
    this.setState(
      {
        activeTab: index,
        activeTabContent: this.props.tabContent[index].content
      },
      () => {
        this.previousTabIndex = this.state.activeTab;
      }
    );
  };
}
