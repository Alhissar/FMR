const content = {
  // reading: [rubrique,texte,page,scroll]
  reading: ['', 0, 0, 0],
  url: 'img/galerie/',
  viewing: 0,
  poesies: [
    {
      auteur: "FM&reg;",
      titre: "Statuaire",
      txt: ["<p></p><p></p><p>Là, sur ses lèvres aux saveurs impudiques,</p><p>Je goûte son souffle aux accents faméliques.</p><p>Là, de l’avers de ma main, empreint d’indécence,</p><p>Je frôle sa peau qui, lasse de réticence, </p><p>Me revient fardée d’un masque d’impudence</p><p>Qui se donne, en une offrande gorgée d’éloquence.</p><p>Là, mon regard jouisseur s’enivre de la caresse</p><p>De son sublime, qui m’assaille et me presse,</p><p>Là à façonner, là à modeler sa chair,</p><p>Statuaire.</p>"]
    }, {
      auteur: "FM&reg;",
      titre: "Brumes",
      txt: ["<p></p><p></p><p>Là, je laisse s’écouler lentement de mes lèvres,</p><p>Quelques mots enivrants dont les volutes orfèvres</p><p>Viennent ciseler en arabesques volatiles,</p><p>Sa peau, offerte à mon désir volubile.</p><p>Et sa gorge nue de me souffler une prière</p><p>Afin que le verbe, enfin, redevienne matière, </p><p>Qu’il puisse, après son âme, venir caresser sa chair</p><p>Ainsi qu’une patine sous les mains du Statuaire.</p><p>Puis elle s’abandonne à mon dire envahissant</p><p>Qui, par trop frôler son être, la consume,</p><p>Pour la livrer à mes fantasmes inconsistants,</p><p>Brumes…</p>"]
    }, {
      auteur: "FM&reg;",
      titre: "Rêve",
      txt: ["<p></p><p></p><p>Là, lorsque mes iris abandonnent à mon âme,</p><p>L’effigie au sublime qui consume et enflamme,</p><p>Mon esprit s’immisce, éthéré, onirique, </p><p>Au sein de tes méandres aux saveurs chimériques.</p><p>Là, aux abords de ton gouffre, je laisse s’abîmer</p><p>Mon désir qui, à ta fontaine, vient s’abreuver,</p><p>Pour enfin se perdre au tréfonds abyssal</p><p>De ta propre soif, implorant la paradoxale </p><p>Caresse, enivrante torture qui n’accorde de trêve,</p><p>Rêve.</p>"]
    }, {
      auteur: "FM&reg;",
      titre: "Une nuit, la liberté",
      txt: ["<p></p><p></p><p>Vois la lumière du jour naissant</p><p> Nourrir la pénombre du souvenir.</p><p> Sens le vent à ta figure d’enfant</p><p>Et aux murs de tes geôles agonir.</p><p>Insaisissable comme l’eau ruisselant</p><p>Entre mes doigts, s’employant à saisir</p><p>Sans contraindre, à enserrer sans détenir,</p><p>Dans une étreinte douce, émoussant</p><p>Les séquestres de tes peurs à venir,</p><p>Te voilà prisonnière à présent</p><p>De mes bras, semblables à un carcan</p><p>Au sein duquel tu capitules sans appartenir.</p>"]
    }, {
      auteur: "FM&reg;",
      titre: "L'éveil",
      txt: ["<p></p><p></p><p>Au sortir d’une nuit froissée par trop d’agitations cérébrales,</p><p>Au final cauchemar célébré tel une ivresse bacchanale,</p><p>Mon esprit brisé, s'éparpille en mille éclats de cristal.</p><p>Et voilà qu'entre mes doigts s'effrite et roule l'illégal</p><p>En substances libératrices, m'invitant au voyage du Nagual.</p><p>La virée qui s'annonçait douce se montre soudainement brutale,</p><p>Et mon âme de s'abimer inlassablement aux cloisons dédales</p><p>De mon être domestiqué, livré aux ravages de la vindicte vandale.</p><p>Retombant en déchu au cœur de mon effervescence mentale,</p><p>Me voilà face à mon autre, et sens mon corps qui s'emballe,</p><p>Malmené comme Rimbaud lors d'une de ses ivresses navales.</p><p>J'encaisse les soubresauts grâce aux toxiques que j'inhale</p><p>Puis expire en nuages informes, aux blancheurs virginales.</p><p>Rassasié d'illusoire, je reprends la quête de mon Moi Graal,</p><p>Tel un guerrier toltèque bravant les vérités subliminales.</p><p>Libéré de mon rêve, je vomis maux et peurs ancestrales,</p><p>Pour m'emplir de visions salvatrices aux saveurs ayahuascales,</p><p>Offrant mon être au regard chamane, aux perceptions abyssales,</p><p>Nahual.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: "L\'ange",
      txt: ["<p></p><p></p><p>Là, au terme d’une nuit funeste, vomissant mes douleurs,</p><p>Lorsque le jour naissant m’offrait ses premières lueurs,</p><p>Mon âme, pourtant vaincue, fut arrachée au Fossoyeur</p><p>Par mon ange Gabriel et son verbe annonciateur.</p><p>Là, à l’oreille de mon esprit, ma Belle à l’aura biblique</p><p>Me lança ces quelques mots aux accents angéliques :</p><p>« Je suis femme de peu de foi, mais en toi, je crois.</p><p> Accueille mon être en ton sein, toi qui seul me voit ».</p><p>Et moi, de lui ouvrir ma cage, offrant mon intérieur,</p><p>Me conduisit jusqu’à son gouffre, glissant à ses moiteurs</p><p>Pour tomber au fond du mien, l’entrainant avec moi</p><p>Dans mon fantasme délirant empreint de désarroi.</p><p>Et moi, l’animal, le Bonoboo au langage signé,</p><p>Caressais la Belle de mes mots, espérant apprivoiser</p><p> La petite apeurée par ma plume phalange,</p><p>L’Ange.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: "La bête au sang froid",
      txt: ["<p></p><p></p><p>Le venin de ta peau brûle mes espoirs</p><p>Au feu de la géhenne où se perd ma mémoire.</p><p>Une fois encore, comme une offrande et sans effroi,</p><p>Je me livre aux morsures de la bête au sang froid.</p><p>Tes saveurs toxiques, hier encore en songes,</p><p>Offrent à mes amnésies la douceur du mensonge,</p><p>Lorsque la tentation fait de moi la proie</p><p>Des louanges feintes de la bête au sang froid.</p><p>Au fruit défendu, chancre de mes blessures,</p><p>J'offrirai une fois de plus les traces de la luxure,</p><p>Abandonnant ma foi aux desseins sournois</p><p>Du salace louvoyant de la bête au sang froid.</p><p>Au petit matin, lorsque du fruit il ne restera rien,</p><p>Mon âme, abandonnée aux stigmates du venin,</p><p>S'abimera au gouffre de mon désarroi,</p><p>Pleurant l'absence de la bête au sang froid.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: "Cantique",
      txt: ["<p></p><p></p><p>Sa gorge me susurra un soupir cantique,</p><p> Lorsque ma bouche se perdit en pratiques hérétiques.</p><p>Liturgie salace, ses oraisons étouffées</p><p>Nourrirent mon ouïe sans pour autant la rassasier.</p><p>Je me fit Rodin, afin de sculpter la chair</p><p>De son corps qui à ma couche gisait offert.</p><p>J'entends encore ses prières, quête d'absolution,</p><p>Brûlantes et douces confessions qui la livrèrent</p><p>Aux affres délicieusement malignes de ma perversion,</p><p>Moi, qui de l'Ange déchu avait goûté l'amer.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: "Offrande",
      txt: ["<p></p><p></p><p>A ma supplique elle me lança un \" ouïs \",</p><p>Laissant choir l'impudique aux affres de l'oubli.</p><p>Me tendant en offrande des mots dont on ne se lasse,</p><p>Elle m'entraîna au cœur de son tourbillon salace.</p><p>A nouveau je portai mes lèvres au calice</p><p>De mes enivrantes vapeurs éthyliques,</p><p>Me délectant des brûlures du supplice,</p><p>Mon cauchemardesque se fit plaisir onirique.</p><p>De ses lèvres rouges sang suintait le vice,</p><p>Indécente, de ses désirs elle me fit l'esquisse,</p><p>Et moi, de boire le calice jusqu'à son lit</p><p>Traversa mon esprit, épris de Sade, le marquis.</p><p>Elle se fit Juliette, vomissant sa vertu</p><p>En quelques mots bilieux, exorcisant l'ingénue</p><p>De Justine, pour que de sa bile malheur cesse,</p><p>Et que du stupre elle puisse sentir la caresse.</p><p>Et moi, à sa source amère je m'abreuvais,</p><p>Tant de ses plaisirs offerts j'étais assoiffés.</p><p>Et ma raison de s'abîmer dans les méandres salis</p><p>De son regard feu, la consumant jusqu'à folie</p><p>Dans une éteinte fantasme qui déchira mon être</p><p>Qui de cure, n'avait d'autre d'elle que de se repaître.</p><p>Et lorsqu'à l'amante famélique j'allais déclarer ma flamme,</p><p>La mante carmélite m'avoua se délecter des femmes.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: "Requiem",
      txt: ["<p></p><p></p><p>Ses iris esseulés dans son abysse solitaire,</p><p>Me susurrent sans cesse sa souffrance souvenir.</p><p>Sans ciller, elle s'est faite sacrifice solitaire,</p><p>Mon sacerdoce salace n'ayant su que la salir.</p><p></p><p>De la saignée, elle laisse s'écouler mon sang scélérat,</p><p>Mais sent son sans s'épuiser de mon sang qui s'en va.</p><p></p><p>Dans son abysse saumâtre aux allures solitaires,</p><p>Ses iris sagaces saisissent l'absence insensée</p><p>De son sentiment, insalubre sacrifice salutaire</p><p>De celui qui en son sein, veut son souvenir censurer.<p></p><p>De la saignée, elle laisse s'écouler son sang assassin,</p><p>Mais sans mon sang salubre, elle sent sa vie qui s'éteint.<p></p><p>Salis par ses songes souvenirs, ses iris ascétiques</p><p>S'abîment dans la solitude insensée de son abysse,</p><p>Et me lancent sans cesse d'insaisissables suppliques,</p><p>L'expression de son désir qu'enfin cesse le supplice.</p><p></p><p>De la saignée, elle laisse s'écouler son sans incertain,</p><p>Saisissant sans doute que mon sans doit s'emplir de sien.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Hasard',
      txt: ["<p></p><p></p><p>Voilà que je te vois, ma muse,</p><p>Céder à l'inconséquence du hasard</p><p>Qui fourvoie, aveugle et abuse,</p><p>À l’orée des chemins qui séparent.</p><p></p><p>Et bien qu'au temps, ton souvenir s'use,</p><p>Qu'à la famine, tu y perdes goût,</p><p>Offre à tes appétences recluses</p><p>La délivrance de ton joug.</p><p></p><p>Et s'il n'est point de hasard,</p><p>Mais seulement des rendez-vous,</p><p>Au bout de la plume d'Eluard</p><p>Se dessine notre Nous.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'J\'écris ton nom',
      txt: ["<p></p><p></p><p>Lorsque seront mêlés au sang</p><p>Qui court dans tes veines,</p><p>Les vestiges désolants</p><p>De tes passions païennes,</p><p></p><p>Iras-tu écrire mon nom ?</p><p></p><p>Lorsqu'en offrande à l'amnésie</p><p>Tu auras livré ton corps,</p><p>Afin que tombent dans l'oubli</p><p>Les stigmates du désaccord,</p><p></p><p>Pourras-tu écrire mon nom ?</p><p></p><p>Lorsque ton autre aura eu raison</p><p>De ta voie comme de ton être,</p><p>Inexorablement soumis au poison</p><p>Du mensonge et du paraître,</p><p></p><p>Sauras-tu écrire mon nom ?</p><p></p><p>Et lorsque tu ne seras plus guidée</p><p>Que par tes peurs, qui auront eu raison</p><p>De tes appétences, en quête d'une liberté</p><p>Perdue en labyrinthes abscons,</p><p></p><p>Te souviendras-tu de mon nom ?</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Succube',
      txt: ["<p></p><p></p><p>Lorsque épuisé je m'abandonne à l'onirique,</p><p>Que mon âme s'abîme au feu de mes entrailles,</p><p>Je sens, des morsures de mon succube angélique</p><p>S'écouler la douleur qui me caresse et m'assaille.</p><p>Déchire mon âme, doux Démon, je t'en supplie,</p><p>Que de mon ventre tu arraches un dernier cri,</p><p>Un râle mortuaire, pour qu'agonie enfin cesse,</p><p>Et que de ma dépouille, tes ardeurs se repaissent.</p><p>Ouvre mon ventre afin d'en arracher la vie,</p><p>Que le supplice, à son terme, m'offre l'oubli,</p><p>Pour que seul mon âme cadavre tu n'harangues,</p><p>D'une morsure impure laisse moi exsangue.</p><p>Nourris-toi de ma mort, funèbre nécrophage,</p><p>Toi qui ne sèmes pour récolter au sillage</p><p>Qu'un silence amer où se cachent tes maux,</p><p>Taciturne Cerbère à ton verbe dévot.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Amours initiatiques',
      txt: ["<p></p><p></p><p>Là, sous l'étoffe linceul</p><p>De ma petite connasse,</p><p>Louvoient les attentes puzzles</p><p>De mon désir tenace.</p><p></p><p>La petite gueuse se dévoile,</p><p>Et balance à mon regard miroir,</p><p>Les impudences abyssales</p><p>De ses territoires ivoires.</p><p></p><p>Et voilà que ma diablesse m'inonde</p><p>De ses audaces mises à nu,</p><p>De ses douceurs profondes,</p><p>De ses terres inconnues.</p><p></p><p>Enfin, offerte avec délice</p><p>À mes pupilles argentiques,</p><p>Les images glissent puis s'immiscent</p><p>Aux cœur de mes amours initiatiques.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Rien de plus...',
      txt: ["<p></p><p></p><p>Ton amour insolite,</p><p>Ta bienveillance érudite,</p><p>Ta peau ébonite</p><p>Et tes petits seins qui s'agitent,</p><p></p><p>Je ne veux rien de plus.</p><p></p><p>Effleurer tes limites,</p><p>Tes humeurs aphrodites,</p><p>Ouvrir tes portes interdites</p><p>pour goûter tes saveurs illicites,</p><p></p><p>Je ne veux rien de plus.</p><p></p><p>Ton animalité prosélyte,</p><p>Tes douceurs inédites,</p><p>Tes sonorités conduites</p><p>Vers mes mélodies explicites,</p><p></p><p>Je ne veux rien de plus.</p><p></p><p>De ce si précieux Opus,</p><p>Au secret de ton jardin,</p><p>Je ne veux rien de plus,</p><p>Je ne veux rien de moins.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Pierres',
      txt: ["<p></p><p></p><p>J'ai fait de toi ma terre</p><p>Aux espoirs fertiles,</p><p>De ton être, le dépositaire</p><p>D'une précieuse idylle.</p><p>De cantiques en cantiques,</p><p>De sagesses en béatitudes,</p><p>Mon amour extatique</p><p>Nourrit notre complétude.</p><p>J'ai fait de toi ma source,</p><p>Mon point d'eau intérieur,</p><p>Où viennent sombrer les ressources</p><p>De mes faiblesses et de mes peurs.</p><p>J'ai fait de toi mon foyer,</p><p>Le feu qui embrase mes désirs</p><p>Jusqu'à me consumer,</p><p>Me prendre, m'envahir.</p><p>J'ai fait de toi mon souffle,</p><p>Mon alizé porteur d'avenir,</p><p>La tempête où se camoufle</p><p>Les douceurs du souvenir.</p><p>J'ai fait de toi mes fondations,</p><p>Pierre sur lequel j'ai bâti mon église,</p><p>Ma foi sémaphore, mes horizons,</p><p>Mon chemin, ma voie conquise.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Le baiser',
      txt: ["<p></p><p></p><p>D’abord, de la pulpe de mes lèvres païennes,</p><p>J’irai déposer, à la commissure des tiennes,</p><p>La promesse d’un éveil, d’un feu réanimé,</p><p>Souvenir d’une caresse aux douceurs désirées.</p><p>Puis, poursuivant mon chemin vers ton sensible,</p><p>J’irai nourrir ma gourmandise à ta nuque,</p><p>Où, à tes frémissements, d’abord imperceptibles,</p><p>J’offrirai les marques de mes humidités caduques.</p><p>Enfin, revenant à ta bouche, j’irai mêler au tien</p><p>Mon souffle, comme une alliance aux accents faustiens</p><p>M’invitant à gouter à ses saveurs diablesses,</p><p>Brulantes comme la morsure d’une épice arabesse.</p><p>Là, parcourant le dessin de tes lèvres offertes,</p><p>Invitant ma langue à poursuivre la découverte,</p><p>J’emprisonnerai ton carmin charnu entre les miennes,</p><p>Me délectant de ses succulences au parfum d’Eden.</p><p>Puis, glissant en toi, j’irai investir ton être,</p><p>A la recherche de l’émoi qui saura repaître</p><p>Ton désir, appétit que j’aurai su rassasier,</p><p>Par un baiser…</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Viens',
      txt: ["<p></p><p></p><p>Viens ma muse, et souffle à mon oreille famélique,</p><p>La mélodie lascive de tes chants érotiques.</p><p>Viens ma belle, et offre à mes silences pathétiques,</p><p>Les arias salaces de tes soupirs harmoniques</p><p>Lorsque, livré à mes promesses épidermiques,</p><p>Ton corps s'éveille à mes desseins machiavéliques.</p><p>Viens petite, et réponds à mes audaces saphiques</p><p>Par tes gémissements aux accents diaboliques</p><p>Lorsque, soumises à mes errances anatomiques,</p><p>Tes chairs s’abandonnent à mes plaisirs fatidiques.</p><p>Viens diablesse, et inonde mes ardeurs syllabiques</p><p>De tes cris, déversés en torrents extatiques</p><p>Lorsque, au seuil de tes reins, mes assauts chimériques,</p><p>Entraînent tes élans en mélopées orgasmiques.</p><p>Viens…</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Lentement',
      txt: ["<p></p><p></p><p>Bercé par la mélodie lascive de son souffle lancinant</p><p>Qui enivre mes sens et m’incite, impertinent,</p><p>A larguer les amarres, je vogue à vue sur sa chair</p><p>Aux senteurs exquises de lys et d'orange amère.</p><p>Son bassin danse, et, en une transe alanguie,</p><p>Accueille la vague naissante qui soudain envahit</p><p>Son corps, sur lequel je vois perler, iridescentes,</p><p>Les moiteurs intimes de ses attentes indécentes.</p><p>Un soubresaut presqu’épileptique la fait vaciller,</p><p>Lorsque mes phalanges dévoyées viennent à célébrer</p><p>Les venelles faméliques de sa sensualité irriguée,</p><p>M’invitant à me jeter au fond de son gouffre assoiffé.</p><p>N’y tenant plus, voilà que d’un élan soulignant ses cambrures,</p><p>Elle provoque ma chute, puis exhale en un murmure,</p><p> Quelques syllabes imperceptibles aux accents suppliants,</p><p>Lentement…</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Abandon',
      txt: ["<p></p><p></p><p>De mon âme affamée de liberté,</p><p>De mes chairs insatiables et passionnées,</p><p>De mon tout, de mon rien, de tout mon être,</p><p>Nourris mes suppliques et deviens mon maître.</p><p></p><p>Contrains mon désir, jusqu'à le soumettre</p><p>À ton seul vouloir, qui seul en moi sait faire naître</p><p>Les saveurs du vice dont j'aime me repaître,</p><p>Lorsque de mes appétences tu deviens le maître.</p><p></p><p>À ton feu, je forgerai mes propres chaînes,</p><p>À ton rouet je filerai mes entraves sadiennes,</p><p>J'abandonnerai mon âme, mon tout, mon être,</p><p>Pour que de mes sens tu deviennes le maître.</p><p></p><p>Je te serai offerte, esclave et soumise,</p><p>Je ferai de ton chemin ma voie conquise,</p><p>Tant que tu sauras, à mon cœur sourd,</p><p>Offrir les mélodies de mon propre amour.</p><p></p><p>De mon âme affamée de liberté,</p><p>De mes chairs insatiables et passionnées,</p><p>De mon tout, de mon rien, de tout mon être,</p><p>Révèle-moi encore et deviens mon maître.</p>"]
    },
    {
      auteur: "FM&reg;",
      titre: 'Jusqu\'au sang',
      txt: ["<p></p><p></p><p>Lorsque son âme erre aux portes de ses songes</p><p>Aux souvenirs amers de trop nombreux mensonges,</p><p>Son corps brûle aux mémoires stigmates des caresses</p><p>Souillant sa peau qui, de fuir, n'avait de cesse.</p><p>Au sortir de ces nuits aux angoisses matinales,</p><p>Elle hurle ses silences aux mélopées lacrymales</p><p>Face aux cécités de ses miroirs sans reflets,</p><p>Qui nourrissent ses failles et écorchent ses plaies.</p><p>Elle ne sait offrir, à mes regards inquisiteurs,</p><p>Que le simulacre d'un corps fardé de pudeurs</p><p>Qui se dérobe et se mure, à l'aulne des ses peurs,</p><p>Dans un silence immuable délivrant ses froideurs.</p><p>Aux mains tendues comme aux mots qui révèlent,</p><p>Elle se refuse, et, dans un élan sacrificiel,</p><p>Abîme son être à ses remparts élevés</p><p>Comme autant de séquestres à son âme abusée.</p><p>Elle ne sait offrir, à mes regards indiscrets,</p><p>Que ses portes closes sur son intimité,</p><p>Auxquelles viennent se heurter, inexorablement,</p><p>Mes phalanges, dussent-elles y frapper jusqu'au sang.</p>"]
    },


  ],
  proses: [
    {
      auteur: "FM&reg;",
      titre: 'Léna C.',
      titre2: '(Les séquestres de la liberté)',
      txt: [
        ["<p>(Extrait)</p>"],
        ["<p><b>Encre</b><br><br>Là, aux encres de ta peau<br>Abandonnée au calligraphe,<br>Mes doigts caressent sans repos<br>La mémoire de tes affres<br>Livrés en quelques mots,<br>Épigraphe.</p><p></p><p></p><p><b>Plus jamais...</b></p><p>Encore quelques pâtés de maisons et Léna arriverait enfin devant le 5 rue du marché Saint-Honoré. Elle n'aimait guère s'aventurer dans les venelles de ces quartiers bourgeois, là où le luxe s'affiche avec ostentation derrières les vitrines des temples marchands de la place Vendôme. Une débauche d'opulence qui la confinait à l'écœurement. À l'insignifiance de ces paraîtres, elle préférait le réel de son quartier Nord, comme le sourire édenté qu'affichait le vieux Louis, clochard de son état, lorsqu'elle lui abandonnait quelques pièces ou un peu de son temps.<br>Si Dexeen n'avait pas exercé dans le quartier, Léna aurait sans doute choisi un autre salon. Seulement depuis qu'elle avait découvert le travail de la jeune tatoueuse, Léna était bien décidée à offrir sa peau au seul dermographe de cette jeune artiste.</p><p>— Bonjour, j'ai rendez-vous avec Dexeen. Je suis un peu en avance...<br>— Bonjour. Elle ne devrait plus en avoir pour longtemps. Je peux te laisser patienter dans notre espace détente ?<br>— Bien sûr !<br>— Je peux t'offrir quelque chose à boire ? Café, thé, jus de fruit ?<br>— Volontiers, merci ! Je prendrais bien un café.<br>— Je t'apporte ça...<br>Les fauteuils de la petite salle d'attente étaient aussi moelleux que confortables. Léna, après avoir bu quelques gorgées du café qu'on lui avait apporté, se mit à feuilleter un des \"Inked Magasine\" abandonnés parmi d'autres sur une petite table basse. Le titre, \"Couleur ou noir et gris ?\", lui fit prendre conscience qu'elle n'avait pas encore abordé le sujet avec Dexeen. Elle ne s'était d'ailleurs pas vraiment posée la question. Elle souhaitait simplement que son tatouage soit le plus réaliste possible. Rouge a priori...</p>"],
        ["<p>— Salut Léna ! Désolée pour le retard, j'ai dû prendre un peu plus de temps que prévu avec mon dernier client. J'ai cru qu'il allait tourner de l'œil !<br>— Ah... Tu sais mettre en confiance toi !<br>— Mais non, t'inquiète ! Le mec a juste choisi de se faire tatouer les côtes. Et c'est plutôt douloureux... Il a bien essayé de me faire croire qu'il encaissait, mais j'ai très vite senti que si je ne lui accordais pas de petits répits, j'allais le perdre ! Mais sur les fesses, c'est beaucoup moins sensible, ne t'en fais pas... Tu viens avec moi ? Je vais te montrer les différentes épreuves que je t'ai préparées.<br>— Je te suis !<br>— Tu ne m'as pas dit si tu souhaitais l'empreinte en couleur ou en noir et gris.<br>— En fait, je pensais à un rouge léger. L'idée c'est que ça fasse le plus réaliste possible. Comme si je venais de me prendre une grande claque sur le cul quoi !<br>— Ok...<br>Léna s'installa sur la table de tatouage. Elle avait bien pris soin d'enfiler un string comme le lui avait conseillé Dexeen lors de leur premier rendez-vous. La sensation lui était presque étrangère. Elle n'avait aucun problème particulier avec les strings, seulement elle préférait habituellement ne porter aucun sous-vêtement. Elle n'y attachait aucun signe de provocation ou d'indécence, mais juste une sensation incommensurable de liberté.<br>Le stencil de l'empreinte de main que Léna avait choisie étant posé, Dexeen vérifia que son dermographe fonctionnait bien, puis plongea l'aiguille dans une des capsules d'encre qu'elle avait préparées.<br>— Tu es bien installée ?<br>— Oui.<br>— Alors c'est parti ! Si c'est trop difficile, n'hésite pas à me le dire.<br>— Ok.<br>La jeune tatoueuse commença par le contour du motif. Il lui fallait être précise et concentrée, sans pour autant rester silencieuse. Dialoguer lui permettait de détourner un peu l'attention du client, et par conséquent de le contraindre à se focaliser le moins possible sur les sensations désagréables de ses aiguilles.</p><p>— Alors, explique-moi un peu ce tatouage. J'en ai tatoué des trucs bizarres, mais une empreinte de main sur une fesse, c'est bien la première fois !<br>— Comme je te le disais, j'aimerais que ça soit très réaliste. Une sorte de mode d'emploi pour les mecs... Une notice explicative !<br>— Ah oui ? Mademoiselle aime les fessées ?<br>— Disons que je trouve ça très stimulant. Alors je me dis que ça pourrait inciter ceux qui manquent d'inspiration... Ou d'audace !<br>— J'adore l'idée ! C'est ton premier tatouage ?</p>"],
        ["<p>— Non. J'en ai un sur la nuque. J'ai fait inscrire \"<i>Plus jamais</i>\".<br>— Plus jamais ?<br>— Oui. Ne \"<i>plus jamais</i>\" accepter de revive certaines choses que j'ai subies autrefois.</p>"]
      ],
      page: 0,
      scroll: 0
    },
    {
      auteur: "FM&reg;",
      titre: "Je de miroirs",
      titre2: "",
      txt: "<p>(Extrait)</p><p></p><p></p><p><b>Ça</b> (n.m) : En psychanalyse, partie pulsionnelle de la psyché humaine, qui ne connaît ni normes (interdits ou exigences), ni réalité (temps ou espace) et n'est régi que par le seul principe de plaisir, satisfaction immédiate et inconditionnelle de besoins biologiques.</p><p></p><p></p><p></p><p>- Ça va passer…<br>- Oui ?<br>- Ça finit toujours par passer. Il suffit que…<br>- Bien.</p><p>Nikki détestait ce « bien ». Il interrompait systématiquement ses séances, qu’elle en ait terminé ou non. Parfois même, comme aujourd’hui, Panéa le glissait au beau milieu d’une de ses phrases. Mille fois elle s’était juré de faire remarquer à son psychanalyste à quel point elle trouvait impolies ces interruptions brutales. Chaque fois que cela se produisait, elle sentait une pointe de colère l’envahir. Et chaque fois, elle tentait de réprimer le feu de la frustration qui lui empourprait le visage. Jamais elle n’aurait osé confronter son analyste. Pas plus qu'elle n’aurait osé confronter quiconque…</p><p>Julien Panéa chaussa ses lunettes avant d'ouvrir son agenda.</p><p>- Je serai absent ce jeudi, on peut trouver une date pour reporter la séance ?<br>- Euh… oui.<br>- Alors... Mercredi 27 à 10h30 ? <p><p>- Je fais l’ouverture à 11h00 le mercredi. Il faudrait que je demande à mon patron si je peux commencer une heure plus tard. Je vous appelle pour confirmer ?<br>- Oui. Si vous préférez, je peux aussi vous recevoir à 20h30 ce mercredi…<br>- Parfait ! Je viendrai directement après mon service.<br>- Très bien, mercredi 27, 20h30…</p><p>Panéa se leva afin de raccompagner sa patiente jusqu’à sa porte. Nikki lui tendit son dû, lui serra la main, puis quitta le cabinet.<br>La matinée s’achevait pour Panéa. Le temps de manger et il reprendrait ses séances en début d’après midi avec une nouvelle patiente. Pour l’heure, il avait rendez-vous avec son épouse au Bon Pantagruel, un restaurant du centre ville où il avait ses habitudes. Le temps pour lui de donner quelques croquettes au chat et il se mettrait en route.</p><p>*<br>* *</p><p>Agrippée à une des barres de sécurité du bus 51, Nikki pensait à ce qu'elle allait bien pouvoir manger ce midi. Elle se laissa envahir par les saveurs de ses plats préférés afin de fuir le malaise louvoyant qui s'emparait d'elle, chaque fois qu'elle devait subir la trop oppressante promiscuité des corps qui frôlaient le sien aux heures de pointe. Tagliatelles à la carbonara, gratin dauphinois, curry de crevettes... Non ! Ce midi, elle mangerait japonais.<br>Une douleur fulgurante la tira de ses songes lorsque le bus freina brusquement, réveillant la vilenie de son dos tortionnaire. Les douces saveurs culinaires qui caressaient son imaginaire laissèrent place aux malodorantes senteurs des corps qui l'entouraient et dont elle se sentait prisonnière.<br>Arrêt Vincent Scotto. Son calvaire prit fin lorsque elle put enfin s'extirper de cette étreinte forcée, et parcourir à pieds les quelques centaines de mètres qui la séparaient de son appartement. Parmi le courrier qu'elle avait prit soin de relever, Nikki reconnut immédiatement le pourpre des enveloppes que Lilie, sa meilleure amie, avait l'habitude d'utiliser. Lilie avait toujours fait partie de sa vie. Des bancs écoliers de sa plus tendre enfance jusqu'à leur récente collocation, elles ne s'étaient pour ainsi dire jamais quittées.</p><p>Aussi, dès lors que Lilie avait déménagé pour rejoindre son homme, les deux jeunes femmes avaient décidé d'entretenir une relation épistolaire fournie. Toutes deux détestaient les trop longues conversations téléphoniques, et s'accordaient à penser que l'écrit était bien plus propice à la confidence.</p><p>Elle glissa donc l'enveloppe pourpre au fond de son sac, se délectant par avance des petites gorgées brûlantes de thé au jasmin qui accompagneraient sa lecture. Puis, plongeant la main dans le bocal où elle conservait ses pourboires, elle en tira quelques billets et se mit en route pour son japonais préféré, \"Au cent sushis\".</p><p> *<br>* *</p><p> Julien Panéa avait réinvesti son cabinet. Confortablement installé dans son vieux fauteuil aux accoudoirs patinés, il s'était plongé dans la lecture de \"Une saison chez Lacan\" de Pierre Ray, en attendant une nouvelle patiente pour un premier entretien.<br>Lorsqu'il entendit la porte de sa salle d'attente s'ouvrir, il laissa son livre pour installer une chaise face à son fauteuil. S'il acceptait de suivre sa nouvelle patiente, celle-ci ne pourrait connaître les joies du divan que lorsqu'elle aurait manifesté son désir d'entrer en analyse. En attendant, les entretiens se dérouleraient en face à face thérapeutique.<br>L'aménagement terminé, Panéa ouvrit la porte de sa salle d'attente pour accueillir la jeune femme. Lorsqu'il aperçut celle-ci, Panéa crut d'abord qu'il s'était trompé en consultant son agenda. Il se souvenait pourtant bien avoir noté le prochain rendez-vous de Nikki au mercredi 27 à 20h30...<br>La jeune femme se leva énergiquement, s'avançant vers son psychanalyste pour lui tendre la main.</p><p>- Bonjour, Lilie Dee, enchantée !<br>- Bonjour...<p><p>Panéa ne laissa rien transparaître de son trouble. Indiquant simplement de la main l'entrée de son cabinet, il se demanda comment il avait pu passer à côté de ça. Ça... \"Ça va passer\". Il avait bien délibérément interrompu sa dernière séance avec Nikki sur cette phrase, espérant se faire entendre de son inconscient, mais de là à voir s'incarner une seconde topique..</p><p>À moins d'être confronté à une gémellité... Bien sûr que non ! Lilie Dee ! Elle ne pouvait être que la Lilie dont Nikki lui avait maintes fois parlé…<p><p>- Asseyez-vous, je vous en prie, lui dit-il en désignant la chaise qu'il avait installée pour l'occasion. Dites-moi ce qui vous amène.<br>- Un problème de claustrophobie.<br>- Oui ? C'est curieux de venir voir un psychanalyste pour un problème de claustrophobie. Généralement on s'oriente plutôt vers les thérapies plus courtes des psychologues. Non ?<br>- C'est mon ami qui m'a conseillé de prendre rendez-vous avec un analyste...<br>- Votre ami ?<br>- Oui. Enfin mon compagnon si vous préférez. Il a fait beaucoup de recherches sur la psychologie pour son travail... Enfin bref, il m'a dit que ma claustrophobie n'était qu'un symptôme et qu'un psychologue ne pourrait que déplacer ce symptôme. J'avoue que tout ça n'est pas très clair pour moi... Mais je lui fais confiance. J'ai donc pris rendez-vous avec vous.<br>- Pourquoi moi ?<br>- J'ai consulté les pages jaunes et j'ai choisi au hasard.<br>- Et bien vous pouvez constater qu'il n'y a pas de hasard, mais seulement des rendez-vous !<br>- C'est grave si je vous dis que je ne comprends pas ce que vous venez de me dire ?<br>- Absolument pas. Vous êtes là pour dire. Quand à comprendre ce que je vous dis, <i>Ça</i> viendra... Parlez-moi de votre claustrophobie. Elle se manifeste comment ?<br>- Et bien je ne supporte pas de me sentir emprisonnée dans des endroits exiguës, comme des ascenseurs, des cagibis ou à l'arrière des voitures trois portes... Enfin ce genre de trucs. Ça me rend dingue ! Je ne peux plus respirer, je perds tous mes moyens. J'angoisse tellement que parfois j'ai l'impression que je vais m'évanouir !<br>- Je vois. Et bien si vous le souhaitez, je pense que l'on peut travaillez ensemble sur votre problématique.<br>- C'est tout ? C'est déjà fini ?<br>- Il ne s'agissait que d'un premier rendez-vous. Un entretien afin de savoir si je peux vous convenir. Nous nous verront deux fois par semaine.<br>- Vous prenez combien par séance ?<br>- Cent euros.<br>- Ah oui, cent euros !</p><p>- Tout gain s'accompagne d'une perte.<br>- Si vous le dites...</p><p>*<br>* *</p><p>Épuisée par une trop longue journée de travail, Nikki, à peine rentrée chez elle, n'avait qu'une seule idée en tête. Prendre une douche qui, l'espérait-elle, pourrait laver un peu des regards lubriques ou des remarques salaces de ses clients avinés.<br>Sous la pluie brûlante de sa douche italienne, il lui sembla que le temps s'était arrêté. Lorsqu'elle revint de son voyage intérieur, elle ne distinguait plus les larmes des ruissèlements de l'eau qui sillonnait son visage. À la vue de cette eau qui disparaissait dans le siphon, elle se mît à espérer que le jet qui martelait son crâne puisse la laver également d'une partie de ses pensées ; que celles-ci puissent aussi disparaître, emportées vers les eaux usées.<br>Ce soir elle se ferait une soirée séries avec un bon plateau repas. Charcuterie corse, fromage et Chambolle Musigny au programme.<br>Au sortir de sa douche, elle enfila son shorty preferé, sur lequel on pouvait lire \"on se connait ?\", attrapa le premier teeshirt propre qui lui passa sous la main, puis fila sans attendre vers sa cuisine, afin de composer son plateau télé.<br>Rassasiée, elle se posa quelques minutes à sa fenêtre, le temps de griller une cigarette. Elle prit le temps de profiter de ce moment particulier qu'elle aimait tant, laissant ses pensées s'envolaient aux bras de ses volutes de fumée. Puis lui vint l’envie de relire la lettre de Lilie.</p><p><i>« Coucou ma belle !</i></p><p><i>Bientôt quinze jours que tu ne me donnes plus de nouvelles ! Laisse-moi deviner… Non, mieux, je te fais un QCM :</i></p><p><i>A. Tu as eu un accident, tu t’es réveillée à l’hôpital et en parfaite amnésique, tu ne te souviens plus ni de mon existence, ni de ton nom (je t’aide, ton nom, avant ton opération c’était Yannick, mais après les implants mammaires et le traitement hormonal, on s’est dit que Nikki ça collerait mieux avec tes gros seins ! Oui, ceux-là même que je te jalouse !)</i><br></p><p><i>B. Tu as rencontré un homme sublime et très riche un soir à la Rhumerie. Les trois litres de rhum que tu as certainement sirotés ont réussi à te décoincer au point de lui adresser la parole. Ensuite tu ne te souviens plus de rien jusqu’à ce que tu te réveilles, échevelée et le crâne en feu… Et là, tu sirotes encore un rhum, mais sur une plage de Copacabana !</i><br><i>C. Tu l’as revu, il est reparti et tu passes tes soirées en guenilles, à bouffer n’importe quoi devant ta télé…</i></p><p><i>Appelle-moi, je me fais du souci. Et puis je t’ai trouvé un nouveau prétendant ! Bien sous tous rapports, beau, un petit cul à croquer, drôle… Bon ok, le dernier était un peu lourd... mais super bien foutu, tu ne peux pas le nier. Non, celui-là est super bien ! Je t’assure. Il faut absolument que tu viennes me voir, j’organise un diner et on te marie !</i><br><i>De mon côté tout va bien, Job m’a dit qu’il m’emmènerait à Montréal cet été si son éditeur lui prenait son dernier manuscrit. Du coup, j’ai instauré une nouvelle règle : No sex en dessous de 10 pages par jour ! Depuis le temps que je rêve d’y aller…</i><br><i>Donne-moi des nouvelles Nikki, tu me manques.</i><br><i>Pleins de bisous,</i></p><p align=\"right\"><i>Lilie »</i></p><p align=\"right\"><p><p>*<br>* *</p><p></p><p>Lorsque le cauchemar fut assez insupportable pour que Nikki s'en échappe, le corps ruisselant de ses terreurs oniriques, les aiguilles de sa montre indiquaient 3h40. Elle abandonna simplement le moelleux de son canapé, sans même prendre un instant pour se remettre de son réveil brutal.<br>Elle avait tant de fois éprouvé ce mal-être qu'il avait fini par lui sembler aussi naturel qu'une gorge asséchée ou une envie pressante qui vous tire du sommeil pour être satisfaite.<br>Elle dut littéralement trainer son corps jusqu'à sa chambre, avec, à sa suite, la couette sous laquelle elle s'était réfugiée pour sa soirée séries. Un corps dont la vie semblait s'être échappée, à l'instar des monstruosités de <i>The Walking Dead</i> devant lesquels elle avait fini par s'endormir.</p><p>Elle réunit le peu de force qui lui restait pour jeter sa couette sur son lit, et se laissa tomber sur son matelas Tempur hors de prix, sensé, au dire du vendeur prolixe qui lui en avait venté les mérites, soulager ses maux de dos et lui assurer des nuits réparatrices.<br>Foutaises ! Son esprit trentenaire se réveillait chaque matin affublé d'un corps en fin de carrière...<br>Elle retourna à son sommeil l'esprit vide, sans même conjuguer l'espoir d'échapper à un nouveau cauchemar...</p><p>*<br>* *</p><p>- Un expresso macchiatto et un muffin s'il vous plaît.<br>- Sur place ou à emporter ?<br>- Sur place.<p><p>Une journée sans son délice caféiné ne pouvait être, pour Nikki, une journée tout à fait parfaite. Aussi avait-elle l'habitude de se rendre, chaque fois que cela lui était possible, dans son temple du café bio, où crème maison, arabica et muffins n'avaient nuls autres pareils.<br>Elle savait pertinemment que sa première gorgée lui brûlerait les lèvres. Mais elle savait également qu'après cela, un nouveau monde s'ouvrirait à elle, effaçant spleen et cauchemars du jour ou de la nuit précédente.<br>Elle croqua à pleines dents dans son muffin, sortit un bloc note et un stylo de son sac, puis, ayant reposé délicatement son gâteau, commença à griffonner la réponse qu'elle enverrait à Lilie. Elle n'aimait guère se lancer directement sur son papier à lettres. Elle pensait plus vite qu'elle ne pouvait écrire, ce qui la conduisait généralement à raturer ses phrases. Elle considérait les lettres manuscrites comme de beaux objets qui devaient être soignés. Si ce n'était dans le fond, qu'au moins ce le soit dans la forme. Il lui arrivait parfois de froisser une dizaine de pages, simplement parce qu’elle n’était pas entièrement satisfaite de la qualité de son écriture.</p><p>*<br>* *</p><p>Julien Panéa n’était pas vraiment à sa séance. Il écoutait vaguement les griefs amers d’un jeune homme écrasé par la figure paternelle.</p><p>Ce dernier se voyait systématiquement saisi d’angoisses insurmontables, chaque fois qu’il pénétrait dans le nouveau restaurant dans lequel il avait investi argent et avenir. Restaurant. Reste au rang. Son travail le remettait systématiquement face à l’injonction paternelle symbolique, lui commandant de rester à sa place pour ne pas dépasser le père. Panéa en avait suffisamment entendu. Il se contentait de répéter à l’occasion des silences de son patient, ses habituelles « associez librement », espérant ainsi, non seulement faire parler l’inconscient de son analysant, mais surtout que ce dernier puisse s’entendre.<br>Non, Panéa n’était pas vraiment à sa séance. Il ne pensait qu’à la suivante. Qui se présenterait aujourd’hui ? Nikki ou Lilie ? Le rendez-vous avait été pris par Lilie, mais il se demandait ce qu’il devrait faire si c’était Nikki qui quitterait sa salle d'attente. Il ne pouvait pas souligner l’erreur de rendez-vous sans risquer de provoquer d’énormes dégâts.<p><p>- …mon chien à dresser. Il a appris à répondre à trois ordres hier. « Assis », « Aux pieds » et « À ta place », il a…<br>- Bien !<p><p>Panéa ne trouverait pas meilleur moment pour interrompre la séance. « À ta place » ! Le jeune homme l’aura-t-il seulement entendu ?<br>Après avoir raccompagné son patient à sa porte, Panéa constata qu’il avait une dizaine de minutes devant lui avant l’heure de son prochain rendez-vous. Il en profita pour monter à l’étage, là où se trouvaient ses appartements. Il s'y servit un rafraichissement puis passa un coup de fil à son épouse. Il devait la prévenir qu’il rentrerait plus tard que prévu le soir même, sa conférence ayant été retardée pour des raisons logistiques.<br>Ceci fait, il redescendit pour aller ouvrir la porte de sa salle d’attente.</p><p>- Bonjour monsieur Panéa !<p><p>Au ton de ce « bonjour », l’analyste su immédiatement qu’il avait affaire à Lilie. Nikki était beaucoup plus réservée, beaucoup plus dans la retenue. Ses « bonjours » ressemblaient plus à des « excusez-moi de vous déranger ».</p><p>- Bonjour Lilie. On y va ?<br>- Je vous suis !</p>",
      page: 0,
      scroll: 0
    },
    {
      auteur: "FM&reg;",
      titre: "Le prophète",
      titre2: "",
      txt: [
        [""],
      ],
      page: 0,
      scroll: 0
    },
    {
      auteur: "FM&reg;",
      titre: "Job O. Simaurre",
      titre2: "",
      txt: [
        [""],
      ],
      page: 0,
      scroll: 0
    },
    {
      auteur: "FM&reg;",
      titre: "La Merdveille",
      titre2: "",
      txt: [
        [""],
      ],
      page: 0,
      scroll: 0
    },

  ],
  nondit: [
    {
      auteur: "Fred",
      titre: "Peintures numériques",
      titre2: "",
      txt: [
        [
          ["Atlas", "atlas"], ["Avant Toile", "avant"], ["Avers", "avers"], ["Derme", "derme"],
          ["Epiderme", "epiderme"], ["Fumée", "fumee"], ["Mère", "mere"], ["Tatoo", "tatoo"],
          ["Milo", "milo"], ["Offrande", "offrande"], ["Rodin", "rodin"], 
        ]
      ],
      type: "images",
      url: "fred/"
    },
    {
      auteur: "VV",
      titre: "Soubotine",
      titre2: "",
      txt: [
        [
          ["Bisou", "bisou"], ["Bisou2", "bisou2"], ["Bonobo", "bonobo"], ["Couette", "couette"],
          ["Ecolière", "ecoliere"], ["Juste", "juste"], ["Juste2", "juste2"], ["Pirate", "pirate"],
          ["Poète", "poete"], ["Sage", "sage"], ["Simius", "simius"], ["Simius2", "simius2"],
          ["Taiji", "taiji"], ["Trésor", "tresor"], ["Trésor2", "tresor2"], ["Zen", "zen"],
        ]
      ],
      type: "images",
      url: "soubotine/",
    },
  ]
};
const names = ['proses', 'poesies', 'nondit'];
const mobile = 600;
const divs = {};
const $rubriques = document.querySelector('.rubriques');
const $box = document.getElementById('box');
const $inbox = document.getElementById('inbox');
const $excerptClose = document.getElementById('excerpt-close');
let firstY;

const rubriques = {
  abs: false,
  clicked: '',
  height: 0,
  top,
  allVisible() {
    $box.style.opacity = '';
    names.forEach(name => {
      divs[name].style.opacity = 1;
      divs[name].style.zIndex = '';
    });
  },
  getHeight() {
    let height = 0;
    if (window.innerWidth > mobile) {
      height = box(divs.proses).height;
    } else {
      const parent = document.getElementById('box-rubriques').getBoundingClientRect();
      height = parent.height - ( 0.04 * parent.width);
    }
    return height;
  },
  refresh(anim) {
    $box.style.transition = (anim) ? '' : '0s';
    if (rubriques.abs && window.innerWidth <= mobile) $rubriques.style.height = 0;
    const rubHeight = box(divs.proses).height;
    const rubWidth = box(divs.proses).width;
    let space = 0;
    if (window.innerWidth > mobile) {
      space = ( box($rubriques).width - rubWidth * 3 ) / 6;
    } else {
      space = this.getHeight() - rubHeight * 3;
      space = space < 0 ? 0 : space / 6;
    }
    // udapte rubriques > divs
    names.forEach((name, i) => {
      if (window.innerWidth > mobile) {
        // version desktop
        this[name] = {
          left: rubWidth * i + space * (2 * i + 1),
          top: 0
        };
        if (this.clicked) {
          this[name].left = space;
        }
      } else {
        // version mobile
        this[name] = {
          left: 0,
          top: rubHeight * i + space * ( 2 * i + 1)
        };
        if (rubriques.clicked) {
          this[name].top = space;
        }
      }
      divs[name].style.left = this[name].left + 'px';
      divs[name].style.top = this[name].top + 'px';
    });

    // update box
    let boxHeight = 0;
    // 0.035 = valeur de $box.paddingLeft
    const padding = box($rubriques).width * 0.035;
    $excerptClose.style.left = `${padding}px`;
    if (window.innerWidth > mobile) {
      // animation horizontale (desktop)
      boxHeight = this.getHeight();
      $box.style.top = '-7%';
      $inbox.style.height = `${this.getHeight()}px`;
      if (this.clicked) {
        $box.style.left = `${rubWidth + space}px`;
      } else {
        $box.style.left = `${box($box).width + rubWidth + space}px`;
      }
    } else {
      // animation verticale (mobile)
      $box.style.left = 0;
      $box.style.top = `${rubHeight + space}px`;
      boxHeight = this.getHeight() / 1.55;
      $inbox.style.height = `${this.getHeight() / 1.55}px`; // ?
      if (this.clicked) {
        $box.style.top = `${rubHeight + space}px`;
      } else {
        $box.style.top = `${boxHeight + this.getHeight() / 1.55}px`;
      }
    }

    if (!this.abs) return;
    if (this.getHeight() < boxHeight + rubHeight && window.innerWidth <= mobile) {
      $rubriques.style.height = `${boxHeight + rubHeight}px`;
    } else {
      $rubriques.style.height = `${this.getHeight()}px`;
    }
  }
};

window.addEventListener('resize', refresh);
window.addEventListener('scroll', bandeau);
document.querySelector('#reader').addEventListener('touchstart', middleware('touchstart'));
document.querySelector('#reader').addEventListener('mousewheel', middleware('mousewheel'));
document.querySelector('#reader').addEventListener('mousemove', middleware('mousemove'));
document.querySelector('#reader').addEventListener('touchmove', middleware('touchmove'));
document.querySelector('#inbox').addEventListener('touchstart', middleware('touchstart'));
document.querySelector('#inbox').addEventListener('mousewheel', middleware('mousewheel'));
document.querySelector('#inbox').addEventListener('mousemove', middleware('mousemove'));
document.querySelector('#inbox').addEventListener('touchmove', middleware('touchmove'));
document.querySelector('#prev').onclick = () => changePage(-1);
document.querySelector('#next').onclick = () => changePage(1);
document.querySelector('#popup-prev').onclick = () => changeView(-1);
document.querySelector('#popup-next').onclick = () => changeView(1);
document.querySelector('#close').onclick = closeReader;
document.querySelector('#popup-close').onclick = closePopup;
$excerptClose.onclick = () => click(rubriques.clicked);
document.querySelector('#reader-container').onclick = (e) => closeOver(e, closeReader);
document.querySelector('#popup-container').onclick = (e) => closeOver(e, closePopup);

function bandeau() {
  const $header = document.querySelector('.header');
  const $bandeau = document.querySelector('.bandeau');
  const vheader = box($header).height;
  const vbandeau = box($bandeau).height;
  let scroll = window.scrollY;
  if (scroll >= vheader - vbandeau) {
    $header.style.top = `${- vheader + vbandeau + scroll}px`;
  } else {
    $header.style.top = 0;
  }
  let bottom = $header.getBoundingClientRect().bottom - vbandeau;
  if (bottom < 2) bottom = 0;
  if (bottom >= vheader * 0.25) bottom = vheader * 0.25;
  $bandeau.style.bottom = `${bottom}px`;
}
function box(el) {
  const box = {
    height: el.getBoundingClientRect().height,
    width: el.getBoundingClientRect().width,
  };
  return box;
}
function changePage(nb) {
  let [rubr, txtNb, page, ] = content.reading;
  if (rubr === 'proses') {
    content.reading = [rubr, txtNb, page + nb, 0];
    content[rubr][txtNb].page = page + nb;
    content[rubr][txtNb].scroll = 0;
  } else {
    content.reading = [rubr, txtNb + nb, 0, 0];
    txtNb = txtNb + nb;
    // ajouter les conditions avant d'effectuer + nb
    if (txtNb < 0) {
      txtNb = content[rubr].length - 1;
    } else if (txtNb > content[rubr].length - 1) {
      txtNb = 0;
    }

  }
  reader(rubr, txtNb);
}
function changeView(nb) {
  let [rubr, index, page, ] = content.reading, i = content.viewing;
  const liste = content[rubr][index].txt[page];
  let view = i + nb;
  if (view < 0) {
    view = liste.length - 1;
  } else if (view > liste.length - 1) {
    view = 0;
  }
  content.reading[3] = view;
  popup(content.reading);
}
function click(name) {
  if (rubriques.abs && rubriques.clicked !== name) return;
  rubriques.clicked = rubriques.abs ? '' : name;
  $box.style.opacity = 1;
  // si on reclique : clicked = ''
  if (rubriques.clicked === '') {
    rubriques.refresh(true);
    rubriques.allVisible();
    setTimeout(toggle, 210);
    return;
  }
  toggle();
  excerpt(name);
  names.forEach(namediv => {
    if (namediv === name || !rubriques.abs) {
      divs[namediv].style.left = rubriques[name].left + 'px';
      divs[namediv].style.opacity = 1;
      divs[name].style.zIndex = 2;
    } else {
      divs[namediv].style.opacity = 0;
    }
  });
}
function closeOver(e, callback) {
  if (e.target.className !== 'over') return;
  callback();
}
function closeReader() {
  const txt = document.querySelector('#reader');
  const scroll = txt.scrollTop;
  const [rubr, txtNb, page,] = content.reading;
  content[rubr][txtNb].page = page;
  content[rubr][txtNb].scroll = scroll;
  document.querySelector('#reader-container').style = '';
  document.body.style = '';
}
function closePopup() {
  document.querySelector('#popup-container').style = '';
  document.querySelector('#reader-container').style.display = 'flex';
}
function excerpt(rubr) {
  let txt = '';
  const $inbox = document.querySelector('#inbox');
  content[rubr].forEach((obj, i) => {
    txt += `<p onclick= 'reader("${rubr}", ${i})'>${obj.titre}</p>`;
  });
  $inbox.innerHTML = txt;
}
function init() {
  // on peuple divs
  names.forEach(name => {
    divs[name] = document.querySelector(`.${name}`);
  });
  // ajout des onclick
  names.forEach((name) => {
    divs[name].addEventListener('click', () => click(name), false);
  });
  rubriques.refresh();
  refresh();
}
function middleware(eventName) {
  let prevEvent;
  if (eventName === 'mousewheel') {
    return function wheel(e) {
      e.preventDefault();
      const oldScroll = e.currentTarget.scrollTop;
      if (content.reading[0] === 'nondit') {
        e.currentTarget.scrollTop += e.deltaY / 2;
      } else {
        e.currentTarget.scrollTop += e.deltaY / 4;
      }
      if (oldScroll !== e.currentTarget.scrollTop) {
        e.preventDefault();
      }
    };
  }
  if (eventName === 'mousemove') {
    return function move(e) {
      e.preventDefault();
      if (e.buttons && prevEvent && content.reading[0] !== 'nondit') {
        e.currentTarget.scrollTop += prevEvent.screenY - e.screenY;
      }
      prevEvent = e;
    };
  }
  if (eventName === 'touchstart') {
    return function touchstart(e) {
      firstY = e.touches[0].pageY;
    };
  }
  if (eventName === 'touchmove') {
    return function touchmove(e) {
      e.preventDefault();
      if (firstY) {
        e.currentTarget.scrollTop += firstY - e.touches[0].pageY;
      }
      firstY = e.touches[0].pageY;
    };
  }
}
function popup([rubr, index, page, i]) {
  const $img = document.querySelector('#popup-container img');
  document.querySelector('#popup-container').style.display = 'flex';
  document.querySelector('#reader-container').style.display = '';
  document.body.style.overflow = 'hidden';
  content.viewing = i;
  const obj = content[rubr][index];
  const image = obj.txt[page][i];
  const src = `${content.url + obj.url}${image[1]}.jpg`;
  document.querySelector('#popup-titre').innerHTML = `<cite>${image[0]} - (${obj.auteur})</cite>`;

  $img.style = '';
  $img.onload = () => resize($img);
  $img.src = src;
}
function reader(rubr, index) {
  const obj = content[rubr][index];
  const $reader = document.querySelector('#reader'); 
  const $texte = document.querySelector('#texte');
  const $pageNb = document.querySelector('#pageNb');
  document.querySelector('#reader-container').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // document.body.style.marginRight = '17px';

  // on sauvegarde l'objet lu (rubr, textNb, page, scroll) dans content
  let { page = 0, scroll } = obj;
  content.reading = [rubr, index, page, scroll];
  $texte.innerHTML = '';
  $pageNb.innerHTML = '';
  if (rubr !== 'nondit') {
    document.querySelector('#reader-box').style.borderBottom = '';
    // affichage proses ou poésies
    if (page === 0) {
      if (rubr === 'proses') {
        $texte.innerHTML = `<p></p><p></p><p></p><p></p>`;
        $texte.innerHTML += `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += `<h3>${obj.titre2}</h3>`;
        $texte.innerHTML += `<p></p>`;
      } else {
        $texte.innerHTML = `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += '<p></p>';
      }
    } else {
      $pageNb.innerHTML = page;
    }
    $texte.classList.remove('galerie');
    $texte.innerHTML += obj.txt[page];
  } else {
    document.querySelector('#reader-box').style.borderBottom = '4px solid #fffcf5';
    // affichage du non-dit (miniatures)
    let txt = '';
    const obj = content[rubr][index];
    for (let i = 0; i < obj.txt[page].length; i++) {
      const image = obj.txt[page][i];

      const srcThumb = `${content.url + obj.url}tbn_${image[1]}.jpg`;
      txt += `<figure onclick='popup(["${rubr}",${index}, ${page}, ${i}])' class='thumb'><img src='${srcThumb}' alt='${image[0]} - Auteur : ${obj.titre}'>
      <figcaption>${image[0]}</figcaption></figure>`;
    }
    $texte.classList.add('galerie');
    $texte.innerHTML += txt;
  }
  //on scroll la boite reader (qui contient le texte)
  $reader.scrollTop = scroll;
  // on affiche les boutons #prev et #next
  let next, prev;
  if (page !== 0) {
    prev = true;
  }
  if (page < obj.txt.length - 1) {
    next = true;
  }
  if (rubr === 'poesies') {
    $texte.style.textAlign = 'left';
    if (box($texte).height === box($reader).height) {
      $texte.classList.add(('texteVerticalCenter'));
    } else {
      $texte.classList.remove(('texteVerticalCenter'));
    }
    prev = next = true;
    document.querySelector('#reader-titre').innerHTML = '';
  } else {
    $texte.style.textAlign = '';
    $texte.classList.remove(('texteVerticalCenter'));
    document.querySelector('#reader-titre').innerHTML = `<cite>${obj.titre}</cite> - (${obj.auteur})`;
  }
  document.querySelector('#prev').style.height = prev ? '' : '0';
  document.querySelector('#next').style.height = next ? '' : '0';
}
function refresh(e) {
  bandeau();
  // pas d'anim des rubriques et de l'excerpt si resize
  let anim = (!e || e.eventName === 'resize') ? true : false;
  rubriques.refresh(anim);
  if (document.querySelector('#popup-container').style.display === 'flex') {
    resize(document.querySelector('#popup-container img'));
  }
}
function resize($img) {
  // calculer 2 ratios (width : container / originale), (height : container / originale)
  // conserver celui qui vérifie (originale * ratio) < container
  // si les deux vérifient la condition, prendre le plus grand
  // margin_top + margin-bottom + 2 * border = 24 (px)
  const marginH = box(document.querySelector('#popup-titre')).height + 35 + 24;
  let ratioWidth = (window.innerWidth - 4) / box($img).width;
  let ratioHeight = (window.innerHeight - marginH) / box($img).height;
  if (ratioWidth * box($img).height > window.innerHeight - marginH) ratioWidth = 0;
  if (ratioHeight * box($img).width > window.innerWidth - 4) ratioHeight = 0;
  let ratios = [ratioWidth, ratioHeight];
  const ratio = ratios.reduce((acc, curr) => Math.max(acc, curr), 0);
  // calcul de la largeur de l'image
  let width = box($img).width * ratio - 4;
  $img.style.width = `${width}px`;
  $img.style.maxWidth = `${$img.naturalWidth}px`;
  // on ajuste la largeur pour ne pas dépasser naturalWidth, si besoin
  width = (width > $img.naturalWidth) ? $img.naturalWidth : width;
  document.querySelector('#popup-nav').style.maxWidth = `${width * 0.95}px`;
}
function toggle() {
  let txt = '';
  if (!rubriques.abs) {
    $rubriques.style.height = `${rubriques.getHeight()}px`;
    rubriques.abs = true;
    txt = 'absolute';
  } else {
    $rubriques.style.height = '';
    rubriques.abs = false;
  }
  names.forEach(name => {
    divs[name].style.position = txt;
  });
  if (rubriques.abs) refresh();
}

init();