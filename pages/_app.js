import '../styles/globals.css'
import Layout from './components/layout'

export default function MyApp({ Component, pageProps }) {

  //ComponentがgetLayoutプロパティを持ってる場合はgetLayout関数が実行し、なければそのままコンポーネントに戻す
  const getLayout = Component.getLayout || ((page) => page)

  return (
    // <div>
    //   <Layout>
    //     <Component {...pageProps} />
    //     <p>こんにちは</p>
    //   </Layout>
    // </div>
      getLayout(<Component{...pageProps} />)
  )
}

