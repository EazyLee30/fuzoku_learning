export interface Phrase {
  japanese: string;
  chinese: string;
  romaji: string;
  audio?: string;
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
          },
          {
            japanese: 'お会いできて嬉しいです',
            chinese: '很高兴见到你',
            romaji: 'Oai dekite ureshii desu',
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
          },
          {
            japanese: 'ごゆっくりおくつろぎください',
            chinese: '请慢慢放松',
            romaji: 'Goyukkuri okutsurogi kudasai',
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
          },
          {
            japanese: 'もう少し優しくお願いします',
            chinese: '请再温柔一点',
            romaji: 'Mō sukoshi yasashiku onegaishimasu',
          },
          {
            japanese: 'そこが気持ちいいです',
            chinese: '那里很舒服',
            romaji: 'Soko ga kimochi ii desu',
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
          },
          {
            japanese: '何かご要望はありますか',
            chinese: '有什么要求吗',
            romaji: 'Nanika goyōbō wa arimasu ka',
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
