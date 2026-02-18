import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const animalsRoot = path.join(__dirname, "..", "src", "pages", "animals");

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(fullPath, out);
    } else if (ent.isFile() && fullPath.endsWith(".jsx")) {
      out.push(fullPath);
    }
  }
  return out;
}

const replacements = [
  {
    re: /<th\s+className="wiki-th\s+wiki-common"\s*>\s*Common\s*<\/th>/g,
    to: '<th className="wiki-th"><span className="rarity-tag wiki-common">Common</span></th>',
  },
  {
    re: /<th\s+className="wiki-th\s+wiki-uncommon"\s*>\s*Uncommon\s*<\/th>/g,
    to: '<th className="wiki-th"><span className="rarity-tag wiki-uncommon">Uncommon</span></th>',
  },
  {
    re: /<th\s+className="wiki-th\s+wiki-rare"\s*>\s*Rare\s*<\/th>/g,
    to: '<th className="wiki-th"><span className="rarity-tag wiki-rare">Rare</span></th>',
  },
  {
    re: /<th\s+className="wiki-th\s+wiki-very-rare"\s*>\s*Very\s+Rare\s*<\/th>/g,
    to: '<th className="wiki-th"><span className="rarity-tag wiki-very-rare">Very Rare</span></th>',
  },
];

const files = walk(animalsRoot);
let changedFiles = 0;
let totalReplacements = 0;

for (const filePath of files) {
  const before = fs.readFileSync(filePath, "utf8");
  let after = before;

  for (const { re, to } of replacements) {
    const matches = after.match(re);
    if (matches) {
      totalReplacements += matches.length;
      after = after.replace(re, to);
    }
  }

  if (after !== before) {
    fs.writeFileSync(filePath, after, "utf8");
    changedFiles += 1;
  }
}

console.log(
  JSON.stringify(
    {
      animalsRoot,
      filesScanned: files.length,
      changedFiles,
      totalReplacements,
    },
    null,
    2
  )
);
