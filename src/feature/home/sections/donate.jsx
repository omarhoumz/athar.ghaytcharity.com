import { IconHeart, IconMessageCircle, IconShare } from '@tabler/icons-react'
import { cn } from '../../../utils/cn'

export function Donate() {
  return (
    <section className='bg-gradient-to-b from-[#EFF6FF] to-[#ECFEFF] px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto max-w-6xl space-y-12'>
        <div className='flex flex-col items-center gap-4'>
          <div className='rounded-full bg-blue-100 px-4 py-1.5 text-blue-900'>
            تبرع الآن
          </div>
          <h3 className='text-center text-4xl font-bold text-gray-800'>
            حان الوقت لنحدث الفرق
          </h3>
          <p className='max-w-2xl text-center text-lg text-pretty text-gray-600'>
            كل درهم تقدمه، يقربنا من أول نقطة ماء… ساهم اليوم في تمويل حفر بئرين
            سينهيان معاناة عشرات العائلات في الجنوب. لا نحتاج لمعجزات، فقط إلى
            إرادة... وإلى دعمك.
          </p>
        </div>

        <div className='relative isolate flex w-full flex-col gap-6 overflow-clip rounded-xl bg-white p-9 shadow-md'>
          <div className='absolute start-0 top-0 h-1 w-full bg-gradient-to-r from-[#22D3EE] to-[#2563EB]'></div>
          <h4 className='text-2xl font-bold text-gray-800'>
            معلومات التحويل البنكي:
          </h4>

          <div className='space-y-4'>
            {[
              { value: 'جمعية غيث للأعمال الاجتماعية', label: 'الاسم:' },
              { value: '[رقم الحساب البنكي الكامل]', label: 'رقم الحساب:' },
              { value: '[اسم البنك]', label: 'البنك:' },
              { value: '[حسب المتوفر]', label: 'الرمز البنكي:' },
            ].map(({ label, value }, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col gap-3 rounded bg-gray-100 p-3 text-lg md:flex-row'
                >
                  <div className='font-bold md:min-w-36'>{label}</div>
                  <div className='flex-1 text-gray-600'>{value}</div>
                </div>
              )
            })}
          </div>

          <div className='rounded border border-blue-500 bg-blue-100 p-4 text-lg text-blue-900'>
            📌 يرجى كتابة <span className='font-bold'>”حملة الآبار“</span> في
            سبب التحويل
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4'>
          <Button icon={<IconShare />}>أرغب في دعم الحملة إعلاميا</Button>
          <Button icon={<IconHeart />} outlined>
            أريد المساهمة بوسيلة أخرى
          </Button>
          <Button icon={<IconMessageCircle />} outlined>
            شارك الحملة مع أصدقائك
          </Button>
        </div>
      </div>
    </section>
  )
}

function Button({
  children,
  icon,
  outlined = false,
  type = 'button',
  onClick,
}) {
  return (
    <button
      className={cn(
        'rounded-xl border-2 px-5 py-3 text-sm font-medium transition-colors duration-75 not-disabled:cursor-pointer',
        outlined
          ? 'border-blue-200 bg-white text-blue-900 hover:bg-blue-50'
          : 'border-blue-600 bg-blue-600 text-white shadow-md hover:border-blue-800 hover:bg-blue-800',
        { 'flex items-center gap-2.5 [&>svg]:size-4': !!icon },
      )}
      type={type}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  )
}
