import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className={`embla__slide__number slider slider${index + 1}`}> Hello </div>

              {/* <Image src={`/slider/slider${index + 1}.jpg`} layout="responsive" width={1000} height={300} alt="CybersecurTA" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel