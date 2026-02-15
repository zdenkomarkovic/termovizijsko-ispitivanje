"use client";

import { useState, useEffect, useMemo } from "react";

type MediaType = "image" | "video";

interface MediaItem {
  type: MediaType;
  file: string;
  folder: string;
  categoryId: string;
}

const CATEGORIES = [
  {
    id: "curenja",
    title: "Curenja",
    folder: "Curenja",
    items: [
      { type: "image" as const, file: "IMG_2177.webp" },
      { type: "image" as const, file: "IMG_3275.webp" },
      { type: "image" as const, file: "IMG_3279.webp" },
      { type: "video" as const, file: "IMG_3597.mp4" },
      { type: "video" as const, file: "IMG_3900.mp4" },
      { type: "image" as const, file: "IMG_3931.webp" },
      { type: "image" as const, file: "IMG_3934.webp" },
      { type: "image" as const, file: "IMG_5091.webp" },
      { type: "video" as const, file: "IMG_5093.mp4" },
      { type: "image" as const, file: "IMG_5095.webp" },
    ],
  },
  {
    id: "toplota",
    title: "Gubici toplote",
    folder: "Detekciju gubitaka toplote na kućama i zgradama",
    items: [
      { type: "video" as const, file: "IMG_2148.mp4" },
      { type: "image" as const, file: "IMG_2162.webp" },
      { type: "image" as const, file: "IMG_2172.webp" },
      { type: "image" as const, file: "IMG_2181.webp" },
      { type: "video" as const, file: "IMG_2191.mp4" },
      { type: "video" as const, file: "IMG_2192.mp4" },
      { type: "video" as const, file: "IMG_2193.mp4" },
      { type: "image" as const, file: "IMG_2194.webp" },
      { type: "video" as const, file: "IMG_2212.mp4" },
      { type: "video" as const, file: "IMG_3764.mp4" },
      { type: "video" as const, file: "IMG_4118.mp4" },
      { type: "video" as const, file: "IMG_4206.mp4" },
      { type: "image" as const, file: "IMG_4208.webp" },
    ],
  },
  {
    id: "vlaga",
    title: "Vlaga i buđ",
    folder: "Otkrivanje vlage, kondenzacije i buđi",
    items: [
      { type: "video" as const, file: "IBVF8334.mp4" },
      { type: "video" as const, file: "IMG_2302.mp4" },
      { type: "image" as const, file: "IMG_2643.webp" },
      { type: "video" as const, file: "IMG_2657.mp4" },
      { type: "video" as const, file: "IMG_2665.mp4" },
      { type: "video" as const, file: "IMG_3308.mp4" },
      { type: "image" as const, file: "IMG_3312.webp" },
      { type: "image" as const, file: "IMG_3314.webp" },
      { type: "video" as const, file: "IMG_3594.mp4" },
      { type: "video" as const, file: "IMG_4329.mp4" },
      { type: "image" as const, file: "IMG_5115.webp" },
      { type: "image" as const, file: "IMG_5117.webp" },
    ],
  },
  {
    id: "odvodi",
    title: "Ispitivanje odvoda",
    folder: "Ispitivanje odvoda",
    items: [
      { type: "video" as const, file: "IMG_3149.mp4" },
      { type: "video" as const, file: "IMG_4033.mp4" },
      { type: "video" as const, file: "IMG_4034.mp4" },
      { type: "image" as const, file: "IMG_4278.webp" },
      { type: "video" as const, file: "IMG_4281.mp4" },
      { type: "image" as const, file: "IMG_4418.webp" },
      { type: "video" as const, file: "IMG_4421.mp4" },
    ],
  },
  {
    id: "pukla-cev",
    title: "Pukla cev u zidu",
    folder: "Pukla cev u zidu",
    items: [
      { type: "video" as const, file: "IMG_3900.mp4" },
      { type: "image" as const, file: "IMG_5016.webp" },
      { type: "video" as const, file: "IMG_5018.mp4" },
      { type: "image" as const, file: "IMG_5036.webp" },
      { type: "image" as const, file: "IMG_5038.webp" },
      { type: "video" as const, file: "IMG_5039.mp4" },
      { type: "video" as const, file: "IMG_5040.mp4" },
    ],
  },
  {
    id: "cevi",
    title: "Pronalazak cevi",
    folder: "Pronalazak cevi u podu ili zidu",
    items: [
      { type: "video" as const, file: "IMG_2143.mp4" },
      { type: "image" as const, file: "IMG_2176.webp" },
      { type: "video" as const, file: "IMG_2667.mp4" },
      { type: "video" as const, file: "IMG_5090.mp4" },
    ],
  },
  {
    id: "hidroizolacija",
    title: "Hidroizolacija",
    folder: "Ispitivanje hidroizolacije",
    items: [
      { type: "video" as const, file: "IMG_3487.mp4" },
      { type: "video" as const, file: "IMG_4231.mp4" },
      { type: "image" as const, file: "IMG_4244.webp" },
    ],
  },
  {
    id: "grejanje",
    title: "Podno grejanje",
    folder: "Kontrola podnog i zidnog grejanja",
    items: [{ type: "image" as const, file: "IMG_2145.webp" }],
  },
  {
    id: "uv",
    title: "UV Ispitivanja",
    folder: "UV Ispitivanja",
    items: [
      { type: "video" as const, file: "GJTW2085.mp4" },
      { type: "video" as const, file: "IMG_2586.mp4" },
    ],
  },
];

const allMedia: MediaItem[] = CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    folder: cat.folder,
    categoryId: cat.id,
  }))
);

function buildSrc(folder: string, file: string) {
  return `/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

function PlayIcon() {
  return (
    <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("sve");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredMedia = useMemo(
    () =>
      activeCategory === "sve"
        ? allMedia
        : allMedia.filter((item) => item.categoryId === activeCategory),
    [activeCategory]
  );

  const total = filteredMedia.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % total));
  const goPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + total) % total));

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Close lightbox when category changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  const currentItem = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  return (
    <section id="galerija" className="py-20 sm:py-28 bg-[#080c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Iz prakse
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Galerija radova
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stvarni primeri termovizijskih ispitivanja – slike i videi sa terena.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCategory("sve")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === "sve"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "bg-[#161b22] text-gray-400 border border-[#21262d] hover:border-orange-500/40 hover:text-gray-200"
            }`}
          >
            Sve ({allMedia.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-[#161b22] text-gray-400 border border-[#21262d] hover:border-orange-500/40 hover:text-gray-200"
              }`}
            >
              {cat.title} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {filteredMedia.map((item, index) => {
            const src = buildSrc(item.folder, item.file);
            return (
              <button
                key={`${item.categoryId}-${item.file}`}
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-xl bg-[#161b22] group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#080c10]"
              >
                {item.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <video
                      src={src}
                      className="w-full h-full object-cover"
                      preload="none"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors duration-200">
                      <PlayIcon />
                    </div>
                  </>
                )}
                {/* Hover overlay for images */}
                {item.type === "image" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {currentItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media */}
            {currentItem.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={buildSrc(currentItem.folder, currentItem.file)}
                alt=""
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <video
                key={`${currentItem.folder}-${currentItem.file}`}
                src={buildSrc(currentItem.folder, currentItem.file)}
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
                controls
                autoPlay
                playsInline
              />
            )}

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Zatvori"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm tabular-nums">
              {lightboxIndex + 1} / {total}
            </div>

            {/* Prev / Next */}
            {total > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute -left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
                  aria-label="Prethodna"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute -right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
                  aria-label="Sledeća"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
