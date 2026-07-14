export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// Drives the "Our Products" dropdown in the header — matches inc/header.php exactly,
// including that Red Chilli Powder and Seasoning Masala are intentionally not linked here.
export const productNavLinks: NavLink[] = [
  {
    label: "Spray Dried",
    href: "/spray-dried",
    children: [
      { label: "Spray Dried Fruits Powder", href: "/spray-dried-fruit-powder" },
      { label: "Spray Dried Vegetables Powder", href: "/spray-dried-vegetable-powder" },
      { label: "Spray Dried Fat Powder", href: "/spray-dried-fat-powder" },
      { label: "Spray Dried Dairy Powder", href: "/spray-dried-dairy-powder" },
      { label: "Other Spray Dried Powder", href: "/other-spray-dried-powder" },
    ],
  },
  { label: "Dehydrated", href: "/dehydrated-products" },
  { label: "Freeze Dried", href: "/freeze-dried" },
  { label: "Smoothies", href: "/smoothies" },
  { label: "Indian Herbal Extract", href: "/indian-herbal-extract" },
];

export interface ProductItem {
  image: string;
  title: string;
}

export const sprayDriedCategoryLinks = [
  { href: "/spray-dried-fruit-powder", image: "/products/Spray Dried Fruit Powder/guava.jpeg.jpg", title: "Spray Dried Fruit Powder" },
  { href: "/spray-dried-vegetable-powder", image: "/products/Spray Dried Vegetable Powder/ginger.jpg", title: "Spray Dried Vegetable Powder" },
  { href: "/spray-dried-fat-powder", image: "/products/Spray Dried Fat Powder/fat-powder.png", title: "Spray Dried Fat Powder" },
  { href: "/spray-dried-dairy-powder", image: "/products/Spray Dried Dairy Powder/curd.jpg", title: "Spray Dried Dairy Powder" },
  { href: "/other-spray-dried-powder", image: "/products/Other Spray Dried Products/honey-1.jpg", title: "Other Spray Dried Products" },
];

export const sprayDriedFruitPowderProducts: ProductItem[] = [
  { image: "/products/Spray Dried Fruit Powder/guava.jpeg.jpg", title: "Spray Dried Guava Powder" },
  { image: "/products/Spray Dried Fruit Powder/Apple-1.jpg", title: "Spray Dried Apple Powder" },
  { image: "/products/Spray Dried Fruit Powder/Banana.jpg", title: "Spray Dried Banana Powder" },
  { image: "/products/Spray Dried Fruit Powder/Blueberry.jpg", title: "Spray Dried Blueberry Powder" },
  { image: "/products/Spray Dried Fruit Powder/cranberries-101-1296x728-feature.jpg", title: "Spray Dried Cranberries Powder" },
  { image: "/products/Spray Dried Fruit Powder/Jamun.jpg", title: "Spray Dried Jamun Powder" },
  { image: "/products/Spray Dried Fruit Powder/Mango.jpg", title: "Spray Dried Mango Powder" },
  { image: "/products/Spray Dried Fruit Powder/Orange.jpg", title: "Spray Dried Orange Powder" },
  { image: "/products/Spray Dried Fruit Powder/papaya.jpeg.jpg", title: "Spray Dried Papaya Powder" },
  { image: "/products/Spray Dried Fruit Powder/pomegranate.jpg", title: "Spray Dried Pomegranate Powder" },
  { image: "/products/Spray Dried Fruit Powder/strawberry.jpg", title: "Spray Dried Strawberry Powder" },
];

export const sprayDriedVegetablePowderProducts: ProductItem[] = [
  { image: "/products/Spray Dried Vegetable Powder/ginger.jpg", title: "Spray Dried Ginger Powder" },
  { image: "/products/Spray Dried Vegetable Powder/tomato.jpg", title: "Spray Dried Tomato Powder" },
  { image: "/products/Spray Dried Vegetable Powder/spinach.jpg", title: "Spray Dried Spinach Powder" },
  { image: "/products/Spray Dried Vegetable Powder/Beetroot.jpg", title: "Spray Dried Beetroot Powder" },
  { image: "/products/Spray Dried Vegetable Powder/tamarind.jpg", title: "Spray Dried Tamarind Powder" },
  { image: "/products/Spray Dried Vegetable Powder/green-chilli-powder-1588169356-5399902.jpg", title: "Spray Dried Green Chilli Powder" },
];

export const sprayDriedFatPowderProducts: ProductItem[] = [
  { image: "/products/Spray Dried Fat Powder/fat-powder.png", title: "Spray Dried Pal Fat Powder" },
  { image: "/products/Spray Dried Fat Powder/fat-powder.png", title: "Spray Dried MCT Fat Powder" },
];

export const sprayDriedDairyPowderProducts: ProductItem[] = [
  { image: "/products/Spray Dried Dairy Powder/curd.jpg", title: "Spray Dried Curd Powder" },
  { image: "/products/Spray Dried Dairy Powder/chesse.jpg", title: "Spray Dried Cheese Powder" },
  { image: "/products/Spray Dried Dairy Powder/cream-1.jpg", title: "Spray Dried Cream Powder" },
];

export const otherSprayDriedProducts: ProductItem[] = [
  { image: "/products/Other Spray Dried Products/honey-1.jpg", title: "Spray Dried Honey Powder" },
  { image: "/products/Other Spray Dried Products/HVP-Soya-1.jpg", title: "Spray Dried Soya HVP Powder" },
  { image: "/products/Other Spray Dried Products/HVP-Groung-Nut.jpg", title: "Spray Dried HVP Ground Nut" },
  { image: "/products/Other Spray Dried Products/spray-dried-chicory-powder.jpg", title: "Spray Dried Chicory Powder" },
  { image: "/products/Other Spray Dried Products/spray-dried-amla-powder-321.jpg", title: "Spray Dried Amla Powder" },
];

// Product grid shown on dehydrated-products-dealer-in-[city] pages
export const dehydratedDealerProducts: ProductItem[] = [
  { image: "/products/dehydrated/amchur.jpg", title: "Dry mango (Amchur) Powder" },
  { image: "/products/dehydrated/potato.jpg", title: "Potato Flakes & Powder" },
  { image: "/products/dehydrated/ginger-powder.jpg", title: "Ginger Powder" },
  { image: "/products/dehydrated/dehydrated-garlic-flakes-500x500.webp", title: "Garlic Flakes & Powder" },
  { image: "/products/dehydrated/onion-powder-500x500.webp", title: "Onion Flakes & Powder" },
  { image: "/products/dehydrated/dehydrated-green-chilli-flakes-500x500.webp", title: "Green Chilly Flakes & Powder" },
  { image: "/products/dehydrated/dried-beet-root-powder.png", title: "Beet root Powder" },
  { image: "/products/dehydrated/dehydrated-tamarind-powder-.jpg", title: "Tamarind Powder" },
  { image: "/products/dehydrated/Spinach-Leaves-1000x1000-1.png", title: "Spinach Powder" },
];

// Product grid shown on seasoning-masala(-dealer-in-[city]) pages
export const seasoningMasalaProducts: ProductItem[] = [
  { image: "/products/seasoning-masala/pasta masala.png", title: "Pasta Masala" },
  { image: "/products/seasoning-masala/chatpata-masala.webp", title: "Chatpata Masala" },
  { image: "/products/seasoning-masala/coriander-powder.jpg", title: "Coriander Powder" },
  { image: "/products/seasoning-masala/maggie-masala.jpg", title: "Magic Masala" },
  { image: "/products/seasoning-masala/turmeric powder.jpg", title: "Turmeric Powder" },
  { image: "/products/seasoning-masala/red-chilli-flake-500x500.webp", title: "Chilli Flakes" },
  { image: "/products/seasoning-masala/red-chilli-powder.png", title: "Red Chilli Powder" },
  { image: "/products/seasoning-masala/schezwan-masala.webp", title: "Schezwan Masala" },
  { image: "/products/seasoning-masala/spanish-tomato-masala-500x500.webp", title: "Spanish Tomato Masala" },
];

// Product grid shown on red-chilli-powder(-dealer-in-[city]) pages
export const redChilliProducts: ProductItem[] = [
  { image: "/products/red chilli/red-chilli-powder.png", title: "Red Chilli Powder" },
];
