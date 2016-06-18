import * as types from '../constants/index_action_types'

const initialIndexState = {
  someProp: 'a string',
  data: [1,2,3,4,5,6,7,8,9]
}

function index( state = initialIndexState, action){
  switch(action.type){
    
    case types.INDEX_ACTION:
      return state

    case types.ADD_DATA:
      return Object.assign({}, state, {
        data: [...state.data, state.data.length]
      })
    
    case types.DELETE_DATA:
      return Object.assign({}, state, {
        data: [...state.data.slice(0, action.index), ...state.data.slice(action.index + 1)]
      })
    
    default:
      return state
  }
}

export default index
