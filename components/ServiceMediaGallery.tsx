"use client";

import { useState, useEffect } from "react";

export type MediaItem =
  | { type: "image"; file: string; folder: string }
  | { type: "video"; file: string; folder: string }
  | { type: "sanity-image"; url: string; alt?: string }
  | { type: "sanity-video"; url: string; alt?: string }

interface ServiceMediaGalleryProps {
  items: MediaItem[];
}

function buildSrc(item: MediaItem): string {
  if (item.type === "sanity-image" || item.type === "sanity-video") return item.url;
  return `/${encodeURIComponent(item.folder)}/${encodeURIComponent(item.file)}`;
}

function itemKey(item: MediaItem): string {
  if (item.type === "sanity-image" || item.type === "sanity-video") return item.url;
  return `${item.folder}-${item.file}`;
}

function isVideoItem(item: MediaItem): boolean {
  return item.type === "video" || item.type === "sanity-video";
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

  // Slike pre videa, ali bez mešanja redosleda unutar grupe
  const sortedItems = [...items].sort((a, b) => {
    const aVideo = isVideoItem(a);
    const bVideo = isVideoItem(b);
    return aVideo === bVideo ? 0 : aVideo ? 1 : -1;
  });
  const total = sortedItems.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % total));
  const goPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + total) % total));

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

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? sortedItems[lightboxIndex] : null;

  if (items.length === 0) return null;

  return (
    <div className="mt-8">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {sortedItems.map((item, index) => {
          const src = buildSrc(item);
          const isVideo = isVideoItem(item);
          return (
            <button
              key={itemKey(item)}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              {isVideo ? (
                <>
                  <video
                    src={`${src}#t=0.001`}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors duration-200">
                    <PlayIcon />
                  </div>
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={item.type === "sanity-image" ? (item.alt ?? "") : ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                </>
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
            {isVideoItem(currentItem) ? (
              <video
                key={itemKey(currentItem)}
                src={buildSrc(currentItem)}
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
                controls
                autoPlay
                playsInline
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={buildSrc(currentItem)}
                alt={currentItem.type === "sanity-image" ? (currentItem.alt ?? "") : ""}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
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
