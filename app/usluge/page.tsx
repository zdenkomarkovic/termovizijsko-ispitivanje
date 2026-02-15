import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMediaGallery from "@/components/ServiceMediaGallery";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Naše usluge – Termovizijsko ispitivanje",
  description:
    "Detaljni opisi svih termovizijskih usluga: detekcija gubitaka toplote, vlage, curenja, provera grejanja, odvoda, hidroizolacije i više. Kragujevac i okolina.",
  url: `${SITE_URL}/usluge`,
});

type MediaItem = { type: "image" | "video"; file: string; folder: string };

const SERVICES = [
  {
    id: 1,
    slug: "toplota",
    title: "Detekcija gubitaka toplote",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M8 4.5l1.5 2.5M16 4.5L14.5 7" stroke="currentColor" opacity="0.5" />
      </svg>
    ),
    para1:
      "Toplotni gubici su jedan od glavnih uzroka povišenih računa za grejanje. Termovizijskom kamerom precizno identifikujemo svako mesto gde toplota napušta objekat – bilo da je reč o lošoj izolaciji, toplotnim mostovima ili neadekvatno zaptivenim spojevima.",
    para2:
      "Naš pregled obuhvata sve spoljne zidove, pod, tavan i krov. Na osnovu termovizijskog izveštaja možete precizno planirati potrebne sanacione radove i investirati samo tamo gde je zaista neophodno.",
    bullets: [
      "Utvrđivanje tačnih mesta loše ili nedostajuće izolacije",
      "Detekcija toplotnih mostova na spojevima zidova, plafona i stolarije",
      "Provera zaptivenosti prozora, vrata i prodora",
      "Priprema dokumentacije za energetski audit",
      "Primenjivo na kuće, stanove, poslovne i industrijske objekte",
    ],
    media: [
      { type: "video" as const, file: "IMG_2148.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "image" as const, file: "IMG_2162.webp", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "image" as const, file: "IMG_2172.webp", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "image" as const, file: "IMG_2181.webp", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_2191.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_2192.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_2193.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "image" as const, file: "IMG_2194.webp", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_2212.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_3764.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_4118.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "video" as const, file: "IMG_4206.mp4", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
      { type: "image" as const, file: "IMG_4208.webp", folder: "Detekciju gubitaka toplote na kućama i zgradama" },
    ] as MediaItem[],
  },
  {
    id: 2,
    slug: "vlaga",
    title: "Otkrivanje vlage, kondenzacije i buđi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 12a7.5 7.5 0 0015 0c0-3.75-7.5-12-7.5-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 14.25a2.25 2.25 0 004.5 0" opacity="0.5" />
      </svg>
    ),
    para1:
      "Vlaga u zidovima često ostaje nevidljiva mesecima, pa i godinama, sve dok ne prouzrokuje ozbiljna oštećenja i pojavu buđi. Termovizija nam omogućava da otkrijemo vlažna mesta još u ranoj fazi – pre nego što situacija eskalira.",
    para2:
      "Analizom temperaturnih razlika na površinama zidova i plafona identifikujemo zone povišene vlažnosti, kondenzacije i potencijalnog razvoja plesni. Pregled je potpuno neinvazivan – bez bušenja, probijanja ili oštećenja materijala.",
    bullets: [
      "Lokalizacija vlažnih zona u zidovima i plafonu",
      "Detekcija kondenzacije iza obloga i kuhinjskih elemenata",
      "Rano otkrivanje buđi pre vidljivih znakova",
      "Praćenje efikasnosti sanacije nakon radova",
      "Primenjivo na stambene i poslovne objekte",
    ],
    media: [
      { type: "video" as const, file: "IBVF8334.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_2302.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "image" as const, file: "IMG_2643.webp", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_2657.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_2665.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_3308.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "image" as const, file: "IMG_3312.webp", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "image" as const, file: "IMG_3314.webp", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_3594.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "video" as const, file: "IMG_4329.mp4", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "image" as const, file: "IMG_5115.webp", folder: "Otkrivanje vlage, kondenzacije i buđi" },
      { type: "image" as const, file: "IMG_5117.webp", folder: "Otkrivanje vlage, kondenzacije i buđi" },
    ] as MediaItem[],
  },
  {
    id: 3,
    slug: "stolarija",
    title: "Provera kvaliteta ugradnje stolarije",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" />
        <path strokeLinecap="round" d="M3 9h18M12 9v12" opacity="0.5" />
        <path strokeLinecap="round" d="M7.5 15h1.5M15 15h1.5" opacity="0.4" />
      </svg>
    ),
    para1:
      "Čak i skupi prozori i vrata mogu biti izvor značajnih toplotnih gubitaka ako nisu pravilno ugrađeni i zaptiveni. Termovizijskim pregledom otkrivamo svaki propust hladnog vazduha – oko okvira, kroz kitove ili loše postavljene zaptivke.",
    para2:
      "Pregled se preporučuje odmah nakon ugradnje, kako biste mogli reklamirati uočene nedostatke izvođaču, ali i u starijim objektima gde sumnjate na gubitak energije kroz stolariju.",
    bullets: [
      "Detekcija propuha i nekompaktnih spojeva oko okvira",
      "Identifikacija toplotnih mostova u okvirima prozora i vrata",
      "Provera kvaliteta ugradnje pre isteka garantnog roka",
      "Analiza svih prozora i vrata u objektu",
      "Pisani izveštaj sa fotozapisom za reklamaciju",
    ],
    media: [] as MediaItem[],
  },
  {
    id: 4,
    slug: "grejanje",
    title: "Kontrola podnog i zidnog grejanja",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M3 14h18M7 10c0-2 2-4 4-4s4 2 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10c0-1 .5-2 1.5-2.5" opacity="0.5" />
        <path strokeLinecap="round" d="M3 6h4M17 6h4" opacity="0.4" />
      </svg>
    ),
    para1:
      "Podno i zidno grejanje skriveno je ispod obloge, tako da je svaki kvar ili neravnomernost grejanja teško dijagnostikovati klasičnim metodama. Termovizija vizualizuje raspored cevi i temperaturni profil celog sistema.",
    para2:
      "Pregled otkriva pregrejane zone, mrtve tačke bez grejanja, kao i eventualna curenja u sistemu – sve to bez ijednog oštećenja poda ili zida.",
    bullets: [
      "Vizualizacija kompletnog rasporeda cevi u podu ili zidu",
      "Otkrivanje neravnomernog grejanja i hladnih zona",
      "Detekcija curenja u sistemu podnog grejanja",
      "Provera balansiranosti petlji grejanja",
      "Primenjivo na nove i stare instalacije",
    ],
    media: [
      { type: "image" as const, file: "IMG_2145.webp", folder: "Kontrola podnog i zidnog grejanja" },
    ] as MediaItem[],
  },
  {
    id: 5,
    slug: "masine",
    title: "Kontrola mašinskih i industrijskih sistema",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    para1:
      "U industrijskim pogonima, pregrejani elektromotori, paneli, ležajevi ili kablovi su česti uzroci havarija. Redovnim termovizijskim pregledom takve probleme otkrivamo dok su još u ranoj fazi – pre skupog kvara ili zastoja u proizvodnji.",
    para2:
      "Naš tim vrši inspekciju elektroenergetske opreme, distributivnih ormara, transformatora i mašinskih komponenti. Pregled se može obaviti bez zaustavljanja procesa, u toku normalnog rada postrojenja.",
    bullets: [
      "Detekcija pregrejanih tačaka na elektro opremi i kablovima",
      "Inspekcija elektromotora, ležajeva i spojnica",
      "Pregled distributivnih ormara i osigurača",
      "Preventivno održavanje za smanjenje troškova havarija",
      "Izrada termovizijskog izveštaja za osiguravajuća društva",
    ],
    media: [] as MediaItem[],
  },
  {
    id: 6,
    slug: "pregled",
    title: "Pregled objekta pre kupovine ili renoviranja",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5l1.5 1.5 2.5-2.5" opacity="0.5" />
      </svg>
    ),
    para1:
      "Pre kupovine nepokretnosti ili pokretanja većih renovacionih radova, termovizijski pregled vam daje potpunu sliku stvarnog stanja objekta. Saznajte gde postoje problemi sa izolacijom, vlagom, instalacijama ili krovom – pre nego što potpišete ugovor.",
    para2:
      "Izveštaj koji dobijate sadrži sve termovizijske snimke sa komentarima, dijagnozu svakog uočenog problema i preporuke za sanaciju. To je neprocenjiva dokumentacija za pregovaranje o ceni ili planiranje renoviranja.",
    bullets: [
      "Sveobuhvatni pregled svih spoljnih i unutrašnjih površina",
      "Detekcija skrivene vlage, curenja i toplotnih gubitaka",
      "Procena stanja instalacija bez rušenja",
      "Pisani izveštaj sa termogramima i preporukama",
      "Osnova za pregovaranje pri kupovini nekretnine",
    ],
    media: [] as MediaItem[],
  },
  {
    id: 7,
    slug: "curenja",
    title: "Detekcija curenja u vodovodnim instalacijama",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V9a6 6 0 0112 0v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v4M10.5 19.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5" opacity="0.5" />
        <circle cx="12" cy="21" r="0.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    para1:
      "Curenje u cevovodu može mesecima prolaziti nezapaženo, uzrokujući vlagu u zidovima, oštećenje konstrukcije i povišene račune za vodu. Termovizija locira tačno mesto kvara bez ijednog udarca čekića ili miniranja gipsane ploče.",
    para2:
      "Termovizijskom kamerom pratimo temperaturnu razliku između mokrog i suvog materijala, jasno vidljivo čak i kroz debele zidove. Posebnu pažnju posvećujemo detektovanju puknutih cevi koje se skrivaju iza pločica, gipsa ili betona.",
    bullets: [
      "Lokalizacija curenja u vodovodnim i grejnim cevima",
      "Detekcija puknutih cevi iza zidnih obloga i pločica",
      "Pregled instalacija bez rušenja i kopanja",
      "Brza dijagnoza uzroka vlage na zidovima",
      "Dokumentacija za osiguranje ili reklamu izvođaču",
    ],
    media: [
      { type: "image" as const, file: "IMG_2177.webp", folder: "Curenja" },
      { type: "image" as const, file: "IMG_3275.webp", folder: "Curenja" },
      { type: "image" as const, file: "IMG_3279.webp", folder: "Curenja" },
      { type: "video" as const, file: "IMG_3597.mp4", folder: "Curenja" },
      { type: "video" as const, file: "IMG_3900.mp4", folder: "Curenja" },
      { type: "image" as const, file: "IMG_3931.webp", folder: "Curenja" },
      { type: "image" as const, file: "IMG_3934.webp", folder: "Curenja" },
      { type: "image" as const, file: "IMG_5091.webp", folder: "Curenja" },
      { type: "video" as const, file: "IMG_5093.mp4", folder: "Curenja" },
      { type: "image" as const, file: "IMG_5095.webp", folder: "Curenja" },
      { type: "video" as const, file: "IMG_3900.mp4", folder: "Pukla cev u zidu" },
      { type: "image" as const, file: "IMG_5016.webp", folder: "Pukla cev u zidu" },
      { type: "video" as const, file: "IMG_5018.mp4", folder: "Pukla cev u zidu" },
      { type: "image" as const, file: "IMG_5036.webp", folder: "Pukla cev u zidu" },
      { type: "image" as const, file: "IMG_5038.webp", folder: "Pukla cev u zidu" },
      { type: "video" as const, file: "IMG_5039.mp4", folder: "Pukla cev u zidu" },
      { type: "video" as const, file: "IMG_5040.mp4", folder: "Pukla cev u zidu" },
    ] as MediaItem[],
  },
  {
    id: 8,
    slug: "odvodi",
    title: "Ispitivanje odvoda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" opacity="0.5" />
        <path strokeLinecap="round" d="M12 12v-4M12 12l3 3M12 12l-3 3" opacity="0.4" />
      </svg>
    ),
    para1:
      "Termovizijska inspekcija odvoda otkriva blokade, curenja i oštećenja kanalizacijskih instalacija koje ostaju skrivene u podovima i zidovima. Metoda je posebno korisna pri proveri kvaliteta izvedenih radova ili pri dijagnostici problema s oticanjem vode.",
    para2:
      "Kombinacijom termovizijskog pregleda i vizualne inspekcije možemo precizno locirati mesto problema na odvodu, smanjujući potrebu za skupim iskopavanjem ili rušenjem.",
    bullets: [
      "Detekcija curenja na odvodima i sifon spojevima",
      "Lociranje blokada u kanalizacionim cevima",
      "Provera ispravnosti novougrađenih odvoda",
      "Inspekcija odvoda terasa i ravnih krovova",
      "Brza i neinvazivna dijagnoza bez rušenja",
    ],
    media: [
      { type: "video" as const, file: "IMG_3149.mp4", folder: "Ispitivanje odvoda" },
      { type: "video" as const, file: "IMG_4033.mp4", folder: "Ispitivanje odvoda" },
      { type: "video" as const, file: "IMG_4034.mp4", folder: "Ispitivanje odvoda" },
      { type: "image" as const, file: "IMG_4278.webp", folder: "Ispitivanje odvoda" },
      { type: "video" as const, file: "IMG_4281.mp4", folder: "Ispitivanje odvoda" },
      { type: "image" as const, file: "IMG_4418.webp", folder: "Ispitivanje odvoda" },
      { type: "video" as const, file: "IMG_4421.mp4", folder: "Ispitivanje odvoda" },
    ] as MediaItem[],
  },
  {
    id: 9,
    slug: "cevi",
    title: "Pronalazak cevi u podu ili zidu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="8" width="20" height="8" rx="2" />
        <path strokeLinecap="round" d="M6 12h12" opacity="0.5" />
        <path strokeLinecap="round" d="M2 5l3 3M22 5l-3 3M2 19l3-3M22 19l-3-3" opacity="0.4" />
      </svg>
    ),
    para1:
      "Pred renoviranjem ili probijanjem zidova i podova, neophodno je znati gde prolaze skrivene instalacije. Termovizija precizno locira tople vodne cevi, kanale za ventilaciju i električne kablove – bez ijednog oštećenja.",
    para2:
      "Usluga je posebno korisna pri ugradnji novih otvora, priključaka ili u situacijama kada projektna dokumentacija nije dostupna. Rezultat je precizna mapa instalacija u podu ili zidu.",
    bullets: [
      "Mapiranje skrivenih cevi u podu i zidovima",
      "Lociranje toplovodnih i hladnovodnih instalacija",
      "Pronalazak kanala za ventilaciju i klimatizaciju",
      "Prevencija oštećenja pri bušenju i sečenju",
      "Primenjivo pre rekonstrukcija i adaptacija",
    ],
    media: [
      { type: "video" as const, file: "IMG_2143.mp4", folder: "Pronalazak cevi u podu ili zidu" },
      { type: "image" as const, file: "IMG_2176.webp", folder: "Pronalazak cevi u podu ili zidu" },
      { type: "video" as const, file: "IMG_2667.mp4", folder: "Pronalazak cevi u podu ili zidu" },
      { type: "video" as const, file: "IMG_5090.mp4", folder: "Pronalazak cevi u podu ili zidu" },
    ] as MediaItem[],
  },
  {
    id: 10,
    slug: "hidroizolacija",
    title: "Ispitivanje hidroizolacije",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    para1:
      "Oštećena hidroizolacija na krovu, terasi, podrumu ili bazenu može uzrokovati ogromne štete ako se na vreme ne otkrije. Termovizija detektuje mesta prodora vlage kroz hidroizolacioni sloj čak i kada spoljni izgled površine ne daje vidljive znakove problema.",
    para2:
      "Pregled se najčešće vrši nakon kiše ili kvašenja površine, kada je razlika u temperaturi između vlažnih i suvih zona najizraženija. Na taj način lociramo tačke prodora vode sa visokom preciznošću.",
    bullets: [
      "Detekcija oštećenja hidroizolacije na krovovima i terasama",
      "Lociranje prodora vlage u podrumima i temeljima",
      "Inspekcija hidroizolacije bazena i fontana",
      "Pregled pre i posle sanacionih radova",
      "Dokumentacija za reklamaciju prema izvođaču",
    ],
    media: [
      { type: "video" as const, file: "IMG_3487.mp4", folder: "Ispitivanje hidroizolacije" },
      { type: "video" as const, file: "IMG_4231.mp4", folder: "Ispitivanje hidroizolacije" },
      { type: "image" as const, file: "IMG_4244.webp", folder: "Ispitivanje hidroizolacije" },
    ] as MediaItem[],
  },
];

const SECTION_BG = ["bg-[#0d1117]", "bg-[#080c10]"];

export default function UslugePage() {
  return (
    <>
      <Header />
      <main className="pt-[72px] bg-[#0d1117]">
        {/* Page hero */}
        <section className="py-16 sm:py-24 bg-[#080c10] border-b border-[#21262d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              Termovizijsko ispitivanje
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Naše usluge
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Termovizijska kamera vidi ono što ljudsko oko ne može. Koristimo
              je za brzo i precizno dijagnostikovanje problema u objektima –
              bez rušenja, bušenja ili nepotrebnih šteta.
            </p>
          </div>
        </section>

        {/* 10 service sekcija */}
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-16 sm:py-24 ${SECTION_BG[isEven ? 0 : 1]} border-b border-[#21262d]/60`}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium mb-6">
                  Usluga {String(service.id).padStart(2, "0")}
                </span>

                {/* Ikonica + naslov */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                    {service.title}
                  </h2>
                </div>

                {/* Opisi */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  {service.para1}
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {service.para2}
                </p>

                {/* Bullet lista */}
                <ul className="space-y-2 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-orange-400 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 text-sm sm:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Galerija */}
                {service.media.length > 0 && (
                  <ServiceMediaGallery items={service.media} />
                )}

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="/#kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Zatražite procenu
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
