#! /usr/bin/env node
import { mkdir, readdir, copyFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";

const packageRoot = fileURLToPath(new URL("..", import.meta.url));
const userRoot = process.cwd();

const questions = [
  {
    type: "text",
    name: "source",
    message: "Where you want to copy the files",
    initial: "./",
  },
  {
    type: "select",
    name: "type",
    message: "Select css packages to import",
    choices: [
      { title: "Layout-classes + reset.css", value: "all" },
      { title: "Layout-classes only", value: "layout-classes" },
      { title: "reset.css only", value: "reset" },
    ],
    initial: 0,
  },
  {
    type: "confirm",
    name: "fonts",
    message: "Include custom title and text fonts?",
    initial: true,
  },
];

const response = await prompts(questions);
const rootPath = join(packageRoot, "src");
const userSrc = join(userRoot, response.source);
const userRootPath = join(userSrc, "layout-classes");

async function addResetCss() {
  await copyFile(join(rootPath, "reset.css"), join(userRootPath, "reset.css"));
}

async function addVaribles() {
  await copyFile(
    join(rootPath, "VARIABLES.md"),
    join(userRootPath, "VARIABLES.md")
  );

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
}

async function addLayoutClasses() {
  await copyFile(
    join(rootPath, "MODULES.md"),
    join(userRootPath, "MODULES.md")
  );
  await copyFile(join(rootPath, "all.css"), join(userRootPath, "all.css"));

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
}

async function addFonts() {
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
}

try {
  await mkdir(userRootPath, { recursive: true });

  await addVaribles();
  if (response.type === "reset") await addResetCss();
  if (response.type === "layout-classes") await addLayoutClasses();
  if (response.type === "all") {
    await addResetCss();
    await addLayoutClasses();
  }

  if (response.fonts) addFonts();

  console.log("All done! Enjoy coding 😊");
} catch (err) {
  console.log("The files could not be copieds");
  // console.log(err);
}

// export { addLayoutClasses, addResetCss };
