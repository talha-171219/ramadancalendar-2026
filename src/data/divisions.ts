export interface District {
  name: string;
  dataKey: string; // key to lookup calendar data
  available: boolean;
}

export interface Division {
  name: string;
  districts: District[];
}

export const divisions: Division[] = [
  {
    name: "রাজশাহী বিভাগ",
    districts: [
      { name: "রাজশাহী", dataKey: "rajshahi", available: true },
      { name: "বগুড়া", dataKey: "bogura", available: true },
      { name: "চাঁপাইনবাবগঞ্জ", dataKey: "chapainawabganj", available: true },
      { name: "নওগাঁ", dataKey: "naogaon", available: true },
      { name: "নাটোর", dataKey: "natore", available: true },
      { name: "নবাবগঞ্জ", dataKey: "nawabganj", available: false },
      { name: "পাবনা", dataKey: "pabna", available: true },
      { name: "সিরাজগঞ্জ", dataKey: "sirajganj", available: true },
      { name: "জয়পুরহাট", dataKey: "joypurhat", available: true },
    ],
  },
  {
    name: "ঢাকা বিভাগ",
    districts: [
      { name: "ঢাকা", dataKey: "dhaka", available: false },
      { name: "গাজীপুর", dataKey: "gazipur", available: false },
      { name: "কিশোরগঞ্জ", dataKey: "kishoreganj", available: false },
      { name: "মানিকগঞ্জ", dataKey: "manikganj", available: false },
      { name: "মুন্সিগঞ্জ", dataKey: "munshiganj", available: false },
      { name: "নারায়ণগঞ্জ", dataKey: "narayanganj", available: false },
      { name: "নরসিংদী", dataKey: "narsingdi", available: false },
      { name: "টাঙ্গাইল", dataKey: "tangail", available: false },
      { name: "ফরিদপুর", dataKey: "faridpur", available: false },
      { name: "গোপালগঞ্জ", dataKey: "gopalganj", available: false },
      { name: "মাদারীপুর", dataKey: "madaripur", available: false },
      { name: "রাজবাড়ী", dataKey: "rajbari", available: false },
      { name: "শরীয়তপুর", dataKey: "shariatpur", available: false },
    ],
  },
  {
    name: "চট্টগ্রাম বিভাগ",
    districts: [
      { name: "চট্টগ্রাম", dataKey: "chittagong", available: false },
      { name: "কক্সবাজার", dataKey: "coxsbazar", available: false },
      { name: "কুমিল্লা", dataKey: "comilla", available: false },
      { name: "ব্রাহ্মণবাড়িয়া", dataKey: "brahmanbaria", available: false },
      { name: "চাঁদপুর", dataKey: "chandpur", available: false },
      { name: "লক্ষ্মীপুর", dataKey: "lakshmipur", available: false },
      { name: "নোয়াখালী", dataKey: "noakhali", available: false },
      { name: "ফেনী", dataKey: "feni", available: false },
      { name: "খাগড়াছড়ি", dataKey: "khagrachari", available: false },
      { name: "রাঙ্গামাটি", dataKey: "rangamati", available: false },
      { name: "বান্দরবান", dataKey: "bandarban", available: false },
    ],
  },
  {
    name: "খুলনা বিভাগ",
    districts: [
      { name: "খুলনা", dataKey: "khulna", available: false },
      { name: "বাগেরহাট", dataKey: "bagerhat", available: false },
      { name: "সাতক্ষীরা", dataKey: "satkhira", available: false },
      { name: "যশোর", dataKey: "jessore", available: false },
      { name: "মাগুরা", dataKey: "magura", available: false },
      { name: "নড়াইল", dataKey: "narail", available: false },
      { name: "ঝিনাইদহ", dataKey: "jhenaidah", available: false },
      { name: "কুষ্টিয়া", dataKey: "kushtia", available: false },
      { name: "মেহেরপুর", dataKey: "meherpur", available: false },
      { name: "চুয়াডাঙ্গা", dataKey: "chuadanga", available: false },
    ],
  },
  {
    name: "বরিশাল বিভাগ",
    districts: [
      { name: "বরিশাল", dataKey: "barisal", available: false },
      { name: "ভোলা", dataKey: "bhola", available: false },
      { name: "ঝালকাঠি", dataKey: "jhalokati", available: false },
      { name: "পটুয়াখালী", dataKey: "patuakhali", available: false },
      { name: "পিরোজপুর", dataKey: "pirojpur", available: false },
      { name: "বরগুনা", dataKey: "barguna", available: false },
    ],
  },
  {
    name: "সিলেট বিভাগ",
    districts: [
      { name: "সিলেট", dataKey: "sylhet", available: false },
      { name: "মৌলভীবাজার", dataKey: "moulvibazar", available: false },
      { name: "হবিগঞ্জ", dataKey: "habiganj", available: false },
      { name: "সুনামগঞ্জ", dataKey: "sunamganj", available: false },
    ],
  },
  {
    name: "রংপুর বিভাগ",
    districts: [
      { name: "রংপুর", dataKey: "rangpur", available: false },
      { name: "দিনাজপুর", dataKey: "dinajpur", available: false },
      { name: "গাইবান্ধা", dataKey: "gaibandha", available: false },
      { name: "কুড়িগ্রাম", dataKey: "kurigram", available: false },
      { name: "লালমনিরহাট", dataKey: "lalmonirhat", available: false },
      { name: "নীলফামারী", dataKey: "nilphamari", available: false },
      { name: "পঞ্চগড়", dataKey: "panchagarh", available: false },
      { name: "ঠাকুরগাঁও", dataKey: "thakurgaon", available: false },
    ],
  },
  {
    name: "ময়মনসিংহ বিভাগ",
    districts: [
      { name: "ময়মনসিংহ", dataKey: "mymensingh", available: false },
      { name: "জামালপুর", dataKey: "jamalpur", available: false },
      { name: "নেত্রকোণা", dataKey: "netrokona", available: false },
      { name: "শেরপুর", dataKey: "sherpur", available: false },
    ],
  },
];
