import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";
import ImageReveal from "@/components/ImageReveal";

const ARTIST_EMAIL = "gracegooneratne@berkeley.edu";

const About = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(ARTIST_EMAIL);
    toast.success("Email copied to clipboard!", {
      description: ARTIST_EMAIL,
    });
  };

  return (
    <>
      <Helmet>
        <title>About — Grace</title>
        <meta
          name="description"
          content="Learn about Grace, a Paris-based visual artist whose work explores color, light and the beauty of everyday moments through oil painting."
        />
      </Helmet>

      <Layout>
        <div className="page-transition px-6 py-10 lg:px-10 lg:py-12">
          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            {/* Portrait */}
            <div 
              className="overflow-hidden rounded-2xl bg-card"
              style={{
                opacity: 0,
                animation: "staggerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "0ms"
              }}
            >
              <ImageReveal
                src="/grace.jpg"
                alt="Grace in her studio"
                className="h-full w-full object-cover"
                style={{ minHeight: "500px", maxHeight: "700px" }}
              />
            </div>

            {/* Bio Content */}
            <div 
              className="flex flex-col justify-start"
              style={{
                opacity: 0,
                animation: "staggerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: "150ms"
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <h1 className="font-display text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  Hello, I'm Grace
                </h1>
                <p className="mt-1 text-base text-muted-foreground">
                  Visual Artist
                </p>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-border" />

              {/* Bio Text */}
              <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
                <p>
                  I was born in SoCal and am now based in New York city.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
