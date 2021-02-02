import type { FieldDefinition } from 'types'

export type AddQuestion = FieldDefinition
export interface Action {
  type: 'addQuestion'
  payload: AddQuestion
}
