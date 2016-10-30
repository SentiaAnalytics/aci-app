// @flow
export type Action = {type: string, payload: any}
export type User = {
  firstname: string,
  lastname: string,
  email: string
}

export type Car = {
  licenseplate: string,
  model: string,
  brand: string
}
export type Visitor = {
  id: string,
  user: ?User,
  car: Car
}

export type Model = {
  location: Location,
  selectedVisitor: ?string,
  visitors: Visitor[]
}

export const defaultLocation = {
  hash: '',
  pathname: '/',
  query: null,
  search: '/',
  state: null
}

const defaultVisitor = id => ({
  id: String(id),
  car: {
    licenseplate: 'GC 45 123',
    model: 'Astra',
    brand: 'Opel'
  },
  user: null

})

export const defaultModel = (location:Location): Model => ({
  location,
  selectedVisitor: null,
  visitors: [
    defaultVisitor(1),
    defaultVisitor(2),
    defaultVisitor(3),
    defaultVisitor(4),
    defaultVisitor(5)
  ]
})
