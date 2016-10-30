// @flow
import React from 'react'
import {compose, join, ap, omit} from 'ramda'


const Button = props => <button {...props}/>
const Div = props =>  <div {...props}/>

type Props = {
  icon: string,
  size?: "1" | "2" | "3" | "4" | "5",
  text?: string,
  className?: string,
  onClick? : Function
}
const iconClasses = [
   () => 'icon fa',
  ({icon}) => icon ? `fa-${icon}` : '',
  ({size}) => size ? `fa-${size}x`: ''
]
const iconClass = compose(join(' '), ap(iconClasses), a => [a])

export default (props: Props) => {
  const {className = '', text, onClick} = props
  const Elem = onClick ? Button : Div
    return (
      <Elem className={`text-center ${className}`} onClick={onClick}>
        <i className={iconClass(props)}></i>
        { text  ? <div className="text-caps text-xs"> {text} </div> : null }
      </Elem>
    )
}
