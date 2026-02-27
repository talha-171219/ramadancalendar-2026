import { useState } from "react";
import { Moon, BookOpen, Star, Heart, Info, BookMarked, ArrowLeft, ExternalLink, AppWindow } from "lucide-react";

const apps = [
  {
    id: "dua",
    title: "দোয়া ও আমল",
    desc: "প্রতিদিনের দোয়া সংকলন",
    icon: BookOpen,
    url: "https://dailyduas.lovable.app",
    color: "bg-islamic-green/10",
    iconColor: "text-islamic-green",
  },
  {
    id: "quran",
    title: "আল কুরআন",
    desc: "পবিত্র কুরআন তিলাওয়াত",
    icon: BookMarked,
    url: "https://islamhub.lovable.app",
    color: "bg-islamic-gold/15",
    iconColor: "text-islamic-gold",
  },
  {
    id: "books",
    title: "ইসলামিক বই",
    desc: "ইসলামিক বইয়ের সংগ্রহ",
    icon: BookOpen,
    url: "https://muslim-corner-by-talha.lovable.app/",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

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

interface OthersPageProps {
  onIframeChange?: (isOpen: boolean) => void;
}

const OthersPage = ({ onIframeChange }: OthersPageProps) => {
  const [iframeApp, setIframeApp] = useState<{ title: string; url: string } | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  const openIframe = (app: { title: string; url: string }) => {
    setIframeApp(app);
    setIframeLoading(true);
    onIframeChange?.(true);
  };

  const closeIframe = () => {
    setIframeApp(null);
    setIframeLoading(true);
    onIframeChange?.(false);
  };

  if (iframeApp) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col z-50">
        <header className="gradient-islamic text-primary-foreground py-3 px-4 flex items-center gap-3 shrink-0">
          <button onClick={closeIframe} className="hover:opacity-80 transition-opacity">
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-bold flex-1">{iframeApp.title}</h1>
          <a href={iframeApp.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <ExternalLink size={18} />
          </a>
        </header>
        <div className="flex-1 relative">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background z-10">
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground animate-pulse">লোড হচ্ছে...</p>
            </div>
          )}
          <iframe
            src={iframeApp.url}
            className="absolute inset-0 w-full h-full border-none"
            title={iframeApp.title}
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={() => setIframeLoading(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="gradient-islamic text-primary-foreground py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Star size={32} className="text-islamic-gold mx-auto mb-2" fill="currentColor" />
          <h1 className="text-2xl font-bold">অন্যান্য</h1>
          <p className="text-xs opacity-70 mt-1">ইসলামিক অ্যাপস ও তথ্য</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        {/* App Buttons Grid */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <BookMarked size={16} className="text-islamic-green" />
            ইসলামিক অ্যাপস
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {apps.map((app) => {
              const Icon = app.icon;
              const hasUrl = !!app.url;
              return (
                <button
                  key={app.id}
                  onClick={() => {
                    if (hasUrl) {
                      openIframe({ title: app.title, url: app.url });
                    }
                  }}
                  className={`bg-card rounded-xl border border-border shadow-sm p-4 flex flex-col items-center gap-2 transition-all ${
                    hasUrl
                      ? "hover:shadow-md hover:scale-[1.02] active:scale-95"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center`}>
                    <Icon size={24} className={app.iconColor} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-foreground leading-tight">{app.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {hasUrl ? app.desc : "শীঘ্রই আসছে"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* More Apps Banner */}
        <a
          href="https://monirulhasantalha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl border border-primary/20 p-4 text-center transition-all hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <AppWindow size={18} className="text-primary" />
            <span className="text-sm font-bold text-foreground">আরো অ্যাপ দেখুন</span>
            <ExternalLink size={14} className="text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground">
            আমাদের আরও ইসলামিক ও দৈনন্দিন অ্যাপ এক্সপ্লোর করুন
          </p>
        </a>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">ইসলামিক তথ্য</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Info Cards */}
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
