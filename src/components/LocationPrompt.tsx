import { useState, useEffect, useCallback } from "react";
import { MapPin, X, Loader2 } from "lucide-react";
import { findNearestDistrict, districtCoordinates } from "@/data/districtCoordinates";

interface LocationPromptProps {
  onLocationDetected: (districtKey: string) => void;
  onDismiss: () => void;
}

const LocationPrompt = ({ onLocationDetected, onDismiss }: LocationPromptProps) => {
  const [detecting, setDetecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAllow = useCallback(() => {
    setDetecting(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const nearest = findNearestDistrict(latitude, longitude);
        const districtName = districtCoordinates[nearest]?.name || nearest;

        // Save to localStorage
        localStorage.setItem("selectedDistrict", nearest);
        localStorage.setItem("locationAutoDetected", "true");

        setDetecting(false);
        onLocationDetected(nearest);
      },
      (err) => {
        setDetecting(false);
        if (err.code === 1) {
          setError("লোকেশন অনুমতি প্রত্যাখ্যান করা হয়েছে");
        } else {
          setError("লোকেশন সনাক্ত করা যায়নি");
        }
        // Auto dismiss after error
        setTimeout(() => onDismiss(), 2000);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  }, [onLocationDetected, onDismiss]);

  const handleDismiss = useCallback(() => {
    sessionStorage.setItem("locationPromptDismissed", "true");
    onDismiss();
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full max-w-md mx-auto p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Close */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-islamic-green/10 flex items-center justify-center">
            {detecting ? (
              <Loader2 size={32} className="text-islamic-green animate-spin" />
            ) : (
              <MapPin size={32} className="text-islamic-green" />
            )}
          </div>
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold text-foreground text-center mb-1">
          {detecting ? "লোকেশন সনাক্ত হচ্ছে..." : "আপনার জেলা স্বয়ংক্রিয়ভাবে খুঁজুন"}
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-5">
          {error ? (
            <span className="text-destructive">{error}</span>
          ) : detecting ? (
            "অনুগ্রহ করে অপেক্ষা করুন..."
          ) : (
            "আপনার লোকেশন ব্যবহার করে নিকটতম জেলার সাহরী-ইফতারের সময় স্বয়ংক্রিয়ভাবে দেখানো হবে"
          )}
        </p>

        {/* Buttons */}
        {!detecting && !error && (
          <div className="flex gap-3">
            <button
              onClick={handleDismiss}
              className="flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
            >
              পরে করব
            </button>
            <button
              onClick={handleAllow}
              className="flex-1 py-3 rounded-xl bg-islamic-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
            >
              <MapPin size={18} />
              অনুমতি দিন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationPrompt;
