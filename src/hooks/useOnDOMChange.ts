import { useEffect } from "react";

const config = { attributes: true, childList: true, subtree: true };

export const useOnDOMChange = (
  node: HTMLElement,
  callback: (mutationsList: any, observer: any) => {}
) => {
  useEffect(() => {
    const observer = new MutationObserver(callback);
    observer.observe(node, config);
    return () => {
      observer.disconnect();
    };
  }, []);
};
