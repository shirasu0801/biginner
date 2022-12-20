import Link from "next/link"
import useSWR from 'swr'

// export default function index({posts}) {
//   return (
//     <div>
//       <h1>POST一覧</h1>
//       <ul>
//         {posts.map((post) => {
//           return <li key={post.id}>
//               <Link href={`/posts/${post.id}`}>
//                 {post.title}
//               </Link>
//             </li>
//         })}
//       </ul>
//     </div>
//   )
// }



////SWR
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function index() {
  const {data, error} = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  if(error) return <div>failed download...</div>
  if(!data) return <div>loading...</div>
  //データの取得中はundefinedとなる(!dataはundefined)

  return (
    <div>
      <h1>POST</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}



////SSR
// export async function getServerSideProps() {
// const api_key = process.env.API_KEY; //設定した環境変数の値を取得
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const posts = await res.json()
//   return { props: {posts}}//ここからどのようにしてindex()に渡るのか不明
// }



////SSG
// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

//   const posts = await res.json()
//   return { props: {posts}}
// }
// => ダイナミックルーティーンのため、個別ページアクセス時には?id=〇〇となる