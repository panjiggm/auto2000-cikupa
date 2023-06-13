'use client';

import Image from 'next/image';

import { CustomButton } from '@components';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          {/* Find, book, rent a car—quick and super easy! */}
          Temukan dan dapatkan, mobil pilihan masyarakat Indonesia!
        </h1>

        <p className="hero__subtitle">
          Dengan berbagai pilihan jenis dan tipe menyesuaikan
          kebutuhan berkendara anda.
        </p>

        <CustomButton
          title="Ajukan Test Drive"
          containerStyles="bg-red-600 font-bold text-white rounded-lg mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
