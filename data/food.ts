import type { FoodItem } from "@/types/food";

export const foodItems: FoodItem[] = [
  {
    slug: "guan-tang-bao",
    name: "灌汤包",
    category: "meal",
    intro: "开封旅行里最容易被优先安排的一口热气，适合当作正餐或早午餐。",
    whereToTry: "鼓楼周边、老城片区或景区附近餐馆",
    tips: ["刚上桌时注意温度", "适合作为路线中的正式用餐节点"],
    image: "/images/kaifeng/food/steamed-buns.svg"
  },
  {
    slug: "tongzi-ji",
    name: "桶子鸡",
    category: "meal",
    intro: "风味偏鲜香，适合与主食或其他开封小吃一起组合体验。",
    whereToTry: "老字号餐馆或城区人气餐厅",
    tips: ["更适合多人分食", "可以安排在午餐或晚餐"],
    image: "/images/kaifeng/food/tongzi-ji.svg"
  },
  {
    slug: "hua-sheng-gao",
    name: "花生糕",
    category: "dessert",
    intro: "甜点感较轻，适合作为伴手礼，也适合在逛景点之间补一点能量。",
    whereToTry: "老街特产铺、景区周边店铺",
    tips: ["适合买小份先尝", "方便作为返程伴手礼"],
    image: "/images/kaifeng/food/peanut-cake.svg"
  },
  {
    slug: "yangrou-kangmo",
    name: "羊肉炕馍",
    category: "snack",
    intro: "更偏路边小吃气质，适合在夜市或边走边逛时顺手来一份。",
    whereToTry: "鼓楼夜市及周边夜间摊点",
    tips: ["更适合夜晚吃", "建议搭配热饮或汤类更舒服"],
    image: "/images/kaifeng/food/yangrou-kangmo.svg"
  },
  {
    slug: "gulou-snack-street",
    name: "鼓楼夜市觅食",
    category: "night-market",
    intro: "与其说是一道菜，不如说是一整个开封夜晚的味觉体验。",
    whereToTry: "鼓楼夜市主街与周边巷口",
    tips: ["建议少量多次尝试", "高峰时段人多，越晚越热闹"],
    image: "/images/kaifeng/food/night-market.svg"
  }
];
