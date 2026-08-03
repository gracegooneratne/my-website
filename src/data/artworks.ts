import fineArt1 from "@/assets/fine-art-1.jpg.asset.json";
import fineArt2 from "@/assets/fine-art-2.jpg.asset.json";
import fineArt3 from "@/assets/fine-art-3.jpg.asset.json";
import fineArt4 from "@/assets/fine-art-4.jpg.asset.json";
import fineArt5 from "@/assets/fine-art-5.jpg.asset.json";
import fineArt6 from "@/assets/fine-art-6.jpg.asset.json";
import fineArt7 from "@/assets/fine-art-7.jpg.asset.json";
import design1 from "@/assets/design-1.png.asset.json";
import design2 from "@/assets/design-2.png.asset.json";
import clothing1 from "@/assets/clothing-1.jpg.asset.json";
import clothing2 from "@/assets/clothing-2.jpg.asset.json";


export type Category = "fine-art" | "ui-ux" | "clothing";

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  medium: string;
  dimensions: string;
  year: number;
  description: string;
  image: string;
  category: Category;
}

export const categoryMeta: Record<Category, { label: string; path: string }> = {
  "fine-art": { label: "Fine Art", path: "/" },
  "ui-ux": { label: "UI/UX Design", path: "/ui-ux" },
  clothing: { label: "Clothing", path: "/clothing" },
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Fine art work 1",
    slug: "fine-art-1",
    medium: "Oil and Acrylic on Canvas",
    dimensions: "20 in x 30 in",
    year: 2025,
    description: "",
    image: fineArt1.url,
    category: "fine-art",
  },
  {
    id: "2",
    title: "Fine art work 2",
    slug: "fine-art-2",
    medium: "Oil and Acrylic on Canvas",
    dimensions: "20 in x 30 in",
    year: 2022,
    description: "",
    image: fineArt2.url,
    category: "fine-art",
  },
  {
    id: "3",
    title: "Fine art work 3",
    slug: "fine-art-3",
    medium: "Charcoal on Paper",
    dimensions: "14 in x 17 in",
    year: 2023,
    description: "",
    image: fineArt3.url,
    category: "fine-art",
  },
  {
    id: "4",
    title: "Fine art work 4",
    slug: "fine-art-4",
    medium: "Watercolor and Acrylic on Canvas",
    dimensions: "12 in x 8 in",
    year: 2022,
    description: "",
    image: fineArt4.url,
    category: "fine-art",
  },
  {
    id: "5",
    title: "Fine art work 5",
    slug: "fine-art-5",
    medium: "Pen on Paper",
    dimensions: "14 in x 17 in",
    year: 2024,
    description: "",
    image: fineArt5.url,
    category: "fine-art",
  },
  {
    id: "6",
    title: "Fine art work 6",
    slug: "fine-art-6",
    medium: "Clay",
    dimensions: "4 in x 2 in",
    year: 2023,
    description: "",
    image: fineArt6.url,
    category: "fine-art",
  },
  {
    id: "13",
    title: "Fine art work 7",
    slug: "fine-art-7",
    medium: "Clay and Acrylic Paint",
    dimensions: "6 in x 6 in",
    year: 2025,
    description: "",
    image: fineArt7.url,
    category: "fine-art",
  },

  {
    id: "7",
    title: "Design work 1",
    slug: "design-1",
    medium: "Figma",
    dimensions: "",
    year: 2026,
    description: "",
    image: design1.url,
    category: "ui-ux",
  },
  {
    id: "8",
    title: "Design work 2",
    slug: "design-2",
    medium: "Figma",
    dimensions: "",
    year: 2026,
    description: "",
    image: design2.url,
    category: "ui-ux",
  },

  {
    id: "10",
    title: "Clothing work 1",
    slug: "clothing-1",
    medium: "Fabric Markers on Cotton Tee",
    dimensions: "",
    year: 2026,
    description: "",
    image: clothing1.url,
    category: "clothing",
  },
  {
    id: "11",
    title: "Clothing work 2",
    slug: "clothing-2",
    medium: "Linen, Custom designed Pattern, Custom Sewn",
    dimensions: "",
    year: 2026,
    description: "",
    image: clothing2.url,
    category: "clothing",
  },
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.slug === slug);
};

export const getArtworksByCategory = (category: Category): Artwork[] =>
  artworks.filter((artwork) => artwork.category === category);
