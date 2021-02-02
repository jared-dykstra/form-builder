import { EditorWithPreview, Page } from 'components'
import { useId, useFormBuilder } from 'hooks'

const EditPage = () => {
  const id = useId()
  const { form } = useFormBuilder(id)
  return (
    <Page>
      <EditorWithPreview form={form} />
    </Page>
  )
}

export default EditPage
