export interface City {
  slug: string;
  name: string;
}

// Slugs are copied verbatim from the original PHP filenames (including
// inconsistent spellings like "gujrat") so existing indexed URLs keep working.

export const dehydratedCities: City[] = [
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "andhra-pradesh", name: "Andhra Pradesh" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { slug: "bihar", name: "Bihar" },
  { slug: "chattisgarh", name: "Chattisgarh" },
  { slug: "delhi", name: "Delhi" },
  { slug: "goa", name: "Goa" },
  { slug: "gujarat", name: "Gujarat" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "haryana", name: "Haryana" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh" },
  { slug: "jammu-and-kashmir", name: "Jammu & Kashmir" },
  { slug: "kerala", name: "Kerala" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh" },
  { slug: "maharashtra", name: "Maharashtra" },
  { slug: "manipur", name: "Manipur" },
  { slug: "mizoram", name: "Mizoram" },
  { slug: "mumbai", name: "Mumbai" },
  { slug: "punjab", name: "Punjab" },
  { slug: "rajasthan", name: "Rajasthan" },
  { slug: "surat", name: "Surat" },
  { slug: "tamil-nadu", name: "Tamil Nadu" },
  { slug: "telangana", name: "Telangana" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh" },
];

export const seasoningMasalaCities: City[] = [
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "andhra-pradesh", name: "Andhra Pradesh" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { slug: "bihar", name: "Bihar" },
  { slug: "chattisgarh", name: "Chattisgarh" },
  { slug: "delhi", name: "Delhi" },
  { slug: "goa", name: "Goa" },
  { slug: "gujrat", name: "Gujarat" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "haryana", name: "Haryana" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh" },
  { slug: "jammu-and-kashmir", name: "Jammu & Kashmir" },
  { slug: "kerala", name: "Kerala" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh" },
  { slug: "maharashtra", name: "Maharashtra" },
  { slug: "manipur", name: "Manipur" },
  { slug: "mizoram", name: "Mizoram" },
  { slug: "mumbai", name: "Mumbai" },
  { slug: "nagaland", name: "Nagaland" },
  { slug: "punjab", name: "Punjab" },
  { slug: "rajasthan", name: "Rajasthan" },
  { slug: "surat", name: "Surat" },
  { slug: "tamil-nadu", name: "Tamil Nadu" },
  { slug: "telangana", name: "Telangana" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh" },
];

export const redChilliCities: City[] = [
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "andhra-pradesh", name: "Andhra Pradesh" },
  { slug: "gujarat", name: "Gujarat" },
  { slug: "maharashtra", name: "Maharashtra" },
  { slug: "morbi", name: "Morbi" },
  { slug: "mumbai", name: "Mumbai" },
];
