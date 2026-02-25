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
import { narayanganjCalendar } from "@/data/narayanganjCalendar";
import { kishoreganjCalendar } from "@/data/kishoreganjCalendar";
import { gazipurCalendar } from "@/data/gazipurCalendar";
import { gopalganjCalendar } from "@/data/gopalganjCalendar";
import { tangailCalendar } from "@/data/tangailCalendar";
import { narsingdiCalendar } from "@/data/narsingdiCalendar";
import { faridpurCalendar } from "@/data/faridpurCalendar";
import { madaripurCalendar } from "@/data/madaripurCalendar";
import { manikganjCalendar } from "@/data/manikganjCalendar";
import { munshiganjCalendar } from "@/data/munshiganjCalendar";
import { rajbariCalendar } from "@/data/rajbariCalendar";
import { shariatpurCalendar } from "@/data/shariatpurCalendar";

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
  narayanganj: narayanganjCalendar,
  kishoreganj: kishoreganjCalendar,
  gazipur: gazipurCalendar,
  gopalganj: gopalganjCalendar,
  tangail: tangailCalendar,
  narsingdi: narsingdiCalendar,
  faridpur: faridpurCalendar,
  madaripur: madaripurCalendar,
  manikganj: manikganjCalendar,
  munshiganj: munshiganjCalendar,
  rajbari: rajbariCalendar,
  shariatpur: shariatpurCalendar,
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
