const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Compact A–Z site menu (no descriptions) */}

          <div>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 leading-tight">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#call-for-papers"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="#committees"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Committees
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 leading-tight">
              <li>
                <a
                  href="#focus-areas"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Focus Areas
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#important-dates"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Important Dates
                </a>
              </li>
              <li>
                <a
                  href="#keynote-speakers"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Keynote Speakers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 leading-tight">
              <li>
                <a
                  href="#programme"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Programme
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#theme"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Theme
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 leading-tight">
              <li>
                <a
                  href="#venue"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="https://www.jfn.ac.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  University
                </a>
              </li>
              <li>
                <a
                  href="https://www.maco.jfn.ac.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="http://repo.lib.jfn.ac.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Research Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="py-2 text-sm text-gray-400 dark:text-gray-500">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-4 text-gray-400 dark:text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
            <p className="text-xs">
              Copyrights © 2026 All Rights Reserved by Faculty of Management
              Studies and Commerce, University of Jaffna.
            </p>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Designed by{" "}
              <a
                href="https://www.achchuthan.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Y. Achchuthan 
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
