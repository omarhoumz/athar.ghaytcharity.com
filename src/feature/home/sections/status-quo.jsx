export function StatusQuo() {
  return (
    <section className='bg-gradient-to-b from-[#EFF6FF] px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-8'>
        <div>
          <h3 className='text-3xl font-bold'>ما الذي يحدث اليوم؟</h3>
          <p className='mt-4 max-w-prose text-lg text-pretty text-gray-700'>
            رغم الأمطار الأخيرة التي أنعشت الأمل في عدة مناطق من المغرب، ما زالت
            عشرات القرى في الجنوب تعاني من العطش اليومي. الآبار الموجودة جافة أو
            غير صالحة، والمسافات التي يقطعها السكان لجلب كميات قليلة من الماء لا
            تزال مرهقة وخطيرة.
          </p>
          <div className='mt-4 border-s-4 border-blue-600 bg-blue-50 px-5 py-6'>
            <blockquote className='max-w-prose text-lg font-medium text-pretty text-gray-700'>
              ”أحياناً ننتظر المطر لنملأ جِرارنا... لكنه لا يأتي إلا مرة كل
              شهرين.“
            </blockquote>
            <p className='mt-2 text-sm text-gray-500'>
              <cite>- شهادة من إحدى القرى التي زارتها الجمعية</cite>
            </p>
          </div>
          <p className='mt-4 text-xl font-bold text-pretty text-blue-500'>
            الماء متوفر... لكنه بعيد. والفرصة اليوم بين أيدينا.
          </p>
        </div>
        <div className='aspect-square'>
          <img
            src='/dry-land.webp'
            alt=''
            className='size-full rounded-2xl object-cover shadow-xl'
          />
        </div>
      </div>
    </section>
  )
}
