'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GiCarSeat } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';

import { formatRupiah } from '@utils';
import { CarProps } from '@types';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { name, price, category, engine, other, variant } = car;

  const [isOpen, setIsOpen] = useState(false);

  const categoryBg =
    category === 'MPV'
      ? 'bg-cyan-700'
      : category === 'LCGC'
      ? 'bg-rose-500'
      : category === 'SUV'
      ? 'bg-orange-500'
      : category === 'HB'
      ? 'bg-purple-500'
      : category === 'Sedan'
      ? 'bg-slate-500'
      : 'bg-lime-700';

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <div className="mt-5">
        <p className="text-md text-gray-500">Harga Mulai</p>
        <p className="flex text-2xl font-extrabold">
          {formatRupiah(price)}
        </p>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={car.image}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px] leading-[17px]">
              {variant ? variant?.length : '0'} Tipe
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="car-card__icon bg-green-600">
              <GiCarSeat size={16} color="#FFF" />
              <p className="car-card__icon-text text-white">
                {other.capacity} Seater
              </p>
            </div>
            <div className={`car-card__icon ${categoryBg}`}>
              <FaCar size={16} color="#FFF" />
              <p className="car-card__icon-text text-white">
                {category}
              </p>
            </div>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Selengkapnya"
            containerStyles="w-full py-[16px] rounded-full bg-red-600"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      /> */}
    </div>
  );
};

export default CarCard;
