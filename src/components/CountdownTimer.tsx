import { useState, useEffect, useCallback, useMemo } from "react";
import { Timer } from "lucide-react";

interface CountdownTimerProps {
  sehriEnd: string;
  iftarTime: string;
}

const CountdownTimer = ({ sehriEnd, iftarTime }: CountdownTimerProps) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const parseTime = useCallback((timeStr: string, isPM: boolean = false): Date | null => {
    if (!timeStr) return null;
    const ascii = timeStr.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
    const match = ascii.match(/(\d+)[.:](\d+)/);
    if (!match) return null;
    let hours = parseInt(match[1]);
    if (isPM && hours < 12) hours += 12;
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, parseInt(match[2]), 0);
  }, [now]);

  const countdowns = useMemo(() => {
    const sehriTarget = parseTime(sehriEnd, false);
    const iftarTarget = parseTime(iftarTime, true);

    const getCountdown = (target: Date | null) => {
      if (!target) return null;
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, passed: true };
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      return { hours, minutes, seconds, passed: false };
    };

    return { sehri: getCountdown(sehriTarget), iftar: getCountdown(iftarTarget) };
  }, [sehriEnd, iftarTime, now, parseTime]);

  const formatCountdown = (cd: { hours: number; minutes: number; seconds: number; passed: boolean } | null) => {
    if (!cd) return "--:--:--";
    if (cd.passed) return "সময় শেষ";
    return `${String(cd.hours).padStart(2, "0")}:${String(cd.minutes).padStart(2, "0")}:${String(cd.seconds).padStart(2, "0")}`;
  };

  return (
    <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
      <div className="p-4 text-center bg-card">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Timer size={14} className="text-islamic-green" />
          <p className="text-xs text-muted-foreground font-medium">
            {countdowns.sehri?.passed ? "সাহরী শেষ" : "সাহরী শেষ হতে বাকি"}
          </p>
        </div>
        <p className={`text-xl font-bold font-mono ${countdowns.sehri?.passed ? "text-muted-foreground" : "text-islamic-green"}`}>
          {formatCountdown(countdowns.sehri)}
        </p>
      </div>
      <div className="p-4 text-center bg-card">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Timer size={14} className="text-islamic-gold" />
          <p className="text-xs text-muted-foreground font-medium">
            {countdowns.iftar?.passed ? "ইফতার হয়ে গেছে" : "ইফতারের বাকি"}
          </p>
        </div>
        <p className={`text-xl font-bold font-mono ${countdowns.iftar?.passed ? "text-muted-foreground" : "text-islamic-gold"}`}>
          {formatCountdown(countdowns.iftar)}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
