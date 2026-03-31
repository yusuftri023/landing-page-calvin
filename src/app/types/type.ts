interface Product {
  title: string;
  description: string;
  image: string;
  category: "Cat Health" | "Dog Health" | "Other Product";
  label: "Best Seller" | "Recommended" | undefined;
  price: number;
  sku: string;
  quantity: number;
  rating: number;
  url: string;
}

interface Article {
  title: string;
  content: string;
  category: "Insight" | "Discovery" | "Other";
  created_at: Date;
  thumbnail_url: string;
  image_url: string;
}

type language = "id" | "en";
