import type { FC } from 'react'
import { Paper, Grid, makeStyles } from '@material-ui/core'
import { Editor, Viewer } from 'components'
import { useFormBuilder } from 'hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

interface Props {
  id: string
}

export const EditorWithPreview: FC<Props> = ({ id }) => {
  const classes = useStyles()
  const { form, addQuestion, updateQuestion } = useFormBuilder(id)
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={7}>
        <Editor
          form={form}
          addQuestion={addQuestion}
          updateQuestion={updateQuestion}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <Viewer form={form} />
      </Grid>
    </Grid>
  )
}
