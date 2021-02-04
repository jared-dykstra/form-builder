import { useReducer, useMemo } from 'react'

import { initialState, State } from './initialState'
import reducer from './reducer'
import type { AddQuestion, UpdateQuestion } from './actions'

export * from './actions'

const currentFormSelector = (state: State, id: string) => state[id]

/**
 * UI - State management adapter.
 *
 * For now, this is a simple reducer.
 *
 * It could be changed to Recoil.js or especially in a backend-for-frontend
 * model, could become a thin abstraction over the GQL cache.
 */
export const useFormBuilder = (formId: string) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('useFormBuilder', { id: formId, state })

  return useMemo(
    () => ({
      // Action Creators...
      addQuestion: (payload: AddQuestion) =>
        dispatch({ type: 'addQuestion', formId, payload }),
      updateQuestion: (payload: UpdateQuestion) =>
        dispatch({ type: 'updateQuestion', formId, payload }),

      // State...
      // TODO: state is Readonly<> ... but that's only supposed to happen if I used Immer's castImmutable() function
      // Noticed that https://github.com/immerjs/immer/pull/702 freezing is now on by default, even in prod
      form: currentFormSelector(state as State, formId),
    }),
    [formId, state]
  )
}
