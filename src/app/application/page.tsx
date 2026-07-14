import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";
import type { ProductItem } from "@/data/products";

export const metadata: Metadata = {
  title: "Application",
  description: "",
};

const fruitPowders: ProductItem[] = [
  {
    image: "/products/Application/application_Baby-Foods.png",
    title: "Baby Foods",
  },
  {
    image: "/products/Application/application_Desserts.png",
    title: "Desserts",
  },
  {
    image: "/products/Application/application_Instant-Beverage-Premix.png",
    title: "Instant Beverage Premix",
  },
  {
    image: "/products/Application/application_Instant-food.png",
    title: "Instant Food",
  },
  {
    image: "/products/Application/application_Milk-SHakes.png",
    title: "Milk Shakes",
  },
  {
    image: "/products/Application/application_Nutracuticals.png",
    title: "Nutracuticals",
  },
];

const vegetablePowders: ProductItem[] = [
  {
    image: "/products/Application/application_Instant-Soups.png",
    title: "Instant Soups",
  },
  {
    image: "/products/Application/application_baby-food.png",
    title: "Baby Foods",
  },
  {
    image: "/products/Application/application_Seasonings.png",
    title: "Seasonings",
  },
  { image: "/products/Application/application_Snacks.jpg", title: "Snacks" },
  {
    image: "/products/Application/application_Curries.png",
    title: "Curries and Gravies",
  },
];

const dairyPowders: ProductItem[] = [
  {
    image: "/products/Application/application_Cheese-Seasoning.png",
    title: "Cheese Seasonings",
  },
  {
    image: "/products/Application/application_Instant-Snacks.png",
    title: "Instant Snacks",
  },
  { image: "/products/Application/application_Sauces.png", title: "Sauces" },
  { image: "/products/Application/application_Dips.png", title: "Dips" },
  {
    image: "/products/Application/application_Biscuits.png",
    title: "Biscuits",
  },
];

const hvpPowders: ProductItem[] = [
  {
    image: "/products/Application/application_Brands_10082017155242.png",
    title: "Snacks",
  },
  {
    image: "/products/Application/application_Kurkure-2.png",
    title: "Kurkure",
  },
  {
    image: "/products/Application/application_Soup-Premix.png",
    title: "Soup Premix",
  },
  {
    image: "/products/Application/application_Taste-Maker.png",
    title: "Taste Maker",
  },
  {
    image: "/products/Application/application_Seasoning.png",
    title: "Seasonings",
  },
  {
    image: "/products/Application/application_Noodle-Masala.png",
    title: "Noodle Masala",
  },
];

const naturalColor: ProductItem[] = [
  {
    image: "/products/Application/application_Confectionery.png",
    title: "Confectionery",
  },
  {
    image: "/products/Application/application_Soya-Sauce.png",
    title: "Soya Sauce",
  },
  {
    image: "/products/Application/application_Soft-Drinks.png",
    title: "Soft Drinks",
  },
  {
    image: "/products/Application/application_Cake-Premix.png",
    title: "Cake Premix",
  },
  {
    image: "/products/Application/application_Biscuits-2.png",
    title: "Cookies",
  },
  {
    image: "/products/Application/application_Biscuitt.png",
    title: "Biscuits",
  },
];

export default function ApplicationPage() {
  return (
    <>
      <HeroBanner title="Application" />

      <ProductGrid
        title="Fruit Powders"
        products={fruitPowders}
        variant="application"
      />
      <ProductGrid
        title="Vegetable Powders"
        products={vegetablePowders}
        variant="application"
      />
      <ProductGrid
        title="Dairy Powders"
        products={dairyPowders}
        variant="application"
      />
      <ProductGrid
        title="HVP Powders"
        products={hvpPowders}
        variant="application"
      />
      <ProductGrid
        title="Natural Color"
        products={naturalColor}
        variant="application"
      />

      <ExtraContentBlock />
    </>
  );
}
