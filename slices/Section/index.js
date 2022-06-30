import React from 'react'
import { PrismicText } from '@prismicio/react'

const Section = ({ slice }) => (
  <section>
    { slice?.items?.map((item, i) => <img src={item.Image.url} alt={item.Image.alt} />) }
    { slice?.items?.map((item, i) => <span>{item.Name}</span>) }
    { slice?.items?.map((item, i) => <span >{ item.Start }</span>) }
    { slice?.items?.map((item, i) => <span >{ item.End }</span>) }
  </section>
)

export default Section