import { defineField, defineType } from 'sanity'

const SERVICE_OPTIONS = [
  { title: 'Detekcija gubitaka toplote', value: 'toplota' },
  { title: 'Otkrivanje vlage, kondenzacije i buđi', value: 'vlaga' },
  { title: 'Provera kvaliteta ugradnje stolarije', value: 'stolarija' },
  { title: 'Kontrola podnog i zidnog grejanja', value: 'grejanje' },
  { title: 'Kontrola mašinskih i industrijskih sistema', value: 'masine' },
  { title: 'Pregled objekta pre kupovine ili renoviranja', value: 'pregled' },
  { title: 'Detekcija curenja u vodovodnim instalacijama', value: 'curenja' },
  { title: 'Ispitivanje odvoda', value: 'odvodi' },
  { title: 'Pronalazak cevi u podu ili zidu', value: 'cevi' },
  { title: 'Ispitivanje hidroizolacije', value: 'hidroizolacija' },
]

export const serviceGallery = defineType({
  name: 'serviceGallery',
  title: 'Galerija usluge',
  type: 'document',
  fields: [
    defineField({
      name: 'service',
      title: 'Usluga',
      type: 'string',
      options: {
        list: SERVICE_OPTIONS,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
    prepare(selection: Record<string, string>) {
      const option = SERVICE_OPTIONS.find((o) => o.value === selection['service'])
      return { title: option?.title ?? selection['service'] ?? 'Nova galerija' }
    },
  },
})
