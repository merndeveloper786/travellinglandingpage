const Destinations = () => {
  const destinations = [
    {
      image: '/destination1.png',
      location: 'Rome, Italty',
      price: '$5,42k',
      days: '10 Days Trip',
    },
    {
      image: '/destination2.jpg',
      location: 'London, UK',
      price: '$4.2k',
      days: '12 Days Trip',
    },
    {
      image: '/destination3.png',
      location: 'Full Europe',
      price: '$15k',
      days: '28 Days Trip',
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#5E6282] text-sm md:text-base mb-2 uppercase tracking-wider">
            Top Selling
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#14183E] leading-tight">
            Top Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.location}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl text-[#5E6282]">
                    {destination.location}
                  </h3>
                  <span className="text-lg md:text-xl text-[#5E6282]">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#5E6282]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  <span className="text-[#5E6282] text-base md:text-lg">
                    {destination.days}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations

