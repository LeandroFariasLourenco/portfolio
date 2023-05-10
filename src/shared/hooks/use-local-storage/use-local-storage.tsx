import { useEffect, useState } from "react";

const useLocalStorage = <T extends {}>(key: string, fallbackValue: T) => {
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    if (window.localStorage) {
      const stored = localStorage.getItem(key);
      setValue(stored ? JSON.parse(stored) : fallbackValue);
    }
  }, [fallbackValue, key]);

  useEffect(() => {
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
