import '@fontsource-variable/noto-sans-arabic'

export function App() {
  return (
    <div className='mx-auto grid min-h-screen max-w-7xl place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <img
          src='/logo.svg'
          alt='Athar Initiative, مبادرة أثر'
          className='mx-auto h-28 w-auto'
        />

        <p className='mt-0 max-w-2xl text-sm/8 text-pretty text-gray-700'>
          مبادرة أثر من طرف{' '}
          <a
            href='https://ghaytcharity.com/'
            target='_blank'
            className='text-gray-800 underline underline-offset-4 transition-colors hover:text-gray-950'
          >
            جمعية غيت الخيرية
          </a>
        </p>
      </div>
    </div>
  )
}
