// @flow
import React from 'react'
import Icon from '../icon/Icon'

type Props = {
  title: string,
  className?: string,
  left?: any,
  right?: any
}

export default (props: Props) => {
  const {
    left = null,
    right = null,
    className ='',
    title} = props

  return (
    <header className={'header ' + className}>
      <div className="header-left">{left}</div>
      <h1 className="header-title">{title}</h1>
      <div className="header-right">{left}</div>
    </header>
  )
}
