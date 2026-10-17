import { IBook } from "@/types/Book.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps{
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_20px_50px_-20px_rgba(109,40,217,0.2)]">
      {/* Cover Area */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-slate-50 to-sky-50 p-8">
        <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl transition-all duration-500 group-hover:bg-violet-300/50" />

        <span className="absolute left-4 top-4 z-10 rounded-lg border border-violet-100 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-700 shadow-sm backdrop-blur-md">
          {book.category}
        </span>

        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="relative z-[1] h-full max-w-[68%] object-contain drop-shadow-[0_12px_15px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
        />

        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-white bg-white/95 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md">
          <span className="text-amber-500">★</span>
          <span>{book.rating}</span>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-slate-500">
          <span>{book.yearOfPublishing}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{book.totalPages} pages</span>
        </div>

        <h3 className="line-clamp-1 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-violet-700">
          {book.bookName}
        </h3>

        <p className="mt-1 line-clamp-1 text-sm text-slate-500">
          by {book.author}
        </p>

        {/* Tags */}
        <div className="mt-4 flex min-h-7 flex-wrap gap-2">
          {book.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 flex items-center justify-between rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
        >
          <span>Explore book</span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;