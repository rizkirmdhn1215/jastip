'use client';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';

export default function Home() {
  const { language } = useLanguage();
  
  // Ensure translations and hero titles are defined
  const t = translations[language];
  if (!t || !t.hero || typeof t.hero.title1 !== 'string' || typeof t.hero.title2 !== 'string') {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center">
        <div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            <div className="md:w-[30%] space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  {(t.hero.title1.split(' ') || []).map((word, index) => (
                    <span key={index} className={index === 0 ? "text-[#9B2C2C]" : "text-[#F04B4B]"}>
                      {word}
                    </span>
                  ))}
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  {(t.hero.title2.split(' ') || []).map((word, index) => (
                    <span key={index} className={word === "JASTIPINAJA" ? "text-[#F04B4B]" : "text-[#9B2C2C]"}>
                      {word}
                    </span>
                  ))}
                </h1>
              </div>
              <p className="text-gray-600 text-sm max-w-lg">
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
