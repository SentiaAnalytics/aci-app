//@flow
import React from 'react'
import type {Location} from '../../Model'
import {map} from 'ramda'
import {Link} from 'react-router'

type TabsProps = {
  children?: any[],
  hash: string
}

export const Tabs = (props: TabsProps) => {
  const {children, hash} = props
  const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {hash}));
  return <div className="tabs">{childrenWithProps}</div>
}

type TabProps = {
  children? : any[],
  href: string,
  hash?: string,
  className?: string
}

export const Tab = (props: TabProps) => {
  const {children, href, hash = '', className=''} = props
  const selected = hash === href
  return (
    <Link to={href} className={`tab ${selected ? ' tab-selected' : ''} ${className}`}>{children}</Link>
  )
}

type TabPaneProps = {
  children?: any[]
}

export const TabPane = (props: TabPaneProps) => {
  const {children} = props
  return (
    <div className="tabpanel"> {children} </div>
  )
}
