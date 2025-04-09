export function Partners() {
  return (
    <section className='px-6 py-20 md:px-10 md:py-28'>
      <div className='mx-auto max-w-6xl space-y-12'>
        <div className='flex flex-col items-center gap-4'>
          <div className='rounded-full bg-blue-100 px-4 py-1.5 text-blue-900'>
            شركائنا
          </div>
          <h3 className='text-center text-4xl font-bold text-gray-800'>
            أصدقائنا وشركائنا
          </h3>
          <p className='max-w-2xl text-center text-lg text-pretty text-gray-600'>
            انهم يثقون بنا
          </p>
        </div>

        <div className='text-center'>
          <div
            className='mx-auto grid max-w-4xl gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14'
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(148px, 1fr))',
            }}
          >
            {[
              {
                src: './logo/dar-shabab.png',
                alt: 'Maison des Jeunes',
              },
              {
                src: './logo/dhl.jpg',
                alt: 'DHL',
              },
              {
                src: './logo/nadi-tawasol.jpg',
                alt: 'Nadi Tawasol',
              },
              {
                src: './logo/warid.png',
                alt: 'Warid',
              },
            ].map(({ src, alt }, index) => {
              return (
                <div
                  key={index}
                  className='mx-auto grid size-36 place-items-center overflow-clip rounded bg-white p-4 shadow'
                >
                  <img
                    alt={alt}
                    src={src}
                    width={144}
                    height={144}
                    className='col-span-2 max-h-36 w-full object-contain lg:col-span-1'
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
