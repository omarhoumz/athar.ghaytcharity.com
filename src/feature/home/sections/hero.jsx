import { CtaAction } from '../../../components/layout/header'

export function Hero() {
  return (
    <section className='relative isolate px-6 pt-14 text-white lg:px-8'>
      <div className='absolute inset-0 bg-[url("/hero-bg.jpg")] bg-cover' />
      <div className='absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/10 via-[#1E3A8A]/40 via-20% to-[#172554]/70 to-70%' />

      <div className='relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='text-center'>
          <h1 className='text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl'>
            قطرة تغيّر الحياة
          </h1>
          <p className='mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8'>
            مع كل مطرٍ جديد، تأتي فرصة جديدة. ساهم معنا اليوم لنُحوّل هذه الفرصة
            إلى مصدر دائم للماء في القرى العطشى.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <CtaAction className='px-10 py-3 text-lg font-medium'>
              ساهم الآن بالتبرع
            </CtaAction>
          </div>
        </div>
      </div>
    </section>
  )
}
