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
      { name: "ঢাকা", dataKey: "dhaka", available: true },
      { name: "গাজীপুর", dataKey: "gazipur", available: true },
      { name: "কিশোরগঞ্জ", dataKey: "kishoreganj", available: true },
      { name: "মানিকগঞ্জ", dataKey: "manikganj", available: true },
      { name: "মুন্সিগঞ্জ", dataKey: "munshiganj", available: true },
      { name: "নারায়ণগঞ্জ", dataKey: "narayanganj", available: true },
      { name: "নরসিংদী", dataKey: "narsingdi", available: true },
      { name: "টাঙ্গাইল", dataKey: "tangail", available: true },
      { name: "ফরিদপুর", dataKey: "faridpur", available: true },
      { name: "গোপালগঞ্জ", dataKey: "gopalganj", available: true },
      { name: "মাদারীপুর", dataKey: "madaripur", available: true },
      { name: "রাজবাড়ী", dataKey: "rajbari", available: true },
      { name: "শরীয়তপুর", dataKey: "shariatpur", available: true },
    ],
  },
  {
    name: "চট্টগ্রাম বিভাগ",
    districts: [
      { name: "চট্টগ্রাম", dataKey: "chittagong", available: true },
      { name: "কক্সবাজার", dataKey: "coxsbazar", available: true },
      { name: "কুমিল্লা", dataKey: "comilla", available: true },
      { name: "ব্রাহ্মণবাড়িয়া", dataKey: "brahmanbaria", available: true },
      { name: "চাঁদপুর", dataKey: "chandpur", available: true },
      { name: "লক্ষ্মীপুর", dataKey: "lakshmipur", available: true },
      { name: "নোয়াখালী", dataKey: "noakhali", available: true },
      { name: "ফেনী", dataKey: "feni", available: true },
      { name: "খাগড়াছড়ি", dataKey: "khagrachari", available: true },
      { name: "রাঙ্গামাটি", dataKey: "rangamati", available: true },
      { name: "বান্দরবান", dataKey: "bandarban", available: true },
    ],
  },
  {
    name: "খুলনা বিভাগ",
    districts: [
      { name: "খুলনা", dataKey: "khulna", available: true },
      { name: "বাগেরহাট", dataKey: "bagerhat", available: true },
      { name: "সাতক্ষীরা", dataKey: "satkhira", available: true },
      { name: "যশোর", dataKey: "jessore", available: true },
      { name: "মাগুরা", dataKey: "magura", available: true },
      { name: "নড়াইল", dataKey: "narail", available: true },
      { name: "ঝিনাইদহ", dataKey: "jhenaidah", available: true },
      { name: "কুষ্টিয়া", dataKey: "kushtia", available: true },
      { name: "মেহেরপুর", dataKey: "meherpur", available: true },
      { name: "চুয়াডাঙ্গা", dataKey: "chuadanga", available: true },
    ],
  },
  {
    name: "বরিশাল বিভাগ",
    districts: [
      { name: "বরিশাল", dataKey: "barisal", available: true },
      { name: "ভোলা", dataKey: "bhola", available: true },
      { name: "ঝালকাঠি", dataKey: "jhalokati", available: true },
      { name: "পটুয়াখালী", dataKey: "patuakhali", available: true },
      { name: "পিরোজপুর", dataKey: "pirojpur", available: true },
      { name: "বরগুনা", dataKey: "barguna", available: true },
    ],
  },
  {
    name: "সিলেট বিভাগ",
    districts: [
      { name: "সিলেট", dataKey: "sylhet", available: true },
      { name: "মৌলভীবাজার", dataKey: "moulvibazar", available: true },
      { name: "হবিগঞ্জ", dataKey: "habiganj", available: true },
      { name: "সুনামগঞ্জ", dataKey: "sunamganj", available: true },
    ],
  },
  {
    name: "রংপুর বিভাগ",
    districts: [
      { name: "রংপুর", dataKey: "rangpur", available: true },
      { name: "দিনাজপুর", dataKey: "dinajpur", available: true },
      { name: "গাইবান্ধা", dataKey: "gaibandha", available: true },
      { name: "কুড়িগ্রাম", dataKey: "kurigram", available: true },
      { name: "লালমনিরহাট", dataKey: "lalmonirhat", available: true },
      { name: "নীলফামারী", dataKey: "nilphamari", available: true },
      { name: "পঞ্চগড়", dataKey: "panchagarh", available: true },
      { name: "ঠাকুরগাঁও", dataKey: "thakurgaon", available: true },
    ],
  },
  {
    name: "ময়মনসিংহ বিভাগ",
    districts: [
      { name: "ময়মনসিংহ", dataKey: "mymensingh", available: true },
      { name: "জামালপুর", dataKey: "jamalpur", available: true },
      { name: "নেত্রকোণা", dataKey: "netrokona", available: true },
      { name: "শেরপুর", dataKey: "sherpur", available: true },
    ],
  },
];
