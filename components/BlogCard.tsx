import { BlogProps } from '@types';
import Image from 'next/image';
import dayjs from 'dayjs';
import { BiChevronRight } from 'react-icons/bi';

const BlogCard = ({ blog }: { blog: BlogProps }) => {
  const bgCategory =
    blog.category === 'news' ? 'bg-purple-700' : 'bg-amber-600';

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          className="object-cover object-left lg:object-center rounded-lg"
          src={blog.image}
          alt={blog.name}
          fill
        />
        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
          <div>
            <p className="font-bold">{blog.name}</p>
            <p>{dayjs(blog.createdAt).format('DD MMM YYYY')}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            <div
              className={`${bgCategory} text-center text-white px-3 py-1 rounded-lg text-sm font-semibold]`}
            >
              <p>{blog.category}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex-1">
        <p className="underline text-lg font-bold">{blog.name}</p>
        <p className="line-clamp-2 text-gray-500">
          {blog.description}
        </p>
      </div>
      <p className="mt-5 font-bold flex items-center group-hover:underline">
        Baca Artikel
        <BiChevronRight className="ml-2" size={18} />
      </p>
    </div>
  );
};

export default BlogCard;
