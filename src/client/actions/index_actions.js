import * as types from '../constants/index_action_types'

export function indexAction(){
  return{
    type: types.INDEX_ACTION
  }
}

export function addData(){
  return {
    type: types.ADD_DATA
  }
}

export function deleteData(index){
  return {
    type: types.DELETE_DATA,
    index
  }
}
