'use client';

import Image from 'next/image';
import { GiCarSeat } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';

import { formatRupiah } from '@utils';
import { CarProps } from '@types';
import CustomButton from './CustomButton';
import Link from 'next/link';

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
    <div className="car-card group overflow-hidden">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-500">Harga Mulai</p>
        <p className="flex text-xl font-extrabold">
          {price === 0 ? 'Pre-Order' : formatRupiah(price)}
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
                {other.capacity}
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
          <Link
            href={`/mobil/${slug}`}
            key={car.id}
            className="w-full"
          >
            <CustomButton
              title="Selengkapnya"
              containerStyles="w-full py-[16px] rounded-full bg-red-600"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
