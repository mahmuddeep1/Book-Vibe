import Image from "next/image";
import bannerImage from "@/image/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-teal-100 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">

        {/* Background Decoration */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

        {/* Text Content */}
        <div className="relative z-10 space-y-6">
          <span className="inline-block rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700">
            YOUR NEXT GREAT READ
          </span>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Books to
            <span className="text-emerald-600"> freshen up </span>
            your bookshelf.
          </h1>

          <p className="max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Discover your next favorite story and bring new ideas,
            inspiration, and adventure into your everyday life.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="btn h-12 rounded-xl border-0 bg-emerald-600 px-7 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
              Explore Books
              <span aria-hidden="true">→</span>
            </button>

            <span className="text-sm font-medium text-slate-500">
              Find your next favorite
            </span>
          </div>
        </div>

        {/* Banner Image */}
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="absolute inset-4 rounded-3xl bg-emerald-300/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-3 shadow-2xl shadow-emerald-900/10">
            <Image
              src={bannerImage}
              alt="Discover your next favorite books"
              priority
              className="h-auto w-full rounded-2xl object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-4 -left-3 rounded-2xl border border-white/80 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-sm sm:-left-6">
            <p className="text-sm font-bold text-slate-900">
              A world of stories
            </p>
            <p className="text-xs text-slate-500">
              Starts with one book
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
