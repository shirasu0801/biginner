//ルートページ(ここだけヘッダーとフッターが表示されない)
import Head from 'next/head'
import Link from "next/link"//リロード不要でリンクできる
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:title" content="ここはトップページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="heading">style JSX!</h1>
        <h3 className="styles.footing">CSS.modules!</h3>
        <h2>Hello</h2>
        <Content type="alert" />
        <p className="msg">jsx style</p>
        <style jsx>
          {`
            h2 {
              color: red;
              background: green;
            }

            .msg {
              color: orange;
              background: lightblue
            }
          `}
        </style>
          <Image src="/botanical.jpg" width={300} height={300} alt="a"/>
          <Image src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjY4OTkyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" width={300} height={300} alt="aa"/>
          <Link href="./about">
            <button>Aboutへ行く</button>
          </Link>
      </div>
    </div>
  )
}

function Content({type}) {//typeがpropsとなる
  //<Content />で呼び出すことで青色の文字を適用したpが挿入される(他のコンポーネントに影響を与えない)
  //コンポーネント外にCSSを適用したい場合は、<style global jsx></style>を使う
  return (//propsで受け取ったtypeの文字列がalertであれば文字列は赤、それ以外ならblue
    <div> 
      <h2>ここにコンテンツが入ります</h2>
      <style global jsx>{`
      h2 {
        color:${type === "alert"?"red":"blue" };
      }
      `}
      </style>
    </div>
  )
}
