'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import PartnerSlider from '@/components/PartnerSlider';
import Footer from '../components/Footer';
import { useLanguage } from '@/app/context/LanguageContext';

// Animation variants
const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Jastiper() {
  const { language } = useLanguage();

  const content = {
    ID: {
      heroTitle: "Apa Itu Jastiper ??",
      heroDescription: "Jatiper adalah mitra JastipinAja yang akan menerima pesanan, membelanjakannya ke Toko, memilih produk dari lapak yang kamu pilih, dan mengantarkan langsung melalui jasa pengiriman.",
      whyJoinTitle: "Mengapa Bergabung Bersama JastipinAja ?",
      whyJoinDescription1: "JastipinAja adalah Start-up yang berfokus pada pelayanan jual beli & jasa seperti marketplace online.",
      whyJoinDescription2: "Dengan metode yang inovatif, bisnis kami sangat berkembang dengan pesat diseluruh kota besar di Indonesia sudah bekerja sama dengan kami dan Beberapa Center Kami di Indonesia",
      benefitsTitle: "Dengan Bergabung Jadi Jastiper kita dapet apa aja sih?",
      benefits: [
        "Tambahan Penghasilan: Dapatkan keuntungan dari setiap barang yang Anda bantu belikan. Semakin banyak pesanan, semakin besar pendapatan Anda!",
        "Dukungan Platform Profesional: Dengan Jastipinaja, Anda bekerja dalam sistem yang mempermudah pengelolaan pesanan, pembayaran, dan komunikasi dengan pelanggan.",
        "Akses ke Komunitas Jastiper: Bergabunglah dengan komunitas kami untuk berbagi pengalaman, tips, dan peluang kolaborasi."
      ],
      ctaTitle: "Sudah siap menjadi mitra Jastipinaja?",
      ctaButton: "Daftar Jastipers",
      bottomBannerTitle: "Buktikan belanja jadi lebih hemat dan praktis dengan JASTIPINAJA"
    },
    EN: {
      heroTitle: "What is Jastiper ??",
      heroDescription: "Jatiper is a partner of JastipinAja who will receive orders, shop at the store, select products from the stall you choose, and deliver directly through the delivery service.",
      whyJoinTitle: "Why Join JastipinAja?",
      whyJoinDescription1: "JastipinAja is a startup focused on buying and selling services like an online marketplace.",
      whyJoinDescription2: "With innovative methods, our business has grown rapidly in major cities across Indonesia, collaborating with us and several of our centers in Indonesia.",
      benefitsTitle: "What do we get by joining as a Jastiper?",
      benefits: [
        "Additional Income: Earn profits from every item you help purchase. The more orders, the greater your income!",
        "Professional Platform Support: With Jastipinaja, you work within a system that facilitates order management, payments, and communication with customers.",
        "Access to the Jastiper Community: Join our community to share experiences, tips, and collaboration opportunities."
      ],
      ctaTitle: "Ready to become a Jastipinaja partner?",
      ctaButton: "Register as Jastipers",
      bottomBannerTitle: "Prove that shopping is more economical and practical with JASTIPINAJA"
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Combined Hero & Benefits Section */}
      <motion.section 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full py-12 px-4 md:px-6 relative bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left side - Hero Image with Floating Cards */}
            <div className="w-full md:w-1/2 relative">
              {/* Main Hero Image */}
              <div className="relative">
                <Image
                  src="/images/jastiper-hero.png"
                  alt="Jastiper Delivery"
                  width={400}
                  height={500}
                  className="object-contain"
                />

                {/* Floating Order Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -left-28 top-20"
                >
                  <div className="bg-pink-100 rounded-lg p-2 shadow-lg flex items-center gap-2 w-[240px]">
                    <Image
                      src="/images/order-1.png"
                      alt="Order 1"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-xs font-semibold">Kue makanan penutup</p>
                      <p className="text-[10px] text-[#F04B4B]">Rp.120.000</p>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/images/Union.png"
                          alt="Delivery Icon"
                          width={10}
                          height={10}
                          className="object-contain text-[#F04B4B]"
                        />
                        <p className="text-[10px] text-[#F04B4B]">Pesanan sedang di perjalanan</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -right-10 top-1/3"
                >
                  <div className="bg-pink-100 rounded-lg p-2 shadow-lg flex items-center gap-2 w-[240px]">
                    <Image
                      src="/images/order-1.png"
                      alt="Order 2"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-xs font-semibold">Kue makanan penutup</p>
                      <p className="text-[10px] text-[#F04B4B]">Rp.120.000</p>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/images/Union.png"
                          alt="Delivery Icon"
                          width={10}
                          height={10}
                          className="object-contain text-[#F04B4B]"
                        />
                        <p className="text-[10px] text-[#F04B4B]">Pesanan sedang di perjalanan</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-10 left-1/4 transform -translate-x-1/2"
                >
                  <div className="bg-pink-100 rounded-lg p-2 shadow-lg flex items-center gap-2 w-[240px]">
                    <Image
                      src="/images/order-1.png"
                      alt="Order 3"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-xs font-semibold">Kue makanan penutup</p>
                      <p className="text-[10px] text-[#F04B4B]">Rp.120.000</p>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/images/Union.png"
                          alt="Delivery Icon"
                          width={10}
                          height={10}
                          className="object-contain text-[#F04B4B]"
                        />
                        <p className="text-[10px] text-[#F04B4B]">Pesanan sedang di perjalanan</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side - Hero Content */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6">
              <div className="relative">
                <h1 className="text-5xl font-bold text-[#F04B4B] mb-4 whitespace-nowrap">{content[language].heroTitle}</h1>
                {/* Yellow underline */}
                <div className="absolute -bottom-2 left-0 w-3/4 h-1.5 bg-yellow-400"></div>
              </div>
              
              <p className="text-gray-600 mt-8 text-xl leading-relaxed">
                {content[language].heroDescription}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Join JastipinAja Section */}
      <motion.section 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full py-16 px-4 md:px-8 relative bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2">
              <div className="relative mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  {content[language].whyJoinTitle}
                </h2>
                {/* Yellow decorative element */}
                <div className="absolute -left-4 top-0 w-2 h-12 bg-yellow-400"></div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {content[language].whyJoinDescription1}
              </p>
              
              <p className="text-gray-600">
                {content[language].whyJoinDescription2}
              </p>
            </div>

            {/* Right side - Full Image */}
            <div className="w-full md:w-1/2 min-h-[600px] relative" style={{ marginBottom: '-75px' }}>
              <Image
                src="/images/jastip-team.png"
                alt="Jastip Team Collage"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits of Joining Jastiper Section */}
      <motion.section 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full py-16 px-4 md:px-8 relative bg-[#F04B4B]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            {content[language].benefitsTitle}
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="w-full md:w-2/5">
              <Image
                src="/images/benefits-illustration.png"
                alt="Benefits Illustration"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              {content[language].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="min-w-[48px] h-12 flex items-center justify-center rounded-md bg-[#FF6B6B] text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partner Slider Section */}
      <motion.section 
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-screen py-16 px-4 md:px-8"
      >
        <div className="max-w-full mx-auto">
          <PartnerSlider />
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full py-16 px-4 md:px-8 bg-white flex items-center justify-center"
      >
        <motion.div 
          variants={fadeIn}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center text-center md:text-left md:items-start"
          >
            <h2 className="text-4xl font-bold text-[#F04B4B] mb-4">
              {content[language].ctaTitle}
            </h2>
            <button className="bg-[#FF6B6B] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e55b5b] transition-colors">
              {content[language].ctaButton}
            </button>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="flex justify-center"
          >
            <Image
              src="/images/signup-illustration.png"
              alt="Sign Up Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Bottom Banner Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full relative py-16"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FF7B7B] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Left side image */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 order-2 md:order-1"
            >
              <Image
                src="/images/shoppinglady.png"
                alt="Shopping Banner"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

            {/* Right side content */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 max-w-xl z-10 order-1 md:order-2"
            >
              <h3 className="text-2xl font-bold text-white">
                {content[language].bottomBannerTitle}
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

            {/* Decorative elements */}
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-4 right-4"
            >
              <Image
                src="/images/bintang.png"
                alt="Stars"
                width={100}
                height={100}
                className="opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
