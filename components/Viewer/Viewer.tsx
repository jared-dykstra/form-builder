import type { FC } from 'react'
import { makeStyles } from '@material-ui/core'
import { Form } from 'types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
    height: '100%',
  },
}))

interface Props {
  form: Form
}

export const Viewer: FC<Props> = ({ form }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Viewer
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  )
}
