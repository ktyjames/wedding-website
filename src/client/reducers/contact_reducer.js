import * as types from '../constants/contact_action_types'

const initialContactState = {
  nameInput: '',
  emailInput: '',
  messageInput: '',
  postResponse: null
}

function contact( state = initialContactState, action){
  switch(action.type){

    case types.UPDATE_MESSAGE_INPUT:
      return Object.assign({}, state, {
        messageInput: action.message
      })

    case types.UPDATE_EMAIL_INPUT:
      return Object.assign({}, state, {
        emailInput: action.email
      })

    case types.UPDATE_NAME_INPUT:
      return Object.assign({}, state, {
        nameInput: action.name
      })

    case types.POST_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        nameInput: '',
        emailInput: '',
        messageInput: '',
        postResponse: 'Thanks for message!'
      })

    case types.POST_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        postResponse: 'Oops, Something went wrong!'
      })

    default:
      return state
  }
}

export default contact
