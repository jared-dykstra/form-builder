import { memo } from 'react'
import type { FC } from 'react'
import {
  PowerInput as TextInputIcon,
  Check as SelectInputIcon,
} from '@material-ui/icons'

import type { FieldDefinition } from 'types'

interface Props {
  type: FieldDefinition['type']
}

const Icon: FC<Props> = ({ type }) => {
  if (type === 'select') {
    return <SelectInputIcon />
  } else {
    return <TextInputIcon />
  }
}

export const FieldIcon = memo(Icon)
