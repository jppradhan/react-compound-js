import * as React from "react";
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
export declare class Tabs extends React.Component<Props, State> {
    static tabstyles: (activeTab: number, prevTabIndex: number, index: number) => {
        active: boolean;
        right: boolean;
        left: boolean;
    };
    private previousTabIndex;
    constructor(props: Props);
    render(): JSX.Element;
    private goToTab;
}
export {};
