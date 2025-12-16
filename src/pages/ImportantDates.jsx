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
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Important Dates
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {dates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                  {item.event}
                </h3>
                <span className="text-primary dark:text-primary font-semibold">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 dark:bg-gray-900 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              <strong>Note:</strong> Full Papers/Extended Abstracts submissions will be managed via Microsoft CMT. 
              Please ensure all deadlines are met for your submission to be considered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
