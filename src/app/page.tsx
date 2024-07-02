import Image from 'next/image'
import React from 'react'

const Home: React.FC<{}> = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-2'>
      <Image
        className='rounded-full border border-black p-2'
        src="/logo.png"
        alt='hy-logo'
        width={300}
        height={300}
      />
      <h1 className='text-4xl'>Library of Custom React Components</h1>
      <div className='mt-5 text-lg'>Start the Storybook server to see the catalog of components</div>
    </section>
  )
}

export default Home