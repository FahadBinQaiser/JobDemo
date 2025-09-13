import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="hidden sm:flex bg-[#1C1C1C] text-white py-16 px-10">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo/Logomark.png" alt="Logo" />
              </div>
              <span className="text-white text-xl font-medium">CirriNote</span>
            </div>
            <p className="text-gray-400 pt-8 text-sm">© CirriNote 2025</p>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white bg-transparent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M349.33 69.33H162.67C109.64 69.33 69.33 109.64 69.33 162.67v186.66c0 53.03 40.31 93.34 93.34 93.34h186.66c53.03 0 93.34-40.31 93.34-93.34V162.67c0-53.03-40.31-93.34-93.34-93.34zM464 349.33c0 64.5-52.17 116.67-116.67 116.67H164.67C100.17 466 48 413.83 48 349.33V162.67C48 98.17 100.17 46 164.67 46h182.66C411.83 46 464 98.17 464 162.67v186.66z" />
                  <path d="M256 164c-51.93 0-94 42.07-94 94s42.07 94 94 94 94-42.07 94-94-42.07-94-94-94zm0 152c-32.98 0-60-27.02-60-60s27.02-60 60-60 60 27.02 60 60-27.02 60-60 60z" />
                  <circle cx="390.5" cy="121.5" r="17.5" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <p className="text-gray-400 pt-8 text-sm">
              Crafted with passion by CreoWis
            </p>
          </div>
        </div>
      </footer>

      <footer className="flex sm:hidden bg-black text-white py-6 px-4">
        <div className="w-full flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/logo/Logomark.png" alt="Logo" />
            </div>
            <span className="text-white text-xl font-medium">CirriNote</span>
          </div>

          <div className="flex items-center pb-10 space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <svg
                className="w-6 h-6 text-white bg-transparent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-gray-400 text-sm">© CirriNote 2025</p>
            <p className="text-gray-400 text-sm">
              Crafted with passion by CreoWis
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
