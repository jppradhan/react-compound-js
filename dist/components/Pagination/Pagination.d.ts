import { SFC } from "react";
interface Props {
    total: number;
    page: number;
    onGoToPage: (page: number) => void;
}
export declare const Pagination: SFC<Props>;
export {};
