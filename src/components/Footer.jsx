const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICCM 2026</h3>
            <p className="text-gray-400 dark:text-gray-500">
              9th International Conference on Contemporary Management
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#call-for-papers"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Registration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Important</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <a
                  href="#important-dates"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Important Dates
                </a>
              </li>
              <li>
                <a
                  href="#committees"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Committees
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Email: iccm@maco.jfn.ac.lk</li>
              <li>Phone: +94 21 222 3610</li>
              <li>Jaffna, Sri Lanka</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-gray-400 dark:text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
            <p className="text-xs">Copyrights © 2024 All Rights Reserved by Faculty of Management Studies and Commerce, University of Jaffna.</p>
            <p className="text-xs text-gray-500 whitespace-nowrap">Designed by <a href="https://www.achchuthan.lk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">Y. Achchuthan</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
