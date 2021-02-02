import type { FC } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import type { ListItemIconProps } from '@material-ui/core'
import {
  Build as BuildIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  Share as ShareIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'

import { Page } from 'components'

interface ListItemLinkProps {
  icon: ListItemIconProps['children']
  primary: string
  to: string
}

const ListItemLink: FC<ListItemLinkProps> = ({ icon, primary, to }) => (
  <Link href={to}>
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  </Link>
)

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8, 4),
    padding: theme.spacing(1, 4),
  },
}))

export const IndexPage: NextPage = () => {
  const classes = useStyles()
  return (
    <Page splash>
      <List classes={classes} component="nav" aria-label="create edit view">
        <ListItemLink to="/create" icon={<BuildIcon />} primary="Create" />
        <ListItemLink to="/edit/1" icon={<EditIcon />} primary="Edit {id: 1}" />
        <ListItemLink
          to="/view/1"
          icon={<VisibilityIcon />}
          primary="View {id: 1}"
        />
        <ListItemLink to="/gql" icon={<ShareIcon />} primary="Extra: GraphQL" />
        <ListItemLink
          to="/sign-in"
          icon={<AccountCircleIcon />}
          primary="Extra: Log In"
        />
      </List>
    </Page>
  )
}

export default IndexPage
