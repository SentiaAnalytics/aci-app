// @flow
import React from 'react'
import {Match, Redirect} from 'react-router'
import {curry, find} from 'ramda'
import Header from '../header/Header'
import NavBar from '../navbar/Navbar'
import {fullName} from '../../util/user'
import {Tabs, Tab, TabPane} from '../tabs/Tabs'
import {Slider, Slide} from '../slider/Slider'
import VisitorProfileOverview from './VisitorProfileOverview'
import type {Visitor} from '../../Model.js'

type Props = {
  visitors: Visitor[],
  visitorid: string,
  dispatch: Function
}

export default (props:Props) => {
  const {visitors, dispatch, visitorid} = props
  const visitor = find(x => x.id === visitorid, props.visitors) || {}
  const {user, car} = visitor;
  const {hash} = location
  return (
    <div className="flex-column">
    <Match pattern="/visitors/:id" exactly render ={()=> <Redirect to={`/visitors/${visitor.id}#overview`}/>}/>
      <Header title="Profile"/>
      <Tabs hash={hash}>
        <Tab href="#overview">overview</Tab>
        <Tab href="#timeline">timeline</Tab>
        <TabPane href="#overview"></TabPane>
        <TabPane href="#timeline"></TabPane>
      </Tabs>
      <div className="flex-grow-1 scroll-y">
        <Slider hash={hash}>
          <Slide href="#overview">{VisitorProfileOverview(dispatch, {visitor})}</Slide>
        </Slider>
      </div>
    {NavBar({dispatch, location})}
  </div>
  )
}
