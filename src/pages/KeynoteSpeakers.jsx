import kiridaranImage from '../assets/kiridaran.jpg';
import sunithaImage from '../assets/sunitha.jpg';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: 'Professor Kiridaran (Giri) Kanagaretnam',
      title: 'Professor and Ron Binns Chair in Financial Reporting, Banking and Governance',
      affiliation: 'Schulich School of Business, York University, Canada',
      topic: 'Financial Reporting and Corporate Governance',
      image: kiridaranImage,
    },
    {
      name: 'Professor Sunitha Narendran',
      title: 'Professor of Business and Associate Pro Vice-Chancellor',
      affiliation: 'University of Roehampton, London',
      topic: 'Internationalisation and Global Engagement',
      image: sunithaImage,
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
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-76 h-76 rounded-full object-cover border-4 border-white shadow-md"
                />
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
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
