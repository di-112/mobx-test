import React from 'react';
import { observer } from "mobx-react-lite";
import store from "../store";

const Child = () => {

  console.log('rerender Child')

  return (
    <div className={'child'}>
      Я Child, count:
      {store.childCount}
      <button onClick={()=>store.setChildCount(store.childCount + 1)}>Child +1</button>
    </div>
  )
};

export default observer(Child);