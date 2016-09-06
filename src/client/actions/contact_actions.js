import { CALL_API, Methods } from '../middleware/api'
import * as types from '../constants/contact_action_types'


export function postMessage(message){

  console.log(message)

  return {
    [CALL_API]:{
      types: [types.POST_MESSAGE_REQUEST, types.POST_MESSAGE_SUCCESS, types.POST_MESSAGE_FAILURE],
      method: Methods.POST,
      endpoint: `contact`,
      body: message
    }
  }
}

export function updateNameInput(name){
  return {
    type: types.UPDATE_NAME_INPUT,
    name
  }
}

export function updateEmailInput(email){
  return {
    type: types.UPDATE_EMAIL_INPUT,
    email
  }
}

export function updateMessageInput(message){
  return {
    type: types.UPDATE_MESSAGE_INPUT,
    message
  }
}