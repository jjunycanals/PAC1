1. L'aparició de HTML5/CSS3/JS ha suposat el naixement del desenvolupament frontend modern. (0.75 punts)
• Quin és l'avantatge d'utilitzar etiquetes semàntiques? Anomena i explica com a 
mínim 3 d'aquests avantatges.
    R/ L'avantatge d'ultilitzar etiquetes es que podem indicar quin es el tipo de contingut que contenen les parts del document HTML a un client web.
    Les etiquetes semàntiques del llenguatge de marcatge, la gran majoria serveixen per indicar com ha de ser la pàgina web un cop renderitzada pel navegador.
    En HTML les etiquetes semàntiques ajuden al navegador a renderitzar, però també als motors de cerca a indexar més correctament els continguts del lloc web. 
    Dins de les etiquetes semàntiques també n'hi ha que permeten estructurar la pàgina com ara HEADER, FOOTER, NAV, SECTION, ARTICLE, etc.
    També dins de les etiquetes semàntiques es pot afegir informació del lloc web, com metadades, que poden ser interpretades per qualsevol sistema informàtic. 
    Es molt important l'ús d'aquestes etiquetes de forma adecuada per el que fa els motors de cerca i la indexació de la pàgina web en questió.  

• Cita almenys 3 APIs HTML5 i explica breument la seva funcionalitat.
    R/ Geolocation API ens permet recuperar informació geogràfica de l'usuari.
    API HTMLMediaElemetn permet fer interacció amb arxius multimedia.
    Canvas i  WebGL API permet crear gràfics 2D i 3D animats per a la nostra web.

• Cita quina opció ofereix CSS3 per aconseguir que s'apliquin diferents estils CSS
sobre el mateix element en la visualització en diferents dispositius (diferents 
mides de pantalla).
    R/ La opció que ofereix CSS 3 és l'ús de MediaQueries per crear pagines web responsives. És a dir, a través del selector @media i especificant el tamany de pantalla (normalment amb la property 'width'), es pot aplicar diferents estils sobre un mateix element HTML per garantizar que tots els elements es visualtizin de forma correcte per a tots els dispositius i pantalles que existeixen en el mercat. 
    Actualment en pàgines web, es molt important l'ús del disseny responsive ja que molts usuaris consulten la web a través del mobil. L'ús de webs responsive facilita l'accés als usuaris a la informació.

• Cita almenys 4 de les característiques principals de TypeScript (important 
superset de JavaScript que tractarem al següent capítol).
    R/ Les característiques principals de TypeScript son:
        1. El tipat de variables. Al contari de JavaScript a TypeScript pots especificar els tipos de cada variable, així evitar cometre errors en el codi.
        2. El tipat es opcional. A TypeScript pots crear varibles estatiques (tipades), o dinàmiques (no tipades). De totes maneres al relacionales a typscript retornarà error i detectarás l'error. Al contrari de Javascript que son dinamiques.
        3. Es compatible amb JavaScript. Qualsevol codi escrit en javascript és igual de vàlid (igual de lleguible), per typescript. Això facilita l'aplicació de typescript dins de projectes que utlitzen JavaScript. Ja que permet no haver de canviar tot el desenvolupament en JavaScript fet al llarg dels anys.
        4. Una última característica a dir sobre TypeScript es que permet funcions modernas ECMAScript 6 (ES6), el que permet escriure codi més net al desenvolupador i utlitzar característiques com la funció fletxa o bé template literal, d'entre d'altres.


2. El llenguatge CSS és molt rígid, poc pràctic i endreçat a l'hora de programar. Per evitar 
aquest problema s'han creat els preprocessadors CSS, que ofereixen avantatges 
evidents (0.5 punts)
• Citeu almenys 2 d'aquests preprocessadors.
    R/ SASS, PostCSS o Less. Un altre molt utilitzat es SCSS. A la feina ulitizem aquest últim.

• Cita almenys 4 avantatges que ofereixen aquests preprocessadors.
    R/ Permeten crear l'estructuració de l'aplicació web a un nivell d'ordre més gran. Per esmentar 4 avantatges principals podriem dir les següents:
        1. Permet establir variables, cosa que permet en coses com colors corporatius o altres coses, que en el cas d'un rebranding o un canvi d'imatge, és molt fàcil de canviar si s'ha treballat el projecte des d'un inici així. Ja que canvies la variable en un punt i s'aplica a tot el projecte.
        2. Redueix el codi repetitiu. Permet crear una classe amb unes propietats:valors que diferents selectors comparteixen.
        3. L'ús de @mixin permet asegurar la compatiblitat entre navegadors. L'ús dels prefixes -webkit-, -moz-, -o-.
        4. Permet fer un mantenimient més fàcil del projecte.

• Explica breument en què consisteixen els sourcemaps.
    R/ Els sourcemaps, es un mapa que conté l'assignació entre l'arxiu d'origen i l'arxiu de sortida final. Consisteix en valors JSON que s'ulitizen per a l'assignació de códi CSS/JavaScript comprimint el fitxer original. Per molt que el códi font s'agrupi o es minimitzi, els sourcemaps donen la informació de quin códi s'escriu en quin num. de línea i l'ubicació de l'arxiu.

• Explica què és un transpilador.
    R/ Un tanspilador es aquell que sap traduir el llenguatge desti al llenguatge origen. A diferència d'un compilador que transforma i tradueix un llenguatge com podría ser php, JavaScript o altres, convertir-lo en codi de la màquina perquè es pugi executar directament a l'ordinador. Un transpliador és el que permet la traducció del codi de màquina al codi origen. O bé un canvi de TypeScrip a JavaScript sería un canvi de transpilació.

3. El flux de treball professional a front-end fa indispensable l'ús d'eines com a controls de 
versions i eines de gestió de mòduls (0.75 punts).
• Cita almenys dos sistemes de control de versions i dues eines de gestió de mòduls.
    R/ Dues eines de control de versions: GitHub i SVN. Git té un control de versions distribuit i SVN té un control de versions centralitzat.
    Dues eines de gestió de mòduls son: Webpack i Parcel.

• Cita i explica almenys 3 ordres de Git.
    R/ 3 ordres Git escollides:
        1. $ git add nom_del_arxiu > Serveix per afegir l'arxiu i indicar l'arxiu que s'han introduit els canvis per posteriorment fer un commit i pujar el canvis.
        2. $ git clone URL_del_repo > Serveix per baixar-te un repositori i clonar-lo en local. M'ha estat molt últil per treballar en el PC fix o el portatil.
        3. $ git status > Permet veure les diferencies entre el nostre repositori i les modificacions fetes en local. A més et proposa accions. Molt útil també.

• Cita i explica breument les característiques més definitòries de WebPack.
    R/ Webpack es un paquet de mòduls de JavaScript de codi obert. WebPack el que fa es agafar mòduls amb les seves dependències i genera arxius estàtics que representen aquests mòduls. Permet al desenvolupador tenir un pensament modular alhora de desenvolupar aplicacions web. Tot i això, Webpack té dependència de node.js, ja que és necessari tenir node.js per utilitzar webpack. El que permet webpack es fer una única solicitut al servidor i no varies (una per cada arxiu estàtic), cosa que permet optimitzar el temps de càrrega. 