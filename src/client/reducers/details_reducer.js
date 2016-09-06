import * as types from '../constants/details_action_types'

const initialDetailsState = {
  markers: [{
    position: {
      lat: 35.329155,
      lng: -80.634645,
    },
    key: `Riverwood Manor`,
    defaultAnimation: 2,
  }],
}

function details( state = initialDetailsState, action){
  switch(action.type){

    case '':
      return state

    default:
      return state
  }
}

export default details
