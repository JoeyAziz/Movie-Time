import { useCallback, useState } from "react";

export const useToggle = (defaultValue?: boolean): [boolean, (flag?: boolean) => void] => {
  const [flag, setFlag] = useState<boolean>(defaultValue ?? false);

  const toggle = useCallback((option?: boolean) => {
    if (option) setFlag(option);
    else {
      setFlag((prev) => !prev);
    }
  }, []);

  return [flag, toggle];
};
