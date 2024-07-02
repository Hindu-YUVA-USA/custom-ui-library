import Button from '@/components/Button'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import React from 'react'


const componentsArray = [Button, Footer, ReviewCard]
const Catalog = () => {
  return (
    <section className='flex flex-col  gap-10'>
      <h1 className='text-4xl'>Catalog of custom components</h1>
      <div className='flex flex-col gap-10'>
        {componentsArray.map((component)=> (
          <div key={componentsArray.indexOf(component)} className='bg-slate-200 w-full flex items-center justify-center min-h-40'>
            {component()}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog