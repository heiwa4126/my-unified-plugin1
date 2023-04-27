import fs from "fs";
import { retext } from "retext";
import { reporter } from "vfile-reporter";
import retextSentenceSpacing from "./pligin1.js";

const buffer = fs.readFileSync("pluginexample.md");

retext()
  .use(retextSentenceSpacing)
  .process(buffer)
  .then((file) => {
    console.error(reporter(file));
  });
