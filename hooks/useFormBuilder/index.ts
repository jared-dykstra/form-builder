import { useCallback, useReducer, useMemo } from 'react'

import { initialState, State } from './initialState'
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
    (formId: string, payload: AddQuestion) =>
      dispatch({ type: 'addQuestion', formId, payload }),
    []
  )

  console.log('useFormBuilder', { id, state })

  return useMemo(
    () => ({
      addQuestion,
      // TODO: state is Readonly<> ... but that's only supposed to happen if I used Immer's castImmutable() function
      // Noticed that https://github.com/immerjs/immer/pull/702 freezing is now on by default, even in prod
      form: currentFormSelector(state as State, id),
    }),
    [id, state, addQuestion]
  )
}
