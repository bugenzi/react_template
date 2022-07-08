/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

type PassedElement = Element | Window;

type UseEventListener = (
  h: EventListener,
  e: string,
  el?: PassedElement
) => void;

const useEventListener: UseEventListener = (
  handler,
  event,
  element = window
) => {
  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    element.addEventListener(event, handler);

    return () => {
      element.removeEventListener(event, handler);
    };
  }, []);
};

export default useEventListener;
