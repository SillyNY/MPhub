# 彼岸终曲 · BORDER OF DEATH

弗洛洛（Phrolova）非官方同人站。用关系档案、记忆碎片与回声，把"失亡彼岸"做成一个可以反复回来的空间。

> 我或曾梦见，与你亲密无间。醒来时发现，你我形同陌路。

## 技术栈(仍有相当的内容没有实现)

- Next.js 16（App Router）+ React 19
- TypeScript + Tailwind CSS 4
- Supabase（认证与数据）
- Anthropic SDK（角色对话）
- framer-motion / lucide-react

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 http://localhost:3000 查看。

## 环境变量

复制 `.env.example` 为 `.env.local` 并填入自己的值：

```bash
cp .env.example .env.local
```

| 变量 | 说明 |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 匿名公钥 |
| `ANTHROPIC_API_KEY` | Anthropic API Key（仅服务端使用） |

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 生产构建 |
| `pnpm start` | 运行生产构建 |
| `pnpm lint` | 代码检查 |

## 目录结构

```
src/
├─ app/            # 路由页面（首页、关系、对话、相册、留言、记忆、玩法、守护）
├─ components/     # UI 与业务组件
├─ lib/            # supabase 客户端、工具函数、常量
└─ types/          # 类型定义
public/images/     # 站点与画廊图片
```

## 部署

推荐 Vercel：导入仓库后配置上表环境变量即可。构建命令 `pnpm build`，输出由 Next.js 自动识别。

## 声明

非官方同人作品，与游戏官方无关。站内文字与素材仅供交流使用。
