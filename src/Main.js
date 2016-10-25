// @flow
import view from './View'
import update from './Update'
import {defaultModel} from './Model'
import startApp from './StartApp'

startApp({
  view,
  update,
  model: defaultModel,
  root: document.getElementById('root')
})
