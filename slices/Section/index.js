import React from 'react'
import { PrismicText } from '@prismicio/react'

/*
const Section = ({ children, bg = 'bg-slate-100', span }) => (
  <div className={`min-h-screen grid grid-cols-12 ${bg}`}>
    <div className={`${span} grid grid-cols-12 gap-14 m-14`}>{children}</div>
  </div>
)
*/

/*
<Section span={span}>
  <div className='relative col-span-6 aspect-4/5 self-start'>
    <Image alt='' src='/images/main/JIV4.jpg' layout='fill' />
  </div>
  <div className='relative col-span-5 self-end'>
    <Description />
  </div>

  <div className='relative col-span-6 self-end text-right'>
    <Description />
  </div>
  <div className='relative col-span-5 aspect-square self-end'>
    <Image alt='' src='/images/main/JIV5.jpg' layout='fill' />
  </div>
</Section>
*/

const Section = ({ slice }) => (
  <section>
    {slice?.items?.map((item, i) => (
      <img key={i} src={item.Image.url} alt={item.Image.alt} />
    ))}
  </section>
)

export default Section
