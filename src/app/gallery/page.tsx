import type { Metadata } from "next";
import { gallery } from "@/content/data";
import { PageHero } from "@/components/PageHero";
import { Accent } from "@/components/ui";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments captured at IHRS events, campaigns and recruitment drives.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Moments that <Accent>matter</Accent>
          </>
        }
        intro="Witness the powerful moments captured at our events, showcasing the people and impact behind IHRS."
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </>
  );
}
