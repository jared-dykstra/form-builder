import type { GetServerSideProps, NextPage } from 'next'
import { EditorWithPreview, FormContext, Page } from 'components'

interface Props {
  id: string
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const id = params?.id
  return {
    props: {
      id: typeof id === 'string' ? id : '',
    },
  }
}

const EditPage: NextPage<Props> = ({ id }) => {
  return (
    <FormContext formId={id}>
      <Page>
        <EditorWithPreview />
      </Page>
    </FormContext>
  )
}

export default EditPage
