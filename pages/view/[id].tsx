import { Viewer, Page } from 'components'
import { useId, useFormBuilder } from 'hooks'

const ViewPage = () => {
  const id = useId()
  const { form } = useFormBuilder(id)
  return (
    <Page>
      <Viewer form={form} />
    </Page>
  )
}

export default ViewPage
