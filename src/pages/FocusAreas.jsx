const FocusAreas = () => {
  const areas = [
    {
      title: 'Strategic Management',
      topics: [
        'Business Strategy and Planning',
        'Competitive Analysis',
        'Strategic Innovation',
        'Corporate Governance',
      ],
    },
    {
      title: 'Human Resource Management',
      topics: [
        'Talent Management',
        'Organizational Behavior',
        'Leadership Development',
        'Employee Engagement',
      ],
    },
    {
      title: 'Marketing Management',
      topics: [
        'Digital Marketing',
        'Consumer Behavior',
        'Brand Management',
        'Market Research',
      ],
    },
    {
      title: 'Operations Management',
      topics: [
        'Supply Chain Management',
        'Quality Management',
        'Project Management',
        'Process Optimization',
      ],
    },
    {
      title: 'Financial Management',
      topics: [
        'Corporate Finance',
        'Investment Management',
        'Risk Management',
        'Financial Planning',
      ],
    },
    {
      title: 'Information Systems',
      topics: [
        'Digital Transformation',
        'Business Intelligence',
        'IT Strategy',
        'Cybersecurity',
      ],
    },
    {
      title: 'Entrepreneurship & Innovation',
      topics: [
        'Startup Management',
        'Business Model Innovation',
        'Social Entrepreneurship',
        'Technology Commercialization',
      ],
    },
    {
      title: 'Sustainability & Ethics',
      topics: [
        'Corporate Social Responsibility',
        'Environmental Management',
        'Business Ethics',
        'Sustainable Development',
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
