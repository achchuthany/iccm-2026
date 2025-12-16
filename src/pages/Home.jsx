const stats = [
  { label: "Editions", value: "9th", detail: "Building on a decade of impact" },
  {
    label: "Date",
    value: "3-4 June 2026",
    detail: "University of Jaffna, Sri Lanka",
  },
  {
    label: "Research",
    value: "150+ Papers",
    detail: "Peer-reviewed contributions",
  },
  { label: "Format", value: "Hybrid", detail: "On-site & live-streamed" },
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

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Hybrid
                experience
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> Live
                keynotes & workshops
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-amber-500" />{" "}
                Networking & mentoring
              </span>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-700 dark:text-blue-200 font-semibold">
                    Conference window
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    Dates: TBA 2026
                  </p>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Venue details to be announced with onsite + online
                  participation.
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800"
                  >
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
