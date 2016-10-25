// @flow
import React from 'react'
import {compose, join, ap} from 'ramda'

type Props = {
  icon: string,
  size?: "1" | "2" | "3" | "4" | "5",
  text?: string,
  className?: string
}
const iconClasses = [
   () => 'icon fa',
  ({icon}) => icon ? `fa-${icon}` : '',
  ({size}) => size ? `fa-${size}x`: ''
]
const iconClass = compose(join(' '), ap(iconClasses), a => [a])
export default (props: Props) => {
  const {className = '', text} = props
  if (text) {
    return (
      <div className={`text-center ${className}`}>
        <i className={iconClass(props)}></i>
        <div className="text-caps text-xs"> {text} </div>
      </div>
    )
  }
  return (
    <i className={iconClass(props) + ' ' + className}></i>
  )
}
