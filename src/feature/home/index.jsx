import { LayoutDefault } from '../../components/layout/layout-default'
import { Hero } from './sections/hero'
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
    </LayoutDefault>
  )
}
