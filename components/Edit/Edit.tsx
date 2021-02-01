import type { FC } from 'react'

interface Props {
  id: string
}

export const Edit: FC<Props> = ({ id }) => {
  return <div>Editor for id {id}</div>
}
