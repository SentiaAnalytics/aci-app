// @flow
import type {Action, Model} from './Model'
import {map} from 'ramda'

export default (state:Model, {type, payload}: Action):Model => {
  switch (type) {
    case 'SELECT_VISITOR':
      return {...state, selectedVisitor: payload }
    default:
      return state
  }
}
