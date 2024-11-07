---
title: 導入と技術的な説明
description: Remixの導入と技術的な説明
sidebar:
  order: 1
---

React Routerの上に構築されたRemixは、次の4つからなる。
1. A compiler
2. A server-side HTTP handler
3. A server framework
4. A browser framework

## コンパイラ
Remixのすべてはコンパイラから始まります：`remix vite:build`<br />
Viteを使うことで、次のようなものが作成されます
#### 1. サーバHTTPハンドラ
通常は`build/server/index.js`（設定可能）にあり、サーバ上でレンダリングできるようにすべてのルートとモジュールを一緒に含み、リソースに対する他のサーバサイドのリクエストを処理します。
#### 2. ブラウザビルド 
通常は`build/client/*`にあります。 これにはルートによる自動コード分割、フィンガープリントによるアセットインポート(CSSや画像など)などが含まれます。 ブラウザでアプリケーションを実行するために必要なもの。
#### 3. アセットマニフェスト
 クライアントとサーバーの両方がこのマニフェストを使用して、依存関係グラフ全体を把握します。 これは、最初のサーバーレンダリングでリソースをプリロードしたり、クライアント側の遷移でリソースをプリフェッチしたりするのに便利です。 

このようにしてRemixは、今日のWebアプリケーションで一般的なレンダリングとフェッチのウォーターフォールをなくすことができます。 これらのビルド成果物があれば、アプリケーションはJavaScriptが動作するあらゆるホスティングサービスにデプロイすることができます。

## HTTPハンドラとアダプタ

Remixはサーバ上で動作しますが、実際にはサーバではありません。 Node.jsの代わりに[Web Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)で構築されています。 これにより、RemixはVercel、Netlify、ArchitectなどのNode.jsサーバだけでなく、Cloudflare WorkersやDeno Deployのような非Node.js環境でも実行することができます。 

これがexpressアプリでRemixを実行したときの様子です
```
const remix = require("@remix-run/express");
+ const express = require("express");

const app = express();

+ app.all(
+  "*",
+  remix.createRequestHandler({
+   build: require("./build/server"),
  })
);
```