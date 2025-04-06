import { Footer } from './footer'
import { Header } from './header'

export function LayoutDefault({ children }) {
  return (
    <div
      style={{
        '--header-height': '80px',
        '--footer-height': '100px',
      }}
    >
      <Header />

      <main className='min-h-[calc(100vh-var(--header-height)-var(--footer-height))]'>
        {children}
      </main>

      <Footer />
    </div>
  )
}
