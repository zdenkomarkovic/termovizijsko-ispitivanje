import { createClient } from '@sanity/client'
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

function getSanityClient() {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    // CDN keš može da odloži pojavu novog sadržaja; uvek čitamo direktno iz API-ja
    useCdn: false,
  })
}

export function urlFor(source: SanityImageSource) {
  const client = getSanityClient()
  if (!client) return imageUrlBuilder({ projectId: 'placeholder', dataset: 'production' }).image(source)
  return imageUrlBuilder(client).image(source)
}

type SanityMediaItem =
  | {
      _type: 'serviceImage'
      _key: string
      alt?: string
      assetRef: string
    }
  | {
      _type: 'serviceVideo'
      _key: string
      caption?: string
      assetUrl: string
    }

export type SanityGalleryItem =
  | { type: 'sanity-image'; url: string; alt?: string }
  | { type: 'sanity-video'; url: string; alt?: string }

export async function getServiceGalleries(): Promise<Record<string, SanityGalleryItem[]>> {
  if (!projectId) return {}

  const client = getSanityClient()
  if (!client) return {}

  try {
    const galleries = await client.fetch<
      Array<{ service: string | null; docId: string; media: SanityMediaItem[] | null }>
    >(
      `*[_type == "serviceGallery"]{
        service,
        "docId": _id,
        "media": media[]{
          _type,
          _key,
          alt,
          caption,
          "assetRef": asset._ref,
          "assetUrl": asset->url
        }
      }`,
      {},
      { cache: 'no-store' }
    )

    const result: Record<string, SanityGalleryItem[]> = {}

    for (const g of galleries) {
      // Izvuci service iz polja ili iz ID-a formata "gallery-{slug}"
      const service =
        g.service ||
        (g.docId.startsWith('gallery-') ? g.docId.slice('gallery-'.length) : null)

      if (!service || !g.media?.length) continue

      // Poslednja dodata slika/video prikazuje se prva
      const reversed = [...g.media].reverse()

      result[service] = reversed.flatMap((item): SanityGalleryItem[] => {
        if (item._type === 'serviceImage' && item.assetRef) {
          return [{
            type: 'sanity-image',
            url: urlFor({ _type: 'image', asset: { _ref: item.assetRef, _type: 'reference' } })
              .width(1200)
              .quality(85)
              .auto('format')
              .url(),
            alt: item.alt,
          }]
        }
        if (item._type === 'serviceVideo' && item.assetUrl) {
          return [{
            type: 'sanity-video',
            url: item.assetUrl,
            alt: item.caption,
          }]
        }
        return []
      })
    }

    return result
  } catch (err) {
    console.error('[Sanity] Greška pri fetch-ovanju galerija:', err)
    return {}
  }
}
