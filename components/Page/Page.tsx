import type { FC } from 'react'
import NextLink from 'next/link'
import {
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
} from '@material-ui/icons'
import { withErrorBoundary, FallbackProps } from 'react-error-boundary'

import { makeStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Paper,
  Grid,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'

interface Props {
  splash?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  main: { height: '100%' },
  title: {
    paddingLeft: '1rem;',
    cursor: 'pointer',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: ({ splash }: Props) => ({
    margin: splash ? theme.spacing(8, 4) : undefined,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  }),
  grow: {
    flexGrow: 1,
  },
}))

const PageInner: FC<Props> = ({ splash = false, children }) => {
  const classes = useStyles({ splash })

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/">
            <HomeIcon />
          </NextLink>
          <NextLink href="/">
            <Typography variant="h6" className={classes.title}>
              Form Builder
            </Typography>
          </NextLink>
          <div className={classes.grow} />
          <NextLink href="/sign-in">
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Box flex={1} overflow="auto">
        <Grid container component="main" className={classes.main}>
          {splash && (
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
          )}
          <Grid
            item
            xs={12}
            sm={splash ? 8 : 12}
            md={splash ? 5 : 12}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>{children}</div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const FallbackComponent: FC<FallbackProps> = ({ error }) => (
  <PageInner>
    {error.name && <Typography variant="h2">{error.name}</Typography>}
    {error.message && <Typography variant="body1">{error.message}</Typography>}
    {error.stack && process.env.NODE_ENV !== 'production' && (
      <pre>{error.stack}</pre>
    )}
  </PageInner>
)

export const Page = withErrorBoundary(PageInner, {
  FallbackComponent,
  onError: (/*error, info */) => {
    /* TODO: Send to a service like sentry.io or bugsnag or whatever (Sentry comes with its own ErrorBoundary impl) */
  },
})
