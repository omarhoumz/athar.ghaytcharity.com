import { Dialog, DialogPanel } from '@headlessui/react'
import { IconMenu3, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { cn } from '../../utils/cn'

const navigation = [
  { name: 'اتصل بنا', href: '#' },
  { name: 'من نحن', href: '#' },
  { name: 'المشاريع', href: '#' },
  { name: 'عن الحملة', href: '#' },
  { name: 'الرئيسية', href: '#' },
]

const companyLogoElement = (
  <a href='#' className='-m-1.5 p-1.5'>
    <span className='sr-only'>Athar initiative, مبادرة أثر</span>
    <img
      alt=''
      src='/logo.svg'
      className='h-12 w-auto'
      height={48}
      width={148}
    />
  </a>
)

export function CtaAction({ className, children = 'تبرع الآن' }) {
  return (
    <a
      href='#'
      className={cn(
        'rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        className,
      )}
    >
      {children}
    </a>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='relative min-h-(--header-height) bg-white shadow'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8'
      >
        <div className='flex lg:flex-1'>{companyLogoElement}</div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm/6 font-semibold text-gray-900'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          <CtaAction />
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <IconMenu3 aria-hidden='true' className='size-6' />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 end-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center gap-x-6'>
            {companyLogoElement}

            <CtaAction className='ms-auto' />

            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <IconX aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
