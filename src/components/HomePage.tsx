import { useState } from "react";
import { divisions } from "@/data/divisions";
import { ChevronDown, ChevronRight, MapPin, Moon, Star, Lock } from "lucide-react";

interface HomePageProps {
  onSelectDistrict: (dataKey: string) => void;
}

const HomePage = ({ onSelectDistrict }: HomePageProps) => {
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);

  const toggleDivision = (name: string) => {
    setExpandedDivision((prev) => (prev === name ? null : name));
  };

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

      {/* Division List */}
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
          <MapPin size={18} className="text-islamic-green" />
          বিভাগ নির্বাচন করুন
        </h2>

        {divisions.map((division) => {
          const isExpanded = expandedDivision === division.name;
          const availableCount = division.districts.filter((d) => d.available).length;

          return (
            <div
              key={division.name}
              className="bg-card rounded-lg border border-border overflow-hidden shadow-sm"
            >
              {/* Division Header */}
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

              {/* Districts */}
              {isExpanded && (
                <div className="border-t border-border">
                  {division.districts.map((district) => (
                    <button
                      key={district.dataKey}
                      onClick={() => district.available && onSelectDistrict(district.dataKey)}
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
