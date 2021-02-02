import type { FC } from 'react'

import type { Form } from 'types'
interface Props {
  form: Form
}

export const Editor: FC<Props> = ({ form }) => {
  return <div>Editor for form ID {form.id}</div>
}
