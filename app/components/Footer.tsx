'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FAQDialog from './FAQDialog';
import InfoDialog from './InfoDialog';
import { useLanguage } from '../context/LanguageContext';

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

const footerContent = {
  ID: {
    about: 'TENTANG JASTIPINAJA',
    aboutLinks: {
      aboutUs: 'Tentang Kami',
      help: 'Bantuan & FAQs',
      privacy: 'Kebijakan dan Privasi',
      terms: 'Syarat dan Ketentuan'
    },
    connect: 'TERHUBUNG DENGAN KAMI',
    address: [
      'INATECHNO TRAINING CENTER ',
      'Marapalam Indah 5 No.12, Kubu Marapalam, Kec.',
      'Padang Tim., Kota Padang, Sumatera Barat 25125',
      '\n',
      'jastipinaja.com'
    ] as string[],
    download: 'UNDUH JASTIPINAJA',
    copyright: 'Copyright © 2024 Jastipinaja Team. All rights reserved'
  },
  EN: {
    about: 'ABOUT JASTIPINAJA',
    aboutLinks: {
      aboutUs: 'About Us',
      help: 'Help & FAQs',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    connect: 'CONNECT WITH US',
    address: [
      'INATECHNO TRAINING CENTER ',
      'Marapalam Indah 5 No.12, Kubu Marapalam,',
      'Padang Tim., Padang City, West Sumatra 25125',
      '\n',
      'jastipinaja.com'
    ] as string[],
    download: 'DOWNLOAD JASTIPINAJA',
    copyright: 'Copyright © 2024 Jastipinaja Team. All rights reserved'
  }
};

// Add this interface before footerColumns definition
interface FooterColumn {
  title: string;
  links?: Array<{ text: string; onClick: () => void }>;
  content?: string | string[] | JSX.Element;
}

export default function Footer() {
  const { language } = useLanguage();
  const content = footerContent[language];
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoContentID, setInfoContentID] = useState('');
  const [infoContentEN, setInfoContentEN] = useState('');

  // Ensure content is defined
  if (!content) {
    return null; // or handle the error appropriately
  }

  const openInfoDialog = (title: string, contentID: string, contentEN: string) => {
    setInfoTitle(title);
    setInfoContentID(contentID);
    setInfoContentEN(contentEN);
    setIsInfoOpen(true);
  };

  const footerColumns: FooterColumn[] = [
    {
      title: content.about,
      links: [
        { 
          text: content.aboutLinks.aboutUs, 
          onClick: () => openInfoDialog(
            content.aboutLinks.aboutUs,
            'Jastipinaja adalah platform yang menghubungkan pembeli dan penjual untuk layanan titip beli.',
            'Jastipinaja is a platform that connects buyers and sellers for personal shopping services.'
          ) 
        },
        { 
          text: content.aboutLinks.help, 
          onClick: () => setIsFAQOpen(true) 
        },
        { 
          text: content.aboutLinks.privacy, 
          onClick: () => openInfoDialog(
            content.aboutLinks.privacy,
            'Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda.',
            'We value your privacy and are committed to protecting your personal data.'
          ) 
        },
        { 
          text: content.aboutLinks.terms, 
          onClick: () => openInfoDialog(
            content.aboutLinks.terms,
            'Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan kami.',
            'By using our services, you agree to comply with our terms and conditions.'
          ) 
        }
      ]
    },
    {
      title: content.connect,
      content: content.address
    },
    {
      title: content.download,
      content: (
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/playstore.png"
              alt="Get it on Google Play"
              width={150}
              height={44}
              className="cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/appstore.png"
              alt="Download on the App Store"
              width={150}
              height={44}
              className="cursor-pointer"
            />
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <motion.footer
      id="footer"
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
          <motion.div 
            variants={fadeIn}
            className="space-y-6"
          >
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
              {[
                { name: 'facebook', url: '#' },
                { 
                  name: 'ig', 
                  url: 'https://www.instagram.com/jastipinaja.com_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
                },
                { 
                  name: 'whatsapp', 
                  url: 'https://wa.me/+6282311445674' 
                },
                { 
                  name: 'tiktok', 
                  url: 'https://www.tiktok.com/@jastipinaja.com?is_from_webapp=1&sender_device=pc' 
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:opacity-80"
                >
                  <Image 
                    src={`/images/${social.name}.png`}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer columns */}
          {footerColumns && footerColumns.map((column) => (
            <motion.div
              key={column.title}
              variants={fadeIn}
              className="space-y-4"
            >
              <h3 className="font-bold text-lg">{column.title}</h3>
              {column.links ? (
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <motion.li
                      key={link.text}
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      <a onClick={link.onClick} className="hover:underline">
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              ) : column.content ? (
                typeof column.content === 'string' ? (
                  <p>{column.content}</p>
                ) : Array.isArray(column.content) ? (
                  column.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))
                ) : (
                  column.content
                )
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/20 text-center text-white text-sm"
        >
          <p>{content.copyright}</p>
        </motion.div>
      </div>
      <FAQDialog isOpen={isFAQOpen} closeDialog={() => setIsFAQOpen(false)} />
      <InfoDialog 
        isOpen={isInfoOpen} 
        closeDialog={() => setIsInfoOpen(false)} 
        title={infoTitle} 
        contentID={infoContentID} 
        contentEN={infoContentEN} 
      />
    </motion.footer>
  );
} 