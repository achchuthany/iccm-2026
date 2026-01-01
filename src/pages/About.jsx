const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About ICCM 2026
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
            The 9<sup>th</sup> International Conference on Contemporary
            Management (ICCM 2026), organised by the Faculty of Management
            Studies and Commerce, University of Jaffna, Sri Lanka, will be held
            on 3<sup>rd</sup> and 4<sup>th</sup> June under the sphere of the
            Jaffna University International Research Conference – 2026
            (JUICe-2026).
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
            ICCM 2026 will provide a vibrant platform for academics,
            policymakers, industry leaders, and practitioners in management,
            commerce, business, accounting, finance, human resource management,
            marketing, and tourism to present research and share experiences on
            governance and policy, inclusive economic growth and local
            livelihoods, sustainable infrastructure and climate-resilient
            regions, and innovation, knowledge, and digital transformation for
            sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                9<sup>th</sup>
              </div>
              <div className="text-gray-700 dark:text-gray-300">Conference</div>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3<sup>rd</sup> & 4<sup>th</sup> June
              </div>
              <div className="text-gray-700 dark:text-gray-300">2026</div>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Jaffna
              </div>
              <div className="text-gray-700 dark:text-gray-300">Sri Lanka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
