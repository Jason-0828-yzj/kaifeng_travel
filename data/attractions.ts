import type { Attraction } from "@/types/attraction";

export const attractions: Attraction[] = [
  {
    slug: "qingming-riverside-garden",
    name: "清明上河园",
    subtitle: "沉浸式体验宋风生活场景",
    intro: "如果想在有限时间里最快进入开封的宋韵氛围，清明上河园通常会是第一站。",
    longDescription:
      "这是一处非常适合第一次到访者的景点。它把宋代市井、街巷、水岸与演艺体验集中在同一个场域里，既适合慢慢拍照，也适合安排亲子和轻松漫游。白天更适合看街景与建筑，傍晚之后则能感受到灯光、水面和表演叠加出的沉浸感。",
    tags: ["必去", "宋文化", "亲子友好", "演艺"],
    category: "culture",
    recommendedDuration: "半天到 1 天",
    bestVisitTime: "下午至夜间更容易感受到层次变化",
    location: "龙亭区",
    ticketHint: "建议出发前查看景区官方信息",
    transportTip: "适合与龙亭、开封府串联安排，也可把夜间体验留在园区或周边。",
    highlights: ["宋式街景与水岸氛围", "适合拍照与沉浸漫游", "夜间更有戏剧感"],
    tips: [
      "如果计划看夜间项目，建议把时间留得更宽松一些。",
      "旺季人流较多，舒适的浏览方式是避开正午高峰。",
      "夜间演出请提前确认场次。"
    ],
    heroImage: "/images/kaifeng/attractions/qingming.svg",
    gallery: [
      "/images/kaifeng/attractions/qingming.svg",
      "/images/kaifeng/hero/night-river.svg"
    ],
    relatedSlugs: ["dragon-pavilion", "kaifeng-prefecture", "bian-river-night-tour"],
    featured: true
  },
  {
    slug: "dragon-pavilion",
    name: "龙亭",
    subtitle: "皇城遗韵与湖景轴线",
    intro: "龙亭适合用来理解开封作为古都的空间感，也适合作为城市慢游路线的核心节点。",
    longDescription:
      "龙亭一带有着较开阔的视野和更舒展的游览节奏。相比戏剧化的沉浸场景，这里更像是把古都秩序感慢慢铺开，适合散步、远望、拍照，也适合搭配湖边休息。若你偏爱相对安静的古城氛围，这里会很舒服。",
    tags: ["古都气质", "湖景", "散步", "拍照"],
    category: "historic-site",
    recommendedDuration: "1.5 到 2 小时",
    bestVisitTime: "上午或傍晚光线更柔和",
    location: "龙亭区",
    ticketHint: "节庆期间可能会有临时活动安排，建议提前确认",
    transportTip: "适合与清明上河园、铁塔公园同线安排。",
    highlights: ["视野开阔", "适合慢走与拍照", "与湖景结合感强"],
    tips: ["如果同行有老人或孩子，这里会比高强度步行景点更轻松。", "春秋两季的体感通常最好。"],
    heroImage: "/images/kaifeng/attractions/dragon-pavilion.svg",
    gallery: ["/images/kaifeng/attractions/dragon-pavilion.svg"],
    relatedSlugs: ["iron-pagoda", "qingming-riverside-garden", "city-wall-walk"],
    featured: true
  },
  {
    slug: "iron-pagoda",
    name: "铁塔",
    subtitle: "开封古塔意象最鲜明的一站",
    intro: "如果你喜欢古建筑与寺塔线条，铁塔是开封最值得专程去看的一处地标。",
    longDescription:
      "铁塔的魅力在于它非常凝练。没有过多喧闹的表达，却能用建筑本身的尺度、材质与岁月感留下深刻印象。适合和龙亭、公园散步路线一起安排，用较轻松的节奏感受开封的古都层次。",
    tags: ["古塔", "地标", "建筑爱好者"],
    category: "historic-site",
    recommendedDuration: "1 到 1.5 小时",
    bestVisitTime: "上午或天气清透的下午",
    location: "顺河回族区",
    ticketHint: "建议查看景区官方信息了解当日开放安排",
    transportTip: "更适合与龙亭或大相国寺拼成半日文化线。",
    highlights: ["地标性古塔", "历史感强", "适合安静游览"],
    tips: ["适合留一点时间在周边慢走，而不是只拍照即离开。", "夏季中午较晒，建议避开正午。"],
    heroImage: "/images/kaifeng/attractions/iron-pagoda.svg",
    gallery: ["/images/kaifeng/attractions/iron-pagoda.svg"],
    relatedSlugs: ["dragon-pavilion", "great-xiangguo-temple"],
    featured: true
  },
  {
    slug: "kaifeng-prefecture",
    name: "开封府",
    subtitle: "府衙文化与历史叙事体验",
    intro: "开封府更适合对历史人物、府衙文化和故事性表达感兴趣的游客。",
    longDescription:
      "和园林、寺塔不同，开封府的魅力更多在于叙事。它把想象中的古代府衙空间具象化，也更容易让第一次来到开封的人建立对城市历史角色的理解。适合作为经典一日游中的人文段落，与清明上河园形成互补。",
    tags: ["府衙", "故事感", "历史文化"],
    category: "culture",
    recommendedDuration: "1.5 到 2 小时",
    bestVisitTime: "中午前后或下午早些时候",
    location: "包公湖附近",
    ticketHint: "建议出发前查看景区官方信息",
    transportTip: "与清明上河园、鼓楼夜市衔接较自然。",
    highlights: ["府衙空间体验", "适合了解历史故事", "与湖区动线顺畅"],
    tips: ["如果当天还计划夜游，建议不要把前半段排得太满。", "旺季游览节奏可能偏快，留出机动时间更从容。"],
    heroImage: "/images/kaifeng/attractions/kaifeng-prefecture.svg",
    gallery: ["/images/kaifeng/attractions/kaifeng-prefecture.svg"],
    relatedSlugs: ["qingming-riverside-garden", "gulou-night-market", "bian-river-night-tour"],
    featured: true
  },
  {
    slug: "great-xiangguo-temple",
    name: "大相国寺",
    subtitle: "在热闹行程里留一段安静时间",
    intro: "大相国寺是让开封旅行慢下来的一站，适合放在一天中段或第二天早晨。",
    longDescription:
      "如果说清明上河园和夜市代表的是开封鲜活的一面，大相国寺则更像一段留白。它适合在较热闹的城市路线之间，给自己安排一段安静的呼吸时间。对于喜欢历史、建筑和寺院气质的游客来说，这里很容易留下好感。",
    tags: ["寺院", "静谧", "文化气质"],
    category: "culture",
    recommendedDuration: "1 到 1.5 小时",
    bestVisitTime: "上午",
    location: "鼓楼区附近",
    ticketHint: "现场安排可能会受节庆影响，建议提前确认",
    transportTip: "适合作为城市轻松游和二日行程的补充点。",
    highlights: ["节奏安静", "适合历史文化爱好者", "与城区串联方便"],
    tips: ["建议保持更轻声的游览节奏。", "可与周边美食或老街短暂停留搭配。"],
    heroImage: "/images/kaifeng/attractions/xiangguo-temple.svg",
    gallery: ["/images/kaifeng/attractions/xiangguo-temple.svg"],
    relatedSlugs: ["iron-pagoda", "gulou-night-market"],
    featured: true
  },
  {
    slug: "gulou-night-market",
    name: "鼓楼夜市",
    subtitle: "把夜游和宵夜连在一起的地方",
    intro: "如果想感受开封最接地气、最有人情味的一面，鼓楼夜市往往不会让人失望。",
    longDescription:
      "鼓楼夜市适合安排在一天的最后。这里不是只为了吃，而是为了感受夜晚的城市温度。人流、灯光、摊位与烟火气会把白天的历史感变成一种更轻松的旅行记忆。适合朋友、情侣、家庭，也适合第一次来到开封的人用最简单的方式感受在地生活。",
    tags: ["夜市", "烟火气", "宵夜", "轻松"],
    category: "food-area",
    recommendedDuration: "1 到 2 小时",
    bestVisitTime: "晚餐后到夜间",
    location: "鼓楼区",
    ticketHint: "以现场消费为主，具体营业情况以实际为准",
    transportTip: "适合接在开封府、汴河夜游或市中心散步之后。",
    highlights: ["夜晚氛围浓", "适合尝多样小吃", "行程收尾感很好"],
    tips: ["可以少量多次点单，留出尝试空间。", "节假日晚间人流较密集，建议提早一些到达。"],
    heroImage: "/images/kaifeng/attractions/gulou-night-market.svg",
    gallery: [
      "/images/kaifeng/attractions/gulou-night-market.svg",
      "/images/kaifeng/food/night-market.svg"
    ],
    relatedSlugs: ["bian-river-night-tour", "kaifeng-prefecture"],
    featured: true
  },
  {
    slug: "city-wall-walk",
    name: "古城墙漫步",
    subtitle: "用步行去感受城市轮廓",
    intro: "如果你更喜欢以散步理解一座城，城墙主题路线会是很好的补充。",
    longDescription:
      "开封的旅行不一定要一直在景区里。把城墙和城景散步加入行程，会更容易感受到古都的空间边界与生活气息。它适合安排在清晨或傍晚，作为高密度景点之间的过渡，也适合摄影与轻松约会型行程。",
    tags: ["散步", "城市感", "拍照"],
    category: "park",
    recommendedDuration: "45 分钟到 1.5 小时",
    bestVisitTime: "清晨或傍晚",
    location: "古城片区",
    ticketHint: "具体开放区域与当日安排请以现场信息为准",
    transportTip: "适合与龙亭、鼓楼片区灵活拼接。",
    highlights: ["适合慢走", "城市轮廓感清晰", "适合放松节奏"],
    tips: ["如果前一站步行较多，可把这一段改成短时散步。", "傍晚更适合拍照和纳凉。"],
    heroImage: "/images/kaifeng/attractions/city-wall.svg",
    gallery: ["/images/kaifeng/attractions/city-wall.svg"],
    relatedSlugs: ["dragon-pavilion", "gulou-night-market"],
    featured: false
  },
  {
    slug: "bian-river-night-tour",
    name: "汴河夜游",
    subtitle: "水岸灯影里的开封夜色",
    intro: "汴河主题夜游最适合放在想要气氛感的那一天，用更电影化的方式结束旅程。",
    longDescription:
      "夜晚的开封很适合把注意力从白天的历史叙事切换到氛围体验。汴河沿线、水岸灯光与夜间表演能让古城显得更柔和，也更有层次。对于情侣、摄影爱好者和想要更强旅行记忆点的游客来说，这会是一段很值得保留的体验。",
    tags: ["夜游", "水岸", "灯光", "氛围"],
    category: "night-tour",
    recommendedDuration: "1 到 2 小时",
    bestVisitTime: "日落后至夜间",
    location: "清明上河园及周边夜游片区",
    ticketHint: "夜间演出请提前确认场次",
    transportTip: "适合与清明上河园或鼓楼夜市组成完整夜游线。",
    highlights: ["灯影与水岸景观", "适合夜拍和约会", "与演出结合感强"],
    tips: ["如果当天还安排夜市，建议先看夜景再去吃夜宵。", "旺季和节庆期间安排可能有所调整。"],
    heroImage: "/images/kaifeng/attractions/bian-river.svg",
    gallery: [
      "/images/kaifeng/attractions/bian-river.svg",
      "/images/kaifeng/hero/night-river.svg"
    ],
    relatedSlugs: ["qingming-riverside-garden", "gulou-night-market"],
    featured: false
  }
];

export const attractionCategories = [
  { label: "全部", value: "all" },
  { label: "历史古迹", value: "historic-site" },
  { label: "文化体验", value: "culture" },
  { label: "夜游", value: "night-tour" },
  { label: "漫步公园", value: "park" },
  { label: "美食片区", value: "food-area" }
] as const;
