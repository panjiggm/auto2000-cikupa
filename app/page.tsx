import { HomeProps } from '@types';
import { CarList, ClientSideRoute, ContactInfo, Hero } from '@components';
import { getBlogs, getCars } from '@sanity/sanity-utils';
import Image from 'next/image';
import BlogList from '@components/BlogList';

export default async function Home({ }: HomeProps) {
  const allCars = await getCars();
  const allBlogs = await getBlogs();

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Mobil Terpopuler
            </h1>
            <p>Jelajahi mobil yang mungkin Anda sukai</p>
          </div>

          <ClientSideRoute route='/mobil'>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-60">
              <h2 className="text-xl font-semibold text-blue-600">
                Lihat semua Mobil
              </h2>
              <div className="relative w-5 h-5 bg-blue-500 rounded-lg">
                <Image
                  src="/right-arrow.svg"
                  alt="arrow_left"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ClientSideRoute>
        </div>

        {/* ============= CARS =============  */}
        {!isDataEmpty ? (
          <CarList cars={allCars} />
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">
              Oops, tidak ada hasil
            </h2>
          </div>
        )}

        <div className="py-20">
          <hr />
        </div>

        {/* ============= LOCATION =============  */}
        <ContactInfo />

        <div className="py-20">
          <hr />
        </div>

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Berita & Tips</h1>
            <p>Update terbaru seputar otomotif dari Toyota</p>
          </div>

          <ClientSideRoute route='/blog'>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-60">
              <h2 className="text-xl font-semibold text-blue-600">
                Lihat semua Artikel
              </h2>
              <div className="relative w-5 h-5 bg-blue-500 rounded-lg">
                <Image
                  src="/right-arrow.svg"
                  alt="arrow_left"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ClientSideRoute>
        </div>

        {/* ============= BLOGS =============  */}
        <BlogList blogs={allBlogs} />
      </div>
    </main>
  );
}
