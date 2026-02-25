import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import CalendarScreen from "@/components/CalendarScreen";
import { boguraCalendar } from "@/data/boguraCalendar";
import type { DistrictCalendar } from "@/data/boguraCalendar";
import { sirajganjCalendar } from "@/data/sirajganjCalendar";
import { rajshahiCalendar } from "@/data/rajshahiCalendar";
import { pabnaCalendar } from "@/data/pabnaCalendar";
import { natoreCalendar } from "@/data/natoreCalendar";
import { naogaonCalendar } from "@/data/naogaonCalendar";
import { joypurhatCalendar } from "@/data/joypurhatCalendar";
import { chapainawabganjCalendar } from "@/data/chapainawabganjCalendar";
import { dhakaCalendar } from "@/data/dhakaCalendar";
import { rangpurCalendar2 } from "@/data/rangpurCalendar";
import { dinajpurCalendar } from "@/data/dinajpurCalendar";
import { gaibandhaCalendar } from "@/data/gaibandhaCalendar";
import { kurigramCalendar } from "@/data/kurigramCalendar";
import { lalmonirhatCalendar } from "@/data/lalmonirhatCalendar";
import { nilphamariCalendar } from "@/data/nilphamariCalendar";
import { panchagarhCalendar } from "@/data/panchagarhCalendar";
import { thakurgaonCalendar } from "@/data/thakurgaonCalendar";

const calendarMap: Record<string, DistrictCalendar> = {
  bogura: boguraCalendar,
  sirajganj: sirajganjCalendar,
  rajshahi: rajshahiCalendar,
  pabna: pabnaCalendar,
  natore: natoreCalendar,
  naogaon: naogaonCalendar,
  joypurhat: joypurhatCalendar,
  chapainawabganj: chapainawabganjCalendar,
  dhaka: dhakaCalendar,
  rangpur: rangpurCalendar2,
  dinajpur: dinajpurCalendar,
  gaibandha: gaibandhaCalendar,
  kurigram: kurigramCalendar,
  lalmonirhat: lalmonirhatCalendar,
  nilphamari: nilphamariCalendar,
  panchagarh: panchagarhCalendar,
  thakurgaon: thakurgaonCalendar,
};

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleSelectDistrict = useCallback((dataKey: string) => {
    setSelectedDistrict(dataKey);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedDistrict(null);
  }, []);

  const calendar = selectedDistrict ? calendarMap[selectedDistrict] : null;

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {calendar ? (
        <CalendarScreen calendar={calendar} onBack={handleBack} />
      ) : (
        <HomePage onSelectDistrict={handleSelectDistrict} />
      )}
    </>
  );
};

export default Index;
