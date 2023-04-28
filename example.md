# Hello World

## Table of Content

## Install

A **example**.

## Use

More `text`.

## License

MIT

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a        | b        |        c |    d     |
| -------- | :------- | -------: | :------: |
| テキスト | テキスト | テキスト | テキスト |
| テキスト | テキスト | テキスト | テキスト |
| テキスト | テキスト | テキスト | テキスト |

## Tasklist

- [ ] to do
- [x] done

## コードブロック

```javascript
// Use remark to convert markdown into HTML string
const processedContent = await remark()
  .use(html, { sanitize: false })
  .use(gfm)
  //.use(() => genAttrsAdder("image", { loading: "lazy" }))
  .use(prism)
  .process(matterResult.content);
```

## テキスト例

以下はロレム・イプサムの一例です。

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## テーブル例

| **ヘッダー 1** | **ヘッダー 2** | **ヘッダー 3** |
| -------------- | -------------- | -------------- |
| テキスト       | テキスト       | テキスト       |
| テキスト       | テキスト       | テキスト       |
| テキスト       | テキスト       | テキスト       |
