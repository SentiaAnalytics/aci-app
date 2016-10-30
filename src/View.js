// @flow
import React, { Component } from 'react';
import {StaticRouter, Match} from 'react-router'
import VisitorList from './components/visitorsPage/VisitorList'
import VisitorProfile from './components/visitorsPage/VisitorProfile'
import Dashboard from './components/dashboardPage/DashBoard.js'
import type {Model} from './Model'
import {compose, curry} from 'ramda'
import history from './History'
import {navigate} from './Actions.js'
// @flow-ignore
import './styles/main.scss';

export default curry((dispatch, model: Model) => {
  const {visitors, selectedVisitor} = model
  return (
    <StaticRouter
      action={history.action}
      location={location}
      onPush={compose(dispatch, navigate)}
      onReplace={history.replace}
      blockTransitions={history.block}
    >
      <div className="app">
        <Match
          pattern="/visitors/:visitorid"
          exactly
          render={({params: {visitorid}, location}) => VisitorProfile({dispatch, visitors, visitorid, location})}
          />
        <Match
          pattern="/visitors"
          exactly
          render={({location}) => VisitorList({dispatch, visitors, selectedVisitor,location})}
          />
        <Match
          pattern="/"
          exactly
          render={({location}) => Dashboard({dispatch, location})}
          />
      </div>
    </StaticRouter>
  )
})
