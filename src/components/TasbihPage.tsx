import { useState, useCallback } from "react";
import { CircleDot, RotateCcw, Minus, Plus } from "lucide-react";

const presets = [
  { text: "سُبْحَانَ اللَّهِ", bangla: "সুবহানাল্লাহ", meaning: "আল্লাহ পবিত্র", target: 33 },
  { text: "الْحَمْدُ لِلَّهِ", bangla: "আলহামদুলিল্লাহ", meaning: "সকল প্রশংসা আল্লাহর", target: 33 },
  { text: "اللَّهُ أَكْبَرُ", bangla: "আল্লাহু আকবার", meaning: "আল্লাহ সবচেয়ে মহান", target: 34 },
  { text: "لَا إِلَٰهَ إِلَّا اللَّهُ", bangla: "লা ইলাহা ইল্লাল্লাহ", meaning: "আল্লাহ ছাড়া কোনো ইলাহ নেই", target: 100 },
  { text: "أَسْتَغْفِرُ اللَّهَ", bangla: "আস্তাগফিরুল্লাহ", meaning: "আমি আল্লাহর কাছে ক্ষমা চাই", target: 100 },
  { text: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", bangla: "দুরূদ শরীফ", meaning: "নবীজির উপর সালাত ও সালাম", target: 100 },
];

const bn = (n: number) => String(n).replace(/[0-9]/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

const TasbihPage = () => {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const preset = presets[selected];
  const progress = Math.min((count / preset.target) * 100, 100);
  const completed = count >= preset.target;

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => Math.max(0, c - 1)), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="gradient-islamic text-primary-foreground py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <CircleDot size={32} className="text-islamic-gold mx-auto mb-2" />
          <h1 className="text-2xl font-bold">ডিজিটাল তাসবিহ</h1>
          <p className="text-xs opacity-70 mt-1">যিকির ও তাসবিহ কাউন্টার</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        {/* Preset selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => { setSelected(i); setCount(0); }}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                selected === i
                  ? "bg-islamic-green text-primary-foreground border-transparent"
                  : "bg-card text-foreground border-border hover:bg-muted/50"
              }`}
            >
              {p.bangla}
            </button>
          ))}
        </div>

        {/* Counter display */}
        <div className="bg-card rounded-2xl border border-border shadow-lg p-6 text-center space-y-4">
          <p className="text-2xl font-medium text-foreground" dir="rtl">{preset.text}</p>
          <p className="text-sm text-muted-foreground">{preset.meaning}</p>

          {/* Circular progress */}
          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-muted" />
              <circle
                cx="60" cy="60" r="52" fill="none" strokeWidth="8"
                strokeLinecap="round"
                className={completed ? "stroke-islamic-gold" : "stroke-[hsl(var(--islamic-green))]"}
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - progress / 100)}`}
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${completed ? "text-islamic-gold" : "text-foreground"}`}>
                {bn(count)}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                লক্ষ্য: {bn(preset.target)}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={decrement}
              className="w-12 h-12 rounded-full border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
            >
              <Minus size={20} />
            </button>

            <button
              onClick={increment}
              className="w-20 h-20 rounded-full bg-islamic-green text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              <Plus size={32} strokeWidth={3} />
            </button>

            <button
              onClick={reset}
              className="w-12 h-12 rounded-full border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {completed && (
            <p className="text-islamic-gold font-semibold text-sm animate-pulse">
              ✨ আলহামদুলিল্লাহ! লক্ষ্য পূর্ণ হয়েছে
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default TasbihPage;
