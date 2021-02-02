import type { State } from './initialState'
import type { Action } from './actions'

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'addQuestion':
      console.log('TODO - Immer')
      break
    default:
      throw new Error()
  }
  return state
}
