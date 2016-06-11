import * as types from '../constants/index_action_types'
import { CALL_API, Methods } from '../middleware/api'

export function indexAction(){
  return{
    type: types.INDEX_ACTION
  }
}

export function getServerData(){
  return {
    [CALL_API]: {
      types: [types.TEST_ACTION_REQUEST, types.TEST_ACTION_SUCCESS, types.TEST_ACTION_FAILURE],
      method: Methods.GET,
      endpoint: 'test'
    }
  }
}