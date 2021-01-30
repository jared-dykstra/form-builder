import { useRouter } from 'next/router'

const View = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>View id: {id}</div>
}

export default View
