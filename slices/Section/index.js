import Image from 'next/image'

const Section = ({ slice }) => (
  <section>
    {slice?.items?.map((item, index) => (
      <div key={index}>
        <ul>
          <li>name: {item.Name}</li>
          <li>medium: {item.Medium}</li>
          <li>size: {item.Size}</li>
          <li>start: {item.Start}</li>
          <li>end: {item.End}</li>
          <li>aspect ratio X: {item.AspectRatioX}</li>
          <li>aspect ratio Y: {item.AspectRatioY}</li>
        </ul>
        <Image
          src={item.Image.url}
          alt={item.Image.alt}
          height='250'
          width='250'
        />
      </div>
    ))}
  </section>
)

export default Section
