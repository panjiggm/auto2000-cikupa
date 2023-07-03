'use client';

import { CarSpesification, RichTextComponents } from '@components';
import { PortableText } from '@portabletext/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaCar } from 'react-icons/fa';
import { getCar } from '@sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { formatRupiah } from '@utils';

interface MobilProps {
  params: { mobil: string };
}

export default async function Mobil({ params }: MobilProps) {
  const slug = params.mobil;
  const car = await getCar(slug);

  const categoryBg =
    car.category === 'MPV'
      ? 'bg-cyan-700'
      : car.category === 'LCGC'
        ? 'bg-rose-500'
        : car.category === 'SUV'
          ? 'bg-orange-500'
          : car.category === 'HB'
            ? 'bg-purple-500'
            : car.category === 'Sedan'
              ? 'bg-teal-800'
              : car.category === 'Sport'
                ? 'bg-red-700'
                : 'bg-lime-700';

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width">
        <Link
          href="/"
          className="relative inline-block mt-10 mb-10 text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-white"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#222] dark:bg-[#8F00FF] group-hover:-rotate-180 ease"></span>
            <span className="relative flex items-center gap-2">
              <AiOutlineArrowLeft size={18} />
              <p>Kembali</p>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#222]  dark:bg-[#8F00FF] rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {/* Left Content */}
          <div>
            <div className="mb-10">
              <h1 className="mb-2 text-6xl font-extrabold text-gray-900">
                Toyota {car.name}
              </h1>
              <div className="flex flex-col gap-4 my-10 md:flex-row md:items-center md:justify-between">
                <div
                  className={`car-card__icon ${categoryBg}`}
                >
                  <FaCar size={16} color="#FFF" />
                  <p className="text-white car-card__icon-text">
                    {car.category}
                  </p>
                </div>

                <div className='flex flex-col justify-end'>
                  <p className="text-sm text-gray-500">Harga Mulai</p>
                  <p className="flex text-xl font-extrabold">
                    {car.price === 0 ? 'Pre-Order' : formatRupiah(car.price)}
                  </p>
                </div>
              </div>
              <Image
                src={car.image}
                alt={car.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded"
              />
              <h1 className="my-6 mb-6 text-lg font-extrabold">
                Spesifikasi
              </h1>

              <CarSpesification car={car} />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h1 className="mb-4 text-xl font-bold text-gray-900 underline">
              Tentang Toyota {car.name}
            </h1>
            <PortableText
              value={car.content}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
