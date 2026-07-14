export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: { title?: string; text: string }[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
  keywords?: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-dehydrated-foods-are-becoming-a-preferred-choice-worldwide",
    title: "Why Dehydrated Foods Are Becoming a Preferred Choice Worldwide",
    date: "July 03, 2026",
    author: "Admin",
    image: "/images/dehydratedd.jpg",
    description: "",
    body: [
      {
        type: "p",
        text: "The increasing focus on healthy lifestyles and sustainable food solutions has significantly boosted the popularity of dehydrated food products. By removing moisture while preserving nutritional value, dehydrated ingredients provide an efficient and practical solution for both consumers and manufacturers.",
      },
      { type: "h3", text: "Nutritional Advantages" },
      {
        type: "p",
        text: "Dehydrated fruits, vegetables, herbs, and spices retain a significant portion of their nutrients while offering enhanced shelf stability. This makes them ideal for use in ready-to-eat meals, seasonings, soups, snacks, and health-focused products.",
      },
      { type: "h3", text: "Convenience and Sustainability" },
      {
        type: "p",
        text: "Dehydrated products are lightweight, easy to store, and reduce transportation costs. Their longer shelf life also minimizes food wastage, contributing to more sustainable food supply chains.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "With growing awareness about food preservation and sustainability, dehydrated ingredients are expected to play an increasingly important role in the future of the global food industry.",
      },
    ],
  },
  {
    slug: "the-growing-demand-for-spray-dried-ingredients-in-the-modern-food-industry",
    title: "The Growing Demand for Spray Dried Ingredients in the Modern Food Industry",
    date: "June 18, 2026",
    author: "Admin",
    image: "/images/blog-5.webp",
    description: "",
    body: [
      {
        type: "p",
        text: "The food industry is constantly evolving, with consumers seeking products that offer convenience, nutrition, and consistent quality. Spray drying technology has emerged as one of the most effective methods for converting liquid food materials into stable powder forms while preserving their essential characteristics. As a result, spray dried ingredients have become a preferred choice for manufacturers across various food and beverage sectors.",
      },
      { type: "h3", text: "Benefits of Spray Dried Ingredients" },
      {
        type: "p",
        text: "Spray dried ingredients offer several advantages, including extended shelf life, improved stability, easy handling, and convenient transportation. These ingredients retain their flavor, color, and nutritional properties while reducing moisture content, making them suitable for a wide range of applications.",
      },
      { type: "h3", text: "Applications Across Industries" },
      {
        type: "p",
        text: "From dairy products and beverages to health supplements and bakery formulations, spray dried ingredients are widely used to enhance product performance and consistency. They help manufacturers achieve uniform quality while simplifying production processes.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "As consumer demand for innovative and convenient food products continues to grow, spray dried ingredients will remain a vital component in modern food manufacturing.",
      },
    ],
  },
  {
    slug: "herbal-extracts-unlocking-the-power-of-nature",
    title: "Herbal Extracts: Unlocking the Power of Nature for Modern Wellness",
    date: "May 29, 2026",
    author: "Admin",
    image: "/images/herbal.jpg",
    description:
      "Discover how herbal extracts unlock the power of nature for modern wellness, nutrition, and personal care.",
    keywords: "herbal extracts, natural wellness, bioactive compounds, Aksharam Nutra Foods",
    body: [
      {
        type: "p",
        text: "In today's health-conscious world, herbal extracts have become one of the most trusted natural solutions for wellness, nutrition, and personal care industries. Derived from carefully selected herbs, roots, leaves, flowers, and seeds, herbal extracts offer concentrated bioactive compounds that support a healthier and more balanced lifestyle.",
      },
      {
        type: "p",
        text: "As consumers increasingly prefer plant-based and clean-label products, the global demand for high-quality herbal extracts continues to grow rapidly across nutraceutical, pharmaceutical, cosmetic, and food industries.",
      },
      { type: "h3", text: "What Are Herbal Extracts?" },
      {
        type: "p",
        text: "Herbal extracts are concentrated substances obtained from plants through advanced extraction methods designed to preserve the active phytochemicals and nutritional properties of the herb. Unlike raw herbal powders, extracts provide:",
      },
      {
        type: "ul",
        items: [
          { text: "Higher potency" },
          { text: "Better absorption" },
          { text: "Consistent quality" },
          { text: "Enhanced effectiveness" },
        ],
      },
      {
        type: "p",
        text: "These qualities make herbal extracts ideal for modern formulations and industrial applications.",
      },
      { type: "h3", text: "The Science Behind Herbal Extracts" },
      {
        type: "p",
        text: "Modern extraction technologies help isolate the most beneficial compounds from herbs while maintaining their purity and effectiveness. Depending on the herb and application, different extraction techniques are used, including:",
      },
      {
        type: "ul",
        items: [
          { text: "Water Extraction" },
          { text: "Solvent Extraction" },
          { text: "Hydro-Alcoholic Extraction" },
          { text: "CO₂ Supercritical Extraction" },
        ],
      },
      {
        type: "p",
        text: "At Aksharam Nutra Foods Pvt. Ltd., we focus on maintaining international quality standards through advanced processing and analytical testing methods to ensure purity, safety, and consistency in every batch.",
      },
      { type: "h3", text: "Benefits of Herbal Extracts" },
      {
        type: "ul",
        items: [
          {
            title: "Natural Wellness Support",
            text: "Herbal extracts are widely known for supporting overall health naturally without synthetic additives.",
          },
          {
            title: "Rich in Bioactive Compounds",
            text: "They contain concentrated phytochemicals, antioxidants, flavonoids, and essential nutrients beneficial for wellness formulations.",
          },
          {
            title: "Versatile Applications",
            text: "Herbal extracts are extensively used in Nutraceuticals & Dietary Supplements, Functional Foods & Beverages, Cosmetics & Personal Care Products, and Pharmaceutical Preparations.",
          },
          {
            title: "Consistent Quality",
            text: "Standardized extracts ensure uniform potency and reliable performance in every formulation.",
          },
        ],
      },
      { type: "h3", text: "Popular Herbal Extracts in Global Demand" },
      {
        type: "ul",
        items: [
          { title: "Ashwagandha Extract", text: "Supports stress management, energy, and vitality." },
          { title: "Curcumin Extract", text: "Known for antioxidant and anti-inflammatory properties." },
          { title: "Green Tea Extract", text: "Rich source of natural antioxidants and wellness-supporting compounds." },
          { title: "Boswellia Extract", text: "Widely used for joint and mobility support formulations." },
          { title: "Ginseng Extract", text: "Popular for stamina, focus, and overall performance support." },
        ],
      },
      { type: "h3", text: "Commitment to Quality & Sustainability" },
      {
        type: "p",
        text: "Quality plays a critical role in the effectiveness of herbal extracts. From raw material sourcing to final packaging, every stage requires strict monitoring and quality control. At Aksharam Nutra Foods Pvt. Ltd., we are committed to:",
      },
      {
        type: "ul",
        items: [
          { text: "Premium quality herbal ingredients" },
          { text: "Sustainable sourcing practices" },
          { text: "International testing standards" },
          { text: "Customer-focused solutions" },
          { text: "Reliable documentation & traceability" },
        ],
      },
      {
        type: "p",
        text: "Our goal is to provide high-quality herbal extracts that meet the evolving needs of global industries.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Herbal extracts are transforming the future of health and wellness by combining the purity of nature with the precision of modern science. As industries continue to embrace natural and plant-based ingredients, herbal extracts remain at the forefront of innovation and global demand.",
      },
      {
        type: "p",
        text: "With a strong commitment to quality, consistency, and customer satisfaction, Aksharam Nutra Foods Pvt. Ltd. continues to deliver trusted herbal extract solutions to clients worldwide.",
      },
      { type: "p", text: "Nature Inspired • Quality Driven • Globally Trusted" },
    ],
  },
  {
    slug: "the-power-of-herbal-extracts",
    title: "The Power of Herbal Extracts: Nature’s Science for Modern Wellness",
    date: "May 15, 2026",
    author: "Admin",
    image: "/products/Spray Dried Fruit Powder/amla.png",
    description:
      "Discover how herbal extracts bridge the gap between traditional knowledge and modern science for wellness.",
    keywords: "herbal extracts, wellness, natural health, Aksharam Nutra Foods",
    body: [
      {
        type: "p",
        text: "In today's fast-paced world, the demand for natural, safe, and effective health solutions is growing rapidly. Herbal extracts have emerged as a powerful bridge between traditional knowledge and modern science, offering concentrated benefits of plants in a highly effective form.",
      },
      { type: "h3", text: "What Are Herbal Extracts?" },
      {
        type: "p",
        text: "Herbal extracts are concentrated forms of active compounds derived from plants such as roots, leaves, seeds, flowers, and bark. Through advanced extraction processes, these bioactive components are carefully isolated to ensure maximum potency and purity.",
      },
      {
        type: "p",
        text: "Unlike raw herbs, extracts provide standardized strength, better absorption, and consistent quality, making them ideal for nutraceutical, pharmaceutical, cosmetic, and food applications.",
      },
      { type: "h3", text: "Why Choose Herbal Extracts?" },
      {
        type: "ul",
        items: [
          {
            title: "High Potency & Effectiveness",
            text: "Herbal extracts contain concentrated active ingredients, delivering stronger and more targeted health benefits compared to whole herbs.",
          },
          {
            title: "Standardization & Consistency",
            text: "Modern extraction techniques ensure uniformity in every batch, maintaining precise levels of active compounds.",
          },
          {
            title: "Better Bioavailability",
            text: "Extracts are easier for the body to absorb, enhancing their effectiveness.",
          },
          {
            title: "Versatile Applications",
            text: "They are widely used across industries including Nutraceuticals, Pharmaceuticals, Cosmetics, and Functional Foods.",
          },
        ],
      },
      { type: "h3", text: "Advanced Extraction Methods" },
      {
        type: "p",
        text: "At Aksharam Nutra Foods Pvt. Ltd., we emphasize quality and innovation through advanced extraction techniques:",
      },
      {
        type: "ul",
        items: [
          { title: "Solvent Extraction", text: "Ideal for isolating specific phytochemicals." },
          { title: "CO₂ Supercritical Extraction", text: "Ensures high purity without solvent residue." },
          { title: "Water Extraction", text: "Traditional and safe method for sensitive compounds." },
        ],
      },
      {
        type: "p",
        text: "Each method is carefully selected based on the herb's nature to preserve its therapeutic properties.",
      },
      { type: "h3", text: "Popular Herbal Extracts & Their Benefits" },
      {
        type: "ul",
        items: [
          { title: "Ashwagandha Extract", text: "Supports stress management and energy levels." },
          { title: "Turmeric Extract (Curcumin)", text: "Known for powerful anti-inflammatory properties." },
          { title: "Green Tea Extract", text: "Rich in antioxidants for overall wellness." },
          { title: "Ginseng Extract", text: "Enhances stamina and cognitive function." },
          { title: "Boswellia Extract", text: "Supports joint health and mobility." },
        ],
      },
      { type: "h3", text: "Quality You Can Trust" },
      {
        type: "p",
        text: "Quality is the cornerstone of effective herbal extracts. At Aksharam Nutra Foods Pvt. Ltd., we ensure:",
      },
      {
        type: "ul",
        items: [
          { text: "Strict quality control procedures" },
          { text: "Advanced testing methods like HPLC, UV, and GC" },
          { text: "Compliance with international standards" },
          { text: "Sustainable and ethical sourcing" },
        ],
      },
      { type: "h3", text: "The Future of Herbal Extracts" },
      {
        type: "p",
        text: "With increasing awareness about natural health solutions, herbal extracts are becoming a key component in global wellness trends. From immunity boosters to beauty formulations, their applications are continuously expanding.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Herbal extracts are not just products—they are a fusion of nature and science. By delivering purity, potency, and performance, they are transforming the way industries approach health and wellness.",
      },
      {
        type: "p",
        text: "At Aksharam Nutra Foods Pvt. Ltd., we are committed to providing premium-quality herbal extracts that meet global standards and customer expectations.",
      },
    ],
  },
  {
    slug: "the-power-of-spray-dried-ingredients",
    title: "The Power of Spray-Dried Ingredients: Transforming Food Production",
    date: "Sep 28, 2024",
    author: "Admin",
    image: "/abt-2.jpg",
    description: "",
    body: [
      {
        type: "p",
        text: "In the ever-evolving world of food manufacturing, spray-dried ingredients have become a game-changer for businesses looking to enhance product quality, taste, and shelf life. At Aksharam Nutra Foods Pvt Ltd, we specialize in providing premium spray-dried fruits, vegetables, and fat powders that deliver exceptional benefits across industries. But what makes spray-drying so impactful?",
      },
      { type: "h3", text: "What is Spray Drying?" },
      {
        type: "p",
        text: "Spray-drying is a sophisticated industrial process that transforms liquid substances into a stable, dry powder. It involves atomizing a liquid feed into a spray of droplets, which are then contacted with hot air in a drying chamber. The moisture evaporates almost instantaneously, leaving behind fine, uniform particles that preserve the essence of the original material.",
      },
      { type: "h3", text: "The Unmatched Benefits of Spray-Dried Powders" },
      {
        type: "ul",
        items: [
          {
            title: "Superior Nutrient Retention",
            text: "Because the drying process happens in a matter of seconds, the thermal exposure is minimal. This ensures that heat-sensitive vitamins, minerals, and antioxidants remain intact.",
          },
          {
            title: "Enhanced Flavor and Color",
            text: "Spray drying encapsulates the natural flavor profiles and vibrant colors of fruits and vegetables, ensuring that the end product looks and tastes as fresh as the raw material.",
          },
          {
            title: "Extended Shelf Life",
            text: "By removing moisture, we naturally inhibit the growth of bacteria and mold, allowing our products to be stored for long periods without the need for artificial preservatives.",
          },
          {
            title: "Instant Solubility",
            text: "Our powders are designed for ease of use, dissolving quickly and uniformly in liquid applications, which is essential for beverages, soups, and sauces.",
          },
        ],
      },
      { type: "h3", text: "Versatile Applications" },
      {
        type: "p",
        text: "From the pharmaceutical industry to the culinary arts, spray-dried ingredients are everywhere. They are used to create:",
      },
      {
        type: "ul",
        items: [
          { title: "Nutraceuticals", text: "Concentrated fruit and vegetable powders for supplements." },
          { title: "Bakery & Confectionery", text: "Natural flavoring and coloring for cakes, chocolates, and fillings." },
          { title: "Instant Foods", text: "The foundation for ready-to-eat soups, beverages, and seasonings." },
          { title: "Cosmetics", text: "Natural extracts for skin-care and wellness products." },
        ],
      },
      {
        type: "p",
        text: "At Aksharam Nutra Foods, we take pride in using state-of-the-art spray-drying technology to produce natural, chemical-free ingredients that meet the highest standards of purity and safety. By bridging the gap between nature and technology, we help our partners create products that are both delicious and nutritious.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
