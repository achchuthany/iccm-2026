const FocusAreas = () => {
  const areas = [
    {
      title: 'Accounting and Finance',
      topics: [
        'Corporate Finance',
        'Financial Reporting and Accounting',
        'Investment Management',
        'Accounting in Emerging Economies',
      ],
    },
    {
      title: 'Marketing and Supply Chain Management',
      topics: [
        'Digital Marketing',
        'Consumer Behavior',
        'Supply Chain Optimization',
        'Market Research and Analytics',
      ],
    },
    {
      title: 'Entrepreneurship and Innovation',
      topics: [
        'Startup Management',
        'Business Model Innovation',
        'Social Entrepreneurship',
        'Innovation Ecosystem',
      ],
    },
    {
      title: 'Tourism, Hospitality and Events',
      topics: [
        'Sustainable Tourism',
        'Hospitality Management',
        'Event Management',
        'Tourism Development',
      ],
    },
    {
      title: 'Human Resource Management and Organisational Studies',
      topics: [
        'Talent Management',
        'Organizational Behavior',
        'Leadership Development',
        'Employee Engagement',
      ],
    },
    {
      title: 'Business Technology and Digital Transformation',
      topics: [
        'Digital Transformation Strategy',
        'Business Intelligence',
        'IT Strategy',
        'Cybersecurity Management',
      ],
    },
    {
      title: 'Humanities and Social Sciences',
      topics: [
        'Social Impact Studies',
        'Cultural Management',
        'Public Administration',
        'Development Studies',
      ],
    },
    {
      title: 'Sustainability, ESG and Corporate Governance',
      topics: [
        'Environmental, Social, and Governance',
        'Corporate Social Responsibility',
        'Sustainable Business Practices',
        'Ethical Management',
      ],
    },
    {
      title: 'Economics, Public Policy and Regional Development',
      topics: [
        'Regional Economics',
        'Public Policy Analysis',
        'Economic Development',
        'Policy and Governance',
      ],
    },
  ];

  return (
    <section id="focus-areas" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Focus Areas
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          ICCM 2026 welcomes submissions across a broad range of management topics. 
          Key focus areas include but are not limited to:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Header with number and title */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
              </div>

              {/* Topics list */}
              <div className="px-6 pb-6">
                <ul className="space-y-3">
                  {area.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-12 text-lg">
          Papers on emerging topics in contemporary management are also welcome.
        </p>
      </div>
    </section>
  );
};

export default FocusAreas;
