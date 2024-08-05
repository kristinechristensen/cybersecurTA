import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla border-b-2 border-blue-900">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className={`embla__slide__number slider slider${index + 1}`}>  
              {/* <div><span class="bg-clip-text text-blue-900">CyberSecur</span><span class="bg-clip-text text-red-600">TA</span></div> */}
                
                </div>
              
              {/* Background style allows text: <Image src={`/slider/slider${index + 1}.jpg`} layout="responsive" width={1000} height={300} alt="CybersecurTA" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel