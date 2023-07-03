'use client';

import { useEffect, useState } from 'react';
import { getCarsByCategory } from '@sanity/sanity-utils';
import { CarCard, ClientSideRoute, ListCategory, SelectCategory } from '@components';
import { carTypes } from '@constants';
import { CarProps } from '@types';

export default function Mobils() {
  const [category, setCategory] = useState<string>('MPV');
  const [cars, setCars] = useState<CarProps[]>([]);

  const categoryText =
    category === 'MPV'
      ? 'text-cyan-700'
      : category === 'LCGC'
        ? 'text-rose-500'
        : category === 'SUV'
          ? 'text-orange-500'
          : category === 'HB'
            ? 'text-purple-500'
            : category === 'Sedan'
              ? 'text-teal-800'
              : category === 'Sport'
                ? 'text-red-700'
                : 'text-lime-700';

  const categoryBg =
    category === 'MPV'
      ? 'bg-cyan-100'
      : category === 'LCGC'
        ? 'bg-rose-100'
        : category === 'SUV'
          ? 'bg-orange-100'
          : category === 'HB'
            ? 'bg-purple-100'
            : category === 'Sedan'
              ? 'bg-teal-100'
              : category === 'Sport'
                ? 'bg-red-100'
                : 'bg-lime-100';

  useEffect(() => {
    const fetchCarsByCategory = async () => {
      try {
        const allCars = await getCarsByCategory(category);

        setCars(allCars);
      } catch (error) {
        console.log('Error Get Cars : ', error);
      }
    };

    fetchCarsByCategory();
  }, [category]);

  const selectCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <main className="overflow-hidden">
      <div className="padding-x padding-y max-width" id="discover">
        <div className="pt-36">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Produk terbaik Toyota
            </h1>
            <p>
              Jelajahi mobil sesuai dengan kebutuhan berkendara anda
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
          <div className="mt-10 md:block">
            <div className="mb-4">
              <h1 className="mb-1 text-xl">Filter : </h1>
              <p
                className={`${categoryText} ${categoryBg} rounded-lg text-xs py-2 px-4 w-full`}
              >
                {catagories[category.toLowerCase()]}
              </p>
            </div>
            <div className="hidden md:block">
              <ListCategory
                category={category}
                options={carTypes}
                selectCategory={selectCategory}
              />
            </div>
            <div className="block md:hidden">
              <SelectCategory
                category={category}
                options={carTypes}
                selectCategory={selectCategory}
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <ClientSideRoute
                  route={`/mobil/${car.slug}`}
                  key={car.id}
                >
                  <CarCard car={car} />
                </ClientSideRoute>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const catagories: any = {
  mpv: 'MPV (Multi Purpose Vehicle) adalah jenis mobil yang dirancang sebagai mobil keluarga yang sekaligus dapat menampung barang.',
  suv: 'SUV (Sport Utility Vehicle) merupakan jenis mobil yang ditujukan untuk dapat melewati berbagai jalan yang susah dan menantang.',
  sedan:
    'Sedan adalah mobil mobil perkotaan berpostur rendah yang nyaman dan elegan, memiliki bagasi yang terpisah dari kabin penumpang.',
  sport:
    'Mobil sport adalah mobil yang mengutamakan pengendalian dan performanya yang tinggi.',
  commercial:
    'Mobil komersial adalah kendaraan yang digunakan untuk mengangkut barang ataupun penumpang untuk keperluan perniagaan.',
  lcgc: 'LCGC (Low-Cost Green Car) merupakan program pemerintah untuk kendaraan Mobil dengan harga terjangkau dan ramah lingkungan.',
};
