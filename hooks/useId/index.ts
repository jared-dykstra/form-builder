import { useRouter } from 'next/router'

export const useId = () => {
  const router = useRouter()
  const { id } = router.query
  return (id as string) || ''
}
