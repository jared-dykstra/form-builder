import type { FC } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BuildIcon from '@material-ui/icons/Build'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ShareIcon from '@material-ui/icons/Share'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { makeStyles } from '@material-ui/core/styles'

import { Page } from 'components/Page'

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
