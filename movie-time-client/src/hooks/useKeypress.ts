import { useEffect } from "react";

/**Taken from an open source library: rewind-ui*/
export const useKeypress = (key: string, active?: boolean, callback?: (event: KeyboardEvent) => void): void => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handle = (event: KeyboardEvent) => {
      if (event.key === key && callback) {
        callback(event);

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
        }
      }
    };

    document.body.addEventListener("keydown", handle);

    return () => {
      document.body.removeEventListener("keydown", handle);
    };
  }, [key, callback, active]);
};
