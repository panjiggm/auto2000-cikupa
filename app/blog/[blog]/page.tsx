import { getBlog, getBlogsSide } from '@sanity/sanity-utils';
import Image from 'next/image';
import dayjs from 'dayjs';
import { PortableText } from '@portabletext/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { ClientSideRoute, RichTextComponents } from '@components';
import Link from 'next/link';
import BlogCardSide from '@components/BlogCardSide';
import { Metadata } from 'next';

interface BlogDetailProps {
  params: { blog: string };
}

// set dynamic metadata
export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  // read route params
  const slug = params.blog;

  // fetch data
  const blog = await getBlog(slug);

  return {
    title: blog.name,
    description: blog.description,
  };
}


export default async function BlogDetail({
  params,
}: BlogDetailProps) {
  const slug = params.blog;

  const blog = await getBlog(slug);
  const blogs = await getBlogsSide(slug);

  return (
    <main className="overflow-hidden">
      <div className="mt-20 padding-x padding-y max-width">
        <Link
          href="/"
          className="relative inline-block mt-10 mb-10 text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-white"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#222] dark:bg-[#8F00FF] group-hover:-rotate-180 ease"></span>
            <span className="relative flex items-center gap-2">
              <AiOutlineArrowLeft size={18} />
              <p>Kembali</p>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#222]  dark:bg-[#8F00FF] rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>

        <section className="grid grid-cols-1 md:grid-cols-4 lg:gap-10">
          <article className="col-span-3">
            <div className="mb-10">
              <h1 className="mb-2 text-6xl font-extrabold text-gray-900">
                {blog.name}
              </h1>
              <p className="mt-4 mb-8 text-gray-500">
                {dayjs(blog.createdAt).format('DD MMM YYYY HH:mm')}
              </p>
              <Image
                src={blog.image}
                alt={blog.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded"
              />
              <p className="mt-4 text-sm font-light text-gray-600">
                Deskripsi: {blog.description}
              </p>
            </div>
            <PortableText
              value={blog.content}
              components={RichTextComponents}
            />
          </article>

          <div className="w-full">
            <h1 className="mb-6 text-2xl font-extrabold underline">
              Artike Terkait
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
              {blogs?.map((blog) => (
                <ClientSideRoute
                  route={`/blog/${blog.slug}`}
                  key={blog._id}
                >
                  <BlogCardSide blog={blog} />
                </ClientSideRoute>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
