import { LayoutDefault } from '../../components/layout/layout-default'
import { Articles } from './sections/articles'
import { Donate } from './sections/donate'
import { Hero } from './sections/hero'
import { Partners } from './sections/partners'
import { Project } from './sections/project'
import { StatusQuo } from './sections/status-quo'
import { VideoShowcasing } from './sections/video-showcasing'

export function Home() {
  return (
    <LayoutDefault>
      <Hero />

      <StatusQuo />

      <Project />

      <VideoShowcasing />

      <Donate />

      <Articles />

      <Partners />
    </LayoutDefault>
  )
}
