import { SFC } from "react";
interface Tag {
    label: string;
}
interface Props {
    placeholder: string;
    tags: Tag[];
    className?: string;
    onUpdate: (tags: Tag[]) => void;
    onRemove: (tag: Tag) => void;
    separator?: string;
}
export declare const TagSelect: SFC<Props>;
export {};
