---
title: ディレクトリ構成
description: 本プロジェクトにおけるRemixのディレクトリ構成について
---

本プロジェクトのディレクトリ構成について説明します。

## ディレクトリ構成の特徴
### 1. ファイルの配置
- ファイルは原則/app以下に配置します。
- WebサイトとWebアプリケーションについては同じルーティング内で管理します。

### 2. ルーティング
- 詳しくは[Remixのルーティング](/reference/remix/routing)を参照してください。
- /app/routes直下にファイルもしくはディレクトリを配置することでルーティングが実現されます。
- routes
- 
```
/app
  ├── routes
  │   ├── about.tsx
  │   ├── contact.tsx
  │   └── webapp
  │       ├── dashboard.tsx
  │       └── profile.tsx
  └── components
      ├── about
      │   ├── Section1.tsx
      │   └── Section2.tsx
      ├── contact
      │   ├── Form.tsx
      │   └── Map.tsx
      └── webapp
          ├── dashboard
          │   ├── Chart.tsx
          │   └── Stats.tsx
          └── profile
              ├── Avatar.tsx
              └── Details.tsx
```

### コンポーネント
- コンポーネント(共通、各ページ固有問わず)は/app/components以下に配置します。
- components以下にページごとのディレクトリを作成し、その中にファイルを配置します。
- コンポーネントとして取り扱うのは以下のとおりです。
    - セクション
    - フォーム
    - レイアウト
- ボタンやカードなどはshadcn/uiを使用します。詳しくは[shadcn/ui](/reference/shadcn-ui)を参照してください。
