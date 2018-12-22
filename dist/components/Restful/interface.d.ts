/// <reference types="react" />
export interface Options {
    url: string;
    headers?: any;
    body?: any;
}
export interface GetProps {
    options: Options[];
    cacheKey?: string;
    children: (payload: State) => React.ReactNode;
}
export interface PostPayload {
    post: (options: Options[]) => void;
    loading: boolean;
    error: any;
    data: any;
}
export interface PostProps {
    cacheKey?: string;
    method?: string;
    children: (payload: PostPayload) => React.ReactNode;
}
export interface State {
    error: any;
    data: any;
    loading: boolean;
}
