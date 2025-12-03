const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#DF6951] font-semibold text-lg md:text-xl mb-4 uppercase tracking-wide">
              Best Destinations Around The World
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#181E4B] mb-6 leading-tight">
              Travel, enjoy and live a new and full life
            </h1>

            <p className="text-[#5E6282] text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-[#DF6951] text-white rounded-lg font-semibold text-base md:text-lg hover:bg-[#c55a42] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Find out more
              </button>

              <button className="flex items-center gap-3 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[#686D77] font-semibold text-base md:text-lg">
                  Play Demo
                </span>
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="/Girl.png"
                alt="Traveler with luggage"
                className="w-full h-auto max-w-lg mx-auto relative z-10"
              />
            </div>

            <div className="absolute top-6 left-6 md:top-8 md:left-10 lg:top-6 lg:left-12 z-20">
              <img
                src="/aeroplane.png"
                alt="Airplane"
                className="w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 object-contain"
              />
            </div>

            <div className="absolute top-16 right-0 md:top-20 md:-right-2 lg:top-16 lg:-right-4 z-10">
              <img
                src="/aeroplane.png"
                alt="Airplane"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain opacity-70"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5FF] to-[#FFF5F5] rounded-full blur-3xl opacity-50 -z-10 transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

