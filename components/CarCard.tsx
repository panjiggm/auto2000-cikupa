'use client';

import Image from 'next/image';
import { GiCarSeat } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';

import { formatRupiah } from '@utils';
import { CarProps } from '@types';
import CustomButton from './CustomButton';
import ClientSideRoute from './ClientSideRoute';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { name, price, category, slug, other, variant } = car;

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
              ? 'bg-teal-800'
              : category === 'Sport'
                ? 'bg-red-700'
                : 'bg-lime-700';

  return (
    <div className="overflow-hidden car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-500">Harga Mulai</p>
        <p className="flex text-xl font-extrabold">
          {price === 0 ? 'Pre-Order' : formatRupiah(price)}
        </p>
      </div>

      <div className="relative object-contain w-full h-40 my-3">
        <Image
          src={car.image}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-between w-full group-hover:invisible text-grey">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-[14px] leading-[17px]">
              {variant ? variant?.length : '0'} Tipe
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-600 car-card__icon">
              <GiCarSeat size={16} color="#FFF" />
              <p className="text-white car-card__icon-text">
                {other.capacity}
              </p>
            </div>
            <div className={`car-card__icon ${categoryBg}`}>
              <FaCar size={16} color="#FFF" />
              <p className="text-white car-card__icon-text">
                {category}
              </p>
            </div>
          </div>
        </div>

        <div className="car-card__btn-container">
          <div className="w-full">
            <ClientSideRoute route={`/mobil/${car.slug}`}>
              <CustomButton
                title="Selengkapnya"
                containerStyles="w-full py-[16px] rounded-full bg-red-600"
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
              />
            </ClientSideRoute>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CarCard;
