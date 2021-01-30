import Link from 'next/link'
import type { NextPage } from 'next'

export const IndexPage: NextPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/create">Create Form</Link>
        </li>
        <li>
          <Link href="/edit/1">Edit Form ID #1</Link>
        </li>
        <li>
          <Link href="/view/1">View Form ID #1</Link>
        </li>
        <li>
          <Link href="/gql">Bonus: View some GQL data</Link>
        </li>
      </ul>
    </>
  )
}

export default IndexPage
