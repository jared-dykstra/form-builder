import type { FC } from 'react'

import { Paper, Grid, makeStyles } from '@material-ui/core'
import { Editor, Viewer } from 'components'
import type { Form } from 'types'

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
  form: Form
}

export const EditorWithPreview: FC<Props> = ({ form }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={7}>
        <Editor form={form} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <Viewer form={form} />
      </Grid>
    </Grid>
  )
}
