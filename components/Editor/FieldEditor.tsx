import { useCallback } from 'react'
import type { FC } from 'react'
import { Card, Box, TextField, makeStyles } from '@material-ui/core'

import { FabMenu } from 'components'
import type { FieldDefinition } from 'types'

import { FieldIcon } from './FieldIcon'
import { UpdateQuestion } from 'hooks/useFormBuilder'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(2, 2),
    minHeight: '8em',
  },
  form: {
    marginLeft: '2rem',
    display: 'flex',
    flexGrow: 1,
  },
  field: {
    flexGrow: 1,
  },
}))

interface Props {
  number: number
  id: string
  field: FieldDefinition
  updateQuestion: (payload: UpdateQuestion) => void
}

export const FieldEditor: FC<Props> = ({
  number,
  id,
  field,
  updateQuestion,
}) => {
  const classes = useStyles()
  const label = field.label ?? ''
  const type = field.type

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion({ type, label: event.target.value, id })
    },
    [type, id, updateQuestion]
  )

  const handleFabMenuSelect = useCallback(
    (newType) => {
      if (newType !== type) {
        updateQuestion({ type: newType, label, id })
      }
    },
    [type, id, label, updateQuestion]
  )

  return (
    <Card variant="outlined" className={classes.root}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <FabMenu
          title={`${number}`}
          options={{
            text: 'Text',
            select: 'Select',
          }}
          onSelect={handleFabMenuSelect}
          size="small"
          icon={<FieldIcon type={type} />}
        />
        <form noValidate autoComplete="off" className={classes.form}>
          {/* Decided to use a controlled component so the split pane view will update on every keystroke
                even though it's more computationally expensive, I like the immediate UX */}
          <TextField
            label={`Question ${number}`}
            value={label}
            onChange={handleValueChange}
            className={classes.field}
          />
        </form>
      </Box>
    </Card>
  )
}
