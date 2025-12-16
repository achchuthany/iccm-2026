const Committees = () => {
  const committees = {
    general: [
      { name: 'Prof. N. Kengatharan', role: 'General Chair' },
    ],
    coChairs: [
      { name: 'Prof. (Ms). S. Shanmugathas', role: 'Co-Chair' },
      { name: 'Prof. S. Sivesan', role: 'Co-Chair' },
      { name: 'Prof. (Ms) L. Kengatharan', role: 'Co-Chair' },
      { name: 'Prof. P. Pratheepkanth', role: 'Co-Chair' },
      { name: 'Prof. S. Achchuthan', role: 'Co-Chair' },
      { name: 'Dr. A. Saravanabawan', role: 'Co-Chair' },
    ],
    organizing: [
      { name: 'Prof. P. Pratheepkanth', role: 'Convener' },
      { name: 'Dr. (Ms) S. Vaikunthavasan', role: 'Secretary' },
      { name: 'Mr. S. Balaputhiran', role: 'Treasurer' },
    ],
    editorial: {
      chief: { name: 'Dr. S. Rajumesh', role: 'Editor-in-Chief' },
      managing: { name: 'Mr. K. Kajenthiran', role: 'Managing Editor' },
      associate: [
        { name: 'Dr. (Ms). S. Anandasayanan' },
        { name: 'Dr. (Ms). D. Sangarathas' },
        { name: 'Mr. N. Umakanth' },
        { name: 'Ms. T. Thanushan' },
        { name: 'Mr. Aloy Niresh' },
      ],
      members: [
        { name: 'Dr. (Ms). J. Thevananths' },
        { name: 'Ms. M. Raveeswaran' },
        { name: 'Mr. V. Kumaradeepan' },
        { name: 'Ms. I. Kajananthan' },
        { name: 'Ms. K. Tharsika' },
      ],
    },
  };

  return (
    <section id="committees" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Committees
        </h2>
        
        <div className="space-y-12">
          {/* General Chair */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              General Chair
            </h3>
            <div className="max-w-md mx-auto">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary dark:to-secondary rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {committees.general[0].name}
                </h4>
                <p className="text-primary dark:text-primary font-medium">
                  {committees.general[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Co-Chairs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Co-Chairs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {committees.coChairs.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Organizing Committee */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Organizing Committee
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {committees.organizing.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary dark:text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Board */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Editorial Board
            </h3>
            <div className="space-y-8">
              {/* Editor-in-Chief and Managing Editor */}
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="p-6 bg-secondary/10 dark:bg-secondary/30 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {committees.editorial.chief.name}
                  </h4>
                  <p className="text-secondary dark:text-secondary font-medium">
                    {committees.editorial.chief.role}
                  </p>
                </div>
                <div className="p-6 bg-secondary/10 dark:bg-secondary/30 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {committees.editorial.managing.name}
                  </h4>
                  <p className="text-secondary dark:text-secondary font-medium">
                    {committees.editorial.managing.role}
                  </p>
                </div>
              </div>

              {/* Associate Editors */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Associate Editors
                </h4>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {committees.editorial.associate.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                    >
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {member.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Members */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Editorial Members
                </h4>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {committees.editorial.members.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center"
                    >
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {member.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;
