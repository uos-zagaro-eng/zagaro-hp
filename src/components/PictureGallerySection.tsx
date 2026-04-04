import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CONTENT } from "../constants/content";
import SectionHeader from "./ui/SectionHeader";
import SoftCard from "./ui/SoftCard";

const galleryItems = [
  {
    id: "gallery-1",
    src: "./g_1.jpg",
    alt: "LT会でプレゼンテーションを行っている様子",
    caption: "LT会",
  },
  {
    id: "gallery-2",
    src: "./g_2.jpg",
    alt: "投影された課題に取り組む勉強会の様子",
    caption: "勉強会",
  },
  {
    id: "gallery-3",
    src: "./g_3.png",
    alt: "LT会でプレゼンテーションを行っている様子",
    caption: "LT会",
  },
];

const PictureGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItem = galleryItems[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="bg-transparent py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader
          label={CONTENT.GALLERY.LABEL}
          title={CONTENT.GALLERY.TITLE}
          description={CONTENT.GALLERY.DESCRIPTION}
          introClassName="max-w-3xl"
        />

        <SoftCard padded={false} className="relative overflow-hidden">
          <figure className="relative">
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="h-[min(56vh,440px)] w-full object-cover md:h-[min(58vh,500px)]"
            />
            <figcaption className="absolute bottom-5 left-4 right-4 rounded-2xl border-2 border-line bg-card/98 px-5 py-3 text-center text-base font-bold text-ink shadow-sticker backdrop-blur-sm md:left-5 md:right-auto md:inline-block md:text-left">
              {activeItem.caption}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-[42%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-line bg-card text-ink shadow-soft transition-interactive hover:scale-105 hover:shadow-soft-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:left-5 md:h-12 md:w-12"
            aria-label="前の画像へ"
          >
            <ChevronLeft size={24} aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-[42%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-line bg-card text-ink shadow-soft transition-interactive hover:scale-105 hover:shadow-soft-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:right-5 md:h-12 md:w-12"
            aria-label="次の画像へ"
          >
            <ChevronRight size={24} aria-hidden />
          </button>

          <div className="flex items-center justify-center gap-3 border-t-2 border-line-faint bg-subtle/80 px-4 py-5">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`${index + 1}枚目へ移動`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-3 rounded-full transition-interactive ${
                  index === currentIndex
                    ? "w-10 bg-brand"
                    : "w-3 bg-line hover:bg-ink-muted"
                }`}
              />
            ))}
          </div>
        </SoftCard>
      </div>
    </section>
  );
};

export default PictureGallerySection;
