import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("installDismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("installDismissed", "true");
  };

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full max-w-md mx-auto p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-islamic-green flex items-center justify-center shadow-lg">
            <img src="/icon-192.png" alt="App Icon" className="w-14 h-14 rounded-xl" />
          </div>
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold text-foreground text-center mb-1">
          অ্যাপ ইনস্টল করুন
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-5">
          রমযান ক্যালেন্ডার আপনার ফোনে ইনস্টল করুন — অফলাইনে ব্যবহার করুন, দ্রুত অ্যাক্সেস পান
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDismiss}
            className="flex-1 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
          >
            পরে
          </button>
          <button
            onClick={handleInstall}
            className="flex-1 py-3 rounded-xl bg-islamic-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
          >
            <Download size={18} />
            ইনস্টল
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
