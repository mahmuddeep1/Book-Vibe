import BookCard from "@/app/components/homepage/BookCard";
import { IBook } from "@/types/Book.type";

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

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-slate-900 md:px-10 lg:px-16">
      {/* Soft Background Accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-100/70 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-violet-500" />
              <p className="text-xs font-bold uppercase tracking-[4px] text-violet-600">
                Your next chapter
              </p>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                Explor All Books
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              Explore unforgettable stories, timeless classics, and
              extraordinary worlds waiting to be discovered.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            <span className="font-bold text-slate-900">
              {booksData.length}
            </span>{" "}
            books to explore
          </p>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {booksData.map((book: IBook, ind: number) => (
            <BookCard    key={ind} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;