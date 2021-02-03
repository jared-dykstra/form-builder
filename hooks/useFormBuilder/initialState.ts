import type { Form, FormDefinition, FieldValues } from 'types'

export type State = Record<string, Form>

export const initialFormDefinition: FormDefinition = {
  dirty: true,
  fields: {},
  sortOrder: [],
}

export const initialFieldValues: FieldValues = {
  dirty: false,
  values: {},
}

export const initialState: State = {
  '1': {
    id: '1',
    name: 'hardcoded example form',
    definition: {
      dirty: false,
      fields: {
        '9ed39750-6558-11eb-ae93-0242ac130002': {
          type: 'text',
          label: 'What city are you in?',
        },
      },
      sortOrder: ['9ed39750-6558-11eb-ae93-0242ac130002'],
    },
    fieldValues: {
      dirty: false,
      values: {
        '9ed39750-6558-11eb-ae93-0242ac130002': 'Kitchener',
      },
    },
  },
}
