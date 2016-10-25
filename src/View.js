// @flow
import React, { Component } from 'react';
import {BrowserRouter, Match, Redirect, Miss} from 'react-router'
import VisitorList from './components/visitorsPage/VisitorList'
import VisitorProfile from './components/visitorsPage/VisitorProfile'
import Dashboard from './components/dashboardPage/DashBoard.js'
import type {Model} from './Model'
import {curry} from 'ramda'
// @flow-ignore
import './styles/main.scss';

export default curry((dispatch, model: Model) => {
  const {visitors, selectedVisitor} = model
  return (
    <BrowserRouter>
      <div className="app">
      <Match pattern="/visitors/:id" exactly render={VisitorProfile(dispatch, {visitors})}/>
      <Match pattern="/visitors" exactly render={VisitorList(dispatch, {visitors, selectedVisitor})} />
      <Match pattern="/dashboard" exactly render={Dashboard(dispatch, {})} />
      <Match pattern="/" exactly render={() => <Redirect to="/dashboard"/>} />
      <Miss render={() => <h1>404</h1>}/>
      </div>
    </BrowserRouter>
  )
})
