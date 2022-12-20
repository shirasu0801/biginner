//共通部分(フッター)
import { useState } from 'react'

export default function Footer() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>1増やす</button>
      <p>copyright 2022</p>
    </div>
  )
}