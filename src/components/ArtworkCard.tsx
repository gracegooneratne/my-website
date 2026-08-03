import { Link } from "react-router-dom";
import { Artwork } from "@/data/artworks";
import ImageReveal from "./ImageReveal";

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

const ArtworkCard = ({ artwork, index }: ArtworkCardProps) => {
  return (
    <Link
      to={`/work/${artwork.slug}`}
      className="artwork-card group relative mb-5 block overflow-hidden rounded-2xl bg-card lg:mb-6"
      style={{
        opacity: 0,
        animation: `staggerFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <ImageReveal
        src={artwork.image}
        alt={artwork.title}
        className="h-auto w-full object-contain"
      />
    </Link>

  );
};

export default ArtworkCard;
