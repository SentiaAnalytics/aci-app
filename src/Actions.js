// @flow
export const navigate = (location:string) => ({type: 'NAVIGATE', payload: location})
export const selectVisitor = (visitor: ?string) => ({ type: 'SELECT_VISITOR', payload: visitor })
export const locationChange = (location: Location) => ({ type: 'LOCATION_CHANGE', payload:location })
