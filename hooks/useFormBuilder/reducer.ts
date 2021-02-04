import { original, produce, setAutoFreeze, Draft } from 'immer'
import { v4 as uuidV4 } from 'uuid'

setAutoFreeze(false)

import {
  initialFormDefinition,
  initialFieldValues,
  State,
} from './initialState'
import type { Action, UpdateQuestion } from './actions'

const reducer = produce((draft: Draft<State>, action: Action) => {
  const { formId } = action
  const currentState = original(draft)

  console.log(`reducer: ${action.type}`, action)

  switch (action.type) {
    case 'addQuestion':
      // If brand new, create a new blank form definition
      if (currentState && !currentState[formId]) {
        draft[formId] = {
          id: formId,
          definition: initialFormDefinition,
          fieldValues: initialFieldValues,
        }
      }

      // Create and Append field
      {
        draft[formId].definition.dirty = true
        const fieldId = uuidV4()
        draft[formId].definition.fields[fieldId] = { ...action.payload }
        draft[formId].definition.sortOrder.push(fieldId)
      }
      break
    case 'updateQuestion':
      {
        const { id: fieldId, ...rest } = action.payload as UpdateQuestion
        draft[formId].definition.dirty = true
        draft[formId].definition.fields[fieldId] = { ...rest }
      }
      break

    default:
      throw new Error()
  }
})

export default reducer
