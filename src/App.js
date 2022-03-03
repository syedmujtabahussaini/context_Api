import { useState, createContext } from "react";
import Component1 from "./Component1";
//define new variable and export it  with the name Usercontext which get all  properties of createContext()
//now  this variake is avilale in rest of the components.
export const UserContext = createContext();

// wWe pick value from this compoennt
function App() {
  // define local state of the component which we want to use in oter omponents
  const [user, setUser] = useState("Mujtaba");
  return (
    <>
      {/* wrap root leevel compoennt with the UserContext.Provider and give it a value  of our local state */}
      <UserContext.Provider value={user}>
        <h1>{user}</h1>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}

export default App;
