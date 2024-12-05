'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  questionID: string;
  questionEN: string;
  answerID: string;
  answerEN: string;
}

const faqs: FAQItem[] = [
  {
    questionID: "Bagaimana cara melakukan pemesanan di Jastipinaja?",
    questionEN: "How to place an order on Jastipinaja?",
    answerID: "Untuk melakukan pemesanan, Anda dapat memilih produk yang diinginkan, masukkan ke keranjang, isi detail pengiriman, dan lakukan pembayaran melalui metode yang tersedia.",
    answerEN: "To place an order, you can select the desired product, add it to cart, fill in shipping details, and make payment through available methods."
  },
  {
    questionID: "Berapa lama waktu pengiriman barang?",
    questionEN: "How long is the delivery time?",
    answerID: "Waktu pengiriman bervariasi tergantung lokasi dan jenis pengiriman yang dipilih. Umumnya memakan waktu 3-7 hari kerja untuk pengiriman domestik.",
    answerEN: "Delivery time varies depending on location and chosen shipping method. It typically takes 3-7 working days for domestic shipping."
  },
  {
    questionID: "Apa metode pembayaran yang tersedia?",
    questionEN: "What payment methods are available?",
    answerID: "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan virtual account untuk kemudahan transaksi Anda.",
    answerEN: "We accept payments through bank transfer, e-wallets (OVO, GoPay, DANA), and virtual accounts for your transaction convenience."
  },
  {
    questionID: "Bagaimana jika barang yang diterima rusak atau tidak sesuai?",
    questionEN: "What if the received item is damaged or not as described?",
    answerID: "Anda dapat mengajukan komplain dalam waktu 24 jam setelah barang diterima dengan mengirimkan foto dan keterangan ke customer service kami.",
    answerEN: "You can submit a complaint within 24 hours after receiving the item by sending photos and details to our customer service."
  },
  {
    questionID: "Apakah bisa melakukan perubahan alamat pengiriman?",
    questionEN: "Can I change the shipping address?",
    answerID: "Perubahan alamat pengiriman dapat dilakukan sebelum barang dikirim dengan menghubungi customer service kami melalui WhatsApp atau email.",
    answerEN: "Shipping address changes can be made before the item is shipped by contacting our customer service via WhatsApp or email."
  }
];

const dialogContent = {
  ID: {
    title: "Bantuan & FAQs"
  },
  EN: {
    title: "Help & FAQs"
  }
};

export default function FAQDialog({ isOpen, closeDialog }: { isOpen: boolean; closeDialog: () => void }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const content = dialogContent[language];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 mb-6"
                >
                  {content.title}
                </Dialog.Title>
                <div className="mt-4 space-y-6">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-200 pb-4 last:border-none"
                    >
                      <button
                        className="w-full text-left font-medium text-gray-900 flex justify-between items-center hover:text-[#F04B4B] transition-colors"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      >
                        <span className="text-lg">
                          {language === 'ID' ? faq.questionID : faq.questionEN}
                        </span>
                        <span className="ml-2 text-xl">
                          {expandedIndex === index ? '−' : '+'}
                        </span>
                      </button>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 text-gray-600 text-base leading-relaxed"
                          >
                            {language === 'ID' ? faq.answerID : faq.answerEN}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 