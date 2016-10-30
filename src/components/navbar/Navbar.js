// @flow
import React from 'react'
import Icon from '../icon/Icon'
import NavbarLink from './NavbarLink'
import {Match} from 'react-router'
import {isNil, curry} from 'ramda'
import * as locationUtils from '../../util/location.js'

type Props = {
  dispatch: Function,
  location: Location,
  children?: any[]
}
export default (props: Props) => {
  const {children = [], dispatch, location} = props
  const [_, page] = locationUtils.match('/:page', location.pathname) || []
  return (
    <nav className="space-around padding-base bg-primary text-white flex-grow-0">
      <NavbarLink
        dispatch={dispatch}
        selected={ isNil(page) }
        icon="tachometer"
        size="1"
        text="Dashboard"
        to="/"/>
      <NavbarLink
        dispatch={dispatch}
        selected={ page === 'visitors'}
        icon="users"
        size="1"
        text="visitors"
        to="/visitors"/>
      <NavbarLink
        dispatch={dispatch}
        selected={ page === 'assistant' }
        icon="lightbulb-o"
        size="1"
        text="assistant"
        to="/assistant"/>
    </nav>
  )
}
