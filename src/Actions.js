// @flow
import type {Location} from './Model'

export const selectVisitor = (visitor: ?string) => ({ type: 'SELECT_VISITOR', payload: visitor })
export const locationChange = (location: Location) => ({ type: 'LOCATION_CHANGE', payload:location })
