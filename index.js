// index.js
import compileWithRichMarkdown from './compileWithRichMarkdown';

const rawString = "This is normal text. [[[This text will be preserved.]]] This is normal text again.";
const compiledString = compileWithRichMarkdown(rawString);

console.log(compiledString);
