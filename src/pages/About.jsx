const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About ICCM 2026
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The 9th International Conference on Contemporary Management (ICCM 2026) brings together 
            researchers, practitioners, and thought leaders from around the world to discuss the latest 
            developments and innovations in management theory and practice.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ICCM provides a premier interdisciplinary platform for researchers, practitioners, and educators 
            to present and discuss the most recent innovations, trends, and concerns as well as practical 
            challenges encountered and solutions adopted in the fields of contemporary management.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">9th</div>
              <div className="text-gray-700 dark:text-gray-300">Edition</div>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">International</div>
              <div className="text-gray-700 dark:text-gray-300">Participation</div>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Prestigious</div>
              <div className="text-gray-700 dark:text-gray-300">Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
