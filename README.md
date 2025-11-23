# ZAGARO - 採用サイト

ZAGAROの採用・PR用 Webサイト

## 🚀 技術スタック

- **React 19** - UI フレームワーク
- **TypeScript** - 型安全性
- **Vite 6** - 高速ビルドツール
- **Tailwind CSS v4** - スタイリング
- **Lucide React** - アイコン

## 📁 プロジェクト構成

```
├── src/
│   ├── main.tsx          # エントリーポイント
│   ├── App.tsx           # ルートコンポーネント
│   ├── index.css         # グローバルスタイル（Tailwind含む）
│   ├── types.ts          # TypeScript型定義
│   └── components/       # Reactコンポーネント
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── ActivitySection.tsx
│       ├── CallToActionSection.tsx
│       └── Footer.tsx
├── public/               # 静的アセット（画像など）
├── index.html           # HTMLテンプレート
├── vite.config.ts       # Vite設定
├── tsconfig.json        # TypeScript設定
└── package.json         # 依存関係
```

## 🛠️ 開発

### 前提条件

- Node.js 20以上
- npm

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

ビルドされたファイルは `dist/` フォルダに出力されます。

## 🌐 GitHub Pages へのデプロイ

### 自動デプロイ（推奨）

1. GitHub リポジトリにプッシュ:
```bash
git add .
git commit -m "Setup for production"
git push origin main
```

2. GitHub で Pages を有効化:
   - リポジトリの **Settings** → **Pages**
   - **Source** で「**GitHub Actions**」を選択

3. 自動的にビルド＆デプロイされます
   - デプロイ後、`https://<username>.github.io/hp-1/` でアクセス可能

### リポジトリ名が異なる場合

`vite.config.ts` の `base` パスを変更してください：

```typescript
base: mode === 'production' ? '/<your-repo-name>/' : '/',
```

## 🎨 カスタマイズ

### フォント

Google Fonts から以下のフォントを使用：
- **Noto Sans JP** - 本文
- **Syncopate** - 見出し・英語
- **Bodoni Moda** - アクセント

### カラーパレット

- **Emerald** - メインカラー（アクセント）
- **Stone** - ベースカラー（背景・テキスト）
- **Black/White** - コントラスト

### カスタムアニメーション

`src/index.css` で定義：
- `animate-fade-in-up` - フェードイン＋上昇アニメーション
- `writing-vertical` - 縦書きテキスト

## 📝 ベストプラクティス

✅ **Vite の標準的なプロジェクト構成**
✅ **npm によるパッケージ管理（CDN依存なし）**
✅ **Tailwind CSS v4 の最新機能を使用**
✅ **TypeScript による型安全性**
✅ **GitHub Actions による自動デプロイ**
✅ **最適化されたビルド出力**

## 🔧 トラブルシューティング

### ビルドエラー

```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### スタイルが適用されない

- ブラウザのキャッシュをクリア
- `src/index.css` が `src/main.tsx` でインポートされているか確認

### GitHub Actions エラー

- **Actions** タブでログを確認
- Node.js バージョンを確認（v20推奨）
- `package-lock.json` が正しくコミットされているか確認

## 📄 ライセンス

Private プロジェクト

## 👥 開発者

ZAGARO Development Team

