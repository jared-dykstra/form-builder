// Use UUIDv4 as ID types
import type { v4 } from 'uuid'
type Id = ReturnType<typeof v4>

type FormId = Id
type FieldId = Id
export interface FieldDefinition {
  type: 'text' | 'select'
  label: string
  id?: string
}
export interface FormDefinition {
  dirty: boolean
  fields: Record<FieldId, FieldDefinition>
  sortOrder: string[]
}

export interface FieldValues {
  dirty: boolean
  values: Record<FieldId, string>
}
export interface Form {
  id: FormId
  name?: string
  definition: FormDefinition
  fieldValues: FieldValues
}
