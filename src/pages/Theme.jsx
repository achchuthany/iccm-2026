const Theme = () => {
  return (
    <section id="theme" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Conference Theme
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-primary dark:text-primary mb-6">
            "Shaping Regions for Resilience, Inclusion, and Sustainability"
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            The theme reflects the urgent need to strengthen regional economies, reduce inequalities, and harness
            innovation to help communities withstand economic, social, and environmental shocks, positioning ICCM
            2026 as a key forum for rethinking contemporary management and business practices that support
            sustainable and inclusive regional development.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Resilience</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Strengthening regional economies to withstand economic, social, and environmental shocks
                through innovative management practices.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Inclusion & Sustainability</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Reducing inequalities and promoting sustainable business practices that support
                inclusive regional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
