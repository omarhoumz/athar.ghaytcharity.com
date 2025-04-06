import { LayoutDefault } from '../../components/layout/layout-default'
import { Hero } from './sections/hero'
import { StatusQuo } from './sections/status-quo'

export function Home() {
  return (
    <LayoutDefault>
      <Hero />

      <StatusQuo />
    </LayoutDefault>
  )
}
