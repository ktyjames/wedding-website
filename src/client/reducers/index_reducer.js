import * as types from '../constants/index_action_types'

const initialIndexState = {
  someProp: 'a string'
}

function index( state = initialIndexState, action){
  switch(action.type){
    
    case types.INDEX_ACTION:
      return state
    
    default:
      return state
  }
}

export default index