import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

interface HomePageData {
    valueProp: string;
    valueProp2: string;
    valueDesc: string;
    features: Array<{ question: string; answer: string }>;
    benefits: string[];
    testimonials: Array<{ name: string; testimonial: string }>;
    aboutTheAuthor: string;
}

export const homePageData: HomePageData = {
    valueProp: `Dedic această carte tuturor celor care caută să înțeleagă mai multe despre ei înșiși, 
    natura umană precum și despre natura lucrurilor, celor care Îl caută pe Dumnezeu și le-ar folosi călăuzire, 
    celor care au venit acum pe Pământ să se Înalțe, celor care vor să revină la starea naturală de a fi, și anume, de a iubi. 
  `,
    valueProp2: `Așa să ne ajute Dumnezeu! Mulțumesc Domnului!`,
    valueDesc: `Cartea aceasta s-a născut întâi că titlu și câteva pagini în 2014, apoi a fost continuată și scrisă în 2022 și finalizată în 2023`,
    features: [
        {
            question: `Ce este această carte?`,
            answer: `Un suport scris despre cum să te înalți`,
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
to ascend, to all who want to get back to out natural state of being, and that is, to love. `,
    valueProp2: `So help us God! Thank you, Lord!`,
    valueDesc: `This book started with a title and a few pages written in 2014, continued in 2022 and
finished in 2023.`,
    features: [
        {
            question: `What is this book?`,
            answer: `A written support about how to ascend`,
        },
        { question: `What was the inspiration?`, answer: `Esoteric Knowledge` },
        {
            question: `What subjects are being covered?`,
            answer: `About God, Love, Internal World, External World, Poems, Affirmations,
      Prayers, Meditations`,
        },
    ],
    benefits: [
        `It will inspire you to know thyself`,
        `It will inspire you to know more about the outside world`,
        `It will help you clarify, it will give you some answers `,
    ],
    testimonials: [
        {
            name: "D.B",
            testimonial: `I have been in a constant state of peace since I went to the launch and started reading fragments of the book.
      I am amazed and feel that I belong to the world that you have seen.
      I caught a toe from her when I was following my prayer with holiness and exercising and affirming my creative energy - through poetry
      I don't know how to thank you. I reconnected with myself so deeply that I was in a state where I found the disease that had engulfed me,
      I saw the strong darkness and wrapped it with love. I am now going through a huge shift and my eyes owe you. Clarity and gratitude for everything!
      I love you and thank you! May God help us, we are together, I am with you and I will always support you with all my strength and lucidity on the Path.
      I hug you and thank God that you exist, that he brought us to the same timeline, it's a blessing for me.
      I hope it produces the impulse to get your hands on the book because it is spiritual gold, myrrh!`,
        },
        {
            name: "I.A",
            testimonial: `Hello💕 It's a great book!!! I haven't finished it yet, but it's brilliant so far!!! It gives me peace and warmth!!❤️❤️❤️ conveys some very strong emotions. I thank you, you made me open new horizons!!
    `,
        },
        {
            name: "A.H",
            testimonial: `I received the book yesterday and thank you again for it! I have only managed to read a few pages of it so far,
      but I was surprised by the depth of the ideas and the integrated vision of life (which includes both the spiritual and the secular side). Congratulations once again and I look forward to your next appearances!
`,
        },
        {
            name: "L.K",
            testimonial: `Yesterday I couldn't put Magda's book down.
      It brings great clarity by explaining all the terms and it's a perfect reformulation for all those who don't know how to put things in order in their lives.
      I got lost for a while after I separated from the Catholic church and I started to take the faith to separate it from religion and see how I feel that it is good for me to live outside the church community.
      I really like how Magda thinks and writes! Thank you from the bottom of my heart for this wonderful gift! I have many ideas about who would like this book.
`,
        },
    ],
    aboutTheAuthor: `Magda Dimitrescu, born on the 2nd of
  May 1992 in Bucharest, Romania, is a professional actress, but she expresses
  herself throught different forms of art. She is a native empath. The first time she
  proved extrasensory qualities was at 3 years old, and from then she continued
  her journey. She is of the Christian Orthodox faith but she made contact with
  other spiritual practices as well, since early childhood, such as yoga, tai chi and
  transcendental meditation. At 12 years old she was reading Plato, in a search for
  more information available on Atlantis, she was going to Waldorf/ Rudolf Steiner
  School where she had contact with Anthroposophy.In highscool she spent
  some of her free time with studying Esoterism and esoteric knowledge, Orthodox
  Christianity as well as studying different religions currently found on Earth. She
  always enjoyed socializing, wanting to meet and understand different types of
  people, and to explore different ways of communicating wih them. Sometimes
  she does readings, guides and supports people through their inner work and
  journey in 1 on 1 sessions. After a long time of showing her spiritual side and
  gifts only to her family and close friends, she decided that the time has come for
  her to share her gifts and experience with the world.
  `,
};

export const shopData = {
    title: "Magazin",
};

interface AboutPageData {
    title: string;
    paragraph1: string;
    title1: string;
    paragraph2: string;
    title2: string;
    paragraph3: string;
    title3: string;
    paragraph4: string;
    title4: string;
    paragraph5: string;
    title5: string;
    paragraph6: string;
    title6: string;
    paragraph7: string;
    title7: string;
}

export const aboutPageData: AboutPageData = {
    title: `Bine ne-am găsit, Suflete! `,
    title1: `Pentru început, să mă prezint.`,
    paragraph1: `Simplul contact dintre Conștiința mea și a ta ne arată cine suntem, însă cum este provocator să îți spun cine sunt (căci sunt Cea Care Este, la fel cum tu ești Cel Ce Ești, 
    viețuind împreună în Unitate ne cunoaștem și suntem deja Unul), am să încerc. Îți pot descrie diferite lucruri despre mine, cu scopul de a onora obiceiul de a “face cunoștință” și prin asta a liniști nevoia umană de a 
    cataloga/ eticheta/ denumi lucruri, astfel încât să te simți mai confortabil. Dacă va fi vreodată momentul, voi împărtăși lucruri depre mine care nu țin de încarnarea aceasta sau transcend condiția prezentă. Momentan, să rămânem la lucrurile clasice, atribute atașate de identitatea aceasta. 
  `,
    title2: `Numele meu acum este Magda`,
    paragraph2: `Sunt o femeie născută în București, România, Europa, Terra în 2 Mai 1992, Anno Domini. De profesie sunt actor. Ce mai fac? Pictez, cânt, dansez, cos, scriu poezii, consiliez și ghidez oameni în călătoria lor, 
  am un canal de youtube unde postez diferite video-uri, cam tot ce are legătură cu exprimarea creativității îmi atrage atenția. `,
    title3: `Sunt parte din Divin`,
    paragraph3: `Sub formă de conștiință proprie individuală conectată la tot, am un suflet cu care pot călători și cu care m-am întrupat acum într-o experiență umană. Am amintiri constante din alte vieți 
  sau existențe și deși știu cine sunt, aleg să îmi extind identitatea adăugând rolul pe care îl am în această viață: Magda, femeie, cu tot ceea ce înseamnă mediul din care provin, familia, experiențele, și prin relatiile cu oamenii pe care îi cunosc.
  `,
    title4: ``,
    paragraph4: `Aptitudinile mele se datorează aplecărilor și curiozităților mele ca și conștiința, pe care mi le-am ordonat astfel încât să le pot dezvolta și cu ajutorul corpului (alegând situații, școli, profesori, experiențe). 
  Personalitatea aleasă mă va ajută să navighez viața aceasta, la fel cum și personalitatea aleasă de tine pentru viața curentă te ajută pe tine.
  Personalitatea este influențată și de conjucția astrologică sub care am ales să mă nasc. De asemenea, transpare și personalitatea mea ca și suflet, strat care se regăsește în comun, indiferent de viață.
  `,
    title5: `Cum de am scris cartea aceasta?`,
    paragraph5: `Să nu îți închipui că sunt mai specială cu ceva decât tine, mai sus sau mai prejos. Suntem ceea ce suntem și avem același potențial. 
  Împărtășesc informațiile din această carte cu scopul de a susține pe cei ce vor să urce în ascensiunea care are loc pe Terra în perioada 2012-2030. Binențeles că acest suport de informații nu are dată de expirare și poate fi folosit oricând, informațiile nefiind legate de timp. 
  Am decis să structurez cartea așa privind înspre perspectiva dimensiunii a treia, încercând să prezint Unititatea întâi prin separare, prin dualitate. În realitate, ele sunt unul și același lucru, nu există noi versus ceilalți. Dar mai întâi este nevoie a defini ce înseamnă “noi” 
  și ce înseamnă “ceilalți”, până se dizolvă. Toate drumurile duc către Unitate.
`,
    title6: `Metaforic, am murit de multe ori.`,
    paragraph6: ` Ca să devin mai mult eu însămi, a trebuit să distrug construcția pe care o consideram a fi eu, de câteva ori, printr-un proces precum o respirație universală de creație și distrugere. 
  E posibil să cunoști unele din lucrurile pe care le voi descrie, însă am decis să le menționez în cazul în care ai nevoie de claritate, sau anumite concepte nu se leagă încă pentru tine. Dacă tu nu ai nevoie momentan, 
  fii liniștit că informațiile sunt înmagazinate în conștiința ta, precum toate informațiile pe care le consumi zilnic. `,
    title7: ``,
    paragraph7: `Este timpul să ne întoarcem la noi înșine, la adevărata noastră esență. Faptul că această carte a ajuns la tine nu este întâmplător. Acum că ne-am cunoscut, îți urez lectură plăcută și să îți fie de folos! Fie ca Dumnezeu să lucreze prin noi! Amin. Namaste!
  `,
};

export const aboutPageDataEn: AboutPageData = {
    title: `Welcome, dear Soul!`,
    title1: `For starters, let me introduce myself.`,
    paragraph1: ` The simple contact between my Consciousness
  and yours show us who we are, and since it is challenging to tell you who I am ( for I am
  that I am, the same as you are The One Who Is, living together in Unity, we already
  know each other and we are One), I will try. I can describe several things about me, with the purpose to honour the human custom
  to “introduce” oneself and with this to calm down the human need to identify, categorize,
  name things, so that you may feel more comfortable. If there will be a moment to share
  more about myself, things that transcend this condition, I will. For the moment, let’s stick
  to the classic things, attributes attached to this identity.
  `,
    title2: `My name is Magda`,
    paragraph2: `I am a woman born in Bucharest, Romania, Europe, Terra, on the
  2nd of May 1992, Anno Domini. As a profession I am an actor. What do I also do? I paint, sing, dance, sew, write poetry,
  I coach and guide people in their journey, I have a Youtube channel where I post
  different videos. Basically, I am attracted to everything that has to do with creativity.`,
    title3: `I am a part of the Divine`,
    paragraph3: `In the shape of individual Consciousness connected to
  everything, I have a soul with which I can travel and with which I incarnated now in a
  human experience. I have constant memories/ remembrances from previous existences and although I know
  who I am, I choose to expand this identity by adding the role I have taken in this life:
  Magda, woman, with everything that implies: the background, family, experiences and
  relationships I built with the people I know.
  `,
    title4: ``,
    paragraph4: `My chosen personality will help me to navigate this life, as the personality you chose for
  yourself for this life helps you. My personality is also influenced by the astrological conjunction of the planets I chose to
  be born under. In the same time, my personality as a soul is a layer that is common to
  me no matter the life I choose.
  `,
    title5: `How come I wrote this book?`,
    paragraph5: `Don’t think I am more special than you, higher or lower. We are what we are and we
  have the same potential. I share the information in this book with the purpose to support
  the ones who are on the path of Ascension , the one that is happening on Terra in the
  timeframe 2012-2030. Of course, this guide has no expiration date and can be used anytime, the information
  being unbounded by time. I decided to structure the book like so, looking unto the perspective of the 3rd dimension,
  trying to show Unity at first through separation, through duality. In reality, they are one
  and the same thing, there is no us versus them. But first we must define what is “us” and
  what is “them”, until it dissolves. All roads lead to Unity.
`,
    title6: `Metaphorically, I have died many times.`,
    paragraph6: `To become more of who I am, I had to destruct
  the construction I considered to be me, several times, like a Cosmic breath of creation
  and destruction. It is possible that you already know some of the things I write about, but I decided to
  mention them in case you need clarity, or in case some things aren’t connecting for you.
  If you don’t need this information for the moment, rest assured that the information is
  stored in your consciousness, just as all the information you ingest daily does.`,
    title7: ``,
    paragraph7: `It is time to come back to ourselves, to our true essence. The fact that this book reached you it is not by chance. Now that we have been introduced, I wish you happy reading and that it may be useful
  to you! May God work through us! Amen. Namaste!
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
            link: "https://www.facebook.com/magdadimitrescu.oficial",
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

export const termsDataEn = {
    returnTitle: "Return policy",
    returnPolicy: `As per the provisions of the Romanian Government Ordinance no. 34/2014, 
  you can return products purchased online within 14 calendar days from the date of 
  purchase without any penalty or need to state a reason. If you wish to return a product, 
  please contact us and we will provide you with further instructions.`,
    shippingTitle: `Shipping policy`,
    shippingPolicy: `For orders containing physical products, we use DPD or other shipping companies and a 
  shipping fee will be charged. The exact cost will depend on the shipping method, destination, and weight of the package. 
  This will be displayed in your checkout session before you place and order.
  Please note that shipping costs are non-refundable. 
  
  For e-books and other digital products, there are no shipping fees, and the products will be delivered to you electronically. 
  Once you have completed your purchase, you will receive an email with a download link for your product. 
  Please ensure that your email address is entered correctly to avoid any delays in receiving your purchase. 
  All orders that include a physical product must be placed with a correct Romanian address, otherwise the order will be cancelled.
  `,
    transportLinks: [{ name: "Sameday", link: "https://sameday.ro" }],
};

export const termsDataRo = {
    returnTitle: "Politica de retur",
    returnPolicy: `Conform prevederilor Ordonanței Guvernului României nr. 34/2014, puteți returna produsele 
  achiziționate online în termen de 14 zile calendaristice de la data achiziționării fără nicio 
  penalitate sau nevoie de a invoca un motiv. Dacă doriți să returnați un produs, vă rugăm să ne 
  contactați și vă vom oferi instrucțiuni suplimentare. 
  `,
    shippingTitle: `Politica de livrare`,
    shippingPolicy: `Pentru comenzile care conțin produse fizice, folosim compania de transport Sameday sau alte companii de transport 
  și va fi percepută o taxă de livrare. Costul exact va depinde de metoda de livrare, destinație și greutatea 
  coletului. Acestea vor fi afişate în sesiunea de checkout înainte de a da comanda. Vă rugăm să rețineți că costurile de livrare nu sunt rambursabile.
  Pentru cărțile electronice și alte produse digitale nu există taxe de livrare și produsele vor fi livrate 
  electronic. După ce ați finalizat achiziția, veți primi un e-mail cu un link de descărcare pentru produsul dvs. 
  Vă rugăm să vă asigurați că adresa dvs. de e-mail este introdusă corect pentru a evita orice întârzieri în primirea achiziției. 
  Toate comenzile care includ produse fizice trebuie să conţină o adresă corectă din România, altfel comanda va fi anulată. 
  `,
    transportLinks: [{ name: "Sameday", link: "https://sameday.ro" }],
};
