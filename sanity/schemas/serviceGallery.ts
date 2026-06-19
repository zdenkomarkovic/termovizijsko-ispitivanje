import { defineField, defineType } from 'sanity'

export const serviceGallery = defineType({
  name: 'serviceGallery',
  title: 'Galerija usluge',
  type: 'document',
  fields: [
    // Polje se postavlja automatski iz templatea – nije vidljivo u editoru
    defineField({
      name: 'service',
      title: 'Usluga',
      type: 'string',
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: 'media',
      title: 'Mediji (slike i video)',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'serviceImage',
          title: 'Slika',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Opis slike (alt tekst)',
              type: 'string',
            }),
          ],
        },
        {
          type: 'file',
          name: 'serviceVideo',
          title: 'Video',
          options: { accept: 'video/*' },
          fields: [
            defineField({
              name: 'caption',
              title: 'Opis videa',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { service: 'service' },
    prepare(sel: Record<string, string>) {
      return { title: sel['service'] ?? 'Galerija' }
    },
  },
})
