import fs from 'fs/promises';
import path from 'path';

const dir = path.resolve(process.cwd(), 'src', 'pages', 'animals', 'class1');

const replacements = [
  // color links in TOC
  {re: /style=\{\s*\{\s*color:\s*'(#6fb2e6)'\s*\}\s*\}/g, rep: 'className="text-[$1]"'},
  {re: /style=\{\s*\{\s*color:\s*'#6fb2e6'\s*\}\s*\}/g, rep: 'className="text-[#6fb2e6]"'},
  // references / ol lists
  {re: /style=\{\s*\{\s*paddingLeft:\s*'20px'\s*,\s*marginBottom:\s*'30px'\s*,\s*color:\s*'(#6fb2e6)'\s*\}\s*\}/g, rep: 'className="pl-5 mb-8 text-[$1]"'},
  {re: /style=\{\s*\{\s*paddingLeft:\s*'20px'\s*,\s*marginBottom:\s*'30px'\s*\}\s*\}/g, rep: 'className="pl-5 mb-8"'},
  // small font / italic
  {re: /style=\{\s*\{\s*fontSize:\s*'0.8rem'\s*,\s*fontStyle:\s*'italic'[^}]*\}\s*\}/g, rep: 'className="text-[0.8rem] italic mt-2 text-[#888]"'},
  {re: /style=\{\s*\{\s*fontSize:\s*'0.85rem'\s*\}\s*\}/g, rep: 'className="text-[0.85rem]"'},
  // generic margins/padding
  {re: /style=\{\s*\{\s*marginTop:\s*'20px'\s*\}\s*\}/g, rep: 'className="mt-5"'},
  {re: /style=\{\s*\{\s*marginBottom:\s*'30px'\s*\}\s*\}/g, rep: 'className="mb-8"'},
  {re: /style=\{\s*\{\s*marginTop:\s*'8px'\s*\}\s*\}/g, rep: 'className="mt-2"'},
  // images with explicit pixel sizes
  {re: /style=\{\s*\{\s*width:\s*'268.4px'\s*,\s*height:\s*'134.2px'\s*,\s*objectFit:\s*'cover'[^}]*\}\s*\}/g, rep: 'className="w-[268.4px] h-[134.2px] object-cover"'},
  {re: /style=\{\s*\{\s*width:\s*'146px'\s*,\s*height:\s*'165px'\s*,\s*objectFit:\s*'cover'\s*,\s*borderRadius:\s*'2px'\s*\}\s*\}/g, rep: 'className="w-[146px] h-[165px] object-cover rounded"'},
  {re: /style=\{\s*\{\s*width:\s*'500px'\s*,\s*height:\s*'444px'\s*,\s*objectFit:\s*'contain'\s*\}\s*\}/g, rep: 'className="w-[500px] h-[444px] object-contain"'},
  {re: /style=\{\s*\{\s*width:\s*'100%'\s*\}\s*\}/g, rep: 'className="w-full"'},
  // small icon images
  {re: /style=\{\s*\{\s*width:\s*'18px'\s*,\s*height:\s*'18px'\s*,\s*verticalAlign:\s*'middle'\s*,\s*marginRight:\s*'6px'\s*\}\s*\}/g, rep: 'className="inline-block w-[18px] h-[18px] align-middle mr-1.5"'},
  {re: /style=\{\s*\{\s*width:\s*'15px'\s*,\s*height:\s*'15px'\s*\}\s*\}/g, rep: 'className="w-[15px] h-[15px]"'},
  // display inline-block
  {re: /style=\{\s*\{\s*display:\s*'inline-block'\s*\}\s*\}/g, rep: 'className="inline-block"'},
  // table cell flex
  {re: /style=\{\s*\{\s*display:\s*'flex'\s*,\s*justifyContent:\s*'center'\s*,\s*alignItems:\s*'center'\s*\}\s*\}/g, rep: 'className="flex justify-center items-center"'},
  // headings using styles.h2 pattern -> use explicit utilities
  {re: /<h3([^>]*)style=\{\s*\.\.\.styles\.h2[^}]*fontSize:\s*'1.2rem'[^}]*\}>/g, rep: '<h3$1 className="wiki-h3 text-[1.2rem] mt-2 border-b-0">'},
  // list with listStyleType none & color
  {re: /<ol[^>]*style=\{\s*\{\s*paddingLeft:\s*'25px'\s*,\s*color:\s*'#6fb2e6'\s*\}\s*\}[^>]*>/g, rep: '<ol className="pl-6 text-[#6fb2e6]">'},
];

async function run(){
  const files = await fs.readdir(dir);
  const jsx = files.filter(f => f.endsWith('.jsx'));
  let totalChanged = 0;

  for(const file of jsx){
    const p = path.join(dir, file);
    let content = await fs.readFile(p, 'utf8');
    let original = content;
    for(const r of replacements){
      content = content.replace(r.re, r.rep);
    }
    if(content !== original){
      await fs.writeFile(p, content, 'utf8');
      console.log('Updated', file);
      totalChanged++;
    }
  }
  console.log('Done. Files updated:', totalChanged);
}

run().catch(err=>{ console.error(err); process.exit(1); });
