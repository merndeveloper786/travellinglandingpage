const footerLinks = {
  Company: ['About', 'Careers', 'Mobile'],
  Contact: ['Help/FAQ', 'Press', 'Affiliates'],
  More: ['Airlinefees', 'Airline', 'Low fare tips'],
}

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 max-w-xs">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14183E] mb-3">
              Jadoo.
            </h2>
            <p className="text-xs md:text-sm text-[#5E6282] leading-relaxed">
              Book your trip in minute, get full
              <br />
              control for much longer.
            </p>
          </div>

          <div className="flex flex-1 justify-between max-w-md mx-auto text-center md:text-left md:mx-0">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-[#080809]">
                  {section}
                </h3>
                <ul className="space-y-1.5">
                  {links.map((item) => (
                    <li
                      key={item}
                      className="text-xs md:text-sm text-[#5E6282] hover:text-[#14183E] cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 justify-center">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-[#5E6282]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M13.5 9H15V6h-1.5C10.91 6 9 7.91 9 10.5V12H7v3h2v5h3v-5h2.25L15 12h-3v-1.5c0-.83.67-1.5 1.5-1.5Z" />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF7D68] text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="4" width="16" height="16" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-[#5E6282]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M19.46 5.73c.8-.5 1.38-1.3 1.66-2.25-.75.45-1.57.78-2.45.96A3.64 3.64 0 0 0 16.5 3c-2.02 0-3.66 1.67-3.66 3.73 0 .29.03.57.09.84-3.04-.16-5.74-1.7-7.55-4.05a3.9 3.9 0 0 0-.5 1.88c0 1.3.64 2.45 1.6 3.12-.6-.02-1.16-.19-1.65-.47v.04c0 1.82 1.25 3.34 2.9 3.68-.3.09-.63.14-.97.14-.23 0-.47-.02-.69-.07.46 1.52 1.83 2.63 3.44 2.66A7.25 7.25 0 0 1 4 18.27 10.2 10.2 0 0 0 9.29 20c6.19 0 9.58-5.33 9.58-9.95 0-.15 0-.3-.01-.44.66-.5 1.23-1.12 1.7-1.83Z" />
                </svg>
              </button>
            </div>

              <div className="text-center space-y-2">
                <p className="text-xs md:text-sm text-[#5E6282]">
                  Discover our app
                </p>
                <div className="flex items-center gap-3 justify-center">
                  <button className="flex items-center gap-1 rounded-xl bg-black px-3 py-1.5 text-[9px] text-white shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M3.6 2.9A1.5 1.5 0 0 0 3 4.1v15.8c0 .5.2.9.6 1.2l.1.1L13.5 12 3.7 2.8l-.1.1Z" />
                      <path d="M16.1 8.6 6 2.3l-.9-.6 8.4 8.4 2.6-1.5Z" />
                      <path d="M5.1 21.7 6 21.2l10.1-6.3-2.6-1.6-8.4 8.4Z" />
                      <path d="M19.5 10.2 17 8.7 14.3 10.2 16.8 12l2.7-1.8c.3-.2.5-.5.5-.8s-.2-.6-.5-.8Z" />
                    </svg>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="uppercase tracking-[0.08em] text-[8px] text-gray-300">
                        Get it on
                      </span>
                      <span className="text-[10px] font-semibold">Google Play</span>
                    </div>
                  </button>

                  <button className="flex items-center gap-1.5 rounded-xl bg-black px-3 py-1.5 text-white shadow-sm">
                    <img
                      src="/apple.png"
                      alt="Apple logo"
                      className="h-4 w-4 object-contain"
                    />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="uppercase tracking-[0.12em] text-[7px] text-gray-300">
                        Download on the
                      </span>
                      <span className="text-[11px] font-semibold">
                        App Store
                      </span>
                    </div>
                  </button>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-[11px] md:text-xs text-[#5E6282]">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


