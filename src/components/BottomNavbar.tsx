import { Home, BookOpen, CircleDot, MoreHorizontal, Settings } from "lucide-react";

export type TabId = "home" | "dua" | "tasbih" | "others" | "settings";

interface BottomNavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "হোম", icon: Home },
  { id: "dua", label: "দোয়া", icon: BookOpen },
  { id: "tasbih", label: "তাসবিহ", icon: CircleDot },
  { id: "others", label: "অন্যান্য", icon: MoreHorizontal },
  { id: "settings", label: "সেটিংস", icon: Settings },
];

const BottomNavbar = ({ activeTab, onTabChange }: BottomNavbarProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-[0_-2px_20px_-4px_rgba(0,0,0,0.1)]">
      <div className="max-w-2xl mx-auto flex items-center justify-around px-1 safe-area-bottom">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 min-w-[56px] transition-all duration-200 relative ${
                isActive ? "text-islamic-green" : "text-muted-foreground"
              }`}
            >
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-islamic-green" />
              )}
              <div
                className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-islamic-green/10 scale-110"
                    : "hover:bg-muted/60"
                }`}
              >
                <Icon
                  size={isActive ? 22 : 20}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>
              <span
                className={`text-[10px] leading-tight transition-all ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;
