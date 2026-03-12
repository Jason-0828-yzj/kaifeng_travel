import type { Itinerary } from "@/types/itinerary";

export const itineraries: Itinerary[] = [
  {
    slug: "classic-song-day-trip",
    title: "一日经典宋文化线",
    subtitle: "把开封最代表性的历史气质浓缩成一天",
    audience: "第一次来开封、偏爱经典景点的游客",
    duration: "约 10 小时",
    summary:
      "适合第一次来开封的人，用一条效率高但不仓促的路线串起宋风场景、府衙文化、古塔与夜市。",
    tags: ["经典", "一日游", "宋文化"],
    stops: [
      {
        time: "09:00",
        title: "龙亭",
        detail: "从视野舒展的古都空间开始，让一天的节奏先慢下来。",
        transport: "建议打车或网约车抵达"
      },
      {
        time: "11:00",
        title: "清明上河园",
        detail: "把中午到下午留给宋式街景和沉浸式氛围。",
        mealSuggestion: "可在景区附近安排简餐，减少折返"
      },
      {
        time: "15:30",
        title: "开封府",
        detail: "用更有人物与故事感的一站补齐人文线索。",
        transport: "景区间建议短途打车衔接"
      },
      {
        time: "18:30",
        title: "鼓楼夜市",
        detail: "以夜市和小吃为这条路线收尾，让行程更有生活气。",
        mealSuggestion: "夜市适合少量多次尝试"
      }
    ],
    recommendedReason: "适合想在第一次旅行中快速建立对开封印象的人，兼顾文化、打卡和夜间体验。",
    coverImage: "/images/kaifeng/hero/classic-route.svg"
  },
  {
    slug: "family-friendly-route",
    title: "亲子轻松游",
    subtitle: "节奏更柔和，照顾步行压力与停留体验",
    audience: "家庭游客、带老人或孩子的旅行者",
    duration: "约 8 小时",
    summary:
      "把步行压力控制在更舒服的范围内，优先安排空间开阔、体验直观、容易休息的景点。",
    tags: ["亲子", "轻松", "家庭"],
    stops: [
      {
        time: "09:30",
        title: "清明上河园",
        detail: "上午人还没完全聚集时进入，体验感会更舒服。"
      },
      {
        time: "13:00",
        title: "龙亭湖周边",
        detail: "午后安排较舒缓的散步与休息，让孩子和老人有空档。",
        mealSuggestion: "可在景区周边安排正餐与休整"
      },
      {
        time: "15:30",
        title: "铁塔",
        detail: "以较短时长看一处开封标志性建筑，控制体力消耗。",
        transport: "建议短途打车，减少换乘"
      },
      {
        time: "18:00",
        title: "早点返程或自由晚餐",
        detail: "保留弹性，不强行塞满夜间行程。"
      }
    ],
    recommendedReason: "更适合追求轻松体验的人，不需要急赶行程，也能感受到开封的重点气质。",
    coverImage: "/images/kaifeng/hero/family-route.svg"
  },
  {
    slug: "night-food-route",
    title: "夜游美食线",
    subtitle: "把水岸灯影、夜间表演与开封夜市连成一段",
    audience: "情侣、朋友结伴、偏爱氛围感的游客",
    duration: "下午到夜间约 7 小时",
    summary:
      "适合把旅行重点放在傍晚之后的人，从轻松景点过渡到夜游与美食，整条路线更有电影感。",
    tags: ["夜游", "美食", "情侣"],
    stops: [
      {
        time: "15:00",
        title: "大相国寺",
        detail: "先用一段安静的文化时间把心情放缓。"
      },
      {
        time: "17:00",
        title: "清明上河园或周边夜游片区",
        detail: "傍晚进入，等待灯光和表演把气氛拉满。",
        mealSuggestion: "傍晚可先吃简餐，为夜市留胃口"
      },
      {
        time: "19:30",
        title: "汴河夜游",
        detail: "把夜色、水岸与城市灯影作为视觉高潮。",
        transport: "步行或短距离接驳为主"
      },
      {
        time: "21:00",
        title: "鼓楼夜市",
        detail: "用夜宵和城市烟火感结束这趟开封之夜。"
      }
    ],
    recommendedReason: "适合对氛围、夜景和在地生活更敏感的旅行者，比传统打卡路线更有情绪价值。",
    coverImage: "/images/kaifeng/hero/night-route.svg"
  }
];
