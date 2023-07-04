'use client'

import { useEffect, useState } from 'react';
import { CarProps, Variant } from '@types';
import { PiEngineBold } from 'react-icons/pi';
import { TbDimensions } from 'react-icons/tb';
import { TbWashMachine } from 'react-icons/tb';
import { PiDotsNineBold } from 'react-icons/pi';
import { getVariants } from '@sanity/sanity-utils';
import { formatRupiah } from '@utils';

interface CarSpesificationProps {
  car: CarProps;
}

const CarSpesification = ({ car }: CarSpesificationProps) => {
  const [carVariants, setCarVariants] = useState<Variant[]>([]);

  useEffect(() => {
    const getCarVariants = async () => {
      try {
        const variants = await getVariants()

        const variantsFiltered = variants.filter((el) => {
          return car.variant.some((em) => {
            return el._id === em._ref;
          });
        });

        setCarVariants(variantsFiltered);

      } catch (error) {
        console.log("Error GET Car Variants", error);

      }
    }

    getCarVariants()
  }, [])

  console.log("carVariants", carVariants);

  return (
    <div className="my-6 mb-6">
      <h1 className="text-lg font-extrabold">
        Varian
      </h1>

      <div>
        <p className="text-[14px] leading-[17px] my-3">
          {car.variant ? car.variant?.length : '0'} Tipe
        </p>

        <div className=''>
          {carVariants?.map((variant) => (
            <div key={variant._id} className='flex items-center justify-between py-1 border-b border-gray-300'>
              <h3 className='text-xs md:text-sm'>{variant.name}</h3>
              <h3 className='text-xs font-bold md:text-sm'>{formatRupiah(variant.price)}</h3>
            </div>
          ))}
        </div>
      </div>

      <h1 className="mt-8 mb-4 text-lg font-extrabold">
        Spesifikasi
      </h1>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3 underline">
          <TbDimensions size={20} className="text-red-600" />
          <h1 className="font-bold text-red-600">Dimensi</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="flex flex-col mb-2">
              <p>Panjang Total :</p>
              <p className="font-bold">
                {car.dimension?.total_length}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Lebar Keseluruhan :</p>
              <p className="font-bold">
                {car.dimension?.overall_width}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Tinggi Keseluruhan :</p>
              <p className="font-bold">
                {car.dimension?.overall_height}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-2">
              <p>Wheelbase :</p>
              <p className="font-bold">{car.dimension?.wheelbase}</p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Ground Clereance :</p>
              <p className="font-bold">
                {car.dimension?.ground_clereance}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-6">
        <div className="flex items-center gap-2 mb-3 underline">
          <PiEngineBold size={20} className="text-red-600" />
          <h1 className="font-bold text-red-600">Mesin</h1>
        </div>

        <div className="flex flex-col mb-2">
          <p>Detil Mesin :</p>
          <p className="font-bold">{car.engine?.detail}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="flex flex-col mb-2">
              <p>Bahan Bakar :</p>
              <p className="font-bold">{car.engine?.type}</p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Transmisi :</p>
              <p className="font-bold">{car.engine?.transmition}</p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Sistem Bahan Bakar :</p>
              <p className="font-bold">{car.engine?.fuel_system}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-2">
              <p>Tenaga :</p>
              <p className="font-bold">{car.engine?.power} HP</p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Torsi :</p>
              <p className="font-bold">{car.engine?.torque} Nm</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-6">
        <div className="flex items-center gap-2 mb-3 underline">
          <TbWashMachine size={20} className="text-red-600" />
          <h1 className="font-bold text-red-600">Fitur</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="flex flex-col mb-2">
              <p>Airbag :</p>
              <p className="font-bold">
                {car.features?.airbag ? 'Ya' : 'Tidak'}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Sunroof :</p>
              <p className="font-bold">
                {car.features?.sunroof ? 'Ya' : 'Tidak'}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Ban Cadangan :</p>
              <p className="font-bold">
                {car.features?.spare_tire ? 'Ya' : 'Tidak'}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Fog Lamp :</p>
              <p className="font-bold">
                {car.features?.fog_lamp ? 'Ya' : 'Tidak'}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-2">
              <p>Cuise Control :</p>
              <p className="font-bold">
                {car.features?.cruise_control ? 'Ya' : 'Tidak'}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Adas :</p>
              <p className="font-bold">
                {car.features?.adas ? 'Ya' : 'Tidak'}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Jok Kulit :</p>
              <p className="font-bold">
                {car.features?.leather_seat ? 'Ya' : 'Tidak'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-6">
        <div className="flex items-center gap-2 mb-3 underline">
          <PiDotsNineBold size={20} className="text-red-600" />
          <h1 className="font-bold text-red-600">Lainya</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="flex flex-col mb-2">
              <p>Kapasitas :</p>
              <p className="font-bold">
                {car.other?.capacity} Penumpang
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p>Ukuran Ban :</p>
              <p className="font-bold">{car.other?.tire_size}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-2">
              <p>Kunci Cadangan :</p>
              <p className="font-bold">{car.other?.spare_key}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpesification;
