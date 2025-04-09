export function Articles() {
  return (
    <section className='bg-gradient-to-b from-[#ECFEFF] px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto max-w-6xl space-y-12'>
        <div className='flex flex-col items-center gap-4'>
          <div className='rounded-full bg-blue-100 px-4 py-1.5 text-blue-900'>
            تأثير مشروعنا
          </div>
          <h3 className='text-center text-4xl font-bold text-gray-800'>
            كيف يمكن لبئرٍ واحد أن يغيّر كل شيء؟
          </h3>
          <p className='max-w-2xl text-center text-lg text-pretty text-gray-600'>
            عندما نوفر مصدرًا مستدامًا للماء، فإننا نغيّر حياة الناس بالكامل –
            من الصحة إلى التعليم إلى كرامة العيش.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3'>
          {[
            {
              title: 'تحسين الصحة',
              description:
                'الوصول إلى مياه نظيفة يقلّل من الأمراض المنقولة بالماء، ويحمي الأطفال والنساء من آثار الجفاف وسوء النظافة، مما يُحسّن الصحة العامة للمجتمع.',
              image: 'https://picsum.photos/373/192.webp?random=1',
            },
            {
              title: 'تعزيز التعليم',
              description:
                'حين لا يضطر الأطفال لقضاء ساعات طويلة في جلب الماء، يمكنهم التركيز على الدراسة والتعلّم، وبناء مستقبلٍ أفضل لأنفسهم ولأسرهم.',
              image: 'https://picsum.photos/373/192.webp?random=2',
            },
            {
              title: 'تمكين المجتمع',
              description:
                'الماء لا يروي فقط، بل يُحيي. توفيره يتيح للمجتمعات زراعة محاصيلها وتربية ماشيتها، مما يعزّز الاكتفاء الذاتي ويقوّي الاقتصاد المحلي.',
              image: 'https://picsum.photos/373/192.webp?random=4',
            },
          ].map(({ title, description, image }, index) => {
            return (
              <article
                key={index}
                className='mx-auto max-w-sm overflow-clip rounded-xl bg-white shadow'
              >
                <img src={image} alt='' className='h-48 w-full object-cover' />

                <div className='p-4'>
                  <h5 className='text-xl font-bold text-gray-800'>{title}</h5>
                  <p className='mt-2 text-pretty text-gray-600'>
                    {description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
