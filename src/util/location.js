
import parthToRegex from 'path-to-regexp'
import {curry} from 'ramda'
export const test = curry((path, location) => parthToRegex(path).test(location))
export const match = curry((path, location) => parthToRegex(path).exec(location))
