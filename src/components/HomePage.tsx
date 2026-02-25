import { useState, useMemo, useEffect, useCallback } from "react";
import { divisions } from "@/data/divisions";
import { ChevronDown, ChevronRight, MapPin, Moon, Star, Lock, Clock, Sun, Sunrise, Timer } from "lucide-react";

interface HomePageProps {
  onSelectDistrict: (dataKey: string) => void;
  calendarMap: Record<string, any>;
}

const HomePage = ({ onSelectDistrict, calendarMap }: HomePageProps) => {
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(() => {
    return localStorage.getItem("selectedDistrict");
  });

  const toggleDivision = (name: string) => {
    setExpandedDivision((prev) => (prev === name ? null : name));
  };

  const handleDistrictSelect = (dataKey: string) => {
    setSelectedDistrict(dataKey);
    localStorage.setItem("selectedDistrict", dataKey);
  };

  // Find selected district name
  const selectedDistrictInfo = useMemo(() => {
    if (!selectedDistrict) return null;
    for (const div of divisions) {
      for (const d of div.districts) {
        if (d.dataKey === selectedDistrict && d.available) return d;
      }
    }
    return null;
  }, [selectedDistrict]);

  // Get today's row from selected district calendar
  const todayRow = useMemo(() => {
    if (!selectedDistrict || !calendarMap[selectedDistrict]) return null;
    const cal = calendarMap[selectedDistrict];
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return cal.rows.find((r: any) => r.gregorianDate === today) || null;
  }, [selectedDistrict, calendarMap]);

  const todayRamadan = todayRow?.ramadan || null;

  // Countdown timer logic
  const parseTime = useCallback((timeStr: string, isPM: boolean = false): Date | null => {
    if (!timeStr) return null;
    const ascii = timeStr.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
    const match = ascii.match(/(\d+)[.:](\d+)/);
    if (!match) return null;
    let hours = parseInt(match[1]);
    if (isPM && hours < 12) hours += 12;
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, parseInt(match[2]), 0);
  }, []);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const countdowns = useMemo(() => {
    if (!todayRow) return null;
    const sehriTarget = parseTime(todayRow.sehriEnd, false);
    const iftarTarget = parseTime(todayRow.iftarTime, true);
    
    const getCountdown = (target: Date | null) => {
      if (!target) return null;
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, passed: true };
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      return { hours, minutes, seconds, passed: false };
    };

    return {
      sehri: getCountdown(sehriTarget),
      iftar: getCountdown(iftarTarget),
    };
  }, [todayRow, now, parseTime]);

  const formatCountdown = (cd: { hours: number; minutes: number; seconds: number; passed: boolean } | null) => {
    if (!cd) return "--:--:--";
    if (cd.passed) return "সময় শেষ";
    return `${String(cd.hours).padStart(2, "0")}:${String(cd.minutes).padStart(2, "0")}:${String(cd.seconds).padStart(2, "0")}`;
  };

  // All available districts for the selector
  const availableDistricts = useMemo(() => {
    const result: { name: string; dataKey: string; divisionName: string }[] = [];
    for (const div of divisions) {
      for (const d of div.districts) {
        if (d.available && calendarMap[d.dataKey]) {
          result.push({ name: d.name, dataKey: d.dataKey, divisionName: div.name });
        }
      }
    }
    return result;
  }, [calendarMap]);

  const [showSelector, setShowSelector] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-islamic text-primary-foreground py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Moon size={40} className="text-islamic-gold mx-auto mb-3" fill="currentColor" />
          <h1 className="text-3xl md:text-4xl font-bold mb-1">রমযান ক্যালেন্ডার ১৪৪৭</h1>
          <p className="text-sm opacity-80">ইসলামিক ফাউন্ডেশন বাংলাদেশ</p>
          <p className="text-xs opacity-60 mt-1">পবিত্র মাহে রমযান ১৪৪৭ হিজরী, ২০২৬ খ্রিষ্টাব্দ</p>
          <div className="mt-4 w-32 h-0.5 gradient-gold rounded-full mx-auto" />
        </div>
      </header>

      {/* Today's Times Card */}
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* District Selector Card */}
        <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
          <button
            onClick={() => setShowSelector(!showSelector)}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-islamic-green flex items-center justify-center">
                <MapPin size={18} className="text-islamic-gold" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">আপনার জেলা</p>
                <p className="font-bold text-foreground text-lg">
                  {selectedDistrictInfo ? selectedDistrictInfo.name : "জেলা নির্বাচন করুন"}
                </p>
              </div>
            </div>
            <ChevronDown size={20} className={`text-muted-foreground transition-transform ${showSelector ? "rotate-180" : ""}`} />
          </button>

          {showSelector && (
            <div className="border-t border-border max-h-64 overflow-y-auto">
              {availableDistricts.map((d) => (
                <button
                  key={d.dataKey}
                  onClick={() => {
                    handleDistrictSelect(d.dataKey);
                    setShowSelector(false);
                  }}
                  className={`w-full flex items-center gap-3 px-5 py-3 border-b border-border last:border-b-0 transition-colors hover:bg-table-row-highlight ${
                    selectedDistrict === d.dataKey ? "bg-table-row-highlight" : ""
                  }`}
                >
                  <MapPin size={14} className="text-islamic-green" />
                  <div className="text-left">
                    <span className="text-sm font-medium text-foreground">{d.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">{d.divisionName}</span>
                  </div>
                  {selectedDistrict === d.dataKey && (
                    <Star size={14} className="text-islamic-gold ml-auto" fill="currentColor" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Today's Sehri & Iftar Times */}
        {todayRow && selectedDistrictInfo && (
          <div className="rounded-xl border border-border shadow-lg overflow-hidden">
            {/* Ramadan Day Header */}
            <div className="gradient-islamic text-primary-foreground py-3 px-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon size={18} className="text-islamic-gold" fill="currentColor" />
                <span className="font-bold text-lg">রমযান {todayRamadan}</span>
              </div>
              <span className="text-sm opacity-80">{todayRow.date}</span>
            </div>

            {/* Times Grid */}
            <div className="grid grid-cols-2 divide-x divide-border">
              {/* Sehri */}
              <div className="bg-card p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-islamic-green/10 flex items-center justify-center mx-auto mb-3">
                  <Sunrise size={28} className="text-islamic-green" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">সাহরীর শেষ সময়</p>
                <p className="text-3xl font-bold text-foreground">{todayRow.sehriEnd}</p>
                <p className="text-xs text-muted-foreground mt-2">ফজর: {todayRow.fajrAzan}</p>
              </div>

              {/* Iftar */}
              <div className="bg-card p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-islamic-gold/15 flex items-center justify-center mx-auto mb-3">
                  <Sun size={28} className="text-islamic-gold" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">ইফতারের সময়</p>
                <p className="text-3xl font-bold text-foreground">{todayRow.iftarTime}</p>
                <p className="text-xs text-muted-foreground mt-2">{selectedDistrictInfo.name} জেলা</p>
              </div>
            </div>

            {/* Countdown Timers */}
            {countdowns && (
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
            )}
          </div>
        )}

        {!selectedDistrict && (
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <Clock size={32} className="text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground text-sm">
              আজকের সাহরী ও ইফতারের সময় দেখতে উপরে আপনার জেলা নির্বাচন করুন
            </p>
          </div>
        )}

        {selectedDistrict && !todayRow && selectedDistrictInfo && (
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <Moon size={32} className="text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground text-sm">
              আজকের জন্য কোনো সময়সূচি পাওয়া যায়নি
            </p>
          </div>
        )}

        {/* View Full Calendar Button */}
        {selectedDistrict && calendarMap[selectedDistrict] && (
          <button
            onClick={() => onSelectDistrict(selectedDistrict)}
            className="w-full bg-islamic-green text-primary-foreground py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
          >
            <span>সম্পূর্ণ সময়সূচি দেখুন</span>
            <ChevronRight size={18} />
          </button>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">সকল বিভাগ</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Division List */}
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MapPin size={18} className="text-islamic-green" />
          বিভাগ ও জেলা সমূহ
        </h2>

        {divisions.map((division) => {
          const isExpanded = expandedDivision === division.name;
          const availableCount = division.districts.filter((d) => d.available).length;

          return (
            <div
              key={division.name}
              className="bg-card rounded-lg border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleDivision(division.name)}
                className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-islamic-green flex items-center justify-center">
                    <Star size={16} className="text-islamic-gold" fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-foreground">{division.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {division.districts.length} জেলা
                      {availableCount > 0 && (
                        <span className="text-islamic-green ml-1">• {availableCount}টি সচল</span>
                      )}
                    </span>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronDown size={20} className="text-muted-foreground" />
                ) : (
                  <ChevronRight size={20} className="text-muted-foreground" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-border">
                  {division.districts.map((district) => (
                    <button
                      key={district.dataKey}
                      onClick={() => {
                        if (district.available) {
                          handleDistrictSelect(district.dataKey);
                          onSelectDistrict(district.dataKey);
                        }
                      }}
                      disabled={!district.available}
                      className={`w-full flex items-center justify-between px-4 py-3 border-b border-border last:border-b-0 transition-colors ${
                        district.available
                          ? "hover:bg-table-row-highlight cursor-pointer"
                          : "opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-3 pl-6">
                        <MapPin size={14} className={district.available ? "text-islamic-green" : "text-muted-foreground"} />
                        <span className={`text-sm ${district.available ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                          {district.name}
                        </span>
                      </div>
                      {district.available ? (
                        <ChevronRight size={16} className="text-islamic-green" />
                      ) : (
                        <Lock size={14} className="text-muted-foreground" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <p className="text-center text-xs text-muted-foreground pt-4 pb-8">
          🔒 চিহ্নিত জেলাগুলোর ডেটা শীঘ্রই যোগ করা হবে
        </p>
      </main>
    </div>
  );
};

export default HomePage;
