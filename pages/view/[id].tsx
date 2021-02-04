import type { GetServerSideProps, NextPage } from 'next'

import { FormContext, Viewer, Page } from 'components'

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
  return (
    <FormContext formId={id}>
      <Page>
        <Viewer />
      </Page>
    </FormContext>
  )
}

export default ViewPage
