const fs = require('fs');
const html = fs.readFileSync('/workspace/bot_api.html','utf8');
const h3Types = /<h3><a class="anchor" name="available-types"[\s\S]*?<\/h3>/;
const h3Methods = /<h3><a class="anchor" name="available-methods"[\s\S]*?<\/h3>/;
const mTypes = h3Types.exec(html);
const mMethods = h3Methods.exec(html);
  console.error('Header anchors not found');
  process.exit(1);
}
const idxTypesStart = mTypes.index + mTypes[0].length;
const idxMethodsHeader = mMethods.index;
const idxMethodsStart = mMethods.index + mMethods[0].length;
const secTypes = html.slice(idxTypesStart, idxMethodsHeader);
const secMethods = html.slice(idxMethodsStart);
const reH4 = /<h4><a class="anchor" name="[^"]+" href="#[^"]+"><i class="anchor-icon"><\/i><\/a>([^<]+)<\/h4>/g;
function collect(src, pred){
  const out=[]; let m;
  while((m = reH4.exec(src))){ const label=m[1]; if(pred(label)) out.push(label); }
  return out;
}
const types = collect(secTypes, t => /^[A-Z][A-Za-z0-9]*$/.test(t));
const methods = collect(secMethods, t => /^[a-z][A-Za-z0-9]*$/.test(t));
fs.writeFileSync('/workspace/types_order.clean.txt', types.join('\n'));
fs.writeFileSync('/workspace/methods_order.txt', methods.join('\n'));
console.log('types:', types.length, 'methods:', methods.length);
