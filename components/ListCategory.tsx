'use client';

import { BsCheck } from 'react-icons/bs';
import { OptionProps } from '@types';

interface ListCategoryProps {
  category: string;
  options: OptionProps[];
  selectCategory: (value: string) => void;
}

const ListCategory = ({
  category,
  options,
  selectCategory,
}: ListCategoryProps) => {
  return (
    <div className="">
      <ul className="">
        {options?.map((option, idx) => {
          const isSelected = option.value === category;

          const title = isSelected ? 'text-red-600' : 'text-gray-900';

          return (
            <li
              key={idx}
              onClick={() => selectCategory(option.value)}
              className="py-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <p className={`${title} text-sm font-bold`}>
                  {option.title}
                </p>
                {isSelected && (
                  <BsCheck size={22} className="text-red-600" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCategory;
