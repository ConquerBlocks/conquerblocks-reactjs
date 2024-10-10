import { useEffect, useMemo, useState } from "react";

interface Props {
  num: number;
}

export const UseMemo = ({ num }: Props) => {
  const [numberRef, setNumberRef] = useState(0);

  const expensivecalculation = (num: number) => {
    console.log("calculating..");
    return num * 2;
  };

  useEffect(() => {
    console.log(num)
    setTimeout(() => {
      setNumberRef(2);
    }, 4000);
  }, [num]);

  const memoizedValue = useMemo(
    () => expensivecalculation(numberRef),
    [numberRef],
  );

  return (
    <div>
      <h2>Result: {memoizedValue}</h2>
    </div>
  );
};
