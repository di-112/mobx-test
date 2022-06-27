import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import store from "../store";
import { Context } from "./Parent";

const Child = () => {
  
  const {childCount, setChildCount} = useContext(Context)

  console.log('rerender Child')

  return (
    <div className={'child'}>
      Я Child, count:
      {childCount}
      <button onClick={()=>setChildCount(childCount + 1)}>Child +1</button>
    </div>
  )
};

export default React.memo(observer(Child));