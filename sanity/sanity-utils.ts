import { BlogProps, CarProps } from '@types';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@sanity/config/client-config';

export async function getBlogs(): Promise<BlogProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      category,
    }`
  );
}

export async function getBlogsSide(
  slug: string
): Promise<BlogProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current != $slug][0..4]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      category,
    }`,
    { slug }
  );
}

export async function getBlog(slug: string): Promise<BlogProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      category,
      description,
      content,
    }`,
    { slug }
  );
}

export async function getCars(): Promise<CarProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "car" && popular == true]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        price,
        category,
        popular,
        other {
            capacity,
        },
        variant,
    }`
  );
}

export async function getCarsByCategory(
  category: string
): Promise<CarProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "car" && category == $category]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        price,
        category,
        popular,
        other {
            capacity,
        },
        variant,
    }`,
    { category }
  );
}

export async function getCar(slug: string): Promise<CarProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
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
    }`,
    { slug }
  );
}
