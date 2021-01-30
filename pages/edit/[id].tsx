import { useRouter } from 'next/router'

const Edit = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>Edit id: {id}</div>
}

export default Edit
