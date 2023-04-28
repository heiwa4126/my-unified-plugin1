# my-unified-plugin1

unified の remark/rehype plugin を作ってみる練習。ESM。

## 手順

```bash
pnpm i
```

で準備。

```bash
pnpm start
# or
node index.js
```

で実行

## メモ : オプション

プラグインのオプションは

```javascript
export default function remarkGfm(options = {}) {
  //...
}
```

のように定義して

```javascript
.use(remarkGfm, {singleTilde: false})
```

のように使うらしい。

- [remark-gfm - npm](https://www.npmjs.com/package/remark-gfm#unifieduseremarkgfm-options)
- [remark\-gfm/index\.js at main · remarkjs/remark\-gfm](https://github.com/remarkjs/remark-gfm/blob/main/index.js#L15)

## TODO

いまのところ、不要なモジュールが package.json にあるので、最後にきれいにすること。

パラメータのいるプラグインはどう書くのか調べる。
