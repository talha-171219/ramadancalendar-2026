import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2200);
    const completeTimer = setTimeout(onComplete, 2800);
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gradient-islamic transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-islamic-gold opacity-30 animate-pulse"
            size={8 + (i % 4) * 4}
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              animationDelay: `${i * 0.2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* App Icon */}
      <div className="relative mb-8 animate-bounce" style={{ animationDuration: "3s" }}>
        <img
          src="/icon-192.png"
          alt="রমযান ক্যালেন্ডার"
          className="w-24 h-24 md:w-28 md:h-28 drop-shadow-lg rounded-2xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3 text-center tracking-wide">
        রমযান ক্যালেন্ডার
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-islamic-gold mb-2">
        ১৪৪৭ হিজরী
      </h2>

      {/* Divider */}
      <div className="mt-8 w-48 h-0.5 gradient-gold rounded-full" />
    </div>
  );
};

export default SplashScreen;
