import type { GetServerSideProps, NextPage } from 'next'
import { EditorWithPreview, Page } from 'components'

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
    <Page>
      <EditorWithPreview id={id} />
    </Page>
  )
}

export default EditPage
