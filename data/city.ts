const normalizedSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaifeng-travel.vercel.app").replace(/\/$/, "");

export const siteConfig = {
  name: "汴京行旅",
  title: "开封旅行指南",
  description:
    "以宋韵气息为线索，带你快速理解开封的必游景点、推荐路线、夜游体验与在地味道。",
  siteUrl: normalizedSiteUrl,
  ogImage: "/images/kaifeng/hero/kaifeng-hero-main.svg"
};

export const navigation = [
  { href: "/", label: "首页" },
  { href: "/attractions", label: "景点" },
  { href: "/itineraries", label: "推荐路线" },
  { href: "/food", label: "美食" },
  { href: "/travel-tips", label: "出行指南" },
  { href: "/about-kaifeng", label: "认识开封" }
];

export const homeHero = {
  title: "一城汴水，半卷宋风",
  subtitle:
    "开封不是只适合匆匆打卡的古城。白天可以沿着皇城遗韵与寺塔古迹慢慢展开，夜里又会在灯影、水岸与夜市烟火里变得鲜活起来。",
  editorialNote:
    "先用路线判断一天该怎么走，再回到景点页做加减，会比从零开始查攻略轻松得多。",
  primaryCta: { href: "/itineraries", label: "开始规划行程" },
  secondaryCta: { href: "/attractions", label: "查看必去景点" },
  stats: [
    { label: "适合初次来访", value: "1 到 2 天就能玩明白" },
    { label: "最有记忆点", value: "白天看城，夜里入戏" },
    { label: "决策方式", value: "先选路线，再挑景点" }
  ]
};

export const cityHighlights = [
  {
    title: "宋韵氛围",
    description:
      "从园林、府衙到街巷演艺，开封最迷人的地方，是能把历史感变成可感知的旅行氛围。"
  },
  {
    title: "古城漫游",
    description:
      "景点之间并不遥远，适合用一整天慢慢串联。古塔、城墙、寺院与老街，可以自然拼成一条线。"
  },
  {
    title: "夜游烟火",
    description:
      "真正让人记住开封的，往往是傍晚以后。夜市、灯光、水岸和演出，把古都的另一面点亮。"
  }
];

export const practicalTipCards = [
  {
    title: "什么时候去",
    description: "春秋最舒适，节庆氛围更浓；夏季适合夜游，冬季更适合避开人流慢慢看城。"
  },
  {
    title: "建议玩几天",
    description: "第一次来建议安排 1 到 2 天。若想兼顾夜游与美食，住一晚会更从容。"
  },
  {
    title: "住哪里更方便",
    description: "优先考虑鼓楼、龙亭湖或清明上河园周边，白天串景点、晚上去夜市都更顺。"
  },
  {
    title: "初次来怎么安排",
    description: "白天看核心景点，傍晚留给水岸与夜市。把演出、夜景和宵夜安排在同一段会最省心。"
  }
];

export const foodScenarios = [
  {
    title: "小吃",
    description:
      "桶子鸡、花生糕、灌汤包与羊肉炕馍都很适合边走边尝，开封的味道往往藏在轻松的街巷节奏里。"
  },
  {
    title: "夜市",
    description:
      "鼓楼一带最适合把夜游和宵夜连起来。灯光、人声和热气，是这座城最有人情味的时刻。"
  },
  {
    title: "快速觅食建议",
    description:
      "如果行程紧，午餐优先安排在核心景区附近，晚餐或夜宵再留给夜市与老街，效率和体验都更好。"
  }
];

export const nightExperience = {
  title: "灯影、水岸与演出，让开封在入夜之后更有层次",
  description:
    "傍晚以后，古城开始从历史叙事切换到情绪体验。可以沿着水岸看灯火，也可以把演出和夜市安排成一整段，让这一夜既有画面，也有烟火。",
  bullets: ["古城夜景与水岸氛围", "适合与夜间表演串联", "夜游后接夜市最完整"]
};

export const travelTipSections = {
  arrivals: [
    "高铁抵达郑州或开封后转入市区较为便捷，周末与节假日建议提前确认车次和换乘时间。",
    "自驾适合串联开封周边短途，但热门景区周边在旺季可能停车紧张。"
  ],
  bestSeason: [
    "春季和秋季最适合长时间步行，气候更舒服，园林与湖景层次也更好。",
    "夏季更推荐把重点放在傍晚和夜间，夜市与演出体验通常更出彩。"
  ],
  duration: [
    "1 天适合第一次打卡核心景点与夜市。",
    "2 天更适合放慢节奏，加入寺院、城墙散步和夜游场景。"
  ],
  stays: [
    "鼓楼周边适合想把美食和夜生活排在前面的游客。",
    "龙亭湖与清明上河园一带更适合以景点和演出为核心的行程。"
  ],
  reminders: [
    "景区票务、演出场次和节庆安排会变化，建议出发前查看景区官方信息。",
    "旺季和节庆期间安排可能有所调整，尽量预留排队和交通缓冲时间。",
    "夜间演出请提前确认场次，返程时也要留意打车或公交末班信息。"
  ]
};

export const aboutKaifengSections = [
  {
    title: "古都的尺度",
    content:
      "开封的吸引力，不只在于它曾经是都城，更在于这里依旧保留着一种适合步行与停留的古城尺度。景点之间并非遥不可及，城市记忆会在移动中慢慢浮现。"
  },
  {
    title: "宋文化的日常感",
    content:
      "很多地方讲历史，开封更像是在讲生活。园林、府衙、寺塔、汴河与夜市，把想象中的宋风拉回日常，让旅行不只是看展板，而是进入一种氛围。"
  },
  {
    title: "为什么现在仍值得来",
    content:
      "对于现代旅行者来说，开封的动人之处在于它兼具文化厚度与轻松度：可以一边看古迹，一边吃小吃、看演出、夜游散步，行程很丰富，却不必太赶。"
  }
];

export const footerContent = {
  statement:
    "汴京行旅以旅行编辑视角整理开封的景点、路线、夜游与在地味道，让第一次到访的人也能更快做出轻松而清晰的行程决定。",
  quickLinks: navigation,
  notes: ["内容以行程判断与旅行灵感为主", "票务、演出与开放安排请以景区官方信息为准"],
  copyright: "Copyright © 2026 汴京行旅"
};
