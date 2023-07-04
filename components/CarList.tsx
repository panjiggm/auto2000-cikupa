'use client';

import { CarProps } from '@types';
import CarCard from './CarCard';

const CarList = ({ cars }: { cars: CarProps[] }) => {
    return (
        <div className="home__cars-wrapper">
            {cars?.map((car, i) => (
                <CarCard car={car} key={i} />
            ))}
        </div>
    )
}

export default CarList