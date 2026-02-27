import { useState, useEffect } from "react";
import { Settings, Moon, Sun, Bell, Info, Globe, ExternalLink } from "lucide-react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="gradient-islamic text-primary-foreground py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Settings size={32} className="text-islamic-gold mx-auto mb-2" />
          <h1 className="text-2xl font-bold">সেটিংস</h1>
          <p className="text-xs opacity-70 mt-1">অ্যাপ কাস্টমাইজেশন</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5 space-y-4">
        {/* Dark Mode Toggle */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center">
                {darkMode ? <Moon size={18} className="text-islamic-gold" /> : <Sun size={18} className="text-islamic-gold" />}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm text-foreground">ডার্ক মোড</p>
                <p className="text-xs text-muted-foreground">{darkMode ? "চালু আছে" : "বন্ধ আছে"}</p>
              </div>
            </div>
            <div className={`w-12 h-7 rounded-full p-1 transition-colors ${darkMode ? "bg-islamic-green" : "bg-muted"}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${darkMode ? "translate-x-5" : "translate-x-0"}`} />
            </div>
          </button>
        </div>

        {/* Notification */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center">
              <Bell size={18} className="text-islamic-green" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">নোটিফিকেশন</p>
              <p className="text-xs text-muted-foreground">শীঘ্রই আসছে</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center">
                <Info size={18} className="text-islamic-green" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">অ্যাপ সম্পর্কে</p>
                <p className="text-xs text-muted-foreground">ভার্সন ১.০.০</p>
              </div>
            </div>
            <div className="pl-[52px] space-y-2 text-xs text-muted-foreground">
              <p>রমযান ক্যালেন্ডার ১৪৪৭ হিজরী</p>
              <p>ইসলামিক ফাউন্ডেশন বাংলাদেশ এর তথ্য অনুযায়ী তৈরি</p>
              <p>সকল ৬৪ জেলার সাহরী ও ইফতারের সময়সূচি</p>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <a
            href="https://www.islamicfoundation.gov.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center">
                <Globe size={18} className="text-islamic-green" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">ইসলামিক ফাউন্ডেশন</p>
                <p className="text-xs text-muted-foreground">অফিসিয়াল ওয়েবসাইট</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
