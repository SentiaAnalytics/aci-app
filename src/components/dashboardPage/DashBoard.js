// @flow
import React from 'react'
import Navbar from '../navbar/Navbar.js'
import Header from '../header/Header.js'
import {curry} from 'ramda'
import type {Location} from '../../Model.js'
import {Tabs, Tab} from '../tabs/Tabs.js'

type Props = {
  children?: any[]
}
export default curry((dispatch, props: Props, location: Location) => {
    return (
      <div className="flex-column">
        <div className="bg-primary text-white">
          <Header title="Dashboard"/>
          <Tabs hash={location.hash}>
            <Tab href="#today"className="text-white">Today</Tab>
            <Tab href="#week" className="text-white">Week</Tab>
            <Tab href="#month" className="text-white">Month</Tab>
          </Tabs>
        </div>
        <div className="flex-grow-1 scroll-y">
          <div>
          <h1> Dashboard</h1>
          </div>
        </div>
        <Navbar/>
      </div>
    )
})
