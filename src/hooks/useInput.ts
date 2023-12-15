import { useState } from "react";

// generic 선언 필요
export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value as T);
  };
  return [value, onChangeHandler];
};
