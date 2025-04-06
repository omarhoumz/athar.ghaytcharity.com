import { IconDroplets, IconHeart, IconInfoSmall } from '@tabler/icons-react'

export function Project() {
  return (
    <section className='bg-gradient-to-b to-[#EFF6FF] px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-8'>
        <div className='aspect-square'>
          <img
            src='/well.webp'
            alt=''
            className='size-full rounded-2xl object-cover shadow-xl'
          />
        </div>

        <div>
          <h3 className='text-3xl font-bold'>ما الذي نسعى لتحقيقه؟</h3>
          <p className='mt-4 max-w-prose text-lg text-pretty text-gray-700'>
            من خلال هذه الحملة، نهدف إلى جمع 300,000 درهم لحفر بئرين عميقين في
            منطقتين زارتهم جمعية غيث، حيث يعيش السكان في ظروف صعبة بسبب غياب
            مصدر دائم للماء.
          </p>

          <h4 className='mt-6 text-xl font-bold'>لماذا الآن؟</h4>
          <ul role='list' className='mt-3 space-y-4'>
            {[
              {
                label: 'لأن الأمطار الأخيرة رفعت منسوب المياه الجوفية',
                icon: (
                  <IconDroplets className='size-10 rounded-full bg-blue-50 p-2 text-blue-500' />
                ),
              },
              {
                label: 'لأن السكان مستعدون للمساهمة في إنجاح المشروع',
                icon: (
                  <IconHeart className='size-10 rounded-full bg-blue-50 p-2 text-blue-500' />
                ),
              },
              {
                label: 'لأن كل تأخير يعني استمرار المعاناة',
                icon: (
                  <IconInfoSmall className='size-10 rounded-full bg-blue-50 p-1.5 text-blue-500' />
                ),
              },
            ].map(({ label, icon }, index) => {
              return (
                <li
                  key={index}
                  className='flex items-center gap-3 rounded-lg bg-white p-3 shadow-xs'
                >
                  <div>{icon}</div>
                  <div className='text-gray-600'>{label}</div>
                </li>
              )
            })}
          </ul>

          <h4 className='mt-6 text-xl font-bold'>هدفنا؟</h4>
          <p className='mt-3 max-w-prose text-lg text-pretty text-gray-700'>
            أن نوفر للقرى المتضررة مصدرًا مستدامًا وآمنًا للماء الصالح للشرب،
            يغيّر حياتهم من جذورها، ويمنحهم كرام العيش.
          </p>
        </div>
      </div>
    </section>
  )
}
