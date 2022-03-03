import { useContext } from "react";
import { UserContext } from "./App";
import Component2 from "./Component2";

function Component1() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>compoent1</h1>
      <h2>{user}</h2>

      <Component2 />
    </>
  );
}

export default Component1;
