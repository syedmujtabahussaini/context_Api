# context_Api
 how to use context Api

import { useState, createContext } from "react";
import Component1 from "./Component1";
export const UserContext = createContext();

 function App() {
  const [user, setUser] = useState("Mujtaba");
  return (
    <>
     <UserContext.Provider value={user}>
        <h1>{user}</h1>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}
export default App;

====================================================================================

import { useContext } from "react";
import { UserContext } from "./App";

function Component1() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>compoent1</h1>
      <h2>{user}</h2>
    </>
  );
}
export default Component1;
