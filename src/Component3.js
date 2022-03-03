import { useContext } from "react";
import { UserContext } from "./App";

function Component3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>compoent3</h1>
      <h2>{user}</h2>
    </>
  );
}

export default Component3;
