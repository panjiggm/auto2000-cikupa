import { CarProps } from '@types';
import { PiEngineBold } from 'react-icons/pi';
import { TbDimensions } from 'react-icons/tb';
import { TbWashMachine } from 'react-icons/tb';
import { PiDotsNineBold } from 'react-icons/pi';

interface CarSpesificationProps {
  car: CarProps;
}

const CarSpesification = ({ car }: CarSpesificationProps) => {
  return (
    <div className="">
      <div className="mb-6">
        <div className="flex items-center gap-2 underline mb-3">
          <TbDimensions size={20} className="text-red-600" />
          <h1 className="text-red-600 font-bold">Dimensi</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="flex items-center gap-2 underline mb-3">
          <PiEngineBold size={20} className="text-red-600" />
          <h1 className="text-red-600 font-bold">Mesin</h1>
        </div>

        <div className="flex flex-col mb-2">
          <p>Detil Mesin :</p>
          <p className="font-bold">{car.engine?.detail}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="flex items-center gap-2 underline mb-3">
          <TbWashMachine size={20} className="text-red-600" />
          <h1 className="text-red-600 font-bold">Fitur</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="flex items-center gap-2 underline mb-3">
          <PiDotsNineBold size={20} className="text-red-600" />
          <h1 className="text-red-600 font-bold">Lainya</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
