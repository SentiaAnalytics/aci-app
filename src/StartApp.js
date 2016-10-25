// @flow
import React from 'react';
import {compose} from 'ramda'
import ReactDOM from 'react-dom';
import {install} from 'redux-loop'
import {createStore} from 'redux'



const reduxExtension = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : x => x;

type Props = {
  view: Function,
  update: Function,
  model: Object,
  root: any
}

export default ({view, update, model, root}:Props) => {
  const store = createStore(update, model, compose(install(), reduxExtension))
  store.subscribe(() =>render(store.getState()))
  const App = view(store.dispatch)
  const render = (model) => {
    ReactDOM.render( <App {...model} />, root);
  }
  render(store.getState())
}
