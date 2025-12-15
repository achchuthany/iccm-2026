const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Sponsors & Partners
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-12">
            We are grateful to our sponsors and partners for their support in making ICCM 2026 possible.
          </p>

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Platinum Sponsors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-12 flex items-center justify-center shadow-lg"
                >
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Logo {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Gold Sponsors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center shadow-md"
                >
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Logo {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center shadow-md"
                >
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Logo {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Opportunities */}
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ICCM 2026 offers various sponsorship opportunities to showcase your organization 
              to a global audience of management professionals and academics.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
            >
              Sponsorship Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
