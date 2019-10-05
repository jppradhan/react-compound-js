interface Props<T> {
    <T>(arg: T): T;
}
export declare const useStateCallback: <U>(args: Props<U>, callback: () => void) => {}[];
export {};
