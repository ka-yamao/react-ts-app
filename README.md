### React、TypeScript 環境構築 その 1

- ブランチ：https://github.com/ka-yamao/react-ts-app/tree/etc1
- 内容：https://blog.local-c.com/archives/2590

### React、TypeScript 環境構築 その 2

- ブランチ：https://github.com/ka-yamao/react-ts-app/tree/etc2
- 内容：

### .prettierrc ファイルを作成する

- webpack を更新する前に、その 1 で設定していなかった.prettierrc ファイルを作成しておく

```
/react-ts-app/.prettierrc

{
  "semi": true,
  "singleQuote": true,
  "useTabs": true,
  "tabWidth": 2,
  "printWidth": 120,
  "trailingComma": "es5",
  "jsxBracketSameLine": false,
  "bracketSpacing": true,
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "useTabs": true,
        "tabWidth": 2
      }
    }
  ]
}
```

## webpack 3 から webpack 4 へアップデートする

- webpack4 をインストール

```
yarn add -D webpack webpack-cli webpack-dev-server

```

- webpack4 から mode を指定するみたい、`/react-ts-app/config/webpack.config.dev.js`の以下を追加、修正

```
module.exports = {
+ mode: "development",

```

```
/react-ts-app/config/webpack.config.dev.js

  {
    test: /\.css$/,
+   exclude: /node_modules/,
    use: [
```

```
/react-ts-app/config/webpack.config.dev.js
	plugins: [
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
-		new InterpolateHtmlPlugin(env.raw),
+		new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
```
