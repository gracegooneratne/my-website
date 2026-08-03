import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ArtworkCard from "@/components/ArtworkCard";
import { getArtworksByCategory, categoryMeta, type Category } from "@/data/artworks";

interface WorkProps {
  category?: Category;
}

const descriptions: Record<Category, string> = {
  "fine-art": "Explore the fine art paintings of Grace, a visual artist working in oil and classical techniques.",
  "ui-ux": "Selected UI/UX design work by Grace — product design, design systems and user research.",
  clothing: "Handmade clothing and textile pieces by Grace, made from natural and reclaimed materials.",
};

const Work = ({ category = "fine-art" }: WorkProps) => {
  const items = getArtworksByCategory(category);

  return (
    <>
      <Helmet>
        <title>{categoryMeta[category].label} — Grace</title>
        <meta name="description" content={descriptions[category]} />
      </Helmet>

      <Layout>
        <div className="page-transition px-6 py-10 lg:px-10 lg:py-12">
          <h1 className="sr-only">{categoryMeta[category].label}</h1>
          {/* Masonry columns — images keep their natural proportions */}
          <div className="columns-1 gap-5 sm:columns-2 lg:gap-6 [&>a]:break-inside-avoid">
            {items.map((artwork, index) => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                index={index}
              />
            ))}
          </div>

        </div>
      </Layout>
    </>
  );
};

export default Work;
