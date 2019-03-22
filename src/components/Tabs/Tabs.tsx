import * as React from "react";
import { StyledTabs, StyledTab, Headers, Content } from "./styles";

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
  static tabstyles = (
    activeTab: number,
    prevTabIndex: number,
    index: number
  ) => ({
    active: activeTab === index,
    right: prevTabIndex < activeTab,
    left: prevTabIndex >= activeTab
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
      <StyledTabs>
        <Headers>
          {tabContent.map((tab, i) => {
            return (
              <StyledTab
                key={`TAB_${i}`}
                onClick={() => this.goToTab(i)}
                {...Tabs.tabstyles(
                  this.state.activeTab,
                  this.previousTabIndex,
                  i
                )}
              >
                <h4>{tab.label}</h4>
              </StyledTab>
            );
          })}
        </Headers>
        <Content>{this.state.activeTabContent}</Content>
      </StyledTabs>
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
