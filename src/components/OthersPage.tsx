import { Moon, BookOpen, Star, Heart, Info } from "lucide-react";

const items = [
  {
    icon: Moon,
    title: "রমযানের ফযীলত",
    desc: "রমযান মাসে কুরআন নাযিল হয়েছে, যা মানুষের জন্য হেদায়েত এবং সত্যপথ যাত্রীদের জন্য সুস্পষ্ট পথনির্দেশ। (সূরা বাকারা: ১৮৫)",
  },
  {
    icon: Star,
    title: "রোজার ফযীলত",
    desc: "যে ব্যক্তি ঈমান ও সাওয়াবের আশায় রমযানে রোজা রাখবে, তার পূর্ববর্তী সকল গুনাহ মাফ করে দেওয়া হবে। (বুখারী ও মুসলিম)",
  },
  {
    icon: BookOpen,
    title: "তারাবীহ নামাযের ফযীলত",
    desc: "যে ব্যক্তি ঈমান ও সাওয়াবের আশায় রমযানে তারাবীহ নামায পড়বে, তার পূর্ববর্তী সকল গুনাহ মাফ করে দেওয়া হবে। (বুখারী)",
  },
  {
    icon: Heart,
    title: "ই'তিকাফের ফযীলত",
    desc: "যে ব্যক্তি রমযানের শেষ দশ দিন ই'তিকাফ করবে, তা দুটি হজ্জ ও দুটি উমরার সমান সাওয়াব পাবে। (বায়হাকী)",
  },
  {
    icon: Star,
    title: "লাইলাতুল কদর",
    desc: "কদরের রাত হাজার মাস অপেক্ষা শ্রেষ্ঠ। এ রাতে ফেরেশতাগণ ও জিবরীল (আ.) তাদের রবের অনুমতিক্রমে সকল সিদ্ধান্ত নিয়ে অবতরণ করেন। (সূরা কদর)",
  },
  {
    icon: Info,
    title: "সদাকাতুল ফিতর",
    desc: "ঈদুল ফিতরের নামাযের আগে সদাকাতুল ফিতর আদায় করা ওয়াজিব। এটি রোজাদারের অনর্থক কথা ও অশ্লীলতার কাফফারা এবং মিসকিনদের খাদ্যের ব্যবস্থা।",
  },
];

const OthersPage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="gradient-islamic text-primary-foreground py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Star size={32} className="text-islamic-gold mx-auto mb-2" fill="currentColor" />
          <h1 className="text-2xl font-bold">অন্যান্য তথ্য</h1>
          <p className="text-xs opacity-70 mt-1">রমযান সম্পর্কিত জ্ঞান</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
              <div className="flex items-start gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-islamic-green" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default OthersPage;
