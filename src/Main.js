// @flow
import view from './View'
import update from './Update'
import {defaultModel} from './Model'
import startApp from './StartApp'
import history from './History'
const location = history.location
window.appHistory = history

startApp({
  view,
  update,
  model: defaultModel(history.location),
  root: document.getElementById('root')
})
