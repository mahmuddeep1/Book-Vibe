import ReadButton from '@/app/components/bookDetails/ReadButton';
import WishlistButton from '@/app/components/bookDetails/WishlistButton';
import { IBook } from '@/types/Book.type';
import Image from 'next/image'; 
import React from 'react';

// Add this line to allow the blocking route
export const instant = false;

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async () => {
  const response = await fetch(
    "http://localhost:3000/booksData.json",
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const BookDetailsPage = async ({params}: IBookDetailsPageProps) => {
    const {id} = await params;
    const booksData = await getBooks();
    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id),
    )as IBook;



    console.log(book, "book");
    return (
  <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="card lg:card-side overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_15px_50px_-20px_rgba(15,23,42,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(109,40,217,0.18)]">

      {/* Book Cover */}
      <figure className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-slate-50 to-sky-50 p-8 sm:p-12 lg:w-2/5">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />

        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="relative z-10 max-h-[420px] w-auto max-w-full rounded-lg object-contain drop-shadow-[0_20px_25px_rgba(15,23,42,0.2)] transition-transform duration-500 hover:scale-105"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body gap-5 p-6 sm:p-8 lg:w-3/5 lg:p-10">

        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
            {book.category}
          </span>
        </div>

        {/* Title & Author */}
        <div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {book.bookName}
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Written by{" "}
            <span className="font-semibold text-violet-700">
              {book.author}
            </span>
          </p>
        </div>

        {/* Rating & Metadata */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500">Rating</p>
            <p className="mt-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-amber-500">★</span>
              {book.rating}
              <span className="text-xs font-medium text-slate-400">/ 5</span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500">Pages</p>
            <p className="mt-2 text-xl font-bold text-slate-900">
              {book.totalPages}
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-1">
            <p className="text-xs font-medium text-slate-500">Published</p>
            <p className="mt-2 text-xl font-bold text-slate-900">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Review */}
        <div>
          <h2 className="mb-2 text-lg font-bold text-slate-900">
            About this book
          </h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div>
          <h2 className="mb-3 text-sm font-bold text-slate-800">
            Explore the themes
          </h2>

          <div className="flex flex-wrap gap-2">
            {book.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-lg border border-violet-100 bg-violet-50/70 px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors hover:border-violet-300 hover:bg-violet-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Publisher */}
        <div className="flex flex-col justify-between gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-slate-500">Publisher</p>
            <p className="mt-1 text-xs font-semibold text-slate-800">
              {book.publisher}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            <ReadButton book= {book} />

            <WishlistButton book= {book} />
          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;