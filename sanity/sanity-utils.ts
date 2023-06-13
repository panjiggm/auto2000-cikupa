import { CarProps } from '@types';
import { createClient, groq } from 'next-sanity';

export async function getCars(): Promise<CarProps> {
  const cleint = await createClient({
    projectId: 'ejaj5bth',
    dataset: 'prod',
    apiVersion: '2023-06-11',
  });

  return cleint.fetch(
    groq`*[_type == "car"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        price,
        category,
        year,
        color,
        dimension {
            total_length,
            overall_width,
            overall_height,
            wheelbase,
            ground_clereance,
        },
        engine {
            detail,
            type,
            transmition,
            power,
            torque,
            fuel_system,
        },
        features {
            airbag,
            sunroof,
            spare_tire,
            fog_lamp,
            cruise_control,
            adas,
            leather_seat,
        },
        other {
            capacity,
            tire_size,
            spare_key,
        },
        variant,
    }`
  );
}
