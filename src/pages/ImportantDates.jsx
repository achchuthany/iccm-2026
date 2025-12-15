const ImportantDates = () => {
  const dates = [
    { event: 'Paper Submission Deadline', date: 'TBA' },
    { event: 'Notification of Acceptance', date: 'TBA' },
    { event: 'Early Bird Registration', date: 'TBA' },
    { event: 'Camera-Ready Submission', date: 'TBA' },
    { event: 'Conference Dates', date: 'TBA 2026' },
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
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              <strong>Note:</strong> All dates and deadlines will be announced soon. 
              Please check back regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
