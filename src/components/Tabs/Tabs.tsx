import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

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
  static tabstyles = (activeTab: number, prevTabIndex: number, index: number) =>
    cx({
      [styles.tab]: true,
      [styles.active]: activeTab === index,
      [styles.right]: prevTabIndex < activeTab,
      [styles.left]: prevTabIndex >= activeTab
    });
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
      <div className={styles.tabs}>
        <div className={styles.headers}>
          {tabContent.map((tab, i) => {
            return (
              <div
                className={Tabs.tabstyles(
                  this.state.activeTab,
                  this.previousTabIndex,
                  i
                )}
                key={`TAB_${i}`}
                onClick={() => this.goToTab(i)}
              >
                <h4>{tab.label}</h4>
              </div>
            );
          })}
        </div>
        <div className={styles.content}>{this.state.activeTabContent}</div>
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
