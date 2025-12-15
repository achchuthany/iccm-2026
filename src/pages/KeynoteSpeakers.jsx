const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: 'TBA',
      title: 'Keynote Speaker',
      affiliation: 'To Be Announced',
      topic: 'TBA',
    },
    {
      name: 'TBA',
      title: 'Keynote Speaker',
      affiliation: 'To Be Announced',
      topic: 'TBA',
    },
  ];

  return (
    <section id="keynote-speakers" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Keynote Speakers
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {speaker.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {speaker.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {speaker.affiliation}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Topic:</strong> {speaker.topic}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-12 text-lg">
          Distinguished speakers will be announced soon. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
