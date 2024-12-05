'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

const featuresContent = {
  ID: [
    {
      title: 'Promosi Produk Lokal',
      description: 'Dukung produk lokal dengan promosi menarik yang kami tawarkan. Temukan berbagai produk UMKM berkualitas dari seluruh Indonesia.',
      image: '/images/promotion.png',
      alt: 'Promosi Produk Lokal',
      imagePosition: 'left'
    },
    {
      title: 'Fitur Pencarian Produk',
      description: 'Temukan produk yang Anda inginkan dengan mudah menggunakan fitur pencarian kami yang canggih. Cari berdasarkan kategori, lokasi, atau kata kunci spesifik.',
      image: '/images/search.png',
      alt: 'Fitur Pencarian',
      imagePosition: 'right'
    },
    {
      title: 'Layanan Antar Kota',
      description: 'Nikmati layanan pengiriman antar kota yang cepat dan aman dengan Jastipinaja. Jangkauan luas ke berbagai kota di Indonesia.',
      image: '/images/delivery.png',
      alt: 'Layanan Antar Kota',
      imagePosition: 'left'
    },
    {
      title: 'Tracking Pengiriman (Realtime)',
      description: 'Pantau pengiriman Anda secara real-time dengan sistem tracking kami yang akurat. Dapatkan update status pengiriman secara langsung.',
      image: '/images/tracking.png',
      alt: 'Tracking Realtime',
      imagePosition: 'right'
    }
  ],
  EN: [
    {
      title: 'Local Product Promotion',
      description: 'Support local products with our attractive promotions. Discover quality SME products from all over Indonesia.',
      image: '/images/promotion.png',
      alt: 'Local Product Promotion',
      imagePosition: 'left'
    },
    {
      title: 'Product Search Feature',
      description: 'Find the products you want easily using our advanced search feature. Search by category, location, or specific keywords.',
      image: '/images/search.png',
      alt: 'Search Feature',
      imagePosition: 'right'
    },
    {
      title: 'Inter-City Services',
      description: 'Enjoy fast and secure inter-city delivery services with Jastipinaja. Wide coverage to various cities in Indonesia.',
      image: '/images/delivery.png',
      alt: 'Inter-City Services',
      imagePosition: 'left'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your shipments in real-time with our accurate tracking system. Get instant delivery status updates.',
      image: '/images/tracking.png',
      alt: 'Real-time Tracking',
      imagePosition: 'right'
    }
  ]
};

export default function FiturPage() {
  const { language } = useLanguage();
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  const features = featuresContent[language];

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(index);

    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [isScrolling]);

  useEffect(() => {
    if (!features) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < features.length) {
        scrollToSection(nextSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling, features, scrollToSection]);

  if (!features) {
    return <div>Error: Features not available for the selected language.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
        <Navbar />
      </div>

      <main className="flex-grow relative snap-y snap-mandatory overflow-y-auto scroll-smooth">
        {features.map((feature, index) => (
          <section 
            key={index}
            id={`section-${index}`}
            className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 relative snap-start"
          >
            {/* Background with transition */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index % 2 === 0 
                  ? 'bg-gradient-to-b from-white to-pink-100' 
                  : 'bg-[#F04B4B]'
              }`}
            />

            {/* Content without transition */}
            <div className="relative w-full z-10">
              {/* Up Arrow - Adjusted position and z-index */}
              {index > 0 && (
                <motion.button
                  onClick={() => scrollToSection(index - 1)}
                  className={`absolute top-24 left-1/2 transform -translate-x-1/2 rounded-full p-3 cursor-pointer transition-all duration-300 z-20
                    ${index % 2 === 0 
                      ? 'bg-[#F04B4B] hover:bg-[#d43b3b]' 
                      : 'bg-white/90 hover:bg-white'
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <ChevronUp 
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? 'text-white' : 'text-[#F04B4B]'
                    }`}
                    aria-hidden="true" 
                  />
                </motion.button>
              )}

              {/* Section Content */}
              <div className="w-full max-w-[1200px] h-[600px] mx-auto mt-20">
                <motion.div 
                  className={`w-full h-full flex flex-col md:flex-row items-center backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 relative
                    ${index % 2 === 0 
                      ? 'bg-white/80' 
                      : 'bg-white/95'
                    }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.imagePosition === 'left' ? (
                    <>
                      <motion.div 
                        className="w-[400px] h-[400px] flex-shrink-0 mb-6 md:mb-0 md:mr-12 relative"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex-1 space-y-6 max-w-[600px]"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-[#F04B4B]">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="flex-1 space-y-6 max-w-[600px]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-[#F04B4B]">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                      <motion.div 
                        className="w-[400px] h-[400px] flex-shrink-0 mb-6 md:mb-0 md:ml-12 relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Section Indicator Dots */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${currentSection === i 
                        ? index % 2 === 0 
                          ? 'bg-[#F04B4B] w-4 h-4' 
                          : 'bg-white w-4 h-4'
                        : index % 2 === 0 
                          ? 'bg-[#F04B4B]/50 hover:bg-[#F04B4B]/80'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    aria-label={`Go to section ${i + 1}`}
                  />
                ))}
              </div>

              {/* Down Arrow */}
              {index < features.length - 1 ? (
                <motion.button
                  onClick={() => scrollToSection(index + 1)}
                  className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-full p-3 cursor-pointer transition-all duration-300
                    ${index % 2 === 0 
                      ? 'bg-[#F04B4B] hover:bg-[#d43b3b]' 
                      : 'bg-white/90 hover:bg-white'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: 5 }}
                >
                  <ChevronDown 
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? 'text-white' : 'text-[#F04B4B]'
                    } ${!isScrolling ? 'animate-bounce' : ''}`}
                    aria-hidden="true" 
                  />
                </motion.button>
              ) : (
                // Footer scroll button
                <motion.button
                  onClick={() => {
                    const footer = document.getElementById('footer-section');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-full p-3 cursor-pointer transition-all duration-300
                    ${index % 2 === 0 
                      ? 'bg-[#F04B4B] hover:bg-[#d43b3b]' 
                      : 'bg-white/90 hover:bg-white'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: 5 }}
                >
                  <ChevronDown 
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? 'text-white' : 'text-[#F04B4B]'
                    } animate-bounce`}
                    aria-hidden="true" 
                  />
                </motion.button>
              )}
            </div>
          </section>
        ))}

        {/* Footer Section */}
        <section id="footer-section" className="w-full snap-start">
          <Footer />
        </section>
      </main>
    </div>
  );
}