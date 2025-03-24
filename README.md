# hoge-api

NestJSを使用したWebAPIアプリケーション

## 前提条件

- Node.js (v18以上)
- npm (v8以上)
- 環境変数 `DATABASE_URL` が設定済み
- PostgreSQLデータベースが接続可能な状態

## セットアップ

```bash
# 依存関係のインストール
npm install

# マイグレーションのリセットと実行
npx prisma migrate reset --force
```

## 起動

```bash
# 開発モード
npm run start:dev

# 本番モード
npm run build
npm run start:prod
```

デフォルトでは `http://localhost:3000` で起動します。ポートを変更する場合は環境変数 `PORT` を設定してください。

## API ドキュメント

Swagger UI: `/api/docs`

## 開発

```bash
# テスト
npm run test

# E2Eテスト
npm run test:e2e

# Prisma Studio (データベース管理)
npx prisma studio
```
