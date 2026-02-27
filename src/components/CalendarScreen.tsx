import { useMemo } from "react";
import { DistrictCalendar } from "@/data/boguraCalendar";
import { ArrowRight, Moon, Star } from "lucide-react";

interface CalendarScreenProps {
  calendar: DistrictCalendar;
  onBack?: () => void;
}

const CalendarScreen = ({ calendar, onBack }: CalendarScreenProps) => {
  const today = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-islamic text-primary-foreground py-6 px-4 relative">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
          >
            <ArrowRight size={16} className="rotate-180" />
            ফিরে যান
          </button>
        )}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star size={14} className="text-islamic-gold" fill="currentColor" />
            <p className="text-sm opacity-80">{calendar.ministry}</p>
            <Star size={14} className="text-islamic-gold" fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold mb-0.5">{calendar.foundation}</h1>
          <p className="text-xs opacity-70 mb-1">{calendar.department}</p>
          <p className="text-xs opacity-60">{calendar.address} | {calendar.website}</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <Moon size={28} className="text-islamic-gold" fill="currentColor" />
            <div>
              <h2 className="text-2xl font-bold">{calendar.title}</h2>
              <h3 className="text-lg font-semibold text-islamic-gold">{calendar.districtName}</h3>
            </div>
            <Moon size={28} className="text-islamic-gold" fill="currentColor" />
          </div>
          <p className="text-sm mt-2 opacity-80">{calendar.year}</p>
        </div>
      </header>

      {/* Table */}
      <main className="max-w-3xl mx-auto px-2 py-4">
        <div className="overflow-x-auto rounded-lg border border-table-border shadow-lg">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-table-header text-table-header-foreground">
                <th className="py-3 px-2 border border-table-border font-semibold text-center w-16">রমযান</th>
                <th className="py-3 px-2 border border-table-border font-semibold text-center">তারিখ</th>
                <th className="py-3 px-2 border border-table-border font-semibold text-center">সাহরীর শেষ সময়</th>
                <th className="py-3 px-2 border border-table-border font-semibold text-center">ফজরের আযান</th>
                <th className="py-3 px-2 border border-table-border font-semibold text-center">ইফতারের সময়</th>
              </tr>
            </thead>
            <tbody>
              {calendar.rows.map((row, idx) => {
                const isToday = row.gregorianDate === today;
                return (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      isToday
                        ? "bg-table-row-highlight font-bold ring-2 ring-inset ring-accent"
                        : idx % 2 === 0
                        ? "bg-card"
                        : "bg-muted/40"
                    }`}
                  >
                    <td className="py-2.5 px-2 border border-table-border text-center font-semibold">
                      {isToday && <span className="inline-block mr-1">☪</span>}
                      {row.ramadan}
                    </td>
                    <td className="py-2.5 px-2 border border-table-border text-center">{row.date}</td>
                    <td className="py-2.5 px-2 border border-table-border text-center">{row.sehriEnd}</td>
                    <td className="py-2.5 px-2 border border-table-border text-center">{row.fajrAzan}</td>
                    <td className="py-2.5 px-2 border border-table-border text-center">{row.iftarTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <section className="mt-6 bg-card rounded-lg border border-border p-4 space-y-3">
          {calendar.notes.map((note, i) => (
            <p key={i} className="text-xs leading-relaxed text-muted-foreground">
              {note}
            </p>
          ))}
        </section>

        {/* Signatories */}
        <section className="mt-4 bg-card rounded-lg border border-border p-4 space-y-2">
          {calendar.signatories.map((sig, i) => (
            <p key={i} className="text-xs text-muted-foreground text-center">
              {sig}
            </p>
          ))}
        </section>

      </main>
    </div>
  );
};

export default CalendarScreen;
