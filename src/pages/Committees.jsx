const Committees = () => {
  const committees = {
    organizing: [
      { name: 'TBA', role: 'Conference Chair', affiliation: 'TBA' },
      { name: 'TBA', role: 'Program Chair', affiliation: 'TBA' },
      { name: 'TBA', role: 'Registration Chair', affiliation: 'TBA' },
    ],
    program: [
      { name: 'TBA', affiliation: 'TBA' },
      { name: 'TBA', affiliation: 'TBA' },
      { name: 'TBA', affiliation: 'TBA' },
    ],
    advisory: [
      { name: 'TBA', affiliation: 'TBA' },
      { name: 'TBA', affiliation: 'TBA' },
    ],
  };

  return (
    <section id="committees" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Committees
        </h2>
        
        <div className="space-y-12">
          {/* Organizing Committee */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Organizing Committee
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {committees.organizing.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Committee */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Program Committee
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {committees.program.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Committee */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Advisory Committee
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {committees.advisory.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-12 text-lg">
          Committee members will be announced soon.
        </p>
      </div>
    </section>
  );
};

export default Committees;
