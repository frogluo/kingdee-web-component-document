import { useEffect, useRef } from 'react';

export default function useEvent (eventName: string, handler: (evt: Event) => void) {
  const domRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!domRef.current) {
      return;
    }
    domRef.current.addEventListener(eventName, handler);
    return () => {
      if (!domRef.current) {
        return;
      }
      domRef.current.removeEventListener(eventName, handler);
    }
  }, [eventName, handler]);
  return domRef;
}
