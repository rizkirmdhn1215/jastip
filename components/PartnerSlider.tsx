'use client';

import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function PartnerSlider() {
  const images = [1, 2, 3, 4, 5, 6].map(num => `/images/slider/${num}.png`);
  // Quadruple the images for smoother transition
  const duplicatedImages = [...images, ...images, ...images, ...images];
  const [sliderWidth, setSliderWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of a single set of images
      const singleSetWidth = containerRef.current.scrollWidth / 4;
      setSliderWidth(singleSetWidth);
    }
  }, []);

  useEffect(() => {
    if (sliderWidth) {
      controls.start({
        x: -sliderWidth * 2,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [sliderWidth, controls]);

  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">OUR PARTNER</h2>
      <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
      
      <div className="relative flex items-center justify-center">
        <motion.div 
          ref={containerRef}
          className="flex gap-16 items-center"
          initial={{ x: -sliderWidth }}
          animate={controls}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={120}  // Adjusted size
                height={48}  // Adjusted size
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 