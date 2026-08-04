import fineArt1 from "@/assets/art/fine-art-1.jpg";
import fineArt2 from "@/assets/art/fine-art-2.jpg";
import fineArt3 from "@/assets/art/fine-art-3.jpg";
import fineArt4 from "@/assets/art/fine-art-4.jpg";
import fineArt5 from "@/assets/art/fine-art-5.jpg";
import fineArt6 from "@/assets/art/fine-art-6.jpg";
import fineArt7 from "@/assets/art/fine-art-7.jpg";
import design1 from "@/assets/art/design-1.webp";
import design2 from "@/assets/art/design-2.webp";


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
    image: fineArt1,
    category: "fine-art",
  },
  {
    id: "2",
    title: "Fine art work 2",
    slug: "fine-art-2",
    medium: "Pen on Paper",
    dimensions: "14 in x 17 in",
    year: 2022,
    description: "",
    image: fineArt2,
    category: "fine-art",
  },
  {
    id: "3",
    title: "Fine art work 3",
    slug: "fine-art-3",
    medium: "Oil and Acrylic on Canvas",
    dimensions: "14 in x 17 in",
    year: 2023,
    description: "",
    image: fineArt3,
    category: "fine-art",
  },
  {
    id: "4",
    title: "Fine art work 4",
    slug: "fine-art-4",
    medium: "Clay",
    dimensions: "4 in x 2 in",
    year: 2022,
    description: "",
    image: fineArt4,
    category: "fine-art",
  },
  {
    id: "5",
    title: "Fine art work 5",
    slug: "fine-art-5",
    medium: "Charcoal on Paper",
    dimensions: "14 in x 17 in",
    year: 2024,
    description: "",
    image: fineArt5,
    category: "fine-art",
  },
  {
    id: "6",
    title: "Fine art work 6",
    slug: "fine-art-6",
    medium: "Watercolor and Acrylic",
    dimensions: "8 in x 12 in",
    year: 2023,
    description: "",
    image: fineArt6,
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
    image: fineArt7,
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
    image: design1,
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
    image: design2,
    category: "ui-ux",
  },
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.slug === slug);
};

export const getArtworksByCategory = (category: Category): Artwork[] =>
  artworks.filter((artwork) => artwork.category === category);
