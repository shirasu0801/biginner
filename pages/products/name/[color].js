import { useRouter } from 'next/router'

// export default function Color() {
//   const router = useRouter()
//   return <h1>ここは{router.query.color}色の{router.query.name}のページです。</h1>
// }

export default function Color() {
  const router = useRouter()
  const {name, color} = router.query
  return <h1>ここは{color}色の{name}のページです。</h1>
}
