'use client';

import { CarProps } from '@types';
import ClientSideRoute from './ClientSideRoute';
import CarCard from './CarCard';

const CarList = ({ cars }: { cars: CarProps[] }) => {
    return (
        <div className="home__cars-wrapper">
            {cars?.map((car, i) => (
                <ClientSideRoute
                    route={`/mobil/${car.slug}`}
                    key={car.id}
                >
                    <CarCard car={car} />
                </ClientSideRoute>
            ))}
        </div>
    )
}

export default CarList