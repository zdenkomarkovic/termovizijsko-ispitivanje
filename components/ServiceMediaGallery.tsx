"use client";

import { useState, useEffect } from "react";

type MediaType = "image" | "video";

interface MediaItem {
  type: MediaType;
  file: string;
  folder: string;
}

interface ServiceMediaGalleryProps {
  items: MediaItem[];
}

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

export default function ServiceMediaGallery({ items }: ServiceMediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = items.length;

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

  const currentItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  if (items.length === 0) return null;

  return (
    <div className="mt-8">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {items.map((item, index) => {
          const src = buildSrc(item.folder, item.file);
          return (
            <button
              key={`${item.folder}-${item.file}`}
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
              {item.type === "image" && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              )}
            </button>
          );
        })}
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

            {/* Close */}
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
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute -left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
                  aria-label="Prethodna"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
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
    </div>
  );
}
