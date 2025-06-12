# ポートフォリオサイト

## 公開ページ
<https://yui19278.com/>  
※サーバが停止している場合は、静的ミラー版の <https://yui19278.github.io/> をご覧ください（静的サイトのためアクセスカウンターは動作しません）。

## 概要
趣味開発と実務経験で培った技術をアウトプットするために制作したポートフォリオサイトです。  
- **フロントエンド**: Astro  
- **バックエンド**: Scala（アクセスカウンター API）  
- **インフラ**: Docker（MySQL）、Raspberry Pi（Nginx＋sbt）、Cloudflare Tunnel  

## 起動方法

### フロントエンド
```bash
npm ci
npm run dev  
```
### バックエンド
```bash
cd backend
sbt compile
sbt run
```
