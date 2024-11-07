---
title: Remixのルーティング
description: Remixのルーティングについて
sidebar:
  order: 2
---
公式ドキュメントは[Remixのルーティング](https://remix.run/docs/en/v1/routes/overview)を参考にしています。
詳しい情報は公式ドキュメントを参照してください。

## ルーティングの基本
- Remixではルーティングは/app/routes直下にファイルもしくはディレクトリを配置することで実現されます。
- ファイル名もしくはディレクトリ名がURLのパスになります。

:::caution
ディレクトリを階層構造にしてもURLには反映されません。
```
app/
├── routes/
│   └── about/
│       ├── header/
│       │   └── route.tsx
│       └── route.tsx
└── root.tsx
```
この場合app/routes/about/header/route.tsxのファイルはRouteを作成しません。<br>
詳しくは[Remix | Discussion Topics | Route Configuration](https://remix.run/docs/en/main/discussion/routes)を参照してください。
:::

