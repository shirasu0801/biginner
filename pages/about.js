import Layout from './components/layout'

//以下の関数コンポーネントと同じ(関数を変数としてどこかで取り出す場合)
// const About = () => {
//   return <h1>About Pages</h1>
// }
export default function About() {
  return (<h1>About</h1>)
}

//レイアウトを分ける場合はgetLayoutプロパティを使う
//LayoutコンポとgetLayoutプロパティが必要(returnの結果がAboutのgetLayoutプロパティに入る)
About.getLayout = function getLayout(page) {//_app.jsから呼び出される
  return <Layout>{page}</Layout>
}


