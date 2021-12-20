import {
  WASHING_MACHINE,
  REFRIGETATOR,
  DISHWASHER,
  BOILER,
} from '../constants';

const brandList = [
  {
    title: 'Atlant',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_0',
  },
  {
    title: 'AEG',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_1',
  },
  {
    title: 'ARESA',
    appType: [WASHING_MACHINE],
    id: 'brand_2',
  },
  {
    title: 'Ardo',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_3',
  },
  {
    title: 'Artel',
    appType: [WASHING_MACHINE, REFRIGETATOR, BOILER],
    id: 'brand_4',
  },
  {
    title: 'Asko',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_5',
  },
  {
    title: 'Bosch',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_6',
  },
  {
    title: 'Beko',
    appType: [WASHING_MACHINE, DISHWASHER],
    id: 'brand_7',
  },
  {
    title: 'Brandt',
    appType: [WASHING_MACHINE],
    id: 'brand_8',
  },
  {
    title: 'Bravo',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_9',
  },
  {
    title: 'Bauknecht',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_10',
  },
  {
    title: 'Bomann',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_11',
  },
  {
    title: 'Candy',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_12',
  },
  {
    title: 'Clatronic',
    appType: [WASHING_MACHINE],
    id: 'brand_13',
  },
  {
    title: 'Daewoo Electronics',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_14',
  },
  {
    title: 'De Dietrich',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_15',
  },
  {
    title: 'Domus',
    appType: [WASHING_MACHINE],
    id: 'brand_16',
  },
  {
    title: 'Electrolux',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_17',
  },
  {
    title: 'Eurosoba',
    appType: [WASHING_MACHINE],
    id: 'brand_18',
  },
  {
    title: 'Evgo',
    appType: [WASHING_MACHINE],
    id: 'brand_19',
  },
  {
    title: 'Fagor',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_20',
  },
  {
    title: 'Frigidaire',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_21',
  },
  {
    title: 'Gorenje',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_22',
  },
  {
    title: 'Gaggenau',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_23',
  },
  {
    title: 'GRAUDE',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_24',
  },
  {
    title: 'Hotpoint-Ariston',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_25',
  },
  {
    title: 'Hansa',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_26',
  },
  {
    title: 'Haier',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_27',
  },
  {
    title: 'HIBERG',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_28',
  },
  {
    title: 'Hisense',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_29',
  },
  {
    title: 'HOMSAIR',
    appType: [WASHING_MACHINE, DISHWASHER],
    id: 'brand_30',
  },
  {
    title: 'Hoover',
    appType: [WASHING_MACHINE],
    id: 'brand_31',
  },
  {
    title: 'Hyundai',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_32',
  },
  {
    title: 'Indesit',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_33',
  },
  {
    title: 'Ignis',
    appType: [WASHING_MACHINE],
    id: 'brand_34',
  },
  {
    title: 'Kaiser',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_35',
  },
  {
    title: 'KRAFT',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_36',
  },
  {
    title: 'Kuppersberg',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_37',
  },
  {
    title: 'Kuppersbusch',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_38',
  },
  {
    title: 'LG',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_39',
  },
  {
    title: 'Leran',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_40',
  },
  {
    title: 'MAUNFELD',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_41',
  },
  {
    title: 'Midea',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_42',
  },
  {
    title: 'Miele',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_43',
  },
  {
    title: 'Mabe',
    appType: [WASHING_MACHINE],
    id: 'brand_44',
  },
  {
    title: 'NEFF',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_45',
  },
  {
    title: 'Optima',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_46',
  },
  {
    title: 'Orion',
    appType: [WASHING_MACHINE],
    id: 'brand_47',
  },
  {
    title: 'Panasonic',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_48',
  },
  {
    title: 'Renova',
    appType: [WASHING_MACHINE],
    id: 'brand_49',
  },
  {
    title: 'Rolsen',
    appType: [WASHING_MACHINE],
    id: 'brand_50',
  },
  {
    title: 'Samsung',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_51',
  },
  {
    title: 'Schaub Lorenz',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_52',
  },
  {
    title: 'Sharp',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_53',
  },
  {
    title: 'Siemens',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_54',
  },
  {
    title: 'Smart Life',
    appType: [WASHING_MACHINE],
    id: 'brand_55',
  },
  {
    title: 'Smeg',
    appType: [WASHING_MACHINE, DISHWASHER],
    id: 'brand_56',
  },
  {
    title: 'Schulthess',
    appType: [WASHING_MACHINE],
    id: 'brand_57',
  },
  {
    title: 'Sinbo',
    appType: [WASHING_MACHINE, REFRIGETATOR, BOILER],
    id: 'brand_58',
  },
  {
    title: 'Teka',
    appType: [WASHING_MACHINE],
    id: 'brand_59',
  },
  {
    title: 'V-ZUG',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_60',
  },
  {
    title: 'Vestel',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_61',
  },
  {
    title: 'Vestfrost',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_62',
  },
  {
    title: 'Viomi',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_63',
  },
  {
    title: 'Weissgauff',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_64',
  },
  {
    title: 'Whirlpool',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_65',
  },
  {
    title: 'Willmark',
    appType: [WASHING_MACHINE, REFRIGETATOR, BOILER],
    id: 'brand_66',
  },
  {
    title: 'White-Westinghouse',
    appType: [WASHING_MACHINE],
    id: 'brand_67',
  },
  {
    title: 'Xiaomi',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_68',
  },
  {
    title: 'Zanussi',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_69',
  },
  {
    title: 'Zigmund & Shtain',
    appType: [WASHING_MACHINE, REFRIGETATOR, DISHWASHER],
    id: 'brand_70',
  },
  {
    title: 'Ассоль',
    appType: [WASHING_MACHINE],
    id: 'brand_71',
  },
  {
    title: 'Белоснежка',
    appType: [WASHING_MACHINE],
    id: 'brand_72',
  },
  {
    title: 'Бирюса',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_73',
  },
  {
    title: 'Вятка',
    appType: [WASHING_MACHINE],
    id: 'brand_74',
  },
  {
    title: 'ВолТек',
    appType: [WASHING_MACHINE],
    id: 'brand_75',
  },
  {
    title: 'Ока',
    appType: [WASHING_MACHINE, REFRIGETATOR],
    id: 'brand_76',
  },
  {
    title: 'Славда',
    appType: [WASHING_MACHINE],
    id: 'brand_77',
  },
  {
    title: 'Фея ',
    appType: [WASHING_MACHINE],
    id: 'brand_78',
  },
  {
    title: 'AVEX',
    appType: [REFRIGETATOR],
    id: 'brand_79',
  },
  {
    title: 'Akai',
    appType: [REFRIGETATOR],
    id: 'brand_80',
  },
  {
    title: 'Amana',
    appType: [REFRIGETATOR],
    id: 'brand_81',
  },
  {
    title: 'Amica',
    appType: [REFRIGETATOR],
    id: 'brand_82',
  },
  {
    title: 'Artevino',
    appType: [REFRIGETATOR],
    id: 'brand_83',
  },
  {
    title: 'ASCOLI',
    appType: [REFRIGETATOR],
    id: 'brand_84',
  },
  {
    title: 'BBK',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_85',
  },
  {
    title: 'BEKO',
    appType: [REFRIGETATOR],
    id: 'brand_86',
  },
  {
    title: 'BELTRATTO',
    appType: [REFRIGETATOR],
    id: 'brand_87',
  },
  {
    title: 'Bosfor',
    appType: [REFRIGETATOR, BOILER],
    id: 'brand_88',
  },
  {
    title: 'Braun',
    appType: [REFRIGETATOR],
    id: 'brand_89',
  },
  {
    title: 'Caso',
    appType: [REFRIGETATOR],
    id: 'brand_90',
  },
  {
    title: 'Cavanova',
    appType: [REFRIGETATOR],
    id: 'brand_91',
  },
  {
    title: 'CENTEK',
    appType: [REFRIGETATOR],
    id: 'brand_92',
  },
  {
    title: 'Cold Vine',
    appType: [REFRIGETATOR],
    id: 'brand_93',
  },
  {
    title: 'Comfee',
    appType: [REFRIGETATOR],
    id: 'brand_94',
  },
  {
    title: 'Climadiff',
    appType: [REFRIGETATOR],
    id: 'brand_95',
  },
  {
    title: 'DON',
    appType: [REFRIGETATOR],
    id: 'brand_96',
  },
  {
    title: 'Daewoo',
    appType: [REFRIGETATOR],
    id: 'brand_97',
  },
  {
    title: 'Delfa',
    appType: [REFRIGETATOR],
    id: 'brand_98',
  },
  {
    title: 'Dex',
    appType: [REFRIGETATOR],
    id: 'brand_99',
  },
  {
    title: 'Dometic',
    appType: [REFRIGETATOR],
    id: 'brand_100',
  },
  {
    title: 'Dunavox',
    appType: [REFRIGETATOR],
    id: 'brand_101',
  },
  {
    title: 'Ecotronic',
    appType: [REFRIGETATOR],
    id: 'brand_102',
  },
  {
    title: 'Elenberg',
    appType: [REFRIGETATOR],
    id: 'brand_103',
  },
  {
    title: 'Ellemme',
    appType: [REFRIGETATOR],
    id: 'brand_104',
  },
  {
    title: 'Enofrigo',
    appType: [REFRIGETATOR],
    id: 'brand_105',
  },
  {
    title: 'EuroCave',
    appType: [REFRIGETATOR],
    id: 'brand_106',
  },
  {
    title: 'FROSTOR',
    appType: [REFRIGETATOR],
    id: 'brand_107',
  },
  {
    title: 'Fhiaba',
    appType: [REFRIGETATOR],
    id: 'brand_108',
  },
  {
    title: 'Franke',
    appType: [REFRIGETATOR],
    id: 'brand_109',
  },
  {
    title: 'Freggia',
    appType: [REFRIGETATOR],
    id: 'brand_110',
  },
  {
    title: 'Fulgor',
    appType: [REFRIGETATOR],
    id: 'brand_111',
  },
  {
    title: 'GALATEC',
    appType: [REFRIGETATOR],
    id: 'brand_112',
  },
  {
    title: 'Galaxy',
    appType: [REFRIGETATOR],
    id: 'brand_113',
  },
  {
    title: 'General Electric',
    appType: [REFRIGETATOR],
    id: 'brand_114',
  },
  {
    title: 'Gestrorag',
    appType: [REFRIGETATOR],
    id: 'brand_115',
  },
  {
    title: 'Gemlux',
    appType: [REFRIGETATOR],
    id: 'brand_116',
  },
  {
    title: 'Ginzzu',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_117',
  },
  {
    title: 'GoldStar',
    appType: [REFRIGETATOR],
    id: 'brand_118',
  },
  {
    title: 'Gunter & Hauer',
    appType: [REFRIGETATOR],
    id: 'brand_119',
  },
  {
    title: 'Hauswirt',
    appType: [REFRIGETATOR],
    id: 'brand_120',
  },
  {
    title: 'Hitachi',
    appType: [REFRIGETATOR],
    id: 'brand_121',
  },
  {
    title: 'ILVE',
    appType: [REFRIGETATOR],
    id: 'brand_122',
  },
  {
    title: 'IP INDUSTRIE',
    appType: [REFRIGETATOR],
    id: 'brand_123',
  },
  {
    title: 'Indel B',
    appType: [REFRIGETATOR],
    id: 'brand_124',
  },
  {
    title: 'Interline',
    appType: [REFRIGETATOR],
    id: 'brand_125',
  },
  {
    title: 'IO MABE',
    appType: [REFRIGETATOR],
    id: 'brand_126',
  },
  {
    title: "Jacky's",
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_127',
  },
  {
    title: 'Kenwood',
    appType: [REFRIGETATOR],
    id: 'brand_128',
  },
  {
    title: 'KitchenAid',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_129',
  },
  {
    title: 'Komatsu',
    appType: [REFRIGETATOR],
    id: 'brand_130',
  },
  {
    title: 'Korting',
    appType: [REFRIGETATOR, DISHWASHER, BOILER],
    id: 'brand_131',
  },
  {
    title: 'LGEN',
    appType: [REFRIGETATOR],
    id: 'brand_132',
  },
  {
    title: 'La Sommeliere',
    appType: [REFRIGETATOR],
    id: 'brand_133',
  },
  {
    title: 'LEX',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_134',
  },
  {
    title: 'Liberton',
    appType: [REFRIGETATOR],
    id: 'brand_135',
  },
  {
    title: 'Liberty',
    appType: [REFRIGETATOR],
    id: 'brand_136',
  },
  {
    title: 'Liebherr',
    appType: [REFRIGETATOR],
    id: 'brand_137',
  },
  {
    title: 'MPM',
    appType: [REFRIGETATOR],
    id: 'brand_138',
  },
  {
    title: 'Marshall',
    appType: [REFRIGETATOR],
    id: 'brand_139',
  },
  {
    title: 'MasterCook',
    appType: [REFRIGETATOR],
    id: 'brand_140',
  },
  {
    title: 'Maytag',
    appType: [REFRIGETATOR],
    id: 'brand_141',
  },
  {
    title: 'Mitsubishi Electric',
    appType: [REFRIGETATOR],
    id: 'brand_142',
  },
  {
    title: 'Mystery',
    appType: [REFRIGETATOR],
    id: 'brand_143',
  },
  {
    title: 'NORD',
    appType: [REFRIGETATOR],
    id: 'brand_144',
  },
  {
    title: 'NORDFROST',
    appType: [REFRIGETATOR],
    id: 'brand_145',
  },
  {
    title: 'Norcool',
    appType: [REFRIGETATOR],
    id: 'brand_146',
  },
  {
    title: 'OAK',
    appType: [REFRIGETATOR],
    id: 'brand_147',
  },
  {
    title: 'Olto',
    appType: [REFRIGETATOR],
    id: 'brand_148',
  },
  {
    title: 'Oursson',
    appType: [REFRIGETATOR],
    id: 'brand_149',
  },
  {
    title: 'Polair',
    appType: [REFRIGETATOR],
    id: 'brand_150',
  },
  {
    title: 'Polar',
    appType: [REFRIGETATOR],
    id: 'brand_151',
  },
  {
    title: 'Pozis',
    appType: [REFRIGETATOR],
    id: 'brand_152',
  },
  {
    title: 'ProfiCook',
    appType: [REFRIGETATOR],
    id: 'brand_153',
  },
  {
    title: 'Profycool',
    appType: [REFRIGETATOR],
    id: 'brand_154',
  },
  {
    title: 'REEX',
    appType: [REFRIGETATOR],
    id: 'brand_155',
  },
  {
    title: 'RENOVA',
    appType: [REFRIGETATOR],
    id: 'brand_156',
  },
  {
    title: 'ROSENLEW',
    appType: [REFRIGETATOR],
    id: 'brand_157',
  },
  {
    title: 'Restart',
    appType: [REFRIGETATOR],
    id: 'brand_158',
  },
  {
    title: 'SUPRA',
    appType: [REFRIGETATOR],
    id: 'brand_159',
  },
  {
    title: 'Sanyo',
    appType: [REFRIGETATOR],
    id: 'brand_160',
  },
  {
    title: 'Saturn',
    appType: [REFRIGETATOR],
    id: 'brand_161',
  },
  {
    title: 'SCANDILUX',
    appType: [REFRIGETATOR],
    id: 'brand_162',
  },
  {
    title: 'Severin',
    appType: [REFRIGETATOR],
    id: 'brand_163',
  },
  {
    title: 'Shivaki',
    appType: [REFRIGETATOR],
    id: 'brand_164',
  },
  {
    title: 'Simfer',
    appType: [REFRIGETATOR],
    id: 'brand_165',
  },
  {
    title: 'SONNEN',
    appType: [REFRIGETATOR],
    id: 'brand_166',
  },
  {
    title: 'SMEG',
    appType: [REFRIGETATOR],
    id: 'brand_167',
  },
  {
    title: 'Snaige',
    appType: [REFRIGETATOR],
    id: 'brand_168',
  },
  {
    title: 'Steel',
    appType: [REFRIGETATOR],
    id: 'brand_169',
  },
  {
    title: 'Stinol',
    appType: [REFRIGETATOR],
    id: 'brand_170',
  },
  {
    title: 'Swizer',
    appType: [REFRIGETATOR],
    id: 'brand_171',
  },
  {
    title: 'TEKA',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_172',
  },
  {
    title: 'Tecfrigo',
    appType: [REFRIGETATOR],
    id: 'brand_173',
  },
  {
    title: 'TefCold',
    appType: [REFRIGETATOR],
    id: 'brand_174',
  },
  {
    title: 'Tesler',
    appType: [REFRIGETATOR],
    id: 'brand_175',
  },
  {
    title: 'Timberk',
    appType: [REFRIGETATOR, BOILER],
    id: 'brand_176',
  },
  {
    title: 'Toshiba',
    appType: [REFRIGETATOR, DISHWASHER],
    id: 'brand_177',
  },
  {
    title: 'Transtherm',
    appType: [REFRIGETATOR],
    id: 'brand_178',
  },
  {
    title: 'V-HOME',
    appType: [REFRIGETATOR],
    id: 'brand_179',
  },
  {
    title: 'WEST',
    appType: [REFRIGETATOR],
    id: 'brand_180',
  },
  {
    title: 'Wine Craft',
    appType: [REFRIGETATOR],
    id: 'brand_181',
  },
  {
    title: 'Winia',
    appType: [REFRIGETATOR],
    id: 'brand_182',
  },
  {
    title: 'ZARGET',
    appType: [REFRIGETATOR],
    id: 'brand_183',
  },
  {
    title: 'Zertek',
    appType: [REFRIGETATOR],
    id: 'brand_184',
  },
  {
    title: 'Зил',
    appType: [REFRIGETATOR],
    id: 'brand_185',
  },
  {
    title: 'ОРСК',
    appType: [REFRIGETATOR],
    id: 'brand_186',
  },
  {
    title: 'Океан',
    appType: [REFRIGETATOR],
    id: 'brand_187',
  },
  {
    title: 'Минск',
    appType: [REFRIGETATOR],
    id: 'brand_188',
  },
  {
    title: 'Полюс',
    appType: [REFRIGETATOR],
    id: 'brand_189',
  },
  {
    title: 'Саратов',
    appType: [REFRIGETATOR],
    id: 'brand_190',
  },
  {
    title: 'Свияга',
    appType: [REFRIGETATOR],
    id: 'brand_191',
  },
  {
    title: 'Смоленск',
    appType: [REFRIGETATOR],
    id: 'brand_192',
  },
  {
    title: 'Снеж',
    appType: [REFRIGETATOR],
    id: 'brand_193',
  },
  {
    title: 'Стинол',
    appType: [REFRIGETATOR],
    id: 'brand_194',
  },
  {
    title: 'Юрюзань',
    appType: [REFRIGETATOR],
    id: 'brand_195',
  },
  {
    title: 'CATA',
    appType: [DISHWASHER],
    id: 'brand_196',
  },
  {
    title: 'Comfree',
    appType: [DISHWASHER],
    id: 'brand_197',
  },
  {
    title: "De'Longhi",
    appType: [DISHWASHER],
    id: 'brand_198',
  },
  {
    title: 'EXITEQ',
    appType: [DISHWASHER],
    id: 'brand_199',
  },
  {
    title: 'Flavia',
    appType: [DISHWASHER],
    id: 'brand_200',
  },
  {
    title: 'Fornelli',
    appType: [DISHWASHER],
    id: 'brand_201',
  },
  {
    title: 'FRANKE',
    appType: [DISHWASHER],
    id: 'brand_202',
  },
  {
    title: 'GEFEST',
    appType: [DISHWASHER],
    id: 'brand_203',
  },
  {
    title: 'Krona',
    appType: [DISHWASHER],
    id: 'brand_204',
  },
  {
    title: 'MONSHER',
    appType: [DISHWASHER],
    id: 'brand_205',
  },
  {
    title: 'Ariston',
    appType: [BOILER],
    id: 'brand_206',
  },
  {
    title: 'Atlantic',
    appType: [BOILER],
    id: 'brand_207',
  },
  {
    title: 'ACV',
    appType: [BOILER],
    id: 'brand_208',
  },
  {
    title: 'American Water Heater',
    appType: [BOILER],
    id: 'brand_209',
  },
  {
    title: 'Aparici',
    appType: [BOILER],
    id: 'brand_210',
  },
  {
    title: 'Atlanta',
    appType: [BOILER],
    id: 'brand_211',
  },
  {
    title: 'Austria-Email',
    appType: [BOILER],
    id: 'brand_212',
  },
  {
    title: 'Atmor',
    appType: [BOILER],
    id: 'brand_213',
  },
  {
    title: 'BAXI',
    appType: [BOILER],
    id: 'brand_214',
  },
  {
    title: 'Ballu',
    appType: [BOILER],
    id: 'brand_215',
  },
  {
    title: 'BaltGaz',
    appType: [BOILER],
    id: 'brand_216',
  },
  {
    title: 'Beretta',
    appType: [BOILER],
    id: 'brand_217',
  },
  {
    title: 'Bion',
    appType: [BOILER],
    id: 'brand_218',
  },
  {
    title: 'Bradford White',
    appType: [BOILER],
    id: 'brand_219',
  },
  {
    title: 'Buderus',
    appType: [BOILER],
    id: 'brand_220',
  },
  {
    title: 'CLAGE',
    appType: [BOILER],
    id: 'brand_221',
  },
  {
    title: 'Comfort',
    appType: [BOILER],
    id: 'brand_222',
  },
  {
    title: 'Drazice',
    appType: [BOILER],
    id: 'brand_223',
  },
  {
    title: 'De luxe',
    appType: [BOILER],
    id: 'brand_224',
  },
  {
    title: 'Delimano',
    appType: [BOILER],
    id: 'brand_225',
  },
  {
    title: 'DELTA',
    appType: [BOILER],
    id: 'brand_226',
  },
  {
    title: 'Edisson',
    appType: [BOILER],
    id: 'brand_227',
  },
  {
    title: 'ELDOM',
    appType: [BOILER],
    id: 'brand_228',
  },
  {
    title: 'Elsotherm',
    appType: [BOILER],
    id: 'brand_229',
  },
  {
    title: 'Electronicsdeluxe',
    appType: [BOILER],
    id: 'brand_230',
  },
  {
    title: 'Etalon',
    appType: [BOILER],
    id: 'brand_231',
  },
  {
    title: 'Ferroli',
    appType: [BOILER],
    id: 'brand_232',
  },
  {
    title: 'Galmet',
    appType: [BOILER],
    id: 'brand_233',
  },
  {
    title: 'Garanterm',
    appType: [BOILER],
    id: 'brand_234',
  },
  {
    title: 'Genberg',
    appType: [BOILER],
    id: 'brand_235',
  },
  {
    title: 'General hydraulic',
    appType: [BOILER],
    id: 'brand_236',
  },
  {
    title: 'GOPPO',
    appType: [BOILER],
    id: 'brand_237',
  },
  {
    title: 'Grohe',
    appType: [BOILER],
    id: 'brand_238',
  },
  {
    title: 'Hajdu',
    appType: [BOILER],
    id: 'brand_239',
  },
  {
    title: 'Halsen',
    appType: [BOILER],
    id: 'brand_240',
  },
  {
    title: 'Heateq',
    appType: [BOILER],
    id: 'brand_241',
  },
  {
    title: 'Horizont',
    appType: [BOILER],
    id: 'brand_242',
  },
  {
    title: 'Innovita',
    appType: [BOILER],
    id: 'brand_243',
  },
  {
    title: 'Jaspi',
    appType: [BOILER],
    id: 'brand_244',
  },
  {
    title: 'Kospel',
    appType: [BOILER],
    id: 'brand_245',
  },
  {
    title: 'Lenz Technic',
    appType: [BOILER],
    id: 'brand_246',
  },
  {
    title: 'Loriot',
    appType: [BOILER],
    id: 'brand_247',
  },
  {
    title: 'Matrix',
    appType: [BOILER],
    id: 'brand_248',
  },
  {
    title: 'Metalac',
    appType: [BOILER],
    id: 'brand_249',
  },
  {
    title: 'Mizudo',
    appType: [BOILER],
    id: 'brand_250',
  },
  {
    title: 'Mora',
    appType: [BOILER],
    id: 'brand_251',
  },
  {
    title: 'NeoClima',
    appType: [BOILER],
    id: 'brand_252',
  },
  {
    title: 'Neva',
    appType: [BOILER],
    id: 'brand_253',
  },
  {
    title: 'Nibe-Biawar',
    appType: [BOILER],
    id: 'brand_254',
  },
  {
    title: 'Nofer',
    appType: [BOILER],
    id: 'brand_255',
  },
  {
    title: 'Oasis',
    appType: [BOILER],
    id: 'brand_256',
  },
  {
    title: 'OSO',
    appType: [BOILER],
    id: 'brand_257',
  },
  {
    title: 'Parpool',
    appType: [BOILER],
    id: 'brand_258',
  },
  {
    title: 'Polaris',
    appType: [BOILER],
    id: 'brand_259',
  },
  {
    title: 'Potato',
    appType: [BOILER],
    id: 'brand_260',
  },
  {
    title: 'PROFFI',
    appType: [BOILER],
    id: 'brand_261',
  },
  {
    title: 'Protherm',
    appType: [BOILER],
    id: 'brand_262',
  },
  {
    title: 'REDMOND',
    appType: [BOILER],
    id: 'brand_263',
  },
  {
    title: 'Redber',
    appType: [BOILER],
    id: 'brand_264',
  },
  {
    title: 'Redring',
    appType: [BOILER],
    id: 'brand_265',
  },
  {
    title: 'Reflex',
    appType: [BOILER],
    id: 'brand_266',
  },
  {
    title: 'REGENT inox',
    appType: [BOILER],
    id: 'brand_267',
  },
  {
    title: 'Rinnai',
    appType: [BOILER],
    id: 'brand_268',
  },
  {
    title: 'Roda',
    appType: [BOILER],
    id: 'brand_269',
  },
  {
    title: 'Rointe',
    appType: [BOILER],
    id: 'brand_270',
  },
  {
    title: 'ROYAL Clima',
    appType: [BOILER],
    id: 'brand_271',
  },
  {
    title: 'Royal Thermo',
    appType: [BOILER],
    id: 'brand_272',
  },
  {
    title: 'Stiebel Eltron',
    appType: [BOILER],
    id: 'brand_273',
  },
  {
    title: 'Scarlett',
    appType: [BOILER],
    id: 'brand_274',
  },
  {
    title: 'STOUT',
    appType: [BOILER],
    id: 'brand_275',
  },
  {
    title: 'Sunsystem',
    appType: [BOILER],
    id: 'brand_276',
  },
  {
    title: 'Superflame',
    appType: [BOILER],
    id: 'brand_277',
  },
  {
    title: 'SUPERLUX',
    appType: [BOILER],
    id: 'brand_278',
  },
  {
    title: 'Thermex',
    appType: [BOILER],
    id: 'brand_279',
  },
  {
    title: 'Teplox',
    appType: [BOILER],
    id: 'brand_280',
  },
  {
    title: 'Termica',
    appType: [BOILER],
    id: 'brand_281',
  },
  {
    title: 'Tesy',
    appType: [BOILER],
    id: 'brand_282',
  },
  {
    title: 'Tatramat',
    appType: [BOILER],
    id: 'brand_283',
  },
  {
    title: 'Unitherm',
    appType: [BOILER],
    id: 'brand_284',
  },
  {
    title: 'UNIPUMP',
    appType: [BOILER],
    id: 'brand_285',
  },
  {
    title: 'Vaillant',
    appType: [BOILER],
    id: 'brand_286',
  },
  {
    title: 'Vatti',
    appType: [BOILER],
    id: 'brand_287',
  },
  {
    title: 'Vektor',
    appType: [BOILER],
    id: 'brand_288',
  },
  {
    title: 'Viessmann',
    appType: [BOILER],
    id: 'brand_289',
  },
  {
    title: 'Viterm',
    appType: [BOILER],
    id: 'brand_290',
  },
  {
    title: 'VES',
    appType: [BOILER],
    id: 'brand_291',
  },
  {
    title: 'WARM',
    appType: [BOILER],
    id: 'brand_292',
  },
  {
    title: 'Wert',
    appType: [BOILER],
    id: 'brand_293',
  },
  {
    title: 'Wester',
    appType: [BOILER],
    id: 'brand_294',
  },
  {
    title: 'Zerten',
    appType: [BOILER],
    id: 'brand_295',
  },
  {
    title: 'ZOTA',
    appType: [BOILER],
    id: 'brand_296',
  },
  {
    title: 'Акватерм',
    appType: [BOILER],
    id: 'brand_297',
  },
  {
    title: 'Гродторгмаш',
    appType: [BOILER],
    id: 'brand_298',
  },
  {
    title: 'Искра',
    appType: [BOILER],
    id: 'brand_299',
  },
  {
    title: 'Ладогаз',
    appType: [BOILER],
    id: 'brand_300',
  },
  {
    title: 'Лемакс',
    appType: [BOILER],
    id: 'brand_301',
  },
  {
    title: 'Нева-Транзит',
    appType: [BOILER],
    id: 'brand_302',
  },
  {
    title: 'РЕСАНТА',
    appType: [BOILER],
    id: 'brand_303',
  },
  {
    title: 'РОСС',
    appType: [BOILER],
    id: 'brand_304',
  },
  {
    title: 'Умница',
    appType: [BOILER],
    id: 'brand_305',
  },
  {
    title: 'Эван',
    appType: [BOILER],
    id: 'brand_306',
  },
  {
    title: 'Электромаш',
    appType: [BOILER],
    id: 'brand_307',
  },
];

export default brandList;
