import { makeStyles } from '@material-ui/core'
import { useFormContext } from 'components'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
    height: '100%',
  },
}))

export const Viewer = () => {
  const { form } = useFormContext()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      Viewer
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  )
}
