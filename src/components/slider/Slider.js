// @flow
import React from 'react'

type SliderProps = {
  hash: string,
  children?: any[]
}

export const Slider = (props: SliderProps) => {
  const {hash} = props
  const children = React.Children.map(props.children, child => React.cloneElement(child, {hash}));
  return <div className="slider">{children}</div>
}
type SlideProps = {
  hash?: string,
  href : string,
  children?: any[]
}

export const Slide = (props: SlideProps) => {
  const {hash, href, children} = props
  return <div className={`${ hash === href ? '' : 'hidden'}`}>{children}</div>

}
