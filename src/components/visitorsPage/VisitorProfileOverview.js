// @flow
import React from 'react'
import type {Visitor, Location} from '../../Model'
import {curry} from 'ramda'
import {fullName} from '../../util/user.js'
import Icon from '../icon/Icon.js'

type Props = {
  visitor: Visitor
}

export default curry((dispatch:Function, {visitor}:Props) => {

    const {user, car} = visitor
    return (
      <main>
        <div className="flex bg-gray-lightest padding-base">
          <div className="flex-grow-1">
            <h1 className="block text-primary text-h4">{fullName(user)} </h1>
            <div><span className="text-sm">Customer Since Nov 2013</span></div>
            <span className ="text-success"><Icon icon="bolt" className="text-secondary"/>  Buying a new car</span>
          </div>
          <div className="flex-grow-1">
            <div className="space-around align-items-center">
              <button className="btn btn-round btn-outline-info"><Icon icon="paper-plane-o" className="text-secondary"/></button>
              <button className="btn btn-round btn-outline-info"><Icon icon="plus" className="text-secondary"/></button>
            </div>
          </div>
        </div>
      </main>
    )
})
