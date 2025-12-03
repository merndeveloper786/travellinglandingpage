const Services = () => {
  const services = [
    {
      icon: '/dish.png',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      icon: '/plane.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      icon: '/mic.png',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    },
    {
      icon: '/setting.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#5E6282] font-semibold text-sm md:text-base mb-2 uppercase tracking-wider">
            Category
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#14183E] leading-tight">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-5 md:mb-6 flex justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#1E1D4C] mb-3 md:mb-4">
                {service.title}
              </h3>

              <p className="text-[#5E6282] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

