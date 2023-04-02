import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

interface HomePageData {
  valueProp: string;
  valueDesc: string;
  features: Array<{ question: string; answer: string }>;
  benefits: string[];
  testimonials: Array<{ name: string; testimonial: string }>;
  aboutTheAuthor: string;
}

export const homePageData: HomePageData = {
  valueProp: `Dedic aceasta carte tuturor celor care cauta sa inteleaga mai multe despre ei insisi, 
  natura umana precum si despre natura lucrurilor, celor care Il cauta pe Dumnezeu si le-ar folosi calauzire, 
  celor care au venit acum pe Pamant sa se Inalte, celor care vor sa revina la starea naturala de a fi, si anume, de a iubi. 
  Asa sa ne ajute Dumnezeu! Multumesc Domnului!`,
  valueDesc: `Cartea aceasta s-a nascut intai ca titlu si o adunare de esee in 2014, apoi a fost continuata si scrisa in 2022 si finalizata in 2023`,
  features: [
    {
      question: `Ce este această carte?`,
      answer: `Un suport scris despre cum sa te înalți`,
    },
    { question: `Care a fost inspiraţia?`, answer: `Informații esoterice` },
    {
      question: `Ce subiecte sunt în carte?`,
      answer: `Despre Dumnezeu, Dragoste, Lumea Interioară, Lumea Exterioară, Poezii, Afirmații, Rugăciuni, Meditații`,
    },
  ],
  benefits: [
    `Te va inspira să te cunoști pe tine`,
    `Te va inspira să cunoști mai multe despre lumea înconjurătoare`,
    `Te va ajuta sa îți clarifici unele răspunsuri `,
  ],
  testimonials: [
    {
      name: "D.B",
      testimonial: `Sunt intr-o stare constanta de liniste de cand am fost la lansare si am inceput sa citesc fragmente din carte. 
      Sunt uluita si ma simt ca apartin lumii pe care ai vazut-o. 
      Am prins un deget de la picior din ea in momentul in care imi urmam cu sfintenie rugaciunea si imi exersam si afirmam energia creatoare - prin poezie
      Nu stiu cum sa iti multumesc. M-am reconectat la mine atat de profund am ajuns ca sunt intr-o stare in care am gasit boala care ma cuprinsese, 
      am vazut intunericul puternic si l-am invelit cu iubire. Trec acum printr-un shift enorm si ochii ti se datoreaza. Claritate si recunostinta pentru toate! 
      Te iubesc si iti multumesc! Sa ne ajute Dumnezeu, suntem impreuna, sunt alaturi de tine si te voi sustine mereu cu toata puterea si luciditatea mea pe Cale. 
      Te imbratisez si multumesc lui Dumnezeu ca existi, ca ne-a adus in acelasi timeline, e o binecuvantare pentru mine. 
      Sper sa produca imboldul de a pune mana pe carte ca este aur spiritual, mir!`,
    },
    {
      name: "I.A",
      testimonial: `Bunaa💕 E super cartea!!! Încă nu  am terminat o , dar e geniala pana la momentul asta!!! Îmi oferă liniște și caldura!!❤️❤️❤️ transmite niște emoții foarte puternice. Eu mulțumesc, m ai făcut sa mi deschid noi orizonturi!!
    `,
    },
    {
      name: "A.H",
      testimonial: ` Am primit ieri cartea și îți mulțumesc încă o dată pentru ea! nu am reusit sa citesc pana acum decât cateva pagini din ea, 
    insa m-au surprins profunzimea ideilor  si viziunea integrată asupra vieții (ce cuprinde atât latura spirituală cât și laică). Te felicit încă o dată și aștept cu nerăbdare  următoarele apariții! 
`,
    },
    {
      name: "L.K",
      testimonial: `Ieri nu am putut lasa cartea Magdei din maini.
    Foarte faina claritate aduce prin explicarea tuturor termenilor si e o reformulare perfecta pentru toti cei care nu stiu cum sa puna in ordine lucrurile in viata lor.
    Am ratacit o vreme dupa ce m-am dezlipit de biserica catolica si am inceput sa iau credinta sa o despring de religie si sa vad cum simt ca e bine pentru mine sa traiesc in afara comunitatii din biserica.
    Imi place foarte mult cum gandeste si scrie Magda! Multumesc din tot sufletul pentru cadoul acesta minunat! Am multe idei despre cui i-ar prinde cartea asta.
`,
    },
  ],
  aboutTheAuthor: `Magda Dimitrescu, nascuta pe 2 Mai 1992 in Bucuresti, Romania, este de profesie actor, insa se ocupa cu diferite forme ale artelor. 
  Este empat nativ. Prima data cand  a dovedit semne de capacitati extrasenzoriale a fost la varsta de 3 ani, urmand ca mai apoi sa continue aceasta calatorie. 
  Este crestin ortodox, insa a avut contact din copilarie si cu alte practici spirituale, precum yoga, tai chi si meditatia transcedentala. 
  La 12 ani citea Platon cautand informatii despre Atlantida, urma cursurile liceului Waldorf, unde a avut contact cu antroposofia si filosofia lui Rudolf Steiner. 
  In liceu isi ocupa timpul liber cu studierea esoterismului, crestinismului ortodox, cat si a diferitelor religii prezente pe Terra in prezent. 
  I-a placut dintodeauna socializarea, dorind sa cunoasca si sa inteleaga diferite tipuri de oameni si sa exploreze cai de comunicare cu acestia. 
  Uneori sustine si consiliaza oameni prin Ghidare Inspirata, avand sesiuni de 1 la 1. Dupa o perioada lunga in care doar familia si prietenii apropiati 
  stiau de natura ei intima pe calea spiritualitatii, a decis ca este timpul sa nu se mai ascunda si sa impartaseasca lumii ce a acumulat si ce a experimentat. 
  `,
};

export const homePageDataEn: HomePageData = {
  valueProp: `I dedicate this book to all who are looking
to understand more about themselves, human nature as well as the nature of things, to
all who are looking for God and they could use guidance, to all who came now on Earth
to ascend, to all who want to get back to out natural state of being, and that is, to love. So help us God! Thank you, Lord!`,
  valueDesc: `This book started with a title and a few pages written in 2014, continued in 2022 and
finished in 2023.`,
  features: [
    {
      question: `Ce este această carte?`,
      answer: `Un suport scris despre cum sa te înalți`,
    },
    { question: `Care a fost inspiraţia?`, answer: `Informații esoterice` },
    {
      question: `Ce subiecte sunt în carte?`,
      answer: `Despre Dumnezeu, Dragoste, Lumea Interioară, Lumea Exterioară, Poezii, Afirmații, Rugăciuni, Meditații`,
    },
  ],
  benefits: [
    `Te va inspira să te cunoști pe tine`,
    `Te va inspira să cunoști mai multe despre lumea înconjurătoare`,
    `Te va ajuta sa îți clarifici unele răspunsuri `,
  ],
  testimonials: [
    {
      name: "D.B",
      testimonial: `Sunt intr-o stare constanta de liniste de cand am fost la lansare si am inceput sa citesc fragmente din carte. 
      Sunt uluita si ma simt ca apartin lumii pe care ai vazut-o. 
      Am prins un deget de la picior din ea in momentul in care imi urmam cu sfintenie rugaciunea si imi exersam si afirmam energia creatoare - prin poezie
      Nu stiu cum sa iti multumesc. M-am reconectat la mine atat de profund am ajuns ca sunt intr-o stare in care am gasit boala care ma cuprinsese, 
      am vazut intunericul puternic si l-am invelit cu iubire. Trec acum printr-un shift enorm si ochii ti se datoreaza. Claritate si recunostinta pentru toate! 
      Te iubesc si iti multumesc! Sa ne ajute Dumnezeu, suntem impreuna, sunt alaturi de tine si te voi sustine mereu cu toata puterea si luciditatea mea pe Cale. 
      Te imbratisez si multumesc lui Dumnezeu ca existi, ca ne-a adus in acelasi timeline, e o binecuvantare pentru mine. 
      Sper sa produca imboldul de a pune mana pe carte ca este aur spiritual, mir!`,
    },
    {
      name: "I.A",
      testimonial: `Bunaa💕 E super cartea!!! Încă nu  am terminat o , dar e geniala pana la momentul asta!!! Îmi oferă liniște și caldura!!❤️❤️❤️ transmite niște emoții foarte puternice. Eu mulțumesc, m ai făcut sa mi deschid noi orizonturi!!
    `,
    },
    {
      name: "A.H",
      testimonial: ` Am primit ieri cartea și îți mulțumesc încă o dată pentru ea! nu am reusit sa citesc pana acum decât cateva pagini din ea, 
    insa m-au surprins profunzimea ideilor  si viziunea integrată asupra vieții (ce cuprinde atât latura spirituală cât și laică). Te felicit încă o dată și aștept cu nerăbdare  următoarele apariții! 
`,
    },
    {
      name: "L.K",
      testimonial: `Ieri nu am putut lasa cartea Magdei din maini.
    Foarte faina claritate aduce prin explicarea tuturor termenilor si e o reformulare perfecta pentru toti cei care nu stiu cum sa puna in ordine lucrurile in viata lor.
    Am ratacit o vreme dupa ce m-am dezlipit de biserica catolica si am inceput sa iau credinta sa o despring de religie si sa vad cum simt ca e bine pentru mine sa traiesc in afara comunitatii din biserica.
    Imi place foarte mult cum gandeste si scrie Magda! Multumesc din tot sufletul pentru cadoul acesta minunat! Am multe idei despre cui i-ar prinde cartea asta.
`,
    },
  ],
  aboutTheAuthor: `Who is Magda Dimitrescu in 100 words: Magda Dimitrescu, nascuta pe 2 Mai 1992 in Bucuresti, Romania, este de profesie actor, insa se ocupa cu diferite forme ale artelor. 
  Este empat nativ. Prima data cand  a dovedit semne de capacitati extrasenzoriale a fost la varsta de 3 ani, urmand ca mai apoi sa continue aceasta calatorie. 
  Este crestin ortodox, insa a avut contact din copilarie si cu alte practici spirituale, precum yoga, tai chi si meditatia transcedentala. 
  La 12 ani citea Platon cautand informatii despre Atlantida, urma cursurile liceului Waldorf, unde a avut contact cu antroposofia si filosofia lui Rudolf Steiner. 
  In liceu isi ocupa timpul liber cu studierea esoterismului, crestinismului ortodox, cat si a diferitelor religii prezente pe Terra in prezent. 
  I-a placut dintodeauna socializarea, dorind sa cunoasca si sa inteleaga diferite tipuri de oameni si sa exploreze cai de comunicare cu acestia. 
  Uneori sustine si consiliaza oameni prin Ghidare Inspirata, avand sesiuni de 1 la 1. Dupa o perioada lunga in care doar familia si prietenii apropiati 
  stiau de natura ei intima pe calea spiritualitatii, a decis ca este timpul sa nu se mai ascunda si sa impartaseasca lumii ce a acumulat si ce a experimentat. 
  `,
};

export const shopData = {
  title: "Magazin",
};

interface AboutPageData {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
  paragraph6: string;
  paragraph7: string;
}

export const aboutPageData: AboutPageData = {
  title: `Bine ne-am găsit, Suflete! `,
  paragraph1: `Pentru început, să mă prezint. Simplul contact dintre Conștiința mea și a ta ne arată cine suntem, însă cum este provocator să îți spun cine sunt (căci sunt Cea Care Este, la fel cum tu ești Cel Ce Ești, 
    viețuind împreună în Unitate ne cunoaștem și suntem deja Unul), am să încerc. Îți pot descrie diferite lucruri despre mine, cu scopul de a onora obiceiul de a “face cunoștință” și prin asta a liniști nevoia umană de a 
    cataloga/ eticheta/ denumi lucruri, astfel încât să te simți mai confortabil. Dacă va fi vreodată momentul, voi împărtăși lucruri depre mine care nu țin de încarnarea aceasta sau transcend condiția prezentă. Momentan, să rămânem la lucrurile clasice, atribute atașate de identitatea aceasta. 
  `,
  paragraph2: `Numele meu acum este Magda, sunt o femeie născută în București, România, Europa, Terra în 2 Mai 1992, Anno Domini. De profesie sunt actor. Ce mai fac? Pictez, cânt, dansez, cos, scriu poezii, consiliez și ghidez oameni în călătoria lor, 
  am un canal de youtube unde postez diferite video-uri, cam tot ce are legătură cu exprimarea creativității îmi atrage atenția. `,
  paragraph3: `Sunt parte din Divin, sub formă de conștiință proprie individuală conectată la tot, am un suflet cu care pot călători și cu care m-am întrupat acum într-o experiență umană. Am amintiri constante din alte vieți 
  sau existențe și deși știu cine sunt, aleg să îmi extind identitatea adăugând rolul pe care îl am în această viață: Magda, femeie, cu tot ceea ce înseamnă mediul din care provin, familia, experiențele, și prin relatiile cu oamenii pe care îi cunosc.
  `,
  paragraph4: `Aptitudinile mele se datorează aplecărilor și curiozităților mele ca și conștiința, pe care mi le-am ordonat astfel încât să le pot dezvolta și cu ajutorul corpului (alegând situații, școli, profesori, experiențe). 
  Personalitatea aleasă mă va ajută să navighez viața aceasta, la fel cum și personalitatea aleasă de tine pentru viața curentă te ajută pe tine.
  Personalitatea este influențată și de conjucția astrologică sub care am ales să mă nasc. De asemenea, transpare și personalitatea mea ca și suflet, strat care se regăsește în comun, indiferent de viață.
  `,
  paragraph5: `Cum de am scris cartea aceasta? Să nu îți închipui că sunt mai specială cu ceva decât tine, mai sus sau mai prejos. Suntem ceea ce suntem și avem același potențial. 
  Împărtășesc informațiile din această carte cu scopul de a susține pe cei ce vor să urce în ascensiunea care are loc pe Terra în perioada 2012-2030. Binențeles că acest suport de informații nu are dată de expirare și poate fi folosit oricând, informațiile nefiind legate de timp. 
  Am decis să structurez cartea așa privind înspre perspectiva dimensiunii a treia, încercând să prezint Unititatea întâi prin separare, prin dualitate. În realitate, ele sunt unul și același lucru, nu există noi versus ceilalți. Dar mai întâi este nevoie a defini ce înseamnă “noi” 
  și ce înseamnă “ceilalți”, până se dizolvă. Toate drumurile duc către Unitate.
`,
  paragraph6: `Metaforic, am murit de multe ori. Ca să devin mai mult eu însămi, a trebuit să distrug construcția pe care o consideram a fi eu, de câteva ori, printr-un proces precum o respirație universală de creație și distrugere. 
  E posibil să cunoști unele din lucrurile pe care le voi descrie, însă am decis să le menționez în cazul în care ai nevoie de claritate, sau anumite concepte nu se leagă încă pentru tine. Dacă tu nu ai nevoie momentan, 
  fii liniștit că informațiile sunt înmagazinate în conștiința ta, precum toate informațiile pe care le consumi zilnic. `,
  paragraph7: `Este timpul să ne întoarcem la noi înșine, la adevărata noastră esență. Faptul că această carte a ajuns la tine nu este întâmplător. Acum că ne-am cunoscut, îți urez lectură plăcută și să îți fie de folos! Fie ca Dumnezeu să lucreze prin noi! Amin. Namaste!
  `,
};

interface ContactPageData {
  title: string;
  socialMedia: Array<{ name: string; link: string; icon: React.ReactElement }>;
  emailTitle: string;
  email: string;
  companyData: string;
}

export const contactPageData: ContactPageData = {
  title: `Contact`,
  socialMedia: [
    {
      name: "Facebook",
      link: "https://www.facebook.com/magda.dimitrescu",
      icon: <AiFillFacebook />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/magda.dimitrescu",
      icon: <AiFillInstagram />,
    },
    {
      name: "Instagram Maggie's Dreamland",
      link: "https://instagram.com/maggiesdreamland",
      icon: <AiFillInstagram />,
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@magdadimitrescu2936",
      icon: <AiFillYoutube />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/magda-dimitrescu-262ab416a/",
      icon: <AiFillLinkedin />,
    },
  ],
  emailTitle: `Email`,
  email: `magda.dimitrescu@gmail.com`,
  companyData: `Auroralove Srl, J22/514/2023, cod fiscal 47638588`,
};

export const footerData = {
  stripe: {
    title: "Plăţi online cu Stripe",
    link: "https://stripe.com/en-ro",
    logo: "/assets/stripe_logo.png",
  },
  anpc: {
    title: "ANPC",
    link: "https://anpc.ro/",
  },
  anpc1: {
    title: "ANPC - Soluţionarea alternativă a litigiilor",
    link: "https://anpc.ro/ce-este-sal/",
  },
  anpc2: {
    title: "ANPC - Soluţionarea online a litigiilor ",
    link: "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=en",
  },
};

export const footerDataEn = {
  stripe: {
    title: "Powered by Stripe",
    link: "https://stripe.com/en-ro",
    logo: "/assets/stripe_logo.png",
  },
  anpc: {
    title: "ANPC",
    link: "https://anpc.ro/",
  },
  anpc1: {
    title: "ANPC - Alternative dispute resolution",
    link: "https://anpc.ro/ce-este-sal/",
  },
  anpc2: {
    title: "ANPC - Online dispute resolution",
    link: "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO",
  },
};
