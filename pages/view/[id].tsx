import { useRouter } from 'next/router'

import { Page } from 'components/Page'

const View = () => {
  const router = useRouter()
  const { id } = router.query
  return <Page>View id: {id}</Page>
}

export default View
