// @flow
import React from 'react'
import {curry, map} from 'ramda'
import type {Visitor} from '../../Model'
import {Link} from 'react-router'
import Icon from '../icon/Icon'
import {selectVisitor} from '../../Actions'
import {fullName} from '../../util/user'

const Left = ({}) =>
    <img className="media-left" src="http://placehold.it/60x60/f8f8f8"/>

const Body = ({user, car}) => {
  return (
    <div className="media-body text-sm">
      <div className="text-primary text-caps">{fullName(user)}</div>
      <div className="">{`${car.brand} ${car.model}`}
        <span className="text-muted"> ({car.licenseplate})</span>
      </div>
      <div className="space-between text-muted">
        <span> <Icon icon="clock-o"/> 10 Mins</span>
        <span> <Icon icon="clock-o"/> 5th visit</span>
      </div>
    </div>
  )
}
const Right = (dispatch, {id, selected}) => {
  const onClick = () => dispatch(selectVisitor(selected ? null : id))
  return (
    <div style={{width: '100px'}} className="media-right padding-base text-right">
        <Icon icon="plus-square-o" className="text-secondary" size="2" onClick={onClick}/>
    </div>
  )
}

type Props = {
  visitor: Visitor,
  selected: bool
}

export default curry((dispatch, {visitor, selected}: Props) => {
  const {car, user, id} = visitor
  return (
    <li key={id} className="list-group-item list-group-item-primary padding-base ">
      <div className="media">
        <Left/>
        {Body({car, user})}
        {Right(dispatch, {id, selected})}
      </div>
      <div className={`space-between ${selected ? '' : 'hidden'}`} style={{paddingLeft: '70px'}}>
        <Icon icon="plus-square-o" size="2" text="Create lead" className="text-primary"/>
        <Link to={`/visitors/${id}`}><Icon icon="info-circle" size="2" text="Profile" className="text-primary"/></Link>
        <div>
          <div><Icon icon="wrench" size="1" /> garage</div>
          <div><Icon icon="times-circle" size="1" /> archive</div>
        </div>
      </div>
    </li>
  )
})
