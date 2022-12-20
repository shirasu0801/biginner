export default function post({post}) {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}



////SSR
// export async function getServerSideProps({params}) {//paramsはどこから？
//   const id = params.post
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

//   const post = await res.json()
//   if(!Object.keys(post).length) {
//     return {notfound: true,}//falseにするとエラー出す
//   }
//   return { props: {post}}//ここからどのようにしてpost(post)に渡るのか不明
// }
// // => 大ナミックルーティーンのため、個別ページアクセス時には?id=〇〇となる



////SSG
export async function getStaticProps({params}) {//paramsはどこから？
  const id = params.post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const post = await res.json()
  return { props: {post}}
}

//getStaticPathsメソッド追加部分
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

  const posts = await res.json()
  const paths = posts.map((post) => `/posts/${post.id}`)//個別ページのidを取り出してパスを作成
  return { 
    paths,
    fallback: false,
  }
}


