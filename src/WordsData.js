class Data extends Object {
  constructor() {
    super();
    this.wordsList = this.getData();
  }

  setData(wordsList) {
    localStorage.setItem("myWords", JSON.stringify(wordsList));
  }

  getData() {
    if (localStorage.getItem("myWords")) {
      this.wordsList = JSON.parse(localStorage.getItem("myWords"));
    } else {
      this.wordsList = this.defaultData();
    }

    return this.wordsList;
  }

  defaultData() {
    const wordsList = [
      {
        rus: "кулак",
        eng: "fist",
        transcription: "[fɪst]",
        association: "фисташки"
      },
      {
        rus: "кирпич",
        eng: "brick",
        transcription: "[brɪk]",
        association: "брикет"
      },
      {
        rus: "парик",
        eng: "wig",
        transcription: "[wɪg]",
        association: "вигвам"
      },
      {
        rus: "мел",
        eng: "chalk",
        transcription: "[tʃɔːk]",
        association: "чётки"
      },
      {
        rus: "спичка",
        eng: "match",
        transcription: "[mætʃ]",
        association: "меч"
      },
      {
        rus: "отряд (военный)",
        eng: "troop",
        transcription: "[truːp]",
        association: "труп"
      },
      {
        rus: "коготь",
        eng: "claw",
        transcription: "[klɔː]",
        association: "клоун"
      },
      {
        rus: "свёкла",
        eng: "beet",
        transcription: "[biːt]",
        association: "бита"
      },
      {
        rus: "клещ",
        eng: "mite",
        transcription: "[maɪt]",
        association: "майка"
      },
      {
        rus: "ствол дерева",
        eng: "trunk",
        transcription: "[trʌŋk]",
        association: "трактор"
      },
      {
        rus: "ручей",
        eng: "creek",
        transcription: "[kriːk]",
        association: "крик"
      },
      {
        rus: "причал",
        eng: "quay",
        transcription: "[kiː]",
        association: "кит"
      },
      {
        rus: "крыльцо",
        eng: "porch",
        transcription: "[pɔːʧ]",
        association: "почтальон"
      },
      {
        rus: "грабить",
        eng: "rob",
        transcription: "[rɒ,b]",
        association: "робот"
      },
      {
        rus: "киоск",
        eng: "stall",
        transcription: "[stɔːl]",
        association: "стол"
      },
      {
        rus: "сарай",
        eng: "shed",
        transcription: "[ʃɛd]",
        association: "шедевр"
      },
      {
        rus: "грабли",
        eng: "rake",
        transcription: "[reɪk]",
        association: "рейка"
      },
      {
        rus: "подошва",
        eng: "sole",
        transcription: "[səʊl]",
        association: "соль"
      },
      {
        rus: "пряжка",
        eng: "buckle",
        transcription: "[ˈbʌkl]",
        association: "бак"
      },
      {
        rus: "гипс",
        eng: "cast",
        transcription: "[kɑːst]",
        association: "кастрюля"
      },
      {
        rus: "кран",
        eng: "tap",
        transcription: "[tæp]",
        association: "теплица"
      },
      {
        rus: "лопата",
        eng: "shovel",
        transcription: "[ˈʃʌvl]",
        association: "щавель"
      },
      { rus: "пила", eng: "saw", transcription: "[sɔː]", association: "сок" },
      {
        rus: "санки",
        eng: "sled",
        transcription: "[slɛd]",
        association: "след"
      },
      {
        rus: "шайба",
        eng: "puck",
        transcription: "[pʌk]",
        association: "пакет"
      },
      {
        rus: "весло",
        eng: "paddle",
        transcription: "[pædl]",
        association: "педаль"
      },
      {
        rus: "монах",
        eng: "monk",
        transcription: "[mʌŋk]",
        association: "манго"
      },
      {
        rus: "пятно",
        eng: "stain",
        transcription: "[steɪn]",
        association: "стена"
      },
      {
        rus: "чердак",
        eng: "attic",
        transcription: "[ˈætɪk]",
        association: "этикетка"
      },
      {
        rus: "очередь",
        eng: "line",
        transcription: "[laɪn]",
        association: "лайка"
      },
      {
        rus: "багажник",
        eng: "trunk",
        transcription: "[trʌŋk]",
        association: "танк"
      },
      {
        rus: "фургон",
        eng: "van",
        transcription: "[væn]",
        association: "вентилятор"
      },
      {
        rus: "грузовик",
        eng: "lorry",
        transcription: "[ˈlɒrɪ]",
        association: "лорд"
      },
      {
        rus: "трюм",
        eng: "hold",
        transcription: "[həʊld]",
        association: "холодильник"
      },
      {
        rus: "мачта",
        eng: "mast",
        transcription: "[mɑːst]",
        association: "мастер"
      },
      {
        rus: "весло",
        eng: "scull",
        transcription: "[skʌl]",
        association: "скала"
      },
      {
        rus: "шлюпка",
        eng: "boat",
        transcription: "[bəʊt]",
        association: "бочка"
      },
      { rus: "яхта", eng: "yacht", transcription: "[jɒt]", association: "йод" },
      {
        rus: "экипаж",
        eng: "crew",
        transcription: "[kruː]",
        association: "кружка"
      },
      { rus: "краб", eng: "crab", transcription: "[kræb]", association: "Р." },
      {
        rus: "судья",
        eng: "judge",
        transcription: "[ʤʌʤ]",
        association: "джаз"
      },
      {
        rus: "забастовка",
        eng: "strike",
        transcription: "[straɪk]",
        association: "страж"
      },
      { rus: "лапа", eng: "paw", transcription: "[pɔː]", association: "почка" },
      {
        rus: "пешка",
        eng: "pawn",
        transcription: "[pɔːn]",
        association: "пони"
      },
      {
        rus: "скунс",
        eng: "skunk",
        transcription: "[skʌŋk]",
        association: "сканер"
      },
      {
        rus: "сундук",
        eng: "chest",
        transcription: "[ʧest]",
        association: "чеснок"
      },
      {
        rus: "осадок",
        eng: "lees",
        transcription: "[liːz]",
        association: "линза"
      },
      {
        rus: "клюв",
        eng: "beak",
        transcription: "[biːk]",
        association: "бритва/ручка bic"
      },
      { rus: "загар", eng: "tan", transcription: "[tæn]", association: "тан" },
      {
        rus: "прилив и отлив",
        eng: "tide",
        transcription: "[taɪd]",
        association: "Тайд (стиральный порошок)"
      },
      {
        rus: "сало",
        eng: "lard",
        transcription: "[lɑːd]",
        association: "ларец"
      },
      {
        rus: "фарш",
        eng: "mince",
        transcription: "[mɪns]",
        association: "миниюбка"
      },
      {
        rus: "баржа",
        eng: "barge",
        transcription: "[bɑːʤ]",
        association: "бадминтон"
      },
      {
        rus: "домкрат",
        eng: "jack",
        transcription: "[ʤæk]",
        association: "джем"
      },
      {
        rus: "копьё",
        eng: "spear",
        transcription: "[spɪə]",
        association: "спирт"
      },
      {
        rus: "обряд, ритуал",
        eng: "rite",
        transcription: "[raɪt]",
        association: "Рай"
      },
      {
        rus: "кустарник",
        eng: "shrub",
        transcription: "[ʃrʌb]",
        association: "шрам"
      },
      {
        rus: "трясина",
        eng: "marsh",
        transcription: "[mɑːʃ]",
        association: "машина"
      },
      {
        rus: "журавль",
        eng: "crane",
        transcription: "[kreɪn]",
        association: "крест"
      },
      { rus: "угорь", eng: "eel", transcription: "[iːl]", association: "ил" },
      {
        rus: "финик",
        eng: "date",
        transcription: "[deɪt]",
        association: "детектив"
      },
      {
        rus: "кожура",
        eng: "peel",
        transcription: "[piːl]",
        association: "пила"
      },
      {
        rus: "колодец",
        eng: "well",
        transcription: "[wel]",
        association: "велосипед"
      },
      {
        rus: "факел",
        eng: "torch",
        transcription: "[tɔːʧ]",
        association: "точилка"
      },
      {
        rus: "завещание",
        eng: "will",
        transcription: "[wɪl]",
        association: "вилка"
      },
      {
        rus: "раб",
        eng: "slave",
        transcription: "[sleɪv]",
        association: "с лейкой"
      },
      {
        rus: "шпион",
        eng: "spy",
        transcription: "[ˈspaɪ]",
        association: "спальня"
      },
      {
        rus: "капкан",
        eng: "trap",
        transcription: "[træp]",
        association: "трап корабля"
      },
      {
        rus: "крючок",
        eng: "hook",
        transcription: "[hʊk]",
        association: "художник + удар"
      },
      {
        rus: "блоха",
        eng: "flea",
        transcription: "[fliː]",
        association: "флипчарт"
      },
      {
        rus: "аист",
        eng: "stork",
        transcription: "[stɔːk]",
        association: "стол"
      },
      {
        rus: "мох",
        eng: "moss",
        transcription: "[mɒs]",
        association: "Москва"
      },
      {
        rus: "священник",
        eng: "priest",
        transcription: "[priːst]",
        association: "пристань"
      },
      {
        rus: "солома",
        eng: "straw",
        transcription: "[strɔː]",
        association: "стройка"
      },
      {
        rus: "ничья",
        eng: "draw",
        transcription: "[drɔː]",
        association: "дротик"
      },
      {
        rus: "арфа",
        eng: "harp",
        transcription: "[hɑːp]",
        association: "халат"
      },
      {
        rus: "тормоз",
        eng: "brake",
        transcription: "[breɪk]",
        association: "брелок"
      },
      {
        rus: "холм",
        eng: "hill",
        transcription: "[hɪl]",
        association: "хирург"
      },
      {
        rus: "песок",
        eng: "sand",
        transcription: "[sænd]",
        association: "сандали"
      },
      {
        rus: "лужа(на улице)",
        eng: "puddle",
        transcription: "[ˈpʌdl]",
        association: "падал в лужу"
      },
      {
        rus: "куст",
        eng: "bush",
        transcription: "[bʊʃ]",
        association: "Джордж Буш"
      },
      {
        rus: "раскладушка",
        eng: "cot",
        transcription: "[kɒt]",
        association: "кот"
      },
      {
        rus: "рана",
        eng: "wound",
        transcription: "[wuːnd]",
        association: "вундеркинд"
      },
      {
        rus: "простыня",
        eng: "sheet",
        transcription: "[ʃiːt]",
        association: "щит"
      },
      {
        rus: "чаевые",
        eng: "tip",
        transcription: "[tɪp]",
        association: "типография"
      },
      {
        rus: "мельница",
        eng: "mill",
        transcription: "[mɪl]",
        association: "миллионер"
      },
      {
        rus: "трюк",
        eng: "stunt",
        transcription: "[stʌnt]",
        association: "станция"
      },
      { rus: "смычок", eng: "bow", transcription: "[baʊ]", association: "бал" },
      {
        rus: "лагерь",
        eng: "camp",
        transcription: "[kæmp]",
        association: "кемпинг"
      },
      {
        rus: "топор",
        eng: "axe",
        transcription: "[æks]",
        association: "экскаватор"
      },
      {
        rus: "напильник",
        eng: "file",
        transcription: "[faɪl]",
        association: "файл"
      },
      {
        rus: "сантехник",
        eng: "plumber",
        transcription: "[ˈplʌməə]",
        association: "пламя"
      },
      {
        rus: "пульт(для ТВ)",
        eng: "remote",
        transcription: "[rɪˈməəʊt]",
        association: "ремонт"
      },
      {
        rus: "булыжник",
        eng: "cobble",
        transcription: "[ˈkɒbl]",
        association: "кобыла"
      },
      {
        rus: "конюшня",
        eng: "stable",
        transcription: "[ˈsteɪbl]",
        association: "стебель"
      },
      {
        rus: "пломба",
        eng: "filling",
        transcription: "[ˈfɪlɪŋ]",
        association: "филин"
      },
      {
        rus: "погреб",
        eng: "cellar",
        transcription: "[ˈsɛlə]",
        association: "селёдка"
      },
      {
        rus: "потолок",
        eng: "ceiling",
        transcription: "[ˈsiːlɪŋ]",
        association: "силач"
      },
      {
        rus: "котел",
        eng: "cauldron",
        transcription: "[ˈkɔːldrən]",
        association: "колдун"
      },
      {
        rus: "бочка",
        eng: "barrel",
        transcription: "[ˈbærəl]",
        association: "берлога"
      },
      {
        rus: "гамак",
        eng: "hammock",
        transcription: "[ˈhæmək]",
        association: "хомяк"
      },
      {
        rus: "дырокол",
        eng: "puncher",
        transcription: "[ˈpʌnʧə]",
        association: "панк"
      },
      {
        rus: "тележка",
        eng: "trolley",
        transcription: "[ˈtrɒli]",
        association: "троллейбус"
      },
      {
        rus: "жулик",
        eng: "rogue",
        transcription: "[rəʊg]",
        association: "рог"
      },
      {
        rus: "штанга",
        eng: "barrel",
        transcription: "[ˈbærəl]",
        association: "берлога"
      },
      {
        rus: "мусор",
        eng: "rubbish",
        transcription: "[ˈrʌbɪʃ]",
        association: "раб"
      },
      {
        rus: "диванная подушка",
        eng: "cushion",
        transcription: "['kuʃ(ə)n]",
        association: "кувшин"
      },
      {
        rus: "вигвам",
        eng: "tepee",
        transcription: "['tiːpiː]",
        association: "типография"
      },
      {
        rus: "крепость",
        eng: "fortress",
        transcription: "[ˈfɔːtrɪs]",
        association: "форточка"
      },
      {
        rus: "разводной мост",
        eng: "drawbridge",
        transcription: "[ˈdrɔːbrɪdʒ ]",
        association: "дрова + бригада"
      },
      {
        rus: "мечеть",
        eng: "mosque",
        transcription: "[mɒsk]",
        association: "мозг"
      },
      {
        rus: "ломбард",
        eng: "pawnshop",
        transcription: "['pɔːnʃɔp]",
        association: "пони + шорты"
      },
      {
        rus: "капот",
        eng: "bonnet",
        transcription: "['bɔnɪt]",
        association: "банка"
      },
      {
        rus: "флот",
        eng: "marine",
        transcription: "[mə'riːn]",
        association: "марионетка"
      },
      {
        rus: "паруса",
        eng: "canvas",
        transcription: "['kænvəs]",
        association: "кенгуру + весло"
      },
      {
        rus: "моторная лодка",
        eng: "dinghy",
        transcription: "['dɪŋgɪ]",
        association: "деньги"
      },
      {
        rus: "паром",
        eng: "ferry",
        transcription: "['ferɪ]",
        association: "фермер"
      },
      {
        rus: "танкер",
        eng: "tanker",
        transcription: "['tæŋkə]",
        association: "Р."
      },
      {
        rus: "подлокотник",
        eng: "armrest",
        transcription: "[ˈɑːmrɛst]",
        association: "армрестлинг"
      },
      {
        rus: "кабина летчика",
        eng: "cockpit",
        transcription: "['kɔkpɪt]",
        association: "кокос"
      },
      {
        rus: "пшеница",
        eng: "wheat",
        transcription: "[(h)wiːt]",
        association: "витрина"
      },
      {
        rus: "форель",
        eng: "trout",
        transcription: "[traut]",
        association: "траур"
      },
      {
        rus: "кальмар",
        eng: "squid",
        transcription: "[skwɪd]",
        association: "скворечник"
      },
      {
        rus: "адвокат",
        eng: "lawyer",
        transcription: "['lɔɪə]",
        association: "лошадь"
      },
      {
        rus: "доход, прибыль",
        eng: "income",
        transcription: "['ɪŋkʌm]",
        association: "инки"
      },
      {
        rus: "мастерская",
        eng: "workshop",
        transcription: "['wɜːkʃɔp]",
        association: "вокзал + шорты"
      },
      {
        rus: "рыцарский турнир",
        eng: "joust",
        transcription: "[ʤaust]",
        association: "джаз + усы"
      },
      {
        rus: "пот",
        eng: "sweat",
        transcription: "[swet]",
        association: "свет"
      },
      {
        rus: "веревка",
        eng: "rope",
        transcription: "[rəʊp]",
        association: "ров"
      },
      {
        rus: "винтовка",
        eng: "rifle",
        transcription: "[ˈraɪfəl]",
        association: "Рай + фен"
      },
      {
        rus: "предатель",
        eng: "traitor",
        transcription: "[ˈtreɪtə]",
        association: "поднос (eng)"
      },
      {
        rus: "уголь",
        eng: "coal",
        transcription: "[kəʊl]",
        association: "кулон"
      },
      {
        rus: "колонна",
        eng: "pillar",
        transcription: "[ˈpɪlə]",
        association: "пила"
      },
      {
        rus: "стажер",
        eng: "trainee",
        transcription: "[treɪˈniː]",
        association: "тренер"
      },
      {
        rus: "соперник",
        eng: "rival",
        transcription: "[ˈraɪvəl]",
        association: "Рай + велосипед"
      },
      {
        rus: "гребец",
        eng: "rower",
        transcription: "[ˈrəʊə]",
        association: "ров"
      },
      {
        rus: "шина",
        eng: "tire",
        transcription: "[ˈtaɪə]",
        association: "Тайд (стиральный порошок)"
      },
      {
        rus: "пушка",
        eng: "cannon",
        transcription: "[ˈkænən]",
        association: "кенгуру"
      },
      {
        rus: "пастбище",
        eng: "pasture",
        transcription: "[’pæstʃər]",
        association: "песок + червяк"
      },
      {
        rus: "плесень",
        eng: "mould",
        transcription: "[məʊld]",
        association: "молния"
      },
      {
        rus: "веснушки",
        eng: "freckles",
        transcription: "['freklz]",
        association: "фреска"
      },
      {
        rus: "дуло",
        eng: "muzzle",
        transcription: "[ˈmʌzl]",
        association: "мазь"
      },
      {
        rus: "ракета",
        eng: "missile",
        transcription: "[ˈmɪsaɪl]",
        association: "миска"
      },
      {
        rus: "крот",
        eng: "mole",
        transcription: "[məʊl]",
        association: "молния"
      },
      {
        rus: "чайка",
        eng: "seagull",
        transcription: "[ˈsiːgʌl]",
        association: "сигарета"
      },
      {
        rus: "изюм",
        eng: "raisin",
        transcription: "[ˈreɪzn]",
        association: "резина"
      },
      {
        rus: "мухобойка",
        eng: "swatter",
        transcription: "[ˈswɒtə]",
        association: "свора (собак)"
      },
      {
        rus: "балетная пачка",
        eng: "tutu",
        transcription: "['tuːtuː]",
        association: "поезд"
      },
      {
        rus: "гидрокостюм",
        eng: "wetsuit",
        transcription: "['wetˌs(j)uːt]",
        association: "ветка + сюрприз"
      },
      {
        rus: "тополь",
        eng: "poplar",
        transcription: "[ˈpɒplə]",
        association: "поплавок"
      },
      {
        rus: "цыган(ка)",
        eng: "gipsy",
        transcription: "[ˈʤɪpsi]",
        association: "джип"
      },
      {
        rus: "свинарник",
        eng: "pigsty",
        transcription: "[ˈpɪgstaɪ]",
        association: "свинья стоит"
      },
      {
        rus: "колдун",
        eng: "sorcerer",
        transcription: "[ˈsɔːsərə]",
        association: "соска"
      },
      {
        rus: "убийца",
        eng: "murderer",
        transcription: "[ˈmɜːdərə]",
        association: "мёд"
      },
      {
        rus: "домохозяйка",
        eng: "housewife",
        transcription: "[ˈhaʊswaɪf ]",
        association: "жена дома"
      },
      {
        rus: "дверной глазок",
        eng: "spyhole",
        transcription: "['spaɪhəul]",
        association: "спальня + холодильник"
      },
      {
        rus: "зажигание",
        eng: "ignition",
        transcription: "[ɪg'nɪʃ(ə)n]",
        association: "игрок + ниша"
      },
      {
        rus: "смокинг",
        eng: "tuxedo",
        transcription: "[tʌkˈsiːdəʊ]",
        association: "такси"
      },
      {
        rus: "дирижёр",
        eng: "conductor",
        transcription: "[kənˈdʌktə]",
        association: "кондуктор"
      },
      {
        rus: "воин",
        eng: "warrior",
        transcription: "[ˈwɒrɪə]",
        association: "ворон"
      },
      {
        rus: "сосулька",
        eng: "icicle",
        transcription: "[ˈaɪsɪkl]",
        association: "Айболит + секатор"
      },
      {
        rus: "антенна",
        eng: "aerial",
        transcription: "[ˈeərɪəl]",
        association: "Ариэль (русалочка)"
      },
      {
        rus: "глушитель",
        eng: "silencer",
        transcription: "[ˈsaɪlənsə]",
        association: "сало + лента"
      },
      {
        rus: "гусеница",
        eng: "caterpillar",
        transcription: "[ˈkætəəˌpɪləə]",
        association: "кетчуп + пила"
      },
      {
        rus: "плен",
        eng: "captivity",
        transcription: "[kæpˈtɪvɪti]",
        association: "коптят"
      },
      {
        rus: "наводнение",
        eng: "flood",
        transcription: "[flʌd]",
        association: "флакон"
      },
      {
        rus: "палата",
        eng: "ward",
        transcription: "[wɔːd]",
        association: "вода"
      },
      {
        rus: "клякса",
        eng: "blot",
        transcription: "[blɒt]",
        association: "блокнот"
      },
      {
        rus: "трущобы",
        eng: "slums",
        transcription: "[slʌmz ]",
        association: "сладости"
      },
      {
        rus: "кузов",
        eng: "cab",
        transcription: "[kæb]",
        association: "кепка"
      },
      {
        rus: "плацкарт",
        eng: "berth",
        transcription: "[bəːθ]",
        association: "босоножки"
      },
      {
        rus: "палуба",
        eng: "deck",
        transcription: "[dek]",
        association: "доска"
      },
      {
        rus: "плот",
        eng: "raft",
        transcription: "[rɑːft]",
        association: "рефери"
      },
      {
        rus: "буксир",
        eng: "tow",
        transcription: "[təu]",
        association: "топор"
      },
      {
        rus: "поднос",
        eng: "tray",
        transcription: "[treɪ]",
        association: "тренажёр"
      },
      {
        rus: "поход",
        eng: "hike",
        transcription: "[haik]",
        association: "халат"
      },
      {
        rus: "щука",
        eng: "pike",
        transcription: "[paɪk]",
        association: "паек"
      },
      {
        rus: "затылок",
        eng: "nape",
        transcription: "[neɪp]",
        association: "наперсток"
      },
      {
        rus: "семя",
        eng: "seed",
        transcription: "[siːd]",
        association: "сидр"
      },
      {
        rus: "пиявка",
        eng: "leech",
        transcription: "[liːtʃ]",
        association: "личинка"
      },
      {
        rus: "лезвие",
        eng: "blade",
        transcription: "[bleɪd]",
        association: "блеск (для губ)"
      },
      {
        rus: "бородавкa",
        eng: "wart",
        transcription: "[wɔ:t]",
        association: "воротник"
      },
      {
        rus: "шпаргалка",
        eng: "crib",
        transcription: "[krɪb]",
        association: "кристалл"
      },
      {
        rus: "кувшин",
        eng: "jug",
        transcription: "[ʤʌg]",
        association: "джаз"
      },
      {
        rus: "камера(тюремная)",
        eng: "ward",
        transcription: "[wo:d]",
        association: "водка"
      },
      {
        rus: "иск",
        eng: "plea",
        transcription: "[pliː]",
        association: "плитка"
      },
      {
        rus: "задвижка",
        eng: "latch",
        transcription: "[læʧ]",
        association: "лечо"
      },
      {
        rus: "вмятина",
        eng: "dent",
        transcription: "[dɛnt]",
        association: "деньги"
      },
      {
        rus: "бордюр",
        eng: "kerb",
        transcription: "[kɜːb]",
        association: "коробка"
      },
      {
        rus: "щит",
        eng: "shield",
        transcription: "[ʃiːld]",
        association: "шило"
      },
      {
        rus: "добыча",
        eng: "loot",
        transcription: "[luːt]",
        association: "лупа"
      },
      {
        rus: "источник, родник",
        eng: "spring",
        transcription: "[sprɪŋ]",
        association: "спринт"
      },
      {
        rus: "штиль",
        eng: "calm",
        transcription: "[kɑːm]",
        association: "камин"
      },
      {
        rus: "стадо",
        eng: "herd",
        transcription: "[hɜːd]",
        association: "хотдог"
      },
      {
        rus: "канава",
        eng: "ditch",
        transcription: "[dɪʧ]",
        association: "дичь"
      },
      {
        rus: "шнур",
        eng: "cord",
        transcription: "[kɔːd]",
        association: "код (замок с кодом)"
      },
      {
        rus: "глина",
        eng: "clay",
        transcription: "[kleɪ]",
        association: "клей"
      },
      {
        rus: "стая",
        eng: "flock",
        transcription: "[flɒk]",
        association: "фломастер"
      },
      {
        rus: "плащ с капюшоном",
        eng: "cape",
        transcription: "[keɪp]",
        association: "кепка"
      },
      {
        rus: "счёт",
        eng: "score",
        transcription: "[skɔː]",
        association: "скоба"
      },
      {
        rus: "скала",
        eng: "cliff",
        transcription: "[klɪf]",
        association: "клинок"
      },
      { rus: "сук", eng: "bough", transcription: "[baʊ]", association: "балу" },
      {
        rus: "гнездо",
        eng: "nest",
        transcription: "[nɛst]",
        association: "несушка (курица)"
      },
      {
        rus: "кобыла",
        eng: "mare",
        transcription: "[meə]",
        association: "мел"
      },
      {
        rus: "грива",
        eng: "mane",
        transcription: "[meɪn]",
        association: "мент"
      },
      {
        rus: "сосна",
        eng: "pine",
        transcription: "[paɪn]",
        association: "панама"
      },
      {
        rus: "шляпка(гриба)",
        eng: "cap",
        transcription: "[ˈkæp]",
        association: "кепка"
      },
      {
        rus: "ножка(гриба)",
        eng: "stipe",
        transcription: "[staɪp]",
        association: "стая"
      },
      {
        rus: "окоп, траншея",
        eng: "trench",
        transcription: "[trɛnʧ]",
        association: "тренер"
      },
      {
        rus: "сорняк",
        eng: "weed",
        transcription: "[wiːd]",
        association: "видеокассета"
      },
      {
        rus: "поклонник",
        eng: "fan",
        transcription: "[fæn]",
        association: "фен"
      },
      {
        rus: "наживка",
        eng: "bait",
        transcription: "[beɪt]",
        association: "бей наживку"
      },
      {
        rus: "китобой",
        eng: "whaler",
        transcription: "[ˈweɪlə]",
        association: "вуаль"
      },
      {
        rus: "палатка",
        eng: "tent",
        transcription: "[tɛnt]",
        association: "тент"
      },
      {
        rus: "пружина",
        eng: "spring",
        transcription: "[sprɪŋ]",
        association: "спринт"
      },
      {
        rus: "люк",
        eng: "manhole",
        transcription: "[ˈmænhəʊl ]",
        association: "мент + холодильник"
      },
      {
        rus: "якорь",
        eng: "anchor",
        transcription: "['æŋkə]",
        association: "энциклопедия"
      },
      {
        rus: "сельдь",
        eng: "herring",
        transcription: "['herɪŋ]",
        association: "херувим"
      },
      {
        rus: "выжимать",
        eng: "wring",
        transcription: "[rɪŋ]",
        association: "ринг"
      },
      {
        rus: "тереть(щёткой)",
        eng: "scrub",
        transcription: "[skrʌb]",
        association: "скраб"
      },
      {
        rus: "заворачивать",
        eng: "wrap",
        transcription: "[ræp]",
        association: "рэпер"
      },
      {
        rus: "бронировать, брать билет",
        eng: "book",
        transcription: "[buk ]",
        association: "букварь"
      },
      {
        rus: "красть",
        eng: "steal",
        transcription: "[stiːl]",
        association: "стикер"
      },
      {
        rus: "лизать",
        eng: "lick",
        transcription: "[lɪk]",
        association: "ликёр"
      },
      {
        rus: "дразнить",
        eng: "tease",
        transcription: "[tiːz]",
        association: "тир"
      },
      {
        rus: "благословлять",
        eng: "bless",
        transcription: "[bles]",
        association: "блеск"
      },
      {
        rus: "зубрить",
        eng: "cram",
        transcription: "[kræm]",
        association: "крем"
      },
      {
        rus: "резать на мелкие кусочки",
        eng: "chop",
        transcription: "[ʧɔp]",
        association: "ЧОП (частное охранное предприятие)"
      },
      {
        rus: "хромать",
        eng: "limp",
        transcription: "[lɪmp]",
        association: "лимон"
      },
      {
        rus: "мыть шваброй",
        eng: "mop",
        transcription: "[mɒp]",
        association: "маркер"
      },
      {
        rus: "лаять",
        eng: "bark",
        transcription: "[bɑːk]",
        association: "бак"
      },
      {
        rus: "упасть в обморок",
        eng: "faint",
        transcription: "[feɪnt]",
        association: "фея"
      },
      {
        rus: "моргать",
        eng: "blink",
        transcription: "[blɪŋk]",
        association: "блин"
      },
      {
        rus: "мигнуть",
        eng: "wink",
        transcription: "[wɪŋk]",
        association: "винт"
      },
      {
        rus: "сеять",
        eng: "sow",
        transcription: "[saʊ]",
        association: "сауна"
      },
      {
        rus: "косить",
        eng: "mow",
        transcription: "[maʊ]",
        association: "Маугли"
      },
      {
        rus: "замочить",
        eng: "soak",
        transcription: "[səʊk]",
        association: "сок"
      },
      {
        rus: "подметать",
        eng: "sweep",
        transcription: "[swiːp]",
        association: "свинья"
      },
      {
        rus: "девочка",
        eng: "girl",
        transcription: "[gɜːl]",
        association: "гольфы"
      },
      {
        rus: "кровать",
        eng: "bed",
        transcription: "[bɛd]",
        association: "бедняк"
      },
      {
        rus: "стул",
        eng: "chair",
        transcription: "[ʧeə]",
        association: "череп"
      },
      {
        rus: "отец",
        eng: "father",
        transcription: "[ˈfɑːðə]",
        association: "фазан, фавн"
      },
      {
        rus: "автомобиль",
        eng: "car",
        transcription: "[kɑː]",
        association: "камень"
      },
      {
        rus: "стол",
        eng: "table",
        transcription: "[ˈteɪbl]",
        association: "таблетка"
      },
      {
        rus: "игрушка",
        eng: "toy",
        transcription: "[tɔɪ]",
        association: "тостер"
      },
      {
        rus: "мальчик",
        eng: "boy",
        transcription: "[bɔɪ]",
        association: "бой (драка)"
      },
      {
        rus: "стакан",
        eng: "glass",
        transcription: "[glɑːs]",
        association: "глаз"
      },
      {
        rus: "осьминог",
        eng: "octopus",
        transcription: "[ˈɒktəpəs]",
        association: "окно + пистолет"
      },
      {
        rus: "автобус",
        eng: "bus",
        transcription: "[bʌs]",
        association: "бассейн"
      },
      {
        rus: "коробка, ящик",
        eng: "box",
        transcription: "[bɒks]",
        association: "боксёр"
      },
      {
        rus: "лиса",
        eng: "fox",
        transcription: "[fɒks]",
        association: "фокусник"
      },
      {
        rus: "церковь",
        eng: "church",
        transcription: "[ʧɜːʧ]",
        association: "чётки"
      },
      {
        rus: "щетка, кисть",
        eng: "brush",
        transcription: "[brʌʃ]",
        association: "браслет"
      },
      {
        rus: "птица",
        eng: "bird",
        transcription: "[bɜːd]",
        association: "бёдра"
      },
      {
        rus: "обувь",
        eng: "shoes",
        transcription: "[ʃuːz]",
        association: "Шурик, Шумахер"
      },
      {
        rus: "малыш",
        eng: "baby",
        transcription: "[ˈbeɪbi]",
        association: "белка + бита"
      },
      {
        rus: "конфета",
        eng: "sweet / candy",
        transcription: "[swiːt] / [ˈkændi]",
        association: "свитер / кенгуру"
      },
      {
        rus: "щенок",
        eng: "puppy",
        transcription: "[ˈpʌpi]",
        association: "папка"
      },
      {
        rus: "город",
        eng: "city / town",
        transcription: "[ˈsɪti] / [taʊn]",
        association: "сито / танцор"
      },
      {
        rus: "семья",
        eng: "family",
        transcription: "[ˈfæmɪli]",
        association: "фен"
      },
      { rus: "муха", eng: "fly", transcription: "[flai]", association: "флаг" },
      {
        rus: "ежедневник, дневник",
        eng: "diary",
        transcription: "[ˈdaɪəri]",
        association: "Диарея, диадема"
      },
      {
        rus: "листок",
        eng: "leaf",
        transcription: "[liːf]",
        association: "лифчик"
      },
      {
        rus: "жена",
        eng: "wife",
        transcription: "[waɪf]",
        association: "вафли"
      },
      {
        rus: "нож",
        eng: "knife",
        transcription: "[naɪf]",
        association: "навоз"
      },
      {
        rus: "рубашка",
        eng: "shirt",
        transcription: "[ʃɜːt]",
        association: "щётка"
      },
      {
        rus: "футболка",
        eng: "t-shirt",
        transcription: "[ˈtiːʃɜːt]",
        association: "тигр + щётка"
      },
      {
        rus: "пекарь",
        eng: "baker",
        transcription: "[ˈbeɪkə]",
        association: "бекон"
      },
      {
        rus: "мышь",
        eng: "mouse",
        transcription: "[maʊs]",
        association: "Микки Маус"
      },
      {
        rus: "зуб",
        eng: "tooth",
        transcription: "[tuːθ]",
        association: "туфли"
      },
      {
        rus: "ступня",
        eng: "foot",
        transcription: "[fʊt]",
        association: "футбол"
      },
      {
        rus: "дети",
        eng: "children",
        transcription: "[ˈʧɪldrən]",
        association: "чили"
      },
      {
        rus: "дитя, ребёнок",
        eng: "child",
        transcription: "[ʧaɪld]",
        association: "чай"
      },
      { rus: "бык", eng: "ox", transcription: "[ɒks]", association: "окей" },
      {
        rus: "овца",
        eng: "sheep",
        transcription: "[ʃiːp]",
        association: "шипы"
      },
      {
        rus: "рыба",
        eng: "fish",
        transcription: "[fɪʃ]",
        association: "фишки"
      },
      {
        rus: "фрукт(ы)",
        eng: "fruit",
        transcription: "[fruːt]",
        association: "фрукт"
      },
      {
        rus: "олень",
        eng: "deer",
        transcription: "[dɪə]",
        association: "диск"
      },
      {
        rus: "собака",
        eng: "dog",
        transcription: "[dɒg]",
        association: "доктор"
      },
      {
        rus: "кошка",
        eng: "cat",
        transcription: "[kæt]",
        association: "кетчуп"
      },
      {
        rus: "платье",
        eng: "dress",
        transcription: "[drɛs]",
        association: "дрессировщик"
      },
      {
        rus: "здание",
        eng: "building",
        transcription: "[ˈbɪldɪŋ]",
        association: "билет + динозавр"
      },
      {
        rus: "море",
        eng: "sea",
        transcription: "[siː]",
        association: "синица"
      },
      {
        rus: "блокнот",
        eng: "notepad, notebook",
        transcription: "[ˈnəʊtˌpæd], [ˈnəʊtbʊk]",
        association: "ноутбук"
      },
      {
        rus: "диван",
        eng: "sofa",
        transcription: "[ˈsəʊfə]",
        association: "сова"
      },
      { rus: "ручка", eng: "pen", transcription: "[pɛn]", association: "пень" },
      {
        rus: "яблоко",
        eng: "apple",
        transcription: "[ˈæpl]",
        association: "эппл (Айфон)"
      },
      {
        rus: "апельсин",
        eng: "orange",
        transcription: "[ˈɒrɪnʤ]",
        association: "Оранжевый, орангутан"
      },
      {
        rus: "ухо",
        eng: "ear",
        transcription: "[ɪə]",
        association: "Иа (ослик)"
      },
      {
        rus: "животное",
        eng: "animal",
        transcription: "[ˈænɪməl]",
        association: "енот и мел"
      },
      {
        rus: "слон",
        eng: "elephant",
        transcription: "[ˈɛlɪfənt]",
        association: "ель + фанта"
      },
      { rus: "час", eng: "hour", transcription: "[ˈaʊə]", association: "аура" },
      {
        rus: "зонт",
        eng: "umbrella",
        transcription: "[ʌmˈbrɛlə]",
        association: "армейский брелок"
      },
      {
        rus: "парта",
        eng: "desk",
        transcription: "[dɛsk]",
        association: "диск"
      },
      {
        rus: "орел",
        eng: "eagle",
        transcription: "[ˈiːgl]",
        association: "игла"
      },
      {
        rus: "друг",
        eng: "friend",
        transcription: "[frɛnd]",
        association: "фрегат"
      },
      {
        rus: "глаз",
        eng: "eye",
        transcription: "[aɪ]",
        association: "Ай-Болит"
      },
      {
        rus: "книга",
        eng: "book",
        transcription: "[bʊk]",
        association: "букет"
      },
      {
        rus: "яйцо",
        eng: "egg",
        transcription: "[ɛg]",
        association: "экзамен"
      },
      {
        rus: "сова",
        eng: "owl",
        transcription: "[aʊl]",
        association: "Акула, аут ( в футболе сбрасывает)"
      },
      {
        rus: "картофель",
        eng: "potato",
        transcription: "[pəˈteɪtəʊ]",
        association: "потеет"
      }
    ];

    return wordsList;
  }
}

export default Data;