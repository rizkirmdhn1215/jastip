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
  ID: [
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Pelanggan Setia",
      content: "Layanan jastip yang sangat membantu! Saya bisa mendapatkan produk dari berbagai daerah tanpa harus pergi ke sana.",
      image: "/images/person.png"
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Pembeli Regular",
      content: "Proses pembelian sangat mudah dan aman. Jastiper sangat profesional dalam menangani pesanan saya.",
      image: "/images/person.png"
    },
    {
      id: 3,
      name: "Linda Kusuma",
      role: "Pelanggan Baru",
      content: "Pengiriman cepat dan barang sesuai pesanan. Sangat puas dengan layanan JastipinAja!",
      image: "/images/person.png"
    }
  ],
  EN: [
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Loyal Customer",
      content: "Very helpful personal shopping service! I can get products from various regions without having to go there.",
      image: "/images/person.png"
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Regular Buyer",
      content: "The purchasing process is very easy and secure. The Jastipers are very professional in handling my orders.",
      image: "/images/person.png"
    },
    {
      id: 3,
      name: "Linda Kusuma",
      role: "New Customer",
      content: "Fast delivery and items as ordered. Very satisfied with JastipinAja's service!",
      image: "/images/person.png"
    }
  ]
};

export default function TestimonialCarousel() {
  const { language } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();

  // Fallback to 'en' if the language is not found in testimonials
  const currentTestimonials = testimonials[language] || testimonials['EN'];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Start autoplay
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="w-full py-12" style={{
      background: 'linear-gradient(to bottom, #FFD6D6 0%, #FFE4E4 30%, #FFF1F1 60%, #FFFFFF 100%)'
    }}>
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-[#F04B4B] mb-6">
          {language === 'ID' ? 'Apa Kata Mereka?' : 'What They Say?'}
        </h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: false
          }}
          className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden"
        >
          <CarouselContent>
            {currentTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <Card className="relative bg-[#F04B4B] text-white p-6 rounded-3xl shadow-xl h-[200px] flex items-center">
                  <div className="flex items-stretch gap-4 h-full">
                    <div className="relative flex-shrink-0 flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
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
                    <div className="flex-1 flex flex-col justify-between">
                      <blockquote className="bg-white/20 rounded-xl p-3 text-sm flex-1">
                        <p className="text-white leading-relaxed line-clamp-3">{testimonial.content}</p>
                      </blockquote>
                      <div className="mt-3">
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
  );
}

