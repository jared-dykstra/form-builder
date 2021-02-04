import { Paper, Grid, makeStyles } from '@material-ui/core'
import { Editor, Viewer, useFormContext } from 'components'

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

export const EditorWithPreview = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={7}>
        <Editor />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <Viewer />
      </Grid>
    </Grid>
  )
}
