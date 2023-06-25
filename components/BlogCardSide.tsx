import Image from 'next/image';
import { BlogProps } from '@types';
import dayjs from 'dayjs';

const BlogCardSide = ({ blog }: { blog: BlogProps }) => {
  const bgCategory =
    blog.category === 'news' ? 'bg-purple-700' : 'bg-amber-600';

  return (
    <div className="flex flex-col group cursor-pointer mb-5">
      <div className="relative w-full h-40 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          className="object-cover object-left lg:object-center rounded"
          src={blog.image}
          alt={blog.name}
          fill
        />
      </div>
      <div className="mt-2 flex-1">
        <p className="group-hover:underline text-md font-bold">
          {blog.name}
        </p>
        <div className="flex justify-between items-center">
          <p className="line-clamp-2 text-gray-500 text-sm">
            {dayjs(blog.createdAt).format('DD MMM YYYY')}
          </p>
          <div
            className={`${bgCategory} text-center text-white px-3 py-1 rounded-lg text-xs font-semibold]`}
          >
            <p>{blog.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSide;
