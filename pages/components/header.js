//共通部分(ヘッダー)
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href='/'>
        <button>Homeに戻る</button>
      </Link>
      <Link href='/about'>
        <button>Aboutへ</button>
      </Link>
    </div>
  )
}