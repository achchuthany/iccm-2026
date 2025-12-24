import Countdown from "../components/Countdown";

const stats = [
  { label: "Editions", value: "9th", detail: "Building on a decade of impact" },
  {
    label: "Date",
    value: "3-4 June 2026",
    detail: "University of Jaffna, Sri Lanka",
  },
  {
    label: "Last Conference",
    value: "150+ Papers",
    detail: "Peer-reviewed contributions",
    url:'/2024'
  },
  { label: "Format", value: "On-site", detail: "Physical conference only" },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16"
    >
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_0%,#a855f7,transparent_20%),radial-gradient(circle_at_50%_80%,#22c55e,transparent_20%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 text-sm font-semibold">
              9th International Conference on Contemporary Management
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              ICCM 2026
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Shaping Regions for Resilience, Inclusion, and Sustainability.
              Organised by the Faculty of Management Studies and Commerce,
              University of Jaffna, Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#call-for-papers"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
              >
                Submit Your Paper
              </a>
              <a
                href="#registration"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-300 dark:border-gray-700 dark:hover:bg-gray-700 font-semibold transition-colors"
              >
                Register Now
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> On-site experience
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-500" /> Live keynotes & workshops
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> Networking & mentoring
                </span>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Submission Categories</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="#call-for-papers" className="group flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200 dark:border-blue-800 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white">Full Paper</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Up to 6000 words</div>
                    </div>
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <a href="#call-for-papers" className="group flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/10 border border-emerald-200 dark:border-emerald-800 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-600 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white">Extended Abstract</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Structured sections</div>
                    </div>
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <a href="#call-for-papers" className="group flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 border border-purple-200 dark:border-purple-800 hover:shadow-md hover:border-purple-400 dark:hover:border-purple-600 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white">Doctoral Colloquium</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">1000-1500 words</div>
                    </div>
                    <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <a href="#call-for-papers" className="group flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10 border border-amber-200 dark:border-amber-800 hover:shadow-md hover:border-amber-400 dark:hover:border-amber-600 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 dark:bg-amber-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white">Undergraduate Poster</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">A1 portrait format</div>
                    </div>
                    <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                <Countdown targetDate="2026-06-03T00:00:00Z" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="relative p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800"
                  >
                    {item.url && (
                      <a
                        href={item.url}
                        className="absolute top-2 right-2 p-1 rounded-full bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors"
                        aria-label={`View ${item.label} details`}
                      >
                        <svg
                          className="w-4 h-4 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Why attend
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />{" "}
                    Distinguished keynotes and practitioner panels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />{" "}
                    Tracks on innovation, sustainability, and digital
                    transformation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />{" "}
                    Publication opportunities and awards for best papers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
