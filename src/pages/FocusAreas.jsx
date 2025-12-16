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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {area.title}
              </h3>
              <ul className="space-y-2">
                {area.topics.map((topic, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
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
