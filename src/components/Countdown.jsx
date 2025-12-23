import { useEffect, useState } from "react";

const formatNumber = (value) => String(value).padStart(2, "0");

const buildTimeLeft = (target) => {
  if (Number.isNaN(target.getTime())) {
    return { invalid: true };
  }

  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return {
      finished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { finished: false, days, hours, minutes, seconds };
};

const Countdown = ({ targetDate, label = "Conference starts in" }) => {
  const [timeLeft, setTimeLeft] = useState(() =>
    buildTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    const target = new Date(targetDate);

    if (Number.isNaN(target.getTime())) {
      setTimeLeft({ invalid: true });
      return undefined;
    }

    const update = () => setTimeLeft(buildTimeLeft(target));
    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.invalid) {
    return (
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Date to be announced.
      </div>
    );
  }

  if (timeLeft.finished) {
    return (
      <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
        Conference is live.
      </div>
    );
  }

  const segments = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="text-sm text-gray-700 dark:text-gray-300 w-full">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        {label}
      </p>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm w-full"
          >
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {formatNumber(segment.value)}
            </span>
            <span className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {segment.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
