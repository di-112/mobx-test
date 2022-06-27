import {makeAutoObservable} from 'mobx'

class MobxStore {

  parentCount = 0
  childCount = 0

  constructor() {
    makeAutoObservable(this)
  }

  setParentCount = value => {this.parentCount = value}

  setChildCount = value => {this.childCount = value}

}

export default new MobxStore()