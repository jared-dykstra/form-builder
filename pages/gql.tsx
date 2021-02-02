import type { NextPage } from 'next'
import fetch from 'cross-fetch'
import useSWR from 'swr'

import { Page } from 'components'

// TODO: If I actually want to do any back-end stuff, Replace with the apollo-client useQuery hook and
// auto-generate typescript types from the GQL schema
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = async (query: any) => {
  const res = await fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  return json.data
}

interface Data {
  users: { name: string }[]
}

export const GqlPage: NextPage = () => {
  const { data, error } = useSWR<Data>('{ users { name } }', fetcher)

  const users = data?.users || []

  return (
    <Page splash>
      {error && 'Failed to load'}
      {!data && 'Loading...'}
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </Page>
  )
}

export default GqlPage
