// @flow
import React from 'react'
import Icon from '../icon/Icon'
import NavbarLink from './NavbarLink'
import {Match} from 'react-router'

type Props = {
  children?: any[]
}
export default (props: Props) => {
  const {children = []} = props
  return (
    <Match pattern="/:page" render={({params}) => {
      const {page} = params
      return (
        <nav className="space-around padding-base bg-primary text-white">
          <NavbarLink selected={ page === 'dashboard' } icon="tachometer" size="1" text="Dashboard" to="/"/>
          <NavbarLink selected={ page === 'visitors' } icon="users" size="1" text="visitors" to="/visitors"/>
          <NavbarLink selected={ page === 'assistant' } icon="lightbulb-o" size="1" text="assistant" to="/assistant"/>
          <NavbarLink selected={ page === 'menu' } icon="bars" size="1" text="menu" to="/"/>
        </nav>
      )
    }}/>
  )
}
