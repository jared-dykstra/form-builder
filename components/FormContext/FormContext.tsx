import { createContext, useContext, FC } from 'react'
import { useFormBuilder } from 'hooks'
import { Form } from 'types'
import type { AddQuestion, UpdateQuestion } from 'hooks/useFormBuilder'

interface Context {
  form: Form
  addQuestion: (payload: AddQuestion) => void
  updateQuestion: (payload: UpdateQuestion) => void
}

const FormBuilderContext = createContext<Context>({
  form: {
    definition: {
      dirty: false,
      fields: {},
      sortOrder: [],
    },
    id: '',
    fieldValues: {
      dirty: false,
      values: {},
    },
  },
  /* eslint-disable @typescript-eslint/no-empty-function */
  addQuestion: () => {},
  updateQuestion: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
})

interface Props {
  formId: string
}

export const FormContext: FC<Props> = ({ formId, children }) => {
  const state = useFormBuilder(formId)
  return (
    <FormBuilderContext.Provider value={state}>
      {children}
    </FormBuilderContext.Provider>
  )
}

export const useFormContext = () => {
  return useContext(FormBuilderContext)
}
