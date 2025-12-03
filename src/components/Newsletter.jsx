const Newsletter = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="relative overflow-hidden w-[1170px] h-[407px] max-w-full rounded-[20px] rounded-tl-[129px] bg-[#f9f7fe] px-6 py-10 md:px-16 md:py-14 lg:px-24 lg:py-16 text-center flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5E6282] mb-4">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>
    
          <form className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-8 md:flex-row">
            <div className="flex w-full max-w-md items-center rounded-[10px] bg-white px-4 py-3 shadow-sm">
              <svg
                className="mr-3 h-5 w-5 text-[#999]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12l-4-4-4 4m8 0l-4 4-4-4"
                />
              </svg>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-none bg-transparent text-sm text-[#39425D] placeholder:text-[#B0B0C0] outline-none"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#FF7D68] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-[#ff6a4f]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter


