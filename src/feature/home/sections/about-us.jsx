import { IconDroplets, IconHeart, IconInfoSmall } from '@tabler/icons-react'
import { navigation } from '../../../components/layout/data/navigation'

export function AboutUs() {
  return (
    <section className='bg-gradient-to-b to-[#EFF6FF] px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-8'>
        <div className='aspect-square'>
          <img
            src='/team.webp'
            alt=''
            className='size-full rounded-2xl object-cover shadow-xl'
          />
        </div>

        <div className=''>
          <div className='w-fit rounded-full bg-blue-100 px-4 py-1.5 text-blue-900'>
            من نحن
          </div>

          <h3 className='mt-4 text-3xl font-bold'>عن جمعية غيث الخيرية</h3>
          <p className='mt-4 max-w-prose text-lg text-pretty text-gray-700'>
            جمعية غيث للأعمال الاجتماعية هي مبادرة إنسانية مغربية تسعى إلى تحسين
            واقع العيش في المناطق القروية، من خلال مشاريع مستدامة في مجالات
            الماء، الصحة، والتعليم.
          </p>
          <p className='mt-4 max-w-prose text-lg text-pretty text-gray-700'>
            حملتنا الحالية لتمويل حفر بئرين في الجنوب تنبع من التزامنا بحق
            الجميع في الوصول إلى الماء النقي.
          </p>

          <div className='mt-6 border-s-4 border-blue-600 bg-blue-50 px-5 py-6'>
            <blockquote className='max-w-prose text-xl font-bold text-pretty text-blue-800'>
              لأن الماء حياة... ونحن نؤمن أن لكل إنسان حق فيها.
            </blockquote>
          </div>

          <h5 className='mt-6 text-lg font-semibold'>🔗 تابعوا أنشطتنا عبر:</h5>
          <div className='mt-4 flex gap-5'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-600 hover:text-blue-950'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='size-8' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
