import { useState } from "react";

export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState();

  //   const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };

  return [value];
};
