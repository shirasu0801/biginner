//ダイナミックルーティーン→URLのパラメーターとファイル名を対応させなくてもOK
// => products/bag以外の文字列でアクセスすると表示
// => ファイル名を変数とすることで表示できる

//useRouter Hook ⇨アクセスしてきたURLによって動的にページ内容を変更できる
// => URLに入れた文字列をそのままページの内容に適用して変更する(動的ファイル)

import { useRouter } from 'next/router'
export default function Name() {
  const router = useRouter()//ルーティングに関する情報を持つrouterオブジェクトにアクセスできる
  return <h1>ここは{router.query.name}のページです。</h1>
}
