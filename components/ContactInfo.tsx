import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { RiWhatsappFill } from 'react-icons/ri';
import { HiBuildingOffice } from 'react-icons/hi2';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
      <div>
        <div className="flex-center gap-3">
          <HiBuildingOffice size={18} className="text-red-600" />
          <h1 className="title__center">Showroom</h1>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <Image src="/map.png" alt="map" width={50} height={50} />
          <div className="mt-4 text-center">
            <p>Jl. Raya Serang No. 54-55, KM. 16,5</p>
            <p>Cikupa, Tangerang, Banten</p>
            <Link
              href="https://goo.gl/maps/HaJBh1tst5H43sTa9"
              target="_blank"
              className="pt-3 hover:opacity-70 font-bold text-lg text-red-700 underline"
            >
              Petunjuk arah
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex-center gap-3">
          <FiPhoneCall size={18} className="text-red-600" />
          <h1 className="title__center">Hubungi Kami</h1>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <Image src="/man.png" alt="map" width={50} height={50} />
          <div className="mt-4 text-center">
            <h1 className="font-bold text-2xl">Charles</h1>
            <p className="text-sm text-gray-600 font-semibold">
              Sales Executive Toyota
            </p>
            <div className="mt-1 flex items-center gap-1">
              <RiWhatsappFill className="text-lg text-green-600" />
              <h1 className="font-extrabold text-green-600 text-lg">
                0822-1038-2834
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex-center gap-3">
          <BiTime size={18} className="text-red-600" />
          <h1 className="title__center">Jam Operasional</h1>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <Image
            src="/business-hours.png"
            alt="map"
            width={50}
            height={50}
            className="mb-4"
          />
          <div className="flex">
            <span className="w-28">Senin - Jumat</span>
            <span className="w-3">:</span>
            <span className="">08.00 - 17.00</span>
          </div>
          <div className="flex">
            <span className="w-28">Sabtu</span>
            <span className="w-3">:</span>
            <span>08.00 - 15.00</span>
          </div>
          <div className="flex">
            <span className="w-28">Minggu</span>
            <span className="w-3">:</span>
            <span>08.00 - 15.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
