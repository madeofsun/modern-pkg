import path from "node:path";
import sh from "shelljs";
import { globby } from "globby";

process.env.FORCE_COLOR = "1";
sh.config.verbose = true;
sh.config.fatal = true;

process.chdir(path.resolve(import.meta.dirname, ".."));

const packages = await globby("pkg-*", { onlyDirectories: true });
const consumerLibs = await globby("consumer-lib-*", { onlyDirectories: true });
const consumers = await globby(["consumer-*", "!consumer-lib-*"], {
  onlyDirectories: true,
});

for (const pkg of packages) {
  sh.cd(pkg);
  sh.exec(`npm i`);
  sh.exec(`npm run build`);
  sh.exec(`npm pack`);
  sh.cd("..");
}

for (const consumerLib of consumerLibs) {
  sh.cd(consumerLib);
  sh.rm("-f", "package-lock.json");
  for (const pkg of packages) {
    sh.rm("-rf", `./node_modules/${pkg}`);
  }
  sh.exec(`npm i`);
  sh.exec(`npm run build`);
  sh.exec(`npm pack`);
  sh.cd("..");
}

for (const consumer of consumers) {
  sh.cd(consumer);
  sh.rm("-f", "package-lock.json");
  for (const pkg of packages) {
    sh.rm("-rf", `./node_modules/${pkg}`);
  }
  for (const consumerLib of consumerLibs) {
    sh.rm("-rf", `./node_modules/${consumerLib}`);
  }
  sh.exec(`npm i`);
  sh.exec(`npx tsc`);
  sh.exec(`npm run build`);
  sh.cd("..");
}
