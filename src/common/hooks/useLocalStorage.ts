import { useEffect, useState } from 'react';

interface UseLocalStorageProps<T> {
  key: string;
  initialValue: T;
}

/**
 * localStorage에 값을 저장하고, 사용하는 훅입니다.
 * @param key localStorage 값에 접근할 key
 * @param initialValue key에 해당하는 값이 없을 경우 반환되는 값
 *
 * @returns [value, setValue]
 */
const useLocalStorage = <T>({ key, initialValue }: UseLocalStorageProps<T>) => {
  const [value, setValue] = useState(() => {
    const storageItem = localStorage.getItem(key);
    if (storageItem === null) {
      return initialValue;
    }
    return JSON.parse(storageItem);
  });

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
