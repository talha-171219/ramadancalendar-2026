// GPS coordinates for all available districts (lat, lng)
export const districtCoordinates: Record<string, { lat: number; lng: number; name: string }> = {
  dhaka: { lat: 23.8103, lng: 90.4125, name: "ঢাকা" },
  gazipur: { lat: 24.0023, lng: 90.4203, name: "গাজীপুর" },
  narayanganj: { lat: 23.6238, lng: 90.5000, name: "নারায়ণগঞ্জ" },
  tangail: { lat: 24.2513, lng: 89.9164, name: "টাঙ্গাইল" },
  kishoreganj: { lat: 24.4449, lng: 90.7766, name: "কিশোরগঞ্জ" },
  narsingdi: { lat: 23.9322, lng: 90.7151, name: "নরসিংদী" },
  manikganj: { lat: 23.8617, lng: 90.0003, name: "মানিকগঞ্জ" },
  munshiganj: { lat: 23.5422, lng: 90.5305, name: "মুন্সীগঞ্জ" },
  faridpur: { lat: 23.6070, lng: 89.8429, name: "ফরিদপুর" },
  gopalganj: { lat: 23.0050, lng: 89.8266, name: "গোপালগঞ্জ" },
  madaripur: { lat: 23.1641, lng: 90.1878, name: "মাদারীপুর" },
  rajbari: { lat: 23.7574, lng: 89.6445, name: "রাজবাড়ী" },
  shariatpur: { lat: 23.2423, lng: 90.4348, name: "শরীয়তপুর" },
  bogura: { lat: 24.8465, lng: 89.3773, name: "বগুড়া" },
  rajshahi: { lat: 24.3745, lng: 88.6042, name: "রাজশাহী" },
  pabna: { lat: 24.0064, lng: 89.2372, name: "পাবনা" },
  sirajganj: { lat: 24.4534, lng: 89.7006, name: "সিরাজগঞ্জ" },
  natore: { lat: 24.4206, lng: 88.9318, name: "নাটোর" },
  naogaon: { lat: 24.7936, lng: 88.9318, name: "নওগাঁ" },
  joypurhat: { lat: 25.0968, lng: 89.0227, name: "জয়পুরহাট" },
  chapainawabganj: { lat: 24.5965, lng: 88.2775, name: "চাঁপাইনবাবগঞ্জ" },
  rangpur: { lat: 25.7439, lng: 89.2752, name: "রংপুর" },
  dinajpur: { lat: 25.6217, lng: 88.6354, name: "দিনাজপুর" },
  gaibandha: { lat: 25.3288, lng: 89.5280, name: "গাইবান্ধা" },
  kurigram: { lat: 25.8072, lng: 89.6295, name: "কুড়িগ্রাম" },
  lalmonirhat: { lat: 25.9923, lng: 89.2847, name: "লালমনিরহাট" },
  nilphamari: { lat: 25.9310, lng: 88.8560, name: "নীলফামারী" },
  panchagarh: { lat: 26.3411, lng: 88.5542, name: "পঞ্চগড়" },
  thakurgaon: { lat: 26.0336, lng: 88.4616, name: "ঠাকুরগাঁও" },
  chittagong: { lat: 22.3569, lng: 91.7832, name: "চট্টগ্রাম" },
  coxsbazar: { lat: 21.4272, lng: 92.0058, name: "কক্সবাজার" },
  comilla: { lat: 23.4607, lng: 91.1809, name: "কুমিল্লা" },
  brahmanbaria: { lat: 23.9608, lng: 91.1115, name: "ব্রাহ্মণবাড়িয়া" },
  chandpur: { lat: 23.2333, lng: 90.6712, name: "চাঁদপুর" },
  lakshmipur: { lat: 22.9425, lng: 90.8412, name: "লক্ষ্মীপুর" },
  noakhali: { lat: 22.8696, lng: 91.0995, name: "নোয়াখালী" },
  feni: { lat: 23.0101, lng: 91.3976, name: "ফেনী" },
  khagrachari: { lat: 23.1193, lng: 91.9847, name: "খাগড়াছড়ি" },
  rangamati: { lat: 22.7324, lng: 92.2985, name: "রাঙ্গামাটি" },
  bandarban: { lat: 22.1953, lng: 92.2184, name: "বান্দরবান" },
  khulna: { lat: 22.8456, lng: 89.5403, name: "খুলনা" },
  satkhira: { lat: 22.7185, lng: 89.0715, name: "সাতক্ষীরা" },
  jessore: { lat: 23.1665, lng: 89.2134, name: "যশোর" },
  meherpur: { lat: 23.7627, lng: 88.6318, name: "মেহেরপুর" },
  magura: { lat: 23.4873, lng: 89.4195, name: "মাগুরা" },
  narail: { lat: 23.1725, lng: 89.4950, name: "নড়াইল" },
  jhenaidah: { lat: 23.5448, lng: 89.1726, name: "ঝিনাইদহ" },
  kushtia: { lat: 23.9013, lng: 89.1200, name: "কুষ্টিয়া" },
  bagerhat: { lat: 22.6519, lng: 89.7859, name: "বাগেরহাট" },
  chuadanga: { lat: 23.6401, lng: 88.8420, name: "চুয়াডাঙ্গা" },
  barisal: { lat: 22.7010, lng: 90.3535, name: "বরিশাল" },
  bhola: { lat: 22.6859, lng: 90.6482, name: "ভোলা" },
  jhalokati: { lat: 22.6406, lng: 90.1987, name: "ঝালকাঠি" },
  patuakhali: { lat: 22.3596, lng: 90.3290, name: "পটুয়াখালী" },
  pirojpur: { lat: 22.5781, lng: 89.9749, name: "পিরোজপুর" },
  barguna: { lat: 22.1510, lng: 90.1266, name: "বরগুনা" },
  mymensingh: { lat: 24.7471, lng: 90.4203, name: "ময়মনসিংহ" },
  jamalpur: { lat: 24.9375, lng: 89.9372, name: "জামালপুর" },
  netrokona: { lat: 24.8707, lng: 90.7279, name: "নেত্রকোণা" },
  sherpur: { lat: 25.0204, lng: 90.0153, name: "শেরপুর" },
  sylhet: { lat: 24.8949, lng: 91.8687, name: "সিলেট" },
  moulvibazar: { lat: 24.4829, lng: 91.7774, name: "মৌলভীবাজার" },
  habiganj: { lat: 24.3890, lng: 91.4164, name: "হবিগঞ্জ" },
  sunamganj: { lat: 25.0658, lng: 91.3950, name: "সুনামগঞ্জ" },
};

export function findNearestDistrict(lat: number, lng: number): string {
  let minDist = Infinity;
  let nearest = "dhaka";

  for (const [key, coord] of Object.entries(districtCoordinates)) {
    const dlat = lat - coord.lat;
    const dlng = lng - coord.lng;
    const dist = dlat * dlat + dlng * dlng;
    if (dist < minDist) {
      minDist = dist;
      nearest = key;
    }
  }

  return nearest;
}
