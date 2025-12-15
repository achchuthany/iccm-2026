const Theme = () => {
  return (
    <section id="theme" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Conference Theme
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            "Innovation and Sustainability in Contemporary Management"
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            The theme explores the intersection of innovative management practices and sustainable 
            business strategies in the modern global economy. We invite submissions that address 
            contemporary challenges and opportunities in management from both theoretical and 
            practical perspectives.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Exploring cutting-edge management practices, digital transformation, and technological 
                disruption in organizational settings.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Examining sustainable business models, corporate social responsibility, and 
                environmental stewardship in management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
