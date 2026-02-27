import { BookOpen, Moon } from "lucide-react";

const duas = [
  { title: "ইফতারের দোয়া", arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ", bangla: "হে আল্লাহ! আমি তোমারই জন্য রোজা রেখেছি এবং তোমারই দেওয়া রিযিক দ্বারা ইফতার করছি।" },
  { title: "সাহরীর দোয়া", arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ", bangla: "আমি আগামীকাল রমযান মাসের রোজা রাখার নিয়ত করলাম।" },
  { title: "রোজা ভাঙার দোয়া", arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ", bangla: "পিপাসা নিবারিত হয়েছে, শিরা-উপশিরা সিক্ত হয়েছে এবং ইনশাআল্লাহ প্রতিদান নির্ধারিত হয়েছে।" },
  { title: "লাইলাতুল কদরের দোয়া", arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", bangla: "হে আল্লাহ! তুমি ক্ষমাশীল, ক্ষমা করতে ভালোবাসো, তাই আমাকে ক্ষমা করে দাও।" },
  { title: "তারাবীহ শেষে দোয়া", arabic: "سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ", bangla: "পবিত্র তিনি যিনি রাজত্ব ও মালাকুতের মালিক। পবিত্র তিনি যিনি ইজ্জত, মহত্ত্ব, প্রতিপত্তি, কুদরত, বড়ত্ব ও প্রতাপের মালিক।" },
  { title: "দোয়া কুনুত", arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ", bangla: "হে আল্লাহ! তুমি যাদের হেদায়েত দান করেছ আমাকে তাদের মধ্যে হেদায়েত দাও। তুমি যাদের নিরাপত্তা দান করেছ আমাকে তাদের মধ্যে নিরাপত্তা দাও।" },
];

const DuaPage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="gradient-islamic text-primary-foreground py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <BookOpen size={32} className="text-islamic-gold mx-auto mb-2" />
          <h1 className="text-2xl font-bold">রমযানের দোয়া সমূহ</h1>
          <p className="text-xs opacity-70 mt-1">প্রতিদিনের প্রয়োজনীয় দোয়া</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-4">
        {duas.map((dua, i) => (
          <div key={i} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <Moon size={14} className="text-islamic-gold" fill="currentColor" />
              <h3 className="font-semibold text-sm text-foreground">{dua.title}</h3>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-right text-xl leading-loose font-medium text-foreground" dir="rtl">
                {dua.arabic}
              </p>
              <div className="h-px bg-border" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">অর্থ: </span>{dua.bangla}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default DuaPage;
