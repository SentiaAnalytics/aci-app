// @flow
import type {Action, Model} from './Model'
import {map} from 'ramda'
import {loop, Effects} from 'redux-loop'
import {locationChange} from './Actions.js'
import history from './History.js'

const navigate = url=> {
    history.push(url)
    return locationChange(history.location)
}

export default (state:Model, {type, payload}: Action):Model => {
  switch (type) {
    case 'NAVIGATE':
      return loop(state, Effects.call(navigate, payload))
    case 'LOCATION_CHANGE':
      return {...state, location: payload}
    case 'SELECT_VISITOR':
      return {...state, selectedVisitor: payload }
    default:
      return state
  }
}
