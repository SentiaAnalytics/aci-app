// @flow
import React, { Component } from 'react';
import {curry, map} from 'ramda'
import VisitorsListItem from './VisitorsListItem.js'
import type {Visitor} from '../../Model.js'
import Header from '../header/Header.js'
import NavBar from '../navbar/Navbar.js'

type Props = {
  dispatch: Function,
  location: Location,
  visitors: Visitor[],
  selectedVisitor: ?string
}

export default (props: Props) => {
  const {dispatch, selectedVisitor, visitors, location} = props
  return (
    <div className="flex-column">
      <Header title="Visitors"/>
      <div className="flex-grow-1 scroll-y">
        <div>
          <div className="list-group-title">Current visitors</div>
          <ul className="list-group">
           {map(visitor => VisitorsListItem(dispatch, {visitor, selected: visitor.id === selectedVisitor}), visitors)}
          </ul>
          <div className="list-group-title">Old visitors</div>
          <ul className="list-group">
           {map(visitor => VisitorsListItem(dispatch, {visitor, selected: visitor.id === selectedVisitor}), visitors)}
          </ul>
        </div>
      </div>
      <NavBar {...{dispatch, location}} />
    </div>
  )
}
