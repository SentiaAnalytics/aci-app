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

export type Location = {
  hash: string,
  pathname: string,
  query: ?string,
  search: string,
  state: ?string
}

export type Model = {
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

export const defaultModel: Model = {
  selectedVisitor: null,
  visitors: [
    defaultVisitor(1),
    defaultVisitor(2),
    defaultVisitor(3),
    defaultVisitor(4),
    defaultVisitor(5)
  ]
}
