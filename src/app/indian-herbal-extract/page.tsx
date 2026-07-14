import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Herbal Extract",
  description: "Indian Herbal Extract - Aksharam Nutra Foods Pvt. Ltd.",
  keywords: "Herbal Extract, Indian Herbs, Aksharam Nutra",
};

interface ExtractRow {
  sr: number;
  name: string;
  spec: string;
}

const extracts: ExtractRow[] = [
  { sr: 1, name: "Sitopaladi Churna", spec: "" },
  { sr: 2, name: "Amla Dry Ext. BN", spec: "4:1, 20%, 30%, 45%" },
  { sr: 3, name: "Avocado Soyabean Unsaponifiables", spec: "35% Phytosterols" },
  { sr: 4, name: "Beet Root Extract", spec: "10:01, 40%" },
  { sr: 5, name: "Belladona Extract", spec: "0.50%" },
  { sr: 6, name: "Bhoomi Amla Ext.", spec: "" },
  { sr: 7, name: "Chaste Berry Ext.", spec: "0.5% Auguniside (UV), 0.8%, 10:1" },
  { sr: 8, name: "Citrus Limonum (Lemon Ext.)", spec: "20%" },
  { sr: 9, name: "Custard Apple Extract", spec: "" },
  { sr: 10, name: "Litchi Extract", spec: "10:01" },
  { sr: 11, name: "MANGIFERA INDICA", spec: "25%" },
  { sr: 12, name: "Pippali D.E.", spec: "" },
  { sr: 13, name: "Strawberry Extract", spec: "10:01" },
  { sr: 14, name: "Sweet Orange Extract", spec: "" },
  { sr: 15, name: "Terminalia Bellirica", spec: "10:01" },
  { sr: 16, name: "Terminalia Chebula (Harrar) Extract", spec: "10:01, 30-35%" },
  { sr: 17, name: "TinoSpora Cordifolia", spec: "2.5% Bitter, 5%" },
  { sr: 18, name: "Vitis Nirgundi Ext", spec: "10:01, (Alkoloids) 0.1%" },
  { sr: 19, name: "Watermelon Extract", spec: "10:01" },
  { sr: 20, name: "JAMBU EXTRACT (Jamun)", spec: "2%" },
  { sr: 21, name: "Papaya Fruit Extract", spec: "" },
  { sr: 22, name: "Senna Fruit Extract", spec: "" },
  { sr: 23, name: "Hoodia Gordonii Powder", spec: "" },
  { sr: 24, name: "Isabgol Extract", spec: "" },
  { sr: 25, name: "Lemon Peel Powder", spec: "" },
  { sr: 26, name: "Lemon Powder", spec: "" },
  { sr: 27, name: "Lutein Powder", spec: "5%, 10%, 20%" },
  { sr: 28, name: "Nilofer Extract", spec: "8:01" },
  { sr: 29, name: "Wheat Grass Powder (Thinopyrum Intermedium)", spec: "" },
  { sr: 30, name: "Cacao Seed Extract", spec: "10:01" },
  { sr: 31, name: "Oregano Extract", spec: "10:01" },
  { sr: 32, name: "Arjuna Liquid Extract", spec: "LE" },
  { sr: 33, name: "Neem Liquid Extract", spec: "LE" },
  { sr: 34, name: "Malt extract", spec: "" },
  { sr: 35, name: "Shiitake Lentinus Edodes Fruiting Body Ext.", spec: "30%" },
  { sr: 36, name: "Reishi Mushroom (Ganoderma)", spec: "10:1, 30%" },
  { sr: 37, name: "Agaricus Mushroom P.E.", spec: "" },
  { sr: 38, name: "Magnolia Bark Extract", spec: "50%" },
  { sr: 39, name: "Pine Bark Extract", spec: "95%" },
  { sr: 81, name: "Black Pepper Piperine Powder", spec: "95%" },
  { sr: 82, name: "Boerhavia Diffusa Extract", spec: "1%" },
  { sr: 83, name: "Boswellia Serrata Extract", spec: "65%" },
  { sr: 84, name: "Brahmi Extract", spec: "6:01" },
  { sr: 85, name: "Caffeine powder", spec: "95%, 98%" },
  { sr: 86, name: "Caralluma Fimbriata Ext.", spec: "10%, 20%, 30%" },
  { sr: 87, name: "Carica Papaya Extract (Leaf)", spec: "6:1, 10%" },
  { sr: 88, name: "CASTER EXTRACT", spec: "10:01" },
  { sr: 89, name: "Cedrus Deodar Extract", spec: "" },
  { sr: 90, name: "CELERY (APIUM GRAVEOLENS) Seed", spec: "10:01" },
  { sr: 91, name: "Centella Asiatica", spec: "15%, 20%, 30%" },
  { sr: 92, name: "CHENOPODIUM ALBUM", spec: "" },
  { sr: 93, name: "Chicory Extract", spec: "10:01" },
  { sr: 94, name: "CHLOROPHYTUM BORIVILIANUM (SAFED MUSLI)", spec: "20%, 30%, 50%" },
  { sr: 95, name: "SIDA CORDIFOLIA", spec: "" },
  { sr: 96, name: "Cissus Quadrangularis Extract", spec: "10% & 20%" },
  { sr: 97, name: "Clove Ext", spec: "5:01" },
  { sr: 98, name: "Convolvolus Pluricaulis Extract", spec: "" },
  { sr: 99, name: "Coriander Leaf Extract", spec: "10:01" },
  { sr: 100, name: "Crataegus Pinnatifida", spec: "10:01" },
  { sr: 101, name: "Curry Leaf Extract", spec: "" },
  { sr: 102, name: "Cymbopogon Citratus L 20.1 (Lemon Grass)", spec: "(IH) Extract" },
  { sr: 103, name: "Cyprus Rotundus (Nagarmotha) Extract", spec: "" },
  { sr: 104, name: "Datura Folio Extract", spec: "10:01" },
  { sr: 105, name: "Enicostemma Litorale (Mamejava)", spec: "" },
  { sr: 106, name: "Fennel (Saunf) Dry Extract", spec: "2%" },
  { sr: 107, name: "Garcina Cambogia Ext", spec: "50%, 60%(Ws/ NWS)" },
  { sr: 108, name: "Gorakmundhi Extract", spec: "0.10%" },
  { sr: 109, name: "Grape Skin Extract", spec: "30% Polyphenols" },
  { sr: 110, name: "Green Coffee Extract", spec: "45%, 50%" },
  { sr: 111, name: "Guduchi D.E.", spec: "3%" },
  { sr: 112, name: "Gymnema Sylvestris Extract", spec: "25%, 75%" },
  { sr: 113, name: "Horse chestnut", spec: "20%" },
  { sr: 114, name: "Jatamansi Extract", spec: "10:01" },
  { sr: 115, name: "Jeera Extract 1%", spec: "1% VOC, 3%" },
  { sr: 116, name: "Jiwanti", spec: "" },
  { sr: 117, name: "Kapikacchu", spec: "15%" },
  { sr: 118, name: "Kapoor (Cinnamonum Camphora)", spec: "" },
  { sr: 119, name: "Kutaj Extract", spec: "" },
  { sr: 120, name: "Manjistha Extract", spec: "" },
  { sr: 121, name: "MANJUPHAL DRY EXT", spec: "" },
  { sr: 122, name: "MARIGOLD EXTRACT", spec: "10:01" },
  { sr: 123, name: "Mint Leaf Extract", spec: "" },
  { sr: 168, name: "Sarpagandha Extract", spec: "" },
  { sr: 169, name: "Senna Leaves Dry Extract", spec: "20%" },
  { sr: 170, name: "White Cumin Extract (Jeera Dry Ext.)", spec: "1% VOC" },
  { sr: 171, name: "Birch Leaf Extract", spec: "" },
  { sr: 172, name: "Cactus P.E.", spec: "" },
  { sr: 173, name: "Galangal P.E.", spec: "" },
  { sr: 174, name: "Oat Srraw P.E.", spec: "" },
  { sr: 175, name: "Safflower P.E.", spec: "" },
  { sr: 176, name: "Salvia Root P.E.", spec: "" },
  { sr: 177, name: "Sesamin P.E.", spec: "" },
  { sr: 178, name: "White Tea Extract", spec: "" },
  { sr: 179, name: "Amla Dry Ext.", spec: "Oil Soluble Extract" },
  { sr: 180, name: "Ashwagandha Extract", spec: "Oil Soluble Extract" },
  { sr: 181, name: "Bhringraj Extr.", spec: "Oil Soluble Extract" },
  { sr: 182, name: "Methi Oil Sol. Extr.", spec: "Oil Soluble Extract" },
  { sr: 183, name: "Neem Extr.", spec: "Oil Soluble Extract" },
  { sr: 184, name: "Shankhpushpi Extract", spec: "Oil Soluble Extract" },
  { sr: 185, name: "Shikakai Extract", spec: "Oil Soluble Extract" },
  { sr: 186, name: "Tulsi Extract", spec: "Oil Soluble Extract" },
  { sr: 187, name: "Phosphatidylserine (PS)", spec: "30%" },
  { sr: 188, name: "White Curcumin Extract (Decolorized Curcumin)", spec: "95%" },
  { sr: 189, name: "Arishtak Soft Extract", spec: "Soft Extract" },
  { sr: 190, name: "Jatamansi Soft Extract", spec: "Soft Extract" },
  { sr: 191, name: "Ritha Soft Extract", spec: "Soft Extract" },
  { sr: 192, name: "Tulsi Soft Extract", spec: "Soft Extract" },
  { sr: 193, name: "Soya Lecithin(Powder)", spec: "" },
  { sr: 194, name: "Soya Phosphatidyl Choline (PC)", spec: "30%" },
  { sr: 195, name: "Camellia Oleifera (Japanese Green Tea) Extract", spec: "" },
  { sr: 196, name: "Carthamus Tintorious Extract", spec: "10:01" },
  { sr: 197, name: "CAMELLIA SINENSIS (GREEN TEA EXTRACT)", spec: "45-50% polyphenol, (45% EGCG) 98% Polyphenols" },
  { sr: 198, name: "Citrus Bioflavonoid", spec: "25%, 50%" },
  { sr: 199, name: "Cucumis Sativus ( Cucumber) Extract", spec: "" },
  { sr: 200, name: "Phytosterols", spec: "70% (>95%)" },
  { sr: 201, name: "Vanilla Extract", spec: "10:01" },
  { sr: 202, name: "Bitter Gourd Extract", spec: "10:01" },
  { sr: 203, name: "Bitter Melon Extract", spec: "2.5%, 8%, 10%" },
  { sr: 204, name: "Brassica Oleracea (Broccoli Extract)", spec: "10:01" },
  { sr: 205, name: "Carrot Extract", spec: "" },
  { sr: 206, name: "Cauliflower Extract (C)", spec: "" },
  { sr: 207, name: "CHILLI EXTRACT", spec: "10:01" },
  { sr: 208, name: "Spinach Leaf Extract", spec: "10:01" },
  { sr: 209, name: "TOMATO EXTRACT", spec: "20:01" },
  { sr: 210, name: "Capsicum P.E.", spec: "" },
];

export default function IndianHerbalExtractPage() {
  return (
    <>
      <div
        className="bg-brand py-20 text-center text-brand-foreground"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/abt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Indian Herbal Extract</h1>
          <p className="mt-3 text-lg text-white/90">
            Premium quality extracts sourced from the finest Indian herbs.
          </p>
        </div>
      </div>

      <section className="bg-brand-bg py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm sm:p-5">
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 text-sm">
                <thead className="bg-brand-accent text-white">
                  <tr>
                    <th className="w-20 border border-brand-accent/70 px-3 py-3 text-center font-bold uppercase">
                      Sr. No.
                    </th>
                    <th className="border border-brand-accent/70 px-4 py-3 text-left font-bold uppercase">
                      Common Names
                    </th>
                    <th className="border border-brand-accent/70 px-4 py-3 text-left font-bold uppercase">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {extracts.map((row, i) => (
                    <tr
                      key={row.sr}
                      className={i % 2 === 0 ? "bg-white" : "bg-brand-bg/40"}
                    >
                      <td className="border border-brand-bg px-3 py-2 text-center font-semibold text-brand-ink">
                        {row.sr}
                      </td>
                      <td className="border border-brand-bg px-4 py-2 text-brand-ink">
                        {row.name}
                      </td>
                      <td className="border border-brand-bg px-4 py-2 text-brand-muted">
                        {row.spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
