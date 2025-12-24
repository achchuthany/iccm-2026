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
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
              "Shaping Regions for Resilience, Inclusion, and Sustainability"
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Moderator:</p>
                <p className="text-gray-700 dark:text-gray-300">Prof. Tissa Ravinda Perera, University of Colombo, Sri Lanka</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Panelists:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Governance, Policy, and Multi-Stakeholder Collaboration :</strong> Asso. Prof. Sutha Kanapathipillai, Deakin University, Australia</li>
                  <li>• <strong>Inclusive Economic Growth, Entrepreneurship, and Local Livelihoods:</strong> Dr. Gajendra Liyanaarachchi, University of Portsmouth England</li>
                  <li>• <strong>Sustainable Infrastructure and Climate-Resilient Regions: </strong> Mr. Sampath Jayawardena, Senior Director, Ernst & Young</li>
                  <li>• <strong>Innovation, Knowledge, and Digital Transformation for Sustainability</strong>Prof. Roshan G. Ragel, University of Peradeniya, Sri Lanka </li>
                </ul>
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
