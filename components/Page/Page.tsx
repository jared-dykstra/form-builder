import type { FC } from 'react'
import NextLink from 'next/link'
// import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  main: { height: '100%' },
  title: {
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
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
}))

interface Props {
  splash?: boolean
}

export const Page: FC<Props> = ({ splash = false, children }) => {
  const classes = useStyles()

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
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
