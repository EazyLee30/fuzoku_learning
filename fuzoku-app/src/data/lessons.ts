export interface Phrase {
  japanese: string;
  chinese: string;
  romaji: string;
  audio?: string;
  perspective?: 'consumer' | 'provider' | 'both';
}

export interface Exercise {
  type: 'multiple-choice' | 'translation' | 'listening' | 'matching';
  question: Phrase;
  options?: Phrase[];
  correctAnswer?: number | string;
}

export interface Lesson {
  id: string;
  title: {
    japanese: string;
    chinese: string;
  };
  description: {
    japanese: string;
    chinese: string;
  };
  perspective: 'consumer' | 'provider' | 'both';
  level: 'beginner' | 'intermediate' | 'advanced';
  phrases: Phrase[];
  exercises: Exercise[];
}

export interface Course {
  id: string;
  title: {
    japanese: string;
    chinese: string;
  };
  description: {
    japanese: string;
    chinese: string;
  };
  image: string;
  lessons: Lesson[];
}

// 基础课程数据
export const courses: Course[] = [
  {
    id: 'basic-greetings',
    title: {
      japanese: '基本的な挨拶',
      chinese: '基本问候',
    },
    description: {
      japanese: '風俗店での基本的な挨拶と自己紹介を学びます。',
      chinese: '学习在风俗店中的基本问候和自我介绍。',
    },
    image: '/greeting.png',
    lessons: [
      {
        id: 'first-meeting',
        title: {
          japanese: '初めての出会い',
          chinese: '初次见面',
        },
        description: {
          japanese: '風俗店に入るときの基本的な挨拶と自己紹介',
          chinese: '进入风俗店时的基本问候和自我介绍',
        },
        perspective: 'consumer',
        level: 'beginner',
        phrases: [
          {
            japanese: 'こんにちは',
            chinese: '你好',
            romaji: 'Konnichiwa',
          },
          {
            japanese: 'はじめまして',
            chinese: '初次见面',
            romaji: 'Hajimemashite',
            perspective: 'both',
          },
          {
            japanese: '私の名前は〇〇です',
            chinese: '我的名字是〇〇',
            romaji: 'Watashi no namae wa 〇〇 desu',
          },
          {
            japanese: 'よろしくお願いします',
            chinese: '请多关照',
            romaji: 'Yoroshiku onegaishimasu',
            perspective: 'both',
          },
          {
            japanese: 'お会いできて嬉しいです',
            chinese: '很高兴见到你',
            romaji: 'Oai dekite ureshii desu',
          },
          {
            japanese: '初めてです',
            chinese: '我是第一次来',
            romaji: 'Hajimete desu',
            perspective: 'consumer',
          },
          {
            japanese: '予約はしていません',
            chinese: '我没有预约',
            romaji: 'Yoyaku wa shite imasen',
            perspective: 'consumer',
          },
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: {
              japanese: '「はじめまして」の意味は何ですか？',
              chinese: '"はじめまして"是什么意思？',
              romaji: '"Hajimemashite" no imi wa nan desu ka?',
            },
            options: [
              {
                japanese: '初次见面',
                chinese: '初次见面',
                romaji: 'Shokai kaimaku',
              },
              {
                japanese: '你好',
                chinese: '你好',
                romaji: 'Nǐ hǎo',
              },
              {
                japanese: '再见',
                chinese: '再见',
                romaji: 'Zàijiàn',
              },
              {
                japanese: '谢谢',
                chinese: '谢谢',
                romaji: 'Xièxiè',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 'welcome-phrases',
        title: {
          japanese: 'お迎えの言葉',
          chinese: '欢迎用语',
        },
        description: {
          japanese: 'お客様を迎える時の言葉と対応',
          chinese: '接待客人时的用语和应对',
        },
        perspective: 'provider',
        level: 'beginner',
        phrases: [
          {
            japanese: 'いらっしゃいませ',
            chinese: '欢迎光临',
            romaji: 'Irasshaimase',
            perspective: 'provider',
          },
          {
            japanese: 'ようこそ',
            chinese: '欢迎',
            romaji: 'Yōkoso',
          },
          {
            japanese: 'お名前を教えていただけますか',
            chinese: '能告诉我您的名字吗',
            romaji: 'Onamae o oshiete itadakemasu ka',
          },
          {
            japanese: 'こちらへどうぞ',
            chinese: '请这边走',
            romaji: 'Kochira e dōzo',
            perspective: 'provider',
          },
          {
            japanese: 'ごゆっくりおくつろぎください',
            chinese: '请慢慢放松',
            romaji: 'Goyukkuri okutsurogi kudasai',
          },
          {
            japanese: 'お待ちください',
            chinese: '请稍等',
            romaji: 'Omachi kudasai',
            perspective: 'provider',
          },
          {
            japanese: 'ご案内いたします',
            chinese: '我来为您引路',
            romaji: 'Go-annai itashimasu',
            perspective: 'provider',
          },
          {
            japanese: 'ご来店ありがとうございます',
            chinese: '感谢您的光临',
            romaji: 'Go-raiten arigatō gozaimasu',
            perspective: 'provider',
          },
          {
            japanese: 'ご予約はされていますか？',
            chinese: '请问有预约吗？',
            romaji: 'Go-yoyaku wa sarete imasu ka?',
            perspective: 'provider',
          },
          {
            japanese: 'かしこまりました',
            chinese: '好的，明白了',
            romaji: 'Kashikomarimashita',
            perspective: 'provider',
          },
          {
            japanese: 'お待たせいたしました',
            chinese: '让您久等了',
            romaji: 'Omatase itashimashita',
            perspective: 'provider',
          },
        ],
        exercises: [
          {
            type: 'translation',
            question: {
              japanese: 'いらっしゃいませ',
              chinese: '',
              romaji: 'Irasshaimase',
            },
            correctAnswer: '欢迎光临',
          },
        ],
      },
    ],
  },
  {
    id: 'service-selection',
    title: {
      japanese: 'サービス選択',
      chinese: '服务选择',
    },
    description: {
      japanese: '様々なサービスの説明と選択方法を学びます。',
      chinese: '学习各种服务的说明和选择方法。',
    },
    image: '/service.png',
    lessons: [
      {
        id: 'service-types',
        title: {
          japanese: 'サービスの種類',
          chinese: '服务种类',
        },
        description: {
          japanese: '一般的なサービスの種類と内容の説明',
          chinese: '常见服务种类和内容的说明',
        },
        perspective: 'consumer',
        level: 'intermediate',
        phrases: [
          {
            japanese: 'どんなサービスがありますか',
            chinese: '有哪些服务',
            romaji: 'Donna sābisu ga arimasu ka',
          },
          {
            japanese: 'メニューを見せてください',
            chinese: '请给我看一下菜单',
            romaji: 'Menyū o misete kudasai',
          },
          {
            japanese: 'このサービスは何ですか',
            chinese: '这个服务是什么',
            romaji: 'Kono sābisu wa nan desu ka',
          },
          {
            japanese: '〇〇のサービスをお願いします',
            chinese: '请给我〇〇服务',
            romaji: '〇〇 no sābisu o onegaishimasu',
          },
          {
            japanese: '時間はどのくらいですか',
            chinese: '时间是多久',
            romaji: 'Jikan wa dono kurai desu ka',
          },
          {
            japanese: 'すみません、システムを説明していただけますか？',
            chinese: '不好意思，能给我说明一下服务流程/规则吗？',
            romaji: 'Sumimasen, shisutemu o setsumei shite itadakemasu ka?',
            perspective: 'consumer',
          },
          {
            japanese: 'この「基本コース」には何が含まれていますか？',
            chinese: '这个"基本套餐"包含哪些内容？',
            romaji: 'Kono "Kihon Kōsu" ni wa nani ga fukumarete imasu ka?',
            perspective: 'consumer',
          },
          {
            japanese: 'オプションはありますか？',
            chinese: '有没有附加的可选服务？',
            romaji: 'Opushon wa arimasu ka?',
            perspective: 'consumer',
          },
          {
            japanese: '指名料は別途かかりますか？',
            chinese: '指名费是需要另外支付的吗？',
            romaji: 'Shimei-ryō wa betto kakarimasu ka?',
            perspective: 'consumer',
          },
        ],
        exercises: [
          {
            type: 'matching',
            question: {
              japanese: '次の日本語と中国語を合わせてください',
              chinese: '请匹配以下日语和中文',
              romaji: 'Tsugi no nihongo to chūgokugo o awasete kudasai',
            },
            options: [
              {
                japanese: 'どんなサービスがありますか',
                chinese: '有哪些服务',
                romaji: 'Donna sābisu ga arimasu ka',
              },
              {
                japanese: 'メニューを見せてください',
                chinese: '请给我看一下菜单',
                romaji: 'Menyū o misete kudasai',
              },
            ],
            correctAnswer: '0,0;1,1',
          },
        ],
      },
      {
        id: 'service-explanation',
        title: {
          japanese: 'サービスの説明',
          chinese: '服务说明',
        },
        description: {
          japanese: 'お客様にサービス内容を説明する方法',
          chinese: '向客人解释服务内容的方法',
        },
        perspective: 'provider',
        level: 'intermediate',
        phrases: [
          {
            japanese: 'こちらは〇〇のサービスです',
            chinese: '这是〇〇服务',
            romaji: 'Kochira wa 〇〇 no sābisu desu',
          },
          {
            japanese: '〇〇分のコースになります',
            chinese: '这是〇〇分钟的套餐',
            romaji: '〇〇-fun no kōsu ni narimasu',
          },
          {
            japanese: '料金は〇〇円です',
            chinese: '费用是〇〇日元',
            romaji: 'Ryōkin wa 〇〇-en desu',
          },
          {
            japanese: 'オプションもございます',
            chinese: '也有附加选项',
            romaji: 'Opushon mo gozaimasu',
          },
          {
            japanese: 'ご希望はございますか',
            chinese: '您有什么要求吗',
            romaji: 'Gokibō wa gozaimasu ka',
          },
          {
            japanese: 'こちらが料金表とコース内容になります',
            chinese: '这边是价目表和服务项目内容',
            romaji: 'Kochira ga ryōkinhyō to kōsu naiyō ni narimasu',
            perspective: 'provider',
          },
          {
            japanese: '基本コースには、シャワー、マッサージ、そして～分間のサービスが含まれております',
            chinese: '基本套餐包含淋浴、按摩以及～分钟的服务',
            romaji: 'Kihon kōsu ni wa, shawā, massāji, soshite ~ funkan no sābisu ga fukumarete orimasu',
            perspective: 'provider',
          },
          {
            japanese: 'こちらのリストをご覧ください',
            chinese: '请看这份列表',
            romaji: 'Kochira no risuto o goran kudasai',
            perspective: 'provider',
          },
          {
            japanese: 'ご希望のオプションがあればお申し付けください',
            chinese: '如果有您想要的可选服务请告诉我',
            romaji: 'Go-kibō no opushon ga areba o-mōshitsuke kudasai',
            perspective: 'provider',
          },
          {
            japanese: '指名される場合は別途指名料が必要となります',
            chinese: '如果指名的话需要另外支付指名费',
            romaji: 'Shimei sareru baai wa betto shimei-ryō ga hitsuyō to narimasu',
            perspective: 'provider',
          },
        ],
        exercises: [
          {
            type: 'listening',
            question: {
              japanese: '「料金は8000円です」の中国語訳は何ですか',
              chinese: '"料金は8000円です"的中文翻译是什么',
              romaji: '"Ryōkin wa 8000-en desu" no chūgokugo yaku wa nan desu ka',
            },
            options: [
              {
                japanese: '费用是8000日元',
                chinese: '费用是8000日元',
                romaji: 'Fèiyòng shì 8000 rìyuán',
              },
              {
                japanese: '时间是80分钟',
                chinese: '时间是80分钟',
                romaji: 'Shíjiān shì 80 fēnzhōng',
              },
              {
                japanese: '这是8点的预约',
                chinese: '这是8点的预约',
                romaji: 'Zhè shì 8 diǎn de yùyuē',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 'establishment-types',
        title: {
          japanese: '店舗の種類',
          chinese: '场所类型',
        },
        description: {
          japanese: '様々な風俗店の種類と特徴',
          chinese: '各种风俗店的类型和特点',
        },
        perspective: 'both',
        level: 'beginner',
        phrases: [
          {
            japanese: 'ソープランド',
            chinese: '泡泡浴',
            romaji: 'Sōpurando',
            perspective: 'both',
          },
          {
            japanese: 'デリヘル (デリバリーヘルス)',
            chinese: '上门健康服务 (外送型服务)',
            romaji: 'Deriheru (Deribarī Herusu)',
            perspective: 'both',
          },
          {
            japanese: 'ホテヘル (ホテルヘルス)',
            chinese: '酒店健康服务 (在酒店进行)',
            romaji: 'Hoteheru (Hoteru Herusu)',
            perspective: 'both',
          },
          {
            japanese: 'メンズエステ',
            chinese: '男性美容/按摩 (常含擦边服务)',
            romaji: 'Menzu Esute',
            perspective: 'both',
          },
          {
            japanese: 'キャバクラ',
            chinese: '陪酒俱乐部',
            romaji: 'Kyabakura',
            perspective: 'both',
          },
          {
            japanese: '料金',
            chinese: '费用',
            romaji: 'Ryōkin',
            perspective: 'both',
          },
          {
            japanese: 'コース',
            chinese: '套餐/服务项目',
            romaji: 'Kōsu',
            perspective: 'both',
          },
          {
            japanese: 'システム',
            chinese: '系统/规则/流程',
            romaji: 'Shisutemu',
            perspective: 'both',
          },
          {
            japanese: '基本料金',
            chinese: '基本费用',
            romaji: 'Kihon ryōkin',
            perspective: 'both',
          },
          {
            japanese: '指名料',
            chinese: '指名费',
            romaji: 'Shimei-ryō',
            perspective: 'both',
          },
          {
            japanese: '延長料金',
            chinese: '延长费用',
            romaji: 'Enchō ryōkin',
            perspective: 'both',
          },
          {
            japanese: 'オプション',
            chinese: '可选项目/附加服务',
            romaji: 'Opushon',
            perspective: 'both',
          },
          {
            japanese: 'お風呂',
            chinese: '浴室/洗澡',
            romaji: 'Ofuro',
            perspective: 'both',
          },
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: {
              japanese: '「デリヘル」とは何ですか？',
              chinese: '"デリヘル"是什么？',
              romaji: '"Deriheru" to wa nan desu ka?',
            },
            options: [
              {
                japanese: '上门健康服务',
                chinese: '上门健康服务',
                romaji: 'Shàngmén jiànkāng fúwù',
              },
              {
                japanese: '泡泡浴',
                chinese: '泡泡浴',
                romaji: 'Pàopào yù',
              },
              {
                japanese: '陪酒俱乐部',
                chinese: '陪酒俱乐部',
                romaji: 'Péijiǔ jùlèbù',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: {
      japanese: 'コミュニケーション',
      chinese: '沟通交流',
    },
    description: {
      japanese: 'サービス中の会話とコミュニケーションを学びます。',
      chinese: '学习服务中的对话和沟通。',
    },
    image: '/communication.png',
    lessons: [
      {
        id: 'comfort-expressions',
        title: {
          japanese: '快適さの表現',
          chinese: '舒适度表达',
        },
        description: {
          japanese: 'サービス中の快適さや要望を伝える表現',
          chinese: '服务中表达舒适度和要求的表达',
        },
        perspective: 'consumer',
        level: 'intermediate',
        phrases: [
          {
            japanese: 'もう少し強くお願いします',
            chinese: '请再用力一点',
            romaji: 'Mō sukoshi tsuyoku onegaishimasu',
            perspective: 'consumer',
          },
          {
            japanese: 'もう少し優しくお願いします',
            chinese: '请再温柔一点',
            romaji: 'Mō sukoshi yasashiku onegaishimasu',
            perspective: 'consumer',
          },
          {
            japanese: 'そこが気持ちいいです',
            chinese: '那里很舒服',
            romaji: 'Soko ga kimochi ii desu',
            perspective: 'consumer',
          },
          {
            japanese: '少し休憩してもいいですか',
            chinese: '可以稍微休息一下吗',
            romaji: 'Sukoshi kyūkei shite mo ii desu ka',
          },
          {
            japanese: '水を飲みたいです',
            chinese: '我想喝水',
            romaji: 'Mizu o nomitai desu',
          },
          {
            japanese: 'マッサージ',
            chinese: '按摩',
            romaji: 'Massāji',
            perspective: 'both',
          },
          {
            japanese: 'シャワー',
            chinese: '淋浴',
            romaji: 'Shawā',
            perspective: 'both',
          },
          {
            japanese: '手コキ',
            chinese: '手交',
            romaji: 'Tekoki',
            perspective: 'both',
          },
          {
            japanese: 'フェラ',
            chinese: '口交',
            romaji: 'Fera',
            perspective: 'both',
          },
          {
            japanese: 'パイズリ',
            chinese: '乳交',
            romaji: 'Paizuri',
            perspective: 'both',
          },
          {
            japanese: '本番',
            chinese: '本番行为 (性交)',
            romaji: 'Honban',
            perspective: 'both',
          },
          {
            japanese: 'ここ',
            chinese: '这里',
            romaji: 'Koko',
            perspective: 'both',
          },
          {
            japanese: '気持ちいい',
            chinese: '舒服',
            romaji: 'Kimochi ii',
            perspective: 'both',
          },
          {
            japanese: 'オススメ',
            chinese: '推荐',
            romaji: 'Osusume',
            perspective: 'both',
          },
          {
            japanese: 'リラックスする',
            chinese: '放松',
            romaji: 'Rirakkusu suru',
            perspective: 'both',
          },
          {
            japanese: 'お好み',
            chinese: '喜好',
            romaji: 'Okonomi',
            perspective: 'both',
          },
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: {
              japanese: '「もう少し強くお願いします」の意味は何ですか？',
              chinese: '"もう少し強くお願いします"是什么意思？',
              romaji: '"Mō sukoshi tsuyoku onegaishimasu" no imi wa nan desu ka?',
            },
            options: [
              {
                japanese: '请再用力一点',
                chinese: '请再用力一点',
                romaji: 'Qǐng zài yònglì yīdiǎn',
              },
              {
                japanese: '请再温柔一点',
                chinese: '请再温柔一点',
                romaji: 'Qǐng zài wēnróu yīdiǎn',
              },
              {
                japanese: '请再快一点',
                chinese: '请再快一点',
                romaji: 'Qǐng zài kuài yīdiǎn',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 'service-guidance',
        title: {
          japanese: 'サービス案内',
          chinese: '服务指导',
        },
        description: {
          japanese: 'サービス中のお客様への案内と対応',
          chinese: '服务中对客人的指导和应对',
        },
        perspective: 'provider',
        level: 'intermediate',
        phrases: [
          {
            japanese: 'リラックスしてください',
            chinese: '请放松',
            romaji: 'Rirakkusu shite kudasai',
          },
          {
            japanese: 'こちらで横になってください',
            chinese: '请在这里躺下',
            romaji: 'Kochira de yokoninate kudasai',
          },
          {
            japanese: '気持ちいいですか',
            chinese: '舒服吗',
            romaji: 'Kimochi ii desu ka',
          },
          {
            japanese: '力加減はいかがですか',
            chinese: '力度如何',
            romaji: 'Chikara kagen wa ikaga desu ka',
            perspective: 'provider',
          },
          {
            japanese: '何かご要望はありますか',
            chinese: '有什么要求吗',
            romaji: 'Nanika goyōbō wa arimasu ka',
          },
          {
            japanese: 'かしこまりました。これくらいでいかがですか？',
            chinese: '好的。这样可以吗？',
            romaji: 'Kashikomarimashita. Kore kurai de ikaga desu ka?',
            perspective: 'provider',
          },
          {
            japanese: '他にご希望はございますか？',
            chinese: '还有其他的要求吗？',
            romaji: 'Hoka ni go-kibō wa gozaimasu ka?',
            perspective: 'provider',
          },
          {
            japanese: 'はい、コースに含まれております。リラックスしてくださいね。',
            chinese: '是的，包含在套餐里。请放松。',
            romaji: 'Hai, kōsu ni fukumarete orimasu. Rirakkusu shite kudasai ne.',
            perspective: 'provider',
          },
        ],
        exercises: [
          {
            type: 'translation',
            question: {
              japanese: 'リラックスしてください',
              chinese: '',
              romaji: 'Rirakkusu shite kudasai',
            },
            correctAnswer: '请放松',
          },
        ],
      },
      {
        id: 'comfort-boundaries',
        title: {
          japanese: '快適さと境界線の表現',
          chinese: '表达舒适度与界限',
        },
        description: {
          japanese: '快適さや不快感、境界線を表現する方法',
          chinese: '如何表达舒适度、不适感和个人界限',
        },
        perspective: 'both',
        level: 'intermediate',
        phrases: [
          {
            japanese: '大丈夫です',
            chinese: '没关系/可以/还好',
            romaji: 'Daijōbu desu',
            perspective: 'both',
          },
          {
            japanese: '痛いです',
            chinese: '疼/痛',
            romaji: 'Itai desu',
            perspective: 'consumer',
          },
          {
            japanese: '苦手です',
            chinese: '不擅长/不喜欢/有点抗拒',
            romaji: 'Nigate desu',
            perspective: 'consumer',
          },
          {
            japanese: 'やめてください',
            chinese: '请停止',
            romaji: 'Yamete kudasai',
            perspective: 'consumer',
          },
          {
            japanese: 'もう少しゆっくり',
            chinese: '再慢一点',
            romaji: 'Mō sukoshi yukkuri',
            perspective: 'consumer',
          },
          {
            japanese: 'この程度で',
            chinese: '这种程度就可以了',
            romaji: 'Kono teido de',
            perspective: 'consumer',
          },
          {
            japanese: '確認する',
            chinese: '确认',
            romaji: 'Kakunin suru',
            perspective: 'provider',
          },
          {
            japanese: '気をつける',
            chinese: '注意/小心',
            romaji: 'Ki o tsukeru',
            perspective: 'provider',
          },
          {
            japanese: '無理なこと',
            chinese: '不可能的事/过分的要求',
            romaji: 'Muri na koto',
            perspective: 'provider',
          },
          {
            japanese: '断る',
            chinese: '拒绝',
            romaji: 'Kotowaru',
            perspective: 'provider',
          },
          {
            japanese: 'ご了承ください',
            chinese: '请谅解/请知悉',
            romaji: 'Go-ryōshō kudasai',
            perspective: 'provider',
          },
          {
            japanese: '不快です',
            chinese: '不舒服/不愉快',
            romaji: 'Fukai desu',
            perspective: 'consumer',
          },
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: {
              japanese: '「やめてください」の意味は何ですか？',
              chinese: '"やめてください"是什么意思？',
              romaji: '"Yamete kudasai" no imi wa nan desu ka?',
            },
            options: [
              {
                japanese: '请停止',
                chinese: '请停止',
                romaji: 'Qǐng tíngzhǐ',
              },
              {
                japanese: '请继续',
                chinese: '请继续',
                romaji: 'Qǐng jìxù',
              },
              {
                japanese: '请放松',
                chinese: '请放松',
                romaji: 'Qǐng fàngsōng',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'payment-farewell',
    title: {
      japanese: '支払いと別れ',
      chinese: '支付与告别',
    },
    description: {
      japanese: 'サービス終了後の支払いと別れの挨拶を学びます。',
      chinese: '学习服务结束后的支付和告别问候。',
    },
    image: '/payment.png',
    lessons: [
      {
        id: 'payment-phrases',
        title: {
          japanese: '支払いの表現',
          chinese: '支付表达',
        },
        description: {
          japanese: '支払い時に使う表現と対応',
          chinese: '支付时使用的表达和应对',
        },
        perspective: 'consumer',
        level: 'beginner',
        phrases: [
          {
            japanese: 'いくらですか',
            chinese: '多少钱',
            romaji: 'Ikura desu ka',
          },
          {
            japanese: 'カードで支払えますか',
            chinese: '可以用卡支付吗',
            romaji: 'Kādo de haraemasu ka',
          },
          {
            japanese: '現金で支払います',
            chinese: '用现金支付',
            romaji: 'Genkin de haraimasu',
          },
          {
            japanese: 'レシートをください',
            chinese: '请给我收据',
            romaji: 'Reshīto o kudasai',
          },
          {
            japanese: 'チップはいりますか',
            chinese: '需要小费吗',
            romaji: 'Chippu wa irimasu ka',
          },
          {
            japanese: 'お会計',
            chinese: '结账',
            romaji: 'O-kaikei',
            perspective: 'both',
          },
          {
            japanese: '合計',
            chinese: '合计',
            romaji: 'Gōkei',
            perspective: 'provider',
          },
          {
            japanese: '～円です',
            chinese: '是～日元',
            romaji: '~ en desu',
            perspective: 'provider',
          },
          {
            japanese: '消費税込み',
            chinese: '含消费税',
            romaji: 'Shōhizei-komi',
            perspective: 'provider',
          },
          {
            japanese: 'カード',
            chinese: '卡 (信用卡/借记卡)',
            romaji: 'Kādo',
            perspective: 'both',
          },
          {
            japanese: '現金',
            chinese: '现金',
            romaji: 'Genkin',
            perspective: 'both',
          },
          {
            japanese: '領収書',
            chinese: '收据/发票',
            romaji: 'Ryōshūsho',
            perspective: 'both',
          },
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: {
              japanese: '「カードで支払えますか」の意味は何ですか？',
              chinese: '"カードで支払えますか"是什么意思？',
              romaji: '"Kādo de haraemasu ka" no imi wa nan desu ka?',
            },
            options: [
              {
                japanese: '可以用卡支付吗',
                chinese: '可以用卡支付吗',
                romaji: 'Kěyǐ yòng kǎ zhīfù ma',
              },
              {
                japanese: '可以用现金支付吗',
                chinese: '可以用现金支付吗',
                romaji: 'Kěyǐ yòng xiànjīn zhīfù ma',
              },
              {
                japanese: '可以给我收据吗',
                chinese: '可以给我收据吗',
                romaji: 'Kěyǐ gěi wǒ shōujù ma',
              },
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 'farewell-phrases',
        title: {
          japanese: '別れの挨拶',
          chinese: '告别问候',
        },
        description: {
          japanese: 'サービス終了時の挨拶と次回の案内',
          chinese: '服务结束时的问候和下次的指引',
        },
        perspective: 'both',
        level: 'beginner',
        phrases: [
          {
            japanese: 'ありがとうございました',
            chinese: '非常感谢',
            romaji: 'Arigatō gozaimashita',
          },
          {
            japanese: 'また来てください',
            chinese: '请再来',
            romaji: 'Mata kite kudasai',
          },
          {
            japanese: 'また来ます',
            chinese: '我会再来',
            romaji: 'Mata kimasu',
          },
          {
            japanese: 'お疲れ様でした',
            chinese: '辛苦了',
            romaji: 'Otsukare-sama deshita',
          },
          {
            japanese: 'さようなら',
            chinese: '再见',
            romaji: 'Sayōnara',
          },
          {
            japanese: '今日はありがとうございました',
            chinese: '今天非常感谢',
            romaji: 'Kyō wa arigatō gozaimashita',
            perspective: 'consumer',
          },
          {
            japanese: '楽しかったです',
            chinese: '我很开心/很愉快',
            romaji: 'Tanoshikatta desu',
            perspective: 'consumer',
          },
          {
            japanese: 'また来ます',
            chinese: '我会再来的',
            romaji: 'Mata kimasu',
            perspective: 'consumer',
          },
          {
            japanese: 'お気に召しましたか？',
            chinese: '您满意吗？',
            romaji: 'O-ki ni meshimashita ka?',
            perspective: 'provider',
          },
          {
            japanese: 'またのお越しをお待ちしております',
            chinese: '期待您的再次光临',
            romaji: 'Mata no o-koshi o o-machi shite orimasu',
            perspective: 'provider',
          },
          {
            japanese: 'お忘れ物のないように',
            chinese: '请检查不要遗留物品',
            romaji: 'O-wasuremono no nai yō ni',
            perspective: 'provider',
          },
          {
            japanese: '気をつけてお帰りください',
            chinese: '请路上小心/请慢走',
            romaji: 'Ki o tsukete o-kaeri kudasai',
            perspective: 'provider',
          },
          {
            japanese: 'お時間です。お疲れ様でした。',
            chinese: '时间到了。辛苦了。',
            romaji: 'Ojikan desu. Otsukaresama deshita.',
            perspective: 'provider',
          },
        ],
        exercises: [
          {
            type: 'matching',
            question: {
              japanese: '次の日本語と中国語を合わせてください',
              chinese: '请匹配以下日语和中文',
              romaji: 'Tsugi no nihongo to chūgokugo o awasete kudasai',
            },
            options: [
              {
                japanese: 'ありがとうございました',
                chinese: '非常感谢',
                romaji: 'Arigatō gozaimashita',
              },
              {
                japanese: 'また来てください',
                chinese: '请再来',
                romaji: 'Mata kite kudasai',
              },
              {
                japanese: 'さようなら',
                chinese: '再见',
                romaji: 'Sayōnara',
              },
            ],
            correctAnswer: '0,0;1,1;2,2',
          },
        ],
      },
    ],
  },
];
