// @flow
import type {User} from '../Model'
export const fullName = (user: ?User) => user ? `${user.firstname} ${user.lastname}` : 'Unknown user'
