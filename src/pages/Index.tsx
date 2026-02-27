import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import BottomNavbar, { type TabId } from "@/components/BottomNavbar";
import DuaPage from "@/components/DuaPage";
import TasbihPage from "@/components/TasbihPage";
import OthersPage from "@/components/OthersPage";
import SettingsPage from "@/components/SettingsPage";
import LocationPrompt from "@/components/LocationPrompt";
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
import { satkhiraCalendar } from "@/data/satkhiraCalendar";
import { jessoreCalendar } from "@/data/jessoreCalendar";
import { meherpurCalendar } from "@/data/meherpurCalendar";
import { maguraCalendar } from "@/data/maguraCalendar";
import { khulnaCalendar } from "@/data/khulnaCalendar";
import { narailCalendar } from "@/data/narailCalendar";
import { jhenaidahCalendar } from "@/data/jhenaidahCalendar";
import { kushtiaCalendar } from "@/data/kushtiaCalendar";
import { bagerhatCalendar } from "@/data/bagerhatCalendar";
import { chuadangaCalendar } from "@/data/chuadangaCalendar";
import { bholaCalendar } from "@/data/bholaCalendar";
import { barisalCalendar } from "@/data/barisalCalendar";
import { bargunaCalendar } from "@/data/bargunaCalendar";
import { pirojpurCalendar } from "@/data/pirojpurCalendar";
import { patuakhaliCalendar } from "@/data/patuakhaliCalendar";
import { jhalokatiCalendar } from "@/data/jhalokatiCalendar";
import {
  lakshmipurCalendar, rangamatiCalendar, brahmanbariaCalendar, bandarbanCalendar,
  feniCalendar, noakhaliCalendar, chandpurCalendar, chittagongCalendar,
  khagraChariCalendar, comillaCalendar, coxsBazarCalendar,
  sherpurCalendar, mymensinghCalendar, netrokonaCalendar, jamalpurCalendar,
  sylhetCalendar, moulvibazarCalendar, habiganjCalendar, sunamganjCalendar,
} from "@/data/remainingCalendars";

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
  satkhira: satkhiraCalendar,
  jessore: jessoreCalendar,
  meherpur: meherpurCalendar,
  magura: maguraCalendar,
  khulna: khulnaCalendar,
  narail: narailCalendar,
  jhenaidah: jhenaidahCalendar,
  kushtia: kushtiaCalendar,
  bagerhat: bagerhatCalendar,
  chuadanga: chuadangaCalendar,
  bhola: bholaCalendar,
  barisal: barisalCalendar,
  barguna: bargunaCalendar,
  pirojpur: pirojpurCalendar,
  patuakhali: patuakhaliCalendar,
  jhalokati: jhalokatiCalendar,
  lakshmipur: lakshmipurCalendar,
  rangamati: rangamatiCalendar,
  brahmanbaria: brahmanbariaCalendar,
  bandarban: bandarbanCalendar,
  feni: feniCalendar,
  noakhali: noakhaliCalendar,
  chandpur: chandpurCalendar,
  chittagong: chittagongCalendar,
  khagrachari: khagraChariCalendar,
  comilla: comillaCalendar,
  coxsbazar: coxsBazarCalendar,
  sherpur: sherpurCalendar,
  mymensingh: mymensinghCalendar,
  netrokona: netrokonaCalendar,
  jamalpur: jamalpurCalendar,
  sylhet: sylhetCalendar,
  moulvibazar: moulvibazarCalendar,
  habiganj: habiganjCalendar,
  sunamganj: sunamganjCalendar,
};

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  const [autoDetectedDistrict, setAutoDetectedDistrict] = useState<string | null>(null);
  const [iframeOpen, setIframeOpen] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    const savedDistrict = localStorage.getItem("selectedDistrict");
    if (savedDistrict) {
      setAutoDetectedDistrict(savedDistrict);
    } else if (!sessionStorage.getItem("locationPromptDismissed")) {
      setTimeout(() => {
        setShowLocationPrompt(true);
      }, 1500);
    }
  }, []);

  const handleLocationDetected = useCallback((districtKey: string) => {
    setAutoDetectedDistrict(districtKey);
    setShowLocationPrompt(false);
  }, []);

  const handleLocationDismiss = useCallback(() => {
    setShowLocationPrompt(false);
  }, []);

  const handleSelectDistrict = useCallback((dataKey: string) => {
    setSelectedDistrict(dataKey);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedDistrict(null);
  }, []);

  const calendar = selectedDistrict ? calendarMap[selectedDistrict] : null;

  const renderTab = () => {
    switch (activeTab) {
      case "dua": return <DuaPage />;
      case "tasbih": return <TasbihPage />;
      case "others": return <OthersPage onIframeChange={setIframeOpen} />;
      case "settings": return <SettingsPage />;
      default:
        return calendar ? (
          <CalendarScreen calendar={calendar} onBack={handleBack} />
        ) : (
          <HomePage
            onSelectDistrict={handleSelectDistrict}
            calendarMap={calendarMap}
            autoDetectedDistrict={autoDetectedDistrict}
          />
        );
    }
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={iframeOpen ? "" : "pb-20"}>
        {renderTab()}
      </div>
      {!showSplash && !iframeOpen && <BottomNavbar activeTab={activeTab} onTabChange={setActiveTab} />}
      {showLocationPrompt && (
        <LocationPrompt
          onLocationDetected={handleLocationDetected}
          onDismiss={handleLocationDismiss}
        />
      )}
    </>
  );
};

export default Index;
