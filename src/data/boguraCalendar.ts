export interface CalendarRow {
  ramadan: string;
  date: string;
  sehriEnd: string;
  fajrAzan: string;
  iftarTime: string;
  gregorianDate: string; // ISO format for matching today
}

export interface DistrictCalendar {
  districtName: string;
  ministry: string;
  foundation: string;
  department: string;
  address: string;
  website: string;
  title: string;
  year: string;
  rows: CalendarRow[];
  notes: string[];
  signatories: string[];
}

export const boguraCalendar: DistrictCalendar = {
  districtName: "বগুড়া জেলা",
  ministry: "ধর্ম বিষয়ক মন্ত্রণালয়",
  foundation: "ইসলামিক ফাউন্ডেশন",
  department: "দাওয়াত ও সংস্কৃতি বিভাগ",
  address: "বায়তুলমুকাররম, ঢাকা-১০০০",
  website: "www.islamicfoundation.gov.bd",
  title: "সাহরী-ইফতারের সময়সূচি",
  year: "পবিত্র মাহে রমযান ১৪৪৭ হিজরী, ২০২৬ খ্রিষ্টাব্দ",
  rows: [
    { ramadan: "*০১", date: "১৯ ফেব্রুয়ারি", sehriEnd: "৫:১৫", fajrAzan: "৫:১৯", iftarTime: "৬:০১", gregorianDate: "2026-02-19" },
    { ramadan: "০২", date: "২০ ফেব্রুয়ারি", sehriEnd: "৫:১৫", fajrAzan: "৫:১৯", iftarTime: "৬:০২", gregorianDate: "2026-02-20" },
    { ramadan: "০৩", date: "২১ ফেব্রুয়ারি", sehriEnd: "৫:১৪", fajrAzan: "৫:১৮", iftarTime: "৬:০২", gregorianDate: "2026-02-21" },
    { ramadan: "০৪", date: "২২ ফেব্রুয়ারি", sehriEnd: "৫:১৩", fajrAzan: "৫:১৭", iftarTime: "৬:০৩", gregorianDate: "2026-02-22" },
    { ramadan: "০৫", date: "২৩ ফেব্রুয়ারি", sehriEnd: "৫:১২", fajrAzan: "৫:১৭", iftarTime: "৬:০৩", gregorianDate: "2026-02-23" },
    { ramadan: "০৬", date: "২৪ ফেব্রুয়ারি", sehriEnd: "৫:১২", fajrAzan: "৫:১৬", iftarTime: "৬:০৪", gregorianDate: "2026-02-24" },
    { ramadan: "০৭", date: "২৫ ফেব্রুয়ারি", sehriEnd: "৫:১১", fajrAzan: "৫:১৫", iftarTime: "৬:০৪", gregorianDate: "2026-02-25" },
    { ramadan: "০৮", date: "২৬ ফেব্রুয়ারি", sehriEnd: "৫:১০", fajrAzan: "৫:১৪", iftarTime: "৬:০৫", gregorianDate: "2026-02-26" },
    { ramadan: "০৯", date: "২৭ ফেব্রুয়ারি", sehriEnd: "৫:০৯", fajrAzan: "৫:১৩", iftarTime: "৬:০৬", gregorianDate: "2026-02-27" },
    { ramadan: "১০", date: "২৮ ফেব্রুয়ারি", sehriEnd: "৫:০৮", fajrAzan: "৫:১৩", iftarTime: "৬:০৬", gregorianDate: "2026-02-28" },
    { ramadan: "১১", date: "০১ মার্চ", sehriEnd: "৫:০৮", fajrAzan: "৫:১২", iftarTime: "৬:০৭", gregorianDate: "2026-03-01" },
    { ramadan: "১২", date: "০২ মার্চ", sehriEnd: "৫:০৭", fajrAzan: "৫:১১", iftarTime: "৬:০৭", gregorianDate: "2026-03-02" },
    { ramadan: "১৩", date: "০৩ মার্চ", sehriEnd: "৫:০৬", fajrAzan: "৫:১০", iftarTime: "৬:০৮", gregorianDate: "2026-03-03" },
    { ramadan: "১৪", date: "০৪ মার্চ", sehriEnd: "৫:০৫", fajrAzan: "৫:০৯", iftarTime: "৬:০৮", gregorianDate: "2026-03-04" },
    { ramadan: "১৫", date: "০৫ মার্চ", sehriEnd: "৫:০৪", fajrAzan: "৫:০৮", iftarTime: "৬:০৯", gregorianDate: "2026-03-05" },
    { ramadan: "১৬", date: "০৬ মার্চ", sehriEnd: "৫:০৩", fajrAzan: "৫:০৭", iftarTime: "৬:০৯", gregorianDate: "2026-03-06" },
    { ramadan: "১৭", date: "০৭ মার্চ", sehriEnd: "৫:০২", fajrAzan: "৫:০৬", iftarTime: "৬:১০", gregorianDate: "2026-03-07" },
    { ramadan: "১৮", date: "০৮ মার্চ", sehriEnd: "৫:০১", fajrAzan: "৫:০৫", iftarTime: "৬:১০", gregorianDate: "2026-03-08" },
    { ramadan: "১৯", date: "০৯ মার্চ", sehriEnd: "৫:০০", fajrAzan: "৫:০৪", iftarTime: "৬:১১", gregorianDate: "2026-03-09" },
    { ramadan: "২০", date: "১০ মার্চ", sehriEnd: "৪:৫৯", fajrAzan: "৫:০৩", iftarTime: "৬:১১", gregorianDate: "2026-03-10" },
    { ramadan: "২১", date: "১১ মার্চ", sehriEnd: "৪:৫৮", fajrAzan: "৫:০২", iftarTime: "৬:১১", gregorianDate: "2026-03-11" },
    { ramadan: "২২", date: "১২ মার্চ", sehriEnd: "৪:৫৭", fajrAzan: "৫:০১", iftarTime: "৬:১২", gregorianDate: "2026-03-12" },
    { ramadan: "২৩", date: "১৩ মার্চ", sehriEnd: "৪:৫৬", fajrAzan: "৫:০০", iftarTime: "৬:১২", gregorianDate: "2026-03-13" },
    { ramadan: "২৪", date: "১৪ মার্চ", sehriEnd: "৪:৫৫", fajrAzan: "৪:৫৯", iftarTime: "৬:১৩", gregorianDate: "2026-03-14" },
    { ramadan: "২৫", date: "১৫ মার্চ", sehriEnd: "৪:৫৪", fajrAzan: "৪:৫৮", iftarTime: "৬:১৩", gregorianDate: "2026-03-15" },
    { ramadan: "২৬", date: "১৬ মার্চ", sehriEnd: "৪:৫৩", fajrAzan: "৪:৫৭", iftarTime: "৬:১৪", gregorianDate: "2026-03-16" },
    { ramadan: "২৭", date: "১৭ মার্চ", sehriEnd: "৪:৫২", fajrAzan: "৪:৫৬", iftarTime: "৬:১৪", gregorianDate: "2026-03-17" },
    { ramadan: "২৮", date: "১৮ মার্চ", sehriEnd: "৪:৫১", fajrAzan: "৪:৫৫", iftarTime: "৬:১৫", gregorianDate: "2026-03-18" },
    { ramadan: "২৯", date: "১৯ মার্চ", sehriEnd: "৪:৫০", fajrAzan: "৪:৫৪", iftarTime: "৬:১৫", gregorianDate: "2026-03-19" },
    { ramadan: "৩০", date: "২০ মার্চ", sehriEnd: "৪:৪৯", fajrAzan: "৪:৫৩", iftarTime: "৬:১৫", gregorianDate: "2026-03-20" },
  ],
  notes: [
    "*১লা রমযান চাঁদ দেখার উপর নির্ভরশীল।",
    "নোট: যেটি সাহরীর শেষ সময় সেটিই মূলত সালাতুল ফজরের শুরু সময়। কিন্তু যেহেতু এই সময়সূচিটি পুরো জেলার জন্য প্রস্তুত করা হয়েছে, আর জেলার এক প্রান্ত থেকে আরেক প্রান্তের সময়ের মাঝে ব্যবধান হয়ে থাকে, তাই পুরো জেলার জন্য একটি সময়সূচি প্রস্তুত করতে এ পদ্ধতি অবলম্বন করতে হয়েছে যে, সাহরীর জন্য জেলার পূর্ব প্রান্তের সুবহে সাদিকের সময় (সেকেন্ড বাদ দিয়ে) উল্লেখ করা হয়েছে। ফজরের আযানের জন্য জেলার পশ্চিম প্রান্তের সুবহে সাদিকের সময় (সেকেন্ডকে পূর্ণ মিনিট করে) উল্লেখ করা হয়েছে এবং ইফতারের জন্য জেলার পশ্চিম প্রান্তের সূর্যাস্তের সময় (সেকেন্ডকে পূর্ণ মিনিট করে) উল্লেখ করা হয়েছে।",
  ],
  signatories: [
    "(বি. দ্র. বায়তুল মোকাররম জাতীয় মসজিদের খতীব মহোদয়ের নেতৃত্বে দেশের শীর্ষ মুফতিয়ানে কেরাম কর্তৃক প্রণীত)",
    "(মুফতী মিজানুর রহমান সাঈদ) — পরিচালক, শাঈখ যাকারিয়া ইসলামিক রিসার্চ সেন্টার",
    "(মুফতী মাহফুজুল হক) — গভর্নর, বোর্ড অব গভর্নরস, ইসলামিক ফাউন্ডেশন",
    "(মুফতী মুহাম্মদ আব্দুল মালেক) — খতীব, বায়তুল মোকাররম জাতীয় মসজিদ",
  ],
};

export const allCalendars: DistrictCalendar[] = [boguraCalendar];
