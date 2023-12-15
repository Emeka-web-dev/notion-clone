import Image from 'next/image'
import React from 'react'

function Heroes() {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex item-center'>
        <div className='relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]'>
          <Image 
            src="/documents.png"
            fill
            alt='document'
            className='object-contain dark:hidden'
          />
          <Image 
            src="/documents-dark.png"
            fill
            alt='document'
            className='object-contain hidden dark:block'
          />
        </div>
        <div className='relative h-[400px] w-[400px] hidden md:block'>
          <Image 
            src="/reading.png"
            fill
            alt='reading'
            className='object-contain dark:hidden'
          />
          <Image 
            src="/reading-dark.png"
            fill
            alt='reading'
            className='object-contain hidden dark:block'
          />
        </div>
      </div>
    </div>
  )
}

export default Heroes