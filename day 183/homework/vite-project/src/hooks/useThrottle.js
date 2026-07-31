import { useState, useEffect, useRef } from "react";

export const useThrottle = (
  value,
  delay = 500,
  { leading = true, trailing = true } = {},
) => {
  const [throttledValue, setThrottledValue] = useState(value);

  const lastExecuted = useRef(0);
  const timeoutRef = useRef(null);
  const lastValue = useRef(value);

  useEffect(() => {
    const now = Date.now();
    const timeSinceLast = now - lastExecuted.current;
    const remaining = delay - timeSinceLast;

    lastValue.current = value;

    if (leading && lastExecuted.current === 0) {
      setThrottledValue(value);
      lastExecuted.current = now;
      return;
    }

    if (remaining <= 0) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setThrottledValue(value);
      lastExecuted.current = now;
      return;
    }

    if (trailing && !timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(lastValue.current);
        lastExecuted.current = Date.now();
        timeoutRef.current = null;
      }, remaining);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [value, delay, leading, trailing]);

  return throttledValue;
};