# 汴京行旅 · 开封旅游网站

一个以开封为主题的 Next.js 旅游网站示例，强调宋韵气质、路线决策、夜游体验与实用出行信息，适合作为中文旅游类前端作品集项目。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui 风格基础组件
- lucide-react
- Framer Motion

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：`http://localhost:3000`

## 生产检查

```bash
npm run lint
npm run build
```

## 页面结构

- `/` 首页
- `/attractions` 景点列表
- `/attractions/[slug]` 景点详情
- `/itineraries` 推荐路线
- `/food` 美食页
- `/travel-tips` 出行指南
- `/about-kaifeng` 认识开封

## 当前内容策略

- 当前版本使用本地 TypeScript mock data，方便后续接入 CMS、接口或多语言内容源。
- `public/images/kaifeng/**` 下的 SVG 图片均为占位素材，可直接替换为正式摄影图，不需要改动组件结构。
- 涉及票务、营业时间、演出场次等易变化信息，页面中均使用编辑式提醒，避免伪造精确信息。
- 站点级 URL 默认使用 `https://kaifeng-travel.vercel.app`，部署时可通过 `NEXT_PUBLIC_SITE_URL` 覆盖。

## 建议的下一步

- 替换占位图为正式摄影素材
- 接入真实地图服务
- 增加英文内容源或 i18n 能力
- 将 mock data 迁移到 CMS 或内容接口