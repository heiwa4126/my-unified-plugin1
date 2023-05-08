import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
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

/**
 * ヘッダのレベルを1つ下げる。
 * https://github.com/rehypejs/rehype の READMEにあったサンプル
 *
 * @this {import('unified').Processor}
 * @type {import('unified').Plugin<[], import('hast').Root>}
 */
function myRehypePluginToIncreaseHeadings() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (["h1", "h2", "h3", "h4", "h5"].includes(node.tagName)) {
        node.tagName = "h" + (Number(node.tagName.charAt(1)) + 1);
      }
    });
  };
}

const processor = unified()
  .use(remarkParse) // markdownを読み込み
  .use(remarkGfm) // autolink literals, footnotes, strikethrough, tables, tasklists 用
  // TODO:自前のremark pluginを書く
  .use(remarkRehype) // rehypeに変換
  .use(myRehypePluginToIncreaseHeadings)
  // TODO:自前のremhype pluginを書く
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
