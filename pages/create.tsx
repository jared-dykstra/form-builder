import { useMemo, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'

import { Page } from 'components'

/**
 * A bookmarkable endpoint to create a brand new item.
 * Create a new ID and navigate to the editor
 */
const Create: NextPage = () => {
  const router = useRouter()
  const newId = useMemo(uuid, [])
  useEffect(() => {
    router.replace(`/edit/${newId}`)
  })

  return <Page />
}

export default Create
