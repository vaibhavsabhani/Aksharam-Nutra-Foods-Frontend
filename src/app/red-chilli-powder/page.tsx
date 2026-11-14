import type { Metadata } from "next";
import { ProductShowcaseTemplate } from "@/components/templates/ProductShowcaseTemplate";
import { redChilliProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Red Chilli Powder",
};

export default function RedChilliPowderPage() {
  return (
    <ProductShowcaseTemplate
      bannerTitle="Red Chilli Powder"
      introTitle="Red Chilli Powder"
      introParagraphs={[
        "Get Best Quotation of Masala's of Your industry shops and reselling. we have Dealing of these ingredient since from last 5 years. Choose us to grow your business.",
        "Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products. Based in Surendranagar, Gujarat, our company is dedicated to providing premium-quality ingredients for various industries. Explore our range of innovative and natural products that are perfect for enhancing the taste and nutritional value of your creations. Welcome to Aksharam Nutra Foods Pvt Ltd, where quality meets innovation in every spray-dried offering.",
      ]}
      introImage="/products/red chilli/red-chilli.jpg"
      products={redChilliProducts}
    />
  );
}
