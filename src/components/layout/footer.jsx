import { IconMail, IconPhone } from '@tabler/icons-react'
import { navigation } from './data/navigation'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className='bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          <div>
            <h3 className='text-sm/6 font-semibold text-white'>جمعية غيث</h3>
            <p className='mt-2 max-w-md text-sm/6 text-pretty text-gray-300'>
              مبادرة إنسانية مغربية تسعى إلى تحسين واقع العيش في المناطق القروية
              من خلال مشاريع مستدامة.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-sm/6 font-semibold text-white'>تواصل معنا</h3>
            <div className='flex items-start gap-2 text-gray-300'>
              <IconMail className='h-6 w-4 opacity-70' />

              <div className='flex flex-col items-start gap-2'>
                <span className='opacity-90'>البريد الإلكتروني:</span>
                <div>contact@ghayt.org</div>
              </div>
            </div>
            <div className='flex items-start gap-2 text-gray-300'>
              <IconPhone className='h-6 w-4 opacity-70' />

              <div className='flex flex-col items-start gap-2'>
                <span className='opacity-90'>رقم الهاتف / واتساب:</span>
                <div dir='auto'>+21251515324</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-sm/6 font-semibold text-white'>روابط سريعة</h3>

            <ul role='list' className='mt-6 space-y-4'>
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm/6 text-gray-400 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm/6 font-semibold text-white'>
              ️ ساهم بنشر الحملة عبر:
            </h3>
            <div className='mt-6 flex gap-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-300'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon aria-hidden='true' className='size-6' />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='min-h-(--footer-height)grid mt-16 place-items-center border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0'>
            &copy; {year} جمعية غيث الخيرية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
