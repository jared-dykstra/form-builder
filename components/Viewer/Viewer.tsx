import type { FC } from 'react'

import type { Form } from 'types'
interface Props {
  form: Form
}

export const Viewer: FC<Props> = ({ form }) => {
  return (
    <div>
      Viewer
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  )
}
