import { useCallback, FC } from 'react'
import { makeStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'

import { FabMenu } from 'components'
import { Form } from 'types'
import type { AddQuestion, UpdateQuestion } from 'hooks/useFormBuilder'

import { FieldEditor } from './FieldEditor'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
    height: '100%',
  },
}))

interface Props {
  form: Form
  addQuestion: (payload: AddQuestion) => void
  updateQuestion: (payload: UpdateQuestion) => void
}

export const Editor: FC<Props> = ({ form, addQuestion, updateQuestion }) => {
  const classes = useStyles()

  const fields = form?.definition?.fields ?? {}
  const hasQuestions = Object.keys(fields).length > 0

  const handleAdd = useCallback((type) => addQuestion({ label: '', type }), [
    addQuestion,
  ])

  return (
    <div className={classes.root}>
      {Object.entries(fields).map(([id, field], number) => (
        <FieldEditor
          key={id}
          id={id}
          number={number + 1}
          field={field}
          updateQuestion={updateQuestion}
        />
      ))}
      <FabMenu
        title={hasQuestions ? 'Add new question' : 'Add your first question'}
        prompt="Choose a question type"
        options={{
          text: 'Text',
          select: 'Select',
        }}
        onSelect={handleAdd}
        color="secondary"
        size="large"
        icon={<AddIcon />}
        flat
      />
    </div>
  )
}
