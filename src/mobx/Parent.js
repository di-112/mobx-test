import React from 'react';
import { observer } from "mobx-react-lite";
import store from '../store'
import Child from "./Child";

const Parent = () => {
  console.log('rerender Parent')

  return (
    <div className={'parent'}>
      Я Parent, count:
      {store.parentCount}
      <button onClick={()=>store.setParentCount(store.parentCount + 1)}>Parent +1</button>
      <Child />
    </div>
  );
}

export default observer(Parent);
