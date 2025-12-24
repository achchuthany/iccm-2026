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

          {/* Special Features */}
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Special Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Technical Sessions</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Panel Discussion</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Doctoral Colloquium</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Undergraduate Poster Presentation</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Quality Research Network Meetings</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Special Interest Group Meetings</span>
              </div>
            </div>
          </div>

          {/* Panel Discussion Details */}
          <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
              Panel Discussion
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
              "Shaping Regions for Resilience, Inclusion, and Sustainability"
            </p>
            
            {/* Moderator Card */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Moderator</h4>
              <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="absolute top-2 right-2 p-1 rounded-full bg-green-100 dark:bg-green-900/40 hover:bg-green-200 dark:hover:bg-green-800/60 transition-colors cursor-pointer">
                  <svg
                    className="w-4 h-4 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">TP</span>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Prof. Tissa Ravinda Perera</h5>
                    <p className="text-gray-600 dark:text-gray-400">University of Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panelists Cards */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Panelists</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">SK</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Asso. Prof. Sutha Kanapathipillai</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Deakin University, Australia</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Governance, Policy, and Multi-Stakeholder Collaboration</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-200 dark:hover:bg-purple-800/60 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">GL</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Dr. Gajendra Liyanaarachchi</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">University of Portsmouth, England</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Inclusive Economic Growth, Entrepreneurship, and Local Livelihoods</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 hover:bg-emerald-200 dark:hover:bg-emerald-800/60 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">SJ</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Mr. Sampath Jayawardena</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Senior Director, Ernst & Young</p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Sustainable Infrastructure and Climate-Resilient Regions</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-amber-100 dark:bg-amber-900/40 hover:bg-amber-200 dark:hover:bg-amber-800/60 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">RR</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Prof. Roshan G. Ragel</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">University of Peradeniya, Sri Lanka</p>
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Innovation, Knowledge, and Digital Transformation for Sustainability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Day 1 - Wednesday, 03 June 2026 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Wednesday, 03 June 2026
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Preliminary Session</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technical Sessions</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Doctoral Colloquium</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Cultural Programme and Dinner</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 - Thursday, 04 June 2026 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Thursday, 04 June 2026
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Panel Discussion</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Shaping Regions for Resilience, Inclusion, and Sustainability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technical Sessions</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Undergraduate Poster Presentation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 - Friday, 05 June 2026 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Friday, 05 June 2026
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Post-Conference Sessions</h4>
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 text-sm ml-4">
                      <li>• Quality Research Network Meetings</li>
                      <li>• Special Interest Group Meetings</li>
                    </ul>
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
