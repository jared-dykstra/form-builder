import type { FieldDefinition } from 'types'

export type AddQuestion = FieldDefinition
export type UpdateQuestion = Required<FieldDefinition>
export interface Action {
  type: 'addQuestion' | 'updateQuestion'
  formId: string
  payload: AddQuestion | UpdateQuestion
}
