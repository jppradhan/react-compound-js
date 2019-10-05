interface Props<T> {
    <T>(arg: T): T;
}
export declare const useWillReceiveProps: <U>(props: Props<U>, callback: <T>(arg: T) => T) => Props<U>;
export {};
