import { useCallback, useEffect, useState } from "react";

export const UseCallBackParent = () => {
  // memoriza la funcion en si misma
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <UseCallBackChild handleClick={handleClick} />
    </div>
  );
};

interface Props {
  handleClick: () => void;
}

export const UseCallBackChild = ({ handleClick }: Props) => {
  useEffect(() => {
    console.log("Rendered");
  }, [handleClick]);

  return <button onClick={handleClick}>Click Me</button>;
};
