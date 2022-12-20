//共通部分(全体レイアウト)
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}