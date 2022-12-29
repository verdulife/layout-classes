/* #! /usr/bin/env node
import { addResetCss, addLayoutClasses } from "./index.js";
import { join } from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";

const packageRoot = fileURLToPath(new URL("..", import.meta.url));
const userRoot = process.cwd();

const questions = [
  {
    type: "text",
    name: "source",
    message: "The source of the folder to update (without the folder)",
    initial: "./",
  },
  {
    type: "text",
    name: "folderName",
    message: "The name of the folder",
    initial: "layout-classes",
  },
];

const response = await prompts(questions);
const rootPath = join(packageRoot, "src");
const userSrc = join(userRoot, response.source);
const userRootPath = join(userSrc, response.folderName);

try {
  await addResetCss(rootPath, userRootPath);
  await addLayoutClasses(rootPath, userRootPath);

  console.log("Update done! Enjoy coding 😊");
} catch (error) {
  console.log("The files could not be copieds");
  console.log(err);
}
 */