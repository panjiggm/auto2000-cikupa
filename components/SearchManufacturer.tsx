import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@constants';
import { SearchManuFacturerProps } from '@types';

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <svg
              fill="#555"
              className="ml-4"
              width="20px"
              height="20px"
              viewBox="0 0 24.00 24.00"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#555"
              strokeWidth="0.00024000000000000003"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.24000000000000005"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Toyota icon</title>
                <path d="M12 4.236c-6.627 0-12 3.476-12 7.762 0 4.289 5.373 7.766 12 7.766s12-3.476 12-7.766-5.373-7.762-12-7.762zm0 12.196c-.986 0-1.79-1.942-1.84-4.385a21.093 21.093 0 0 0 3.68 0c-.05 2.442-.854 4.385-1.84 4.385zm-1.719-6.324c.268-1.727.937-2.953 1.719-2.953s1.45 1.226 1.719 2.953a19.436 19.436 0 0 1-3.438 0zM12 5.358c-1.287 0-2.385 1.928-2.79 4.619-2.44-.38-4.143-1.248-4.143-2.256 0-1.36 3.104-2.461 6.933-2.461 3.83 0 6.933 1.102 6.933 2.461 0 1.008-1.703 1.876-4.143 2.256-.405-2.69-1.503-4.618-2.79-4.618zm-10.28 6.35c0-1.315.507-2.55 1.388-3.61-.009.074-.015.15-.015.226 0 1.657 2.485 3.07 5.953 3.59-.003.12-.003.242-.003.364 0 3.09.866 5.705 2.063 6.593-5.26-.317-9.385-3.403-9.385-7.163zm11.174 7.163c1.197-.888 2.063-3.504 2.063-6.593 0-.123-.002-.243-.003-.363 3.466-.52 5.953-1.932 5.953-3.591 0-.076-.006-.152-.015-.226.881 1.063 1.387 2.295 1.387 3.61 0 3.76-4.125 6.846-9.385 7.163zm0 0Z"></path>
              </g>
            </svg>
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Toyota..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Buat "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active
                          ? 'bg-primary-blue text-white'
                          : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-pribg-primary-purple'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
