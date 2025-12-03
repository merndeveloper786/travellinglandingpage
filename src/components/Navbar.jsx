import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])

  const navLinks = [
    { name: 'Destinations', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Flights', href: '#' },
    { name: 'Bookings', href: '#' },
  ]

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="/Logo.png"
              alt="Jadoo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#212832] font-medium text-base hover:text-[#DF6951] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-[#212832] font-medium text-base hover:text-[#DF6951] transition-colors duration-200">
                Login
              </button>

              <button className="px-4 py-2 border-2 border-[#212832] rounded-lg text-[#212832] font-medium text-base hover:bg-[#212832] hover:text-white transition-all duration-200">
                Sign up
              </button>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 text-[#212832] font-medium text-base hover:text-[#DF6951] transition-colors duration-200"
                >
                  <span>EN</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLanguageOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => setIsLanguageOpen(false)}
                      className="block w-full text-left px-4 py-2 text-[#212832] hover:bg-gray-50 transition-colors duration-200"
                    >
                      English
                    </button>
                    <button
                      onClick={() => setIsLanguageOpen(false)}
                      className="block w-full text-left px-4 py-2 text-[#212832] hover:bg-gray-50 transition-colors duration-200"
                    >
                      Spanish
                    </button>
                    <button
                      onClick={() => setIsLanguageOpen(false)}
                      className="block w-full text-left px-4 py-2 text-[#212832] hover:bg-gray-50 transition-colors duration-200"
                    >
                      French
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            className="md:hidden text-[#212832]"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl bg-white shadow-lg border border-gray-100 px-4 py-4 space-y-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-[#212832] font-medium text-base py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="h-px bg-gray-100" />

              <div className="space-y-2">
                <button
                  className="w-full text-left text-[#212832] font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </button>
                <button
                  className="w-full rounded-lg border-2 border-[#212832] py-2 text-[#212832] font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </button>
              </div>
                
              <div className="pt-2 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-[#212832] font-medium text-base">
                  <span>EN</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

