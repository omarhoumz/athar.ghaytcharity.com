import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

export function VideoShowcasing() {
  const [triggerPlay, setTriggerPlay] = useState(false)

  return (
    <section className='bg-[#EFF6FF] px-6 py-20 md:px-10 md:py-28'>
      <Helmet>
        {/* Preload video & thumbnail image */}
        <link rel='preload' href='/flower.webm' as='video' />
        <link rel='preload' href='/video-thumb.webp' as='image' />
      </Helmet>

      <div className='mx-auto flex max-w-6xl flex-col items-center gap-4'>
        <div className='rounded-full bg-blue-100 px-4 py-1.5 text-blue-900'>
          فيديو الحملة
        </div>
        <h3 className='text-4xl font-bold text-gray-800'>
          شاهد الرحلة... و استشعر الحاجة
        </h3>
        <p className='max-w-2xl text-center text-lg text-pretty text-gray-600'>
          في هذا الفيديو، تأخذنا جمعية غيث في جولة حقيقية إلى عمق المعاناة. من
          الطريق الطويل نحو القرى، إلى الآبار التي لا تكفي… ومن صوت الواقع، تولد
          إرادة التغيير.
        </p>

        <div className='mt-4 aspect-video w-full overflow-clip rounded-2xl shadow-md'>
          {triggerPlay ? (
            <video
              src='/flower.webm'
              className='size-full rounded-2xl object-cover shadow'
              controls
              autoPlay
            />
          ) : (
            <div className='relative isolate grid size-full place-items-center bg-gray-600'>
              <div
                className='absolute inset-0 bg-[url("/video-thumb.webp")] bg-cover bg-no-repeat opacity-85'
                aria-hidden
              />
              <button
                onClick={() => setTriggerPlay(true)}
                className='group relative grid size-24 cursor-pointer place-items-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-all hover:backdrop-blur-md'
                aria-label='Play video'
              >
                <IconPlayerPlayFilled
                  size={48}
                  className='transition-transform group-hover:scale-110'
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
