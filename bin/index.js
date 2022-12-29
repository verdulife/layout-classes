#! /usr/bin/env node
import { mkdir, readdir, copyFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const argSrc = process.argv[2];

if (!argSrc) {
  console.error("You need to pass a source to copy the files.");
  process.exit(1);
}

const packageRoot = dirname(fileURLToPath(import.meta.url));
console.log(resolve(".."));
console.log(process.env.PWD);

/* const userRoot = process.env.PWD;
const userSrc = join(userRoot, argSrc); */

/* try {
  const rootPath = join(packageRoot, "src");
  const userRootPath = join(userSrc, "layout-classes");

  await mkdir(userRootPath, { recursive: true });

  const rootFiles = await readdir(rootPath);
  rootFiles.forEach((el) => {
    const isFile = el.includes(".");
    if (isFile) {
      copyFile(join(rootPath, el), join(userRootPath, el));
    }
  });

  await mkdir(join(userRootPath, "modules"), {
    recursive: true,
  });

  const modulesFiles = await readdir(join(rootPath, "modules"));
  modulesFiles.forEach((el) => {
    const isFile = el.includes(".");
    if (isFile) {
      copyFile(
        join(rootPath, "modules", el),
        join(userRootPath, "modules", el)
      );
    }
  });

  await mkdir(join(userRootPath, "variables", "utils"), {
    recursive: true,
  });

  const variablesFiles = await readdir(join(rootPath, "variables"));
  variablesFiles.forEach((el) => {
    const isFile = el.includes(".");
    if (isFile) {
      copyFile(
        join(rootPath, "variables", el),
        join(userRootPath, "variables", el)
      );
    }
  });
  const utilsFiles = await readdir(join(rootPath, "variables", "utils"));
  utilsFiles.forEach((el) => {
    const isFile = el.includes(".");
    if (isFile) {
      copyFile(
        join(rootPath, "variables", "utils", el),
        join(userRootPath, "variables", "utils", el)
      );
    }
  });

  await mkdir(join(userRootPath, "fonts"), {
    recursive: true,
  });

  const fontsFiles = await readdir(join(rootPath, "fonts"));
  fontsFiles.forEach((el) => {
    const isFile = el.includes(".");
    if (isFile) {
      copyFile(join(rootPath, "fonts", el), join(userRootPath, "fonts", el));
    }
  });

  console.log("Copied!");
} catch (err) {
  console.log("The files could not be copieds");
  console.log(err);
} */
