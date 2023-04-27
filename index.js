import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { readSync, writeSync } from "to-vfile";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { reporter } from "vfile-reporter";

export default function retextSentenceSpacing() {
  return (tree, file) => {
    visit(tree, "ParagraphNode", (node) => {
      console.log(node);
    });
  };
}

const processor = unified()
  .use(remarkParse) // markdownを読み込み
  .use(remarkRehype) // rehypeに変換
  .use(rehypeStringify); // rehypeを文字列化

processor.process(readSync("example.md")).then(
  (file) => {
    console.error(reporter(file));
    file.extname = ".html";
    writeSync(file);
    console.log(file.value); // DEBUG: 結果をコンソールにも出力する file.toString()でもOK
  },
  (error) => {
    throw error;
  }
);
