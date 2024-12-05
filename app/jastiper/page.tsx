'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import PartnerSlider from '@/components/PartnerSlider';

export default function Jastiper() {
  // Animation variants
  const staggerChildren = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
      <main className="relative min-h-screen">
        <Navbar />

        {/* Hero Section - What is Jastiper */}
        <section className="w-full py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                  src="/images/jastiper-hero.png"
                  alt="Jastiper Delivery"
                  width={500}
                  height={500}
                  className="object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-[#F04B4B] mb-4">Apa Itu Jastiper ??</h1>
              <p className="text-gray-600">
                Jastiper adalah mitra JastipinAja yang akan mengurus pesanan, membelikannya ke Toko, memilih produk dari
                lapak yang kamu pilih, dan mengantarkan langsung melalui jasa pengiriman.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Mengapa Bergabung Bersama <span className="text-[#F04B4B]">JastipinAja</span> ?
                </h2>
                <p className="text-gray-600 mb-4">
                  JastipinAja adalah Start-up yang berfokus pada pelayanan jual beli & jasa seperti marketplace online.
                </p>
                <p className="text-gray-600">
                  Dengan metode yang inovatif bisnis kami sangat berkembang dengan pesat di seluruh kota besar di
                  Indonesia sudah bekerjasama dengan kami dan beberapa center kami di Indonesia.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                      <Image
                          src="/images/jastiper-team.png"
                          alt={`Team member ${i}`}
                          width={200}
                          height={200}
                          className="rounded-2xl"
                      />
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 px-4 md:px-8 bg-[#F04B4B]">
          <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              Dengan Bergabung Jadi Jastiper kita dapat apa aja sih?
            </h2>
            <div className="bg-white rounded-3xl p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <Image
                      src="/images/jastiper-benefits.png"
                      alt="Benefits Illustration"
                      width={300}
                      height={300}
                      className="object-contain"
                  />
                </div>
                <div className="md:w-2/3 space-y-6">
                  {[
                    {
                      number: '1',
                      title: 'Tambahan Penghasilan',
                      description:
                          'Dapatkan keuntungan dari setiap barang yang Anda bantu belikan. Sambutan hangat dari pelanggan menanti Anda!',
                    },
                    {
                      number: '2',
                      title: 'Dukungan Platform Professional',
                      description:
                          'Dengan Jastipinaja, Anda bekerja dalam sistem yang mempermudah pengelolaan pesanan, pembayaran, dan konektivitas dengan pelanggan.',
                    },
                    {
                      number: '3',
                      title: 'Akses ke Komunitas Jastiper',
                      description:
                          'Bergabunglah dengan komunitas kami untuk berbagi pengalaman, tips, dan peluang kolaborasi.',
                    },
                  ].map((benefit) => (
                      <div key={benefit.number} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#F04B4B] rounded-full flex items-center justify-center text-white font-bold">
                          {benefit.number}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Slider Section */}
        <section className="w-full py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <PartnerSlider />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#F04B4B] mb-4">
                Sudah siap menjadi mitra Jastipinaja?
              </h2>
              <button className="bg-[#F04B4B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E03B3B] transition-colors">
                Daftar Jastipers
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                  src="/images/jastiper-cta.png"
                  alt="Join Jastipinaja"
                  width={400}
                  height={400}
                  className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-16 relative bg-[#F04B4B]"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white"
            >
              {/* Logo and Social Media */}
              <motion.div variants={fadeIn} className="space-y-6">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                      src="/images/logo-white.png"
                      alt="Jastipinaja Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                  />
                </motion.div>
                <div className="flex gap-4">
                  {['facebook', 'ig', 'whatsapp', 'tiktok'].map((social) => (
                      <motion.a
                          key={social}
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="hover:opacity-80"
                      >
                        <Image
                            src={`/images/${social}.png`}
                            alt={social}
                            width={24}
                            height={24}
                        />
                      </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer columns */}
              {[
                {
                  title: 'TENTANG JASTIPINAJA',
                  links: ['Tentang Kami', 'Bantuan & FAQs', 'Kebijakan dan Privasi', 'Syarat dan Ketentuan'],
                },
                {
                  title: 'TERHUBUNG DENGAN KAMI',
                  content: (
                      <div>
                        <p>INATECHNO TRAINING CENTER</p>
                        <p>email@gmail.com</p>
                        <p>(031) 990-999</p>
                        <p>Alamatmu, Indonesia</p>
                      </div>
                  ),
                },
              ].map((column, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <h4 className="text-xl font-semibold mb-4">{column.title}</h4>
                    {column.links ? (
                        <ul className="space-y-3">
                          {column.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="hover:underline">
                                  {link}
                                </a>
                              </li>
                          ))}
                        </ul>
                    ) : (
                        column.content
                    )}
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.footer>
      </main>
  );
}
