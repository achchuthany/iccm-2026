const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Us
        </h2>
        
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                {/* Faculty Information */}
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-primary dark:text-primary mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Faculty</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Faculty of Management Studies and Commerce<br />
                      10th Cross Lane, Kalasalai Road<br />
                      Thirunelvely, Jaffna, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-primary dark:text-primary mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Call Us</h4>
                    <a href="tel:+94212223610" className="text-primary dark:text-primary hover:underline text-lg">
                      +94 21 222 3610
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-primary dark:text-primary mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Email Us</h4>
                    <a href="mailto:iccm@maco.jfn.ac.lk" className="text-primary dark:text-primary hover:underline text-lg">
                      iccm@maco.jfn.ac.lk
                    </a>
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
