const Programme = () => {
  return (
    <section id="programme" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Conference Programme
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-12">
            The detailed conference programme will be announced closer to the event date.
          </p>

          <div className="space-y-8">
            {/* Day 1 Placeholder */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Day 1 - Opening & Keynotes
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">09:00 - 09:30</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Registration</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">09:30 - 10:00</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Opening Ceremony</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">10:00 - 11:00</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Keynote Address</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">TBA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">11:00 - 11:30</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Coffee Break</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">11:30 - 13:00</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Parallel Sessions</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 Placeholder */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Day 2 - Paper Presentations & Workshops
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">09:00 - 10:30</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Parallel Sessions</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">10:30 - 11:00</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Coffee Break</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">11:00 - 12:30</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Workshops</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">13:00 - 14:00</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Closing Ceremony</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              <strong>Note:</strong> This is a tentative schedule. The final programme with detailed 
              session information will be published after paper acceptance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programme;
