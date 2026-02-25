import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import CalendarScreen from "@/components/CalendarScreen";
import { allCalendars } from "@/data/boguraCalendar";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  // Single district — show directly
  const calendar = allCalendars[0];

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <CalendarScreen calendar={calendar} />
    </>
  );
};

export default Index;
