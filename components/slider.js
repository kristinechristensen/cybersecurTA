import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FcLock } from "react-icons/fc";

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla border-b-4 border-blue-950">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className={`embla__slide__number slider  text-white slider${index + 1}`}>
                <div className="bg-white opacity-80 p-6 sm:p-10 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border-4 border-blue-900 rounded-xl drop-shadow-lg">

                  <div className="text-lg sm:text-lg md:text-4xl lg:text-6xl mb-4 text-wrap">
                    <span className="text-blue-900 drop-shadow-md">CyberSecur</span>
                    <span className="text-red-600 drop-shadow-md">TA:</span>
                  </div>
                  <div className="flex items-center text-lg sm:text-xl md:text-3xl italic font-medium text-black">
                    <FcLock className="text-4xl sm:text-6xl md:text-8xl mr-2" />
                    <span>Hacking the Gap and Building the Future Workforce!</span></div>
                </div>

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