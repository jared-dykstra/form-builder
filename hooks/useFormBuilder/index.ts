import { useCallback, useReducer, useMemo } from 'react'

import initialState from './initialState'
import type { State } from './initialState'
import reducer from './reducer'
import type { AddQuestion } from './actions'

const currentFormSelector = (state: State, id: string) => state[id]

/**
 * UI - State management adapter.
 *
 * For now, this is a simple reducer.  TODO: Wrap the reducer with Immer.js
 * because of the deep state structure and to avoid unnecessary re-renders.
 *
 * It could be changed to Recoil.js or especially in a backend-for-frontend
 * model, could become a thin abstraction over the GQL cache.
 */
export const useFormBuilder = (id: string) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addQuestion = useCallback(
    (payload: AddQuestion) => dispatch({ type: 'addQuestion', payload }),
    []
  )

  return useMemo(
    () => ({
      addQuestion,
      form: currentFormSelector(state, id),
    }),
    [id, state, addQuestion]
  )
}
