'use client'

import React, { useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLanguage } from '@/app/context/LanguageContext';

// Add this interface and data before the component
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Record<string, Testimonial[]> = {
  id: [
    {
      id: 1,
      name: "John Doe",
      role: "Customer",
      content: "Layanan jastip yang sangat membantu!",
      image: "/images/person.png"
    },
    // Add more testimonials as needed
  ],
  en: [
    {
      id: 1,
      name: "John Doe",
      role: "Customer",
      content: "Very helpful personal shopping service!",
      image: "/images/person.png"
    },
    // Add more testimonials as needed
  ]
};

export default function TestimonialCarousel() {
  const { language } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    // Auto-advance timer
    const autoplayTimer = setInterval(() => {
      if (current === count - 1) {
        api.scrollTo(0)
      } else {
        api.scrollNext()
      }
    }, 5000) // 5 seconds

    // Cleanup
    return () => clearInterval(autoplayTimer)
  }, [api, current, count])

  return (
    <div className="w-full py-12" style={{
      background: 'linear-gradient(to bottom, #FFD6D6 0%, #FFE4E4 30%, #FFF1F1 60%, #FFFFFF 100%)'
    }}>
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-[#F04B4B] mb-6">Apa Kata Mereka?</h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden"
        >
          <CarouselContent>
            {testimonials[language].map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <Card className="relative bg-[#F04B4B] text-white p-6 rounded-3xl shadow-xl">
                  <div className="flex items-stretch gap-4">
                    <div className="relative flex-shrink-0 flex items-center">
                      <div className="w-16 h-full rounded-full overflow-hidden border-2 border-white/30">
                        <div className="w-full h-full relative">
                          <Image
                            src={testimonial.image}
                            alt={`Foto profil ${testimonial.name}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 64px) 100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <blockquote className="bg-white/20 rounded-xl p-3 text-sm">
                        <p className="text-white leading-relaxed">{testimonial.content}</p>
                      </blockquote>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-white/80 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="absolute left-2 bg-white/20 hover:bg-white/30 border-none text-white"
          />
          <CarouselNext 
            className="absolute right-2 bg-white/20 hover:bg-white/30 border-none text-white"
          />
        </Carousel>
      </div>
    </div>
  )
}

