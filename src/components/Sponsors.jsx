const sponsors = [
  { name: 'Axon', logo: '/axon.png' },
  { name: 'Jetstar', logo: '/jetstar.png' },
  { name: 'Expedia', logo: '/Expedia.png' },
  { name: 'Qantas', logo: '/Qantas.png' },
  { name: 'Alitalia', logo: '/Alitalia.png' },
]

const Sponsors = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1073px] items-center justify-between">
          {sponsors.map((brand) => (
            <div
              key={brand.name}
              className="flex h-[162px] w-[150px] items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors


