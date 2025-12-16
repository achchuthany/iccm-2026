const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Sponsors & Partners
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-12">
            ICCM 2026 is proud to partner with leading professional and academic organizations.
          </p>

          {/* Academic Partner */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Academic Partner
            </h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg p-12 shadow-lg max-w-md">
                <p className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Emerald Publishing
                </p>
              </div>
            </div>
          </div>

          {/* Professional Partners */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Professional Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'CIPM Sri Lanka',
                'CA Sri Lanka',
                'CMA Sri Lanka',
                'CISI',
                'CMA Australia',
                'CIMA UK',
                'CFA Institute',
                'CIT Sri Lanka',
                'ACCA',
                'SLIM'
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-center text-gray-700 dark:text-gray-300 font-semibold">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Opportunities */}
          <div className="bg-primary/10 dark:bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ICCM 2026 offers various sponsorship opportunities to showcase your organization 
              to a global audience of management professionals and academics.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg transition-colors"
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
