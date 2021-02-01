import { useRouter } from 'next/router'

import { Edit } from 'components/Edit'
import { Page } from 'components/Page'

const EditPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Page>
      <Edit id={id as string} />
    </Page>
  )
}

export default EditPage
