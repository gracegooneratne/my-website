import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import ImageReveal from "@/components/ImageReveal";
import { getArtworkBySlug, artworks, categoryMeta } from "@/data/artworks";

const ARTIST_EMAIL = "gracegooneratne@berkeley.edu";

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const artwork = getArtworkBySlug(slug || "");

  if (!artwork) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
          <h1 className="font-display text-3xl text-foreground">Artwork not found</h1>
          <Link
            to="/"
            className="mt-6 text-sm text-muted-foreground link-underline hover:text-foreground"
          >
            Return to gallery
          </Link>
        </div>
      </Layout>
    );
  }

  const siblings = artworks.filter((a) => a.category === artwork.category);
  const currentIndex = siblings.findIndex((a) => a.slug === slug);
  const prevArtwork = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextArtwork = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  const copyEmail = () => {
    const subject = encodeURIComponent(`Inquiry: ${artwork.title}`);
    navigator.clipboard.writeText(`${ARTIST_EMAIL}?subject=${decodeURIComponent(subject)}`);
    toast.success("Email copied to clipboard!", {
      description: ARTIST_EMAIL,
    });
  };

  return (
    <>
      <Helmet>
        <title>{categoryMeta[artwork.category].label} — Grace</title>
        <meta
          name="description"
          content={`${artwork.medium}, ${artwork.dimensions}, ${artwork.year} — work by Grace.`}
        />
      </Helmet>

      <Layout>
        <div className="page-transition flex flex-col px-6 py-10 lg:px-10 lg:py-12">
          {/* Hero Image */}
          <div 
            className="relative h-[60vh] w-full overflow-hidden rounded-2xl lg:h-[80vh]"
            style={{ 
              opacity: 0,
              animation: "staggerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "0ms"
            }}
          >
            <ImageReveal
              src={artwork.image}
              alt={`${artwork.medium}, ${artwork.dimensions}, ${artwork.year}`}
              className="h-full w-full object-contain"
            />
          </div>



          {/* Content Section */}
          <div className="py-6 lg:py-16">
            <div
              className="flex flex-col items-start gap-8"
              style={{
                opacity: 0,
                animation: "staggerFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "200ms",
              }}
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{artwork.medium}</p>
                {artwork.dimensions && (
                  <p className="text-sm text-muted-foreground">{artwork.dimensions}</p>
                )}

                <p className="text-sm text-muted-foreground">{artwork.year}</p>
              </div>

              {/* Inquiry Button */}
              <button
                onClick={copyEmail}
                className="btn-pill w-fit bg-foreground text-background"
              >
                Inquire about this work
              </button>
            </div>


            {/* Navigation */}
            <div 
              className="mt-16 flex items-center justify-between border-t border-border pt-8"
              style={{
                opacity: 0,
                animation: "staggerFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "400ms"
              }}
            >
              {prevArtwork ? (
                <button
                  onClick={() => navigate(`/work/${prevArtwork.slug}`)}
                  className="btn-pill-outline flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {nextArtwork ? (
                <button
                  onClick={() => navigate(`/work/${nextArtwork.slug}`)}
                  className="btn-pill-outline flex items-center gap-2"
                >
                  <span>Next</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <div />
              )}

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArtworkDetail;
