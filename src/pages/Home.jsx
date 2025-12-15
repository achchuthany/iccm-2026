const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          ICCM 2026
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
          9th International Conference on Contemporary Management
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
          Date: TBA 2026
        </p>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12">
          Venue: TBA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#call-for-papers"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            Submit Your Paper
          </a>
          <a
            href="#registration"
            className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg transition-colors"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
