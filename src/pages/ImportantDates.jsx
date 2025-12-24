const ImportantDates = () => {
  const dates = [
    { event: 'Submission of Full Papers/Extended Abstracts', date: '15 February 2026' },
    { event: 'Notification of Review Decision', date: '15 March 2026' },
    { event: 'Submission of Revised Papers/Abstracts', date: '01 April 2026' },
    { event: 'Final Notification Review Decision', date: '15 April 2026' },
    { event: 'Camera Ready Copy Submission', date: '01 May 2026' },
    { event: 'Registration Deadline', date: '20 May 2026' },
    { event: 'Conference Dates', date: '3-4 June 2026' },
  ];

  return (
    <section id="important-dates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Important Dates
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-300 dark:bg-blue-600"></div>
            
            {dates.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-blue-600 dark:border-blue-400 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.event}
                      </h3>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Note */}
          <div className="mt-16 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-gray-700">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> Full Papers/Extended Abstracts submissions will be managed via Microsoft CMT. 
                Please ensure all deadlines are met for your submission to be considered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
