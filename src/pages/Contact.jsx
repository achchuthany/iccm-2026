const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Us
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculty Information */}
              <div className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Our Faculty
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Faculty of Management Studies and Commerce
                    <br />
                    10<sup>th</sup> Cross Lane, Kalasalai Road
                    <br />
                    Thirunelvely, Jaffna, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Contact (Phone + Email) */}
              <div className="flex flex-col justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-start mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Call / Email
                    </h4>
                    <a
                      href="tel:+94212223610"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-lg block"
                    >
                      +94 21 222 3610
                    </a>
                    <a
                      href="mailto:iccm@maco.jfn.ac.lk"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-lg block mt-2"
                    >
                      iccm@maco.jfn.ac.lk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
