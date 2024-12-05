'use client';

import Navbar from './components/Navbar'
import Image from 'next/image'
import { DotOrnament } from './components/DotOrnament'
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';

// Add these animation variants outside your component
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
} as const;

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
} as const;

interface FooterColumn {
  title: string;
  links?: string[];
  content?: string | string[] | JSX.Element;
}

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Navbar - Added back at the top */}
      <Navbar />

      {/* First Section with Indonesia Map */}
      <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
          }}
        />
        <div className="absolute inset-0 -z-50">
          <Image
            src="/images/indonesia-map.png"
            alt="Indonesia Map Background"
            fill
            priority
            className="object-cover opacity-100"
            style={{
              filter: 'contrast(1.4) brightness(1.4) saturate(1.6)',
              objectPosition: 'center',
              transform: 'scale(0.7) translateY(-40px)',
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            {/* Left side - Text content */}
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="md:w-[30%] space-y-4"
            >
              <motion.div 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  {t.hero.title1.split(' ').map((word, index) => (
                    <span 
                      key={index}
                      className={index === 0 ? "text-[#9B2C2C]" : "text-[#F04B4B]"}
                    >
                      {word}
                    </span>
                  ))}
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  {t.hero.title2.split(' ').map((word, index) => (
                    <span 
                      key={index}
                      className={word === "JASTIPINAJA" ? "text-[#F04B4B]" : "text-[#9B2C2C]"}
                    >
                      {word}
                    </span>
                  ))}
                </h1>
              </motion.div>
              
              <motion.p 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="text-gray-600 text-sm max-w-lg"
              >
                {t.hero.description}
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 pt-2"
              >
                <Image
                  src="/images/playstore.png"
                  alt="Get it on Google Play"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
              </motion.div>
            </motion.div>

            {/* Right side - Phone mockup with ornament */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[30%] relative flex justify-end pr-12"
            >
              <div className="absolute z-10 right-0 top-[105%] translate-x-8">
                <DotOrnament />
              </div>

              <div className="relative translate-x-12 z-20" style={{ width: '200px', height: '400px' }}>
                <div className="absolute inset-0 bg-black rounded-[2rem] border-[10px] border-black overflow-hidden">
                  <div className="relative w-full h-full bg-[#F04B4B] flex items-center justify-center">
                    <Image
                      src="/images/logo-white.png"
                      alt="Jastipinaja Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-black rounded-b-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* New Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen bg-[#F04B4B] px-4 md:px-8 lg:px-16 flex items-center relative overflow-visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <Image src="/images/shop.png" alt="Shopping Illustration" width={400} height={400} className="h-auto" />
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-1 md:order-2 text-white"
            >
              <motion.h2 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8"
              >
                {t.features.title}
              </motion.h2>
              
              <div className="space-y-6">
                {/* Feature items */}
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/mobil.png"  // Add your icon
                      alt="Promo Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.features.feature1.title}</h3>
                    <p className="text-white/80">{t.features.feature1.description}</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/secure.png"  // Add your icon
                      alt="Secure Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.features.feature2.title}</h3>
                    <p className="text-white/80">{t.features.feature2.description}</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/cube.png"  // Add your icon
                      alt="Tracking Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.features.feature3.title}</h3>
                    <p className="text-white/80">{t.features.feature3.description}</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/store.png"  // Add your icon
                      alt="Support Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.features.feature4.title}</h3>
                    <p className="text-white/80">{t.features.feature4.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* Pink Gradient Section */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
          {/* Top Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between mb-12"
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Image
                src="/images/gojek.png"
                alt="Delivery Man"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2 space-y-3"
            >
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                {t.delivery.title}
              </h2>
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                {t.delivery.subtitle}
              </h2>
              <p className="text-[#9B2C2C] text-sm">
                {t.delivery.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="md:w-1/2 space-y-3"
            >
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                Pesanan Dibelanjakan <span className="text-[#F04B4B]">Jastiper</span> Terlatih
              </h2>
              <p className="text-[#9B2C2C] text-sm">
                Jastiper adalah Shopper terlatih yang berpengalaman dan membelanjakan dan mengantar pesananmu sampai ke rumah. Jastiper memiliki sertifikasi dan standar operasional yang sesuai standar tinggi pelayanan
              </p>
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="md:w-1/2 flex justify-end"
            >
              <Image
                src="/images/ibuk.png"
                alt="Shopping Woman"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section className="w-full bg-[#F04B4B] relative px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-white text-center mb-20">
            {t.process.title}
          </motion.h2>

          {/* Process Steps */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <motion.div className="bg-white rounded-2xl p-6 relative">
              <div className="absolute left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  1
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step1.png"
                    alt="Step 1"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  {t.process.steps.step1}
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="bg-white rounded-2xl p-6 relative">
              <div className="absolute  left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  2
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step2.png"
                    alt="Step 2"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  {t.process.steps.step2}
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="bg-white rounded-2xl p-6 relative">
              <div className="absolute left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  3
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step3.png"
                    alt="Step 3"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  {t.process.steps.step3}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Banner Section */}
      <motion.section className="w-full relative py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div className="bg-[#FF7B7B] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <motion.div className="space-y-6 max-w-xl z-10">
              <h3 className="text-2xl font-bold text-white">
                {t.bottomBanner.title}
              </h3>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4"
              >
                <Image
                  src="/images/playstore.png"
                  alt="Get it on Google Play"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
              </motion.div>
            </motion.div>

            {/* Right side image */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10"
            >
              <Image
                src="/images/shoppinglady.png"
                alt="Shopping Banner"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-4 left-[30%]"
            >
              <Image
                src="/images/bintang.png"
                alt="Stars"
                width={60}
                height={60}
                className="opacity-50"
              />
            </motion.div>
          </motion.div>

          {/* Additional text below the card */}
          <motion.div className="mt-8 space-y-3">
            <h4 className="text-[#F04B4B] text-xl font-semibold">
              {t.bottomBanner.subtitle}
            </h4>
            <p className="text-gray-600 text-base max-w-3xl">
              {t.bottomBanner.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Replace the entire footer section with: */}
      <Footer />
    </main>
  )
}
