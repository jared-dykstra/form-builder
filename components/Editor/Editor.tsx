import { useCallback, FC } from 'react'
import { makeStyles } from '@material-ui/core'

import { FabMenu } from 'components/FabMenu/FabMenu'
import { Form } from 'types'
import type { AddQuestion } from 'hooks/useFormBuilder/actions'
import { useId } from 'hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
    height: '100%',
  },
}))

interface Props {
  form: Form
  addQuestion: (id: string, payload: AddQuestion) => void
}

export const Editor: FC<Props> = ({ form, addQuestion }) => {
  const classes = useStyles()
  const id = useId()

  const fields = form?.definition?.fields ?? {}
  const hasQuestions = Object.keys(fields).length > 0

  const handleAdd = useCallback(
    (type) => addQuestion(id, { label: 'new', type }),
    [addQuestion, id]
  )

  return (
    <div className={classes.root}>
      <FabMenu
        title={hasQuestions ? 'Add new question' : 'Add your first question'}
        prompt="Choose a question type"
        options={{
          text: 'Text',
          select: 'Select',
        }}
        onSelect={handleAdd}
      />
    </div>
  )
}
