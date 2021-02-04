import type { GetServerSideProps, NextPage } from 'next'

import { Viewer, Page } from 'components'
import { useFormBuilder } from 'hooks'

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

const ViewPage: NextPage<Props> = ({ id }) => {
  const { form } = useFormBuilder(id)
  return (
    <Page>
      <Viewer form={form} />
    </Page>
  )
}

export default ViewPage
