const BookingSteps = () => {
  const steps = [
    {
      icon: '/map icon.png',
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-[#F0BB1F]',
    },
    {
      icon: '/location.png',
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-[#DF6951]',
    },
    {
      icon: '/aeroplane.png',
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-[#006380]',    
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,1fr)_auto] gap-12 items-center">
          <div className="text-left">
            <p className="text-[#5E6282] text-sm md:text-base mb-2 uppercase tracking-wider">
              Easy and Fast
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#14183E] leading-tight mb-8 md:mb-12">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-6">
                  <div className={`${step.color} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-6 h-6 md:w-7 md:h-7 object-contain filter brightness-0 invert"
                    />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold text-[#1E1D4C] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5E6282] text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_top,#D8F2FF,rgba(255,255,255,0))] blur-2xl opacity-70"></div>
            </div>
            
            <div className="bg-white rounded-[26px] shadow-[0px_20px_60px_rgba(57,83,109,0.15)] overflow-hidden relative z-10 w-[370px] min-h-[400px]">
              <div className="relative w-[321px] h-[161px] mx-auto mt-6 overflow-hidden rounded-[24px]">
                <img
                  src="/sc.jpg"
                  alt="Trip to Greece"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>

              <div className="p-6 md:p-8 relative text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E1D4C] mb-4">
                  Trip to Greece
                </h3>
                <p className="text-[#5E6282] text-sm md:text-base mb-4">
                  14-29 June | by Robbin jo
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/LEAF.png"
                      alt="Leaf"
                      className="w-4 h-4 object-contain opacity-70"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/map icon.png"
                      alt="Map"
                      className="w-4 h-4 object-contain opacity-70"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/location.png"
                      alt="Location"
                      className="w-4 h-4 object-contain opacity-70"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#84829A]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M6 14h12M8 18h8"
                      />
                    </svg>
                    <span className="text-sm md:text-base">24 people going</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#F5F5F5] flex items-center justify-center text-[#F15A2B]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-[260px] right-[-100px] bg-white rounded-2xl shadow-lg px-4 py-3 w-[263px] z-20 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/destination2.jpg"
                    alt="Trip avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[11px] text-[#5E6282] leading-[14px] ml-0.5">Ongoing</span>
                  <h4 className="text-sm font-medium text-[#1E1D4C] leading-[18px]">
                    Trip to rome
                  </h4>
                </div>
              </div>
              
              <div className="mt-0">
                <p className="text-[11px] text-[#5E6282] mb-0">
                  40% completed
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#6246E5] h-2 rounded-full"
                    style={{ width: '40%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSteps

