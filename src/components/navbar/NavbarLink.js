// @flow
import React from 'react'
import Icon from '../icon/Icon'
import {Link} from 'react-router'
import {curry} from 'ramda'

type Props = {
  icon: string,
  text: string,
  className?: string,
  selected? : bool,
  to: string,
  dispatch: Function
}


export default (props: Props) => {
  const {icon, text, className = '', selected, to, dispatch} = props
  const clsName = `$${className} ${selected ? ' text-secondary' : ''}`
  return (
    <Link to={to} className="text-white">
      <Icon icon={icon} className={ clsName } size="2" text={text}/>
    </Link>
  );
}
