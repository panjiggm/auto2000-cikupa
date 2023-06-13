import { MouseEventHandler } from 'react';
import { PortableTextBlock } from 'sanity';

export interface Variant {
  name: string;
  price: number;
  transmition: string;
  type: string;
}

export interface CarProps {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  price: number;
  category: string;
  year: number;
  color: Array<string>;
  dimension: {
    total_length: string;
    overall_width: string;
    overall_height: string;
    wheelbase: string;
    ground_clereance: string;
  };
  engine: {
    detail: string;
    type: string;
    transmition: string;
    power: string;
    torque: string;
    fuel_system: string;
  };
  feature: {
    airbag: boolean;
    sunroof: boolean;
    spare_tire: boolean;
    fog_lamp: boolean;
    cruise_control: boolean;
    adas: boolean;
    leather_seat: boolean;
  };
  other: {
    capacity: string;
    tire_size: string;
    spare_key: string;
  };
  variant: Array<Variant>;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
