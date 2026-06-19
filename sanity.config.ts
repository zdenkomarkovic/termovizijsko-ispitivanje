import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const SERVICES = [
  { title: 'Detekcija gubitaka toplote', slug: 'toplota' },
  { title: 'Otkrivanje vlage, kondenzacije i buđi', slug: 'vlaga' },
  { title: 'Provera kvaliteta ugradnje stolarije', slug: 'stolarija' },
  { title: 'Kontrola podnog i zidnog grejanja', slug: 'grejanje' },
  { title: 'Kontrola mašinskih i industrijskih sistema', slug: 'masine' },
  { title: 'Pregled objekta pre kupovine ili renoviranja', slug: 'pregled' },
  { title: 'Detekcija curenja u vodovodnim instalacijama', slug: 'curenja' },
  { title: 'Ispitivanje odvoda', slug: 'odvodi' },
  { title: 'Pronalazak cevi u podu ili zidu', slug: 'cevi' },
  { title: 'Ispitivanje hidroizolacije', slug: 'hidroizolacija' },
] as const

export default defineConfig({
  name: 'termovizija-034',
  title: 'Termovizija 034',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Galerije usluga')
          .items(
            SERVICES.map(({ title, slug }) =>
              S.listItem()
                .title(title)
                .id(slug)
                .child(
                  S.documentTypeList('serviceGallery')
                    .title(title)
                    .filter('_type == "serviceGallery" && service == $slug')
                    .params({ slug })
                )
            )
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
