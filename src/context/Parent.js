import React from 'react';
import { observer } from "mobx-react-lite";
import Child from "./Child";
import { useState } from "react";

export const Context = React.createContext(null)

const Parent = () => {

  console.log('rerender Parent')

 const [parentCount, setParentCount] = useState(0)
 const [childCount, setChildCount] = useState(0)


  return (
    <Context.Provider value={{
      childCount, setChildCount
    }}>
      <div className={'parent'}>
        Я Parent, count:
        {parentCount}
        <button onClick={()=>setParentCount(parentCount + 1)}>Parent +1</button>
        <Child />
      </div>
    </Context.Provider>
  );
}

export default observer(Parent);
