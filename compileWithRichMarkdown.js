// compileWithRichMarkdown.js
import { marked } from 'marked';

/**
 * @description A unique string used as a placeholder in the text processing.
 * This value should be unique and not occur in the input string.
 */
const preservationString = 'XYZ123'; 

/**
 * @function syntaxError
 * @description Constructs a syntax error message string.
 * @param {string} errorMsg - The specific syntax error message.
 * @returns {string} Full syntax error message.
 */
const syntaxError = (errorMsg) => `Syntax error: ${errorMsg}`;

/**
 * @function compileWithRichMarkdown
 * @description Compiles a string with special markdown syntax, preserving blocks enclosed in '[[[' and ']]]'.
 * @param {string} str - The input string to compile.
 * @returns {string} The compiled string.
 */
const compileWithRichMarkdown = (str) => {
    const splitOnOpen = str.split('[[[');
    const preMarkdown = splitOnOpen[0];
    let rawHtmlStrings = [];
  
    const handleSplitOpen = (element, index) => {
      const splitElement = element.split(']]]');
      if (splitElement.length > 2) {
        return syntaxError("too many closing ']]]'");
      }
      if (splitElement.length < 2) {
        return syntaxError("missing closing ']]]'");
      }
      rawHtmlStrings.push(splitElement[0]);
      return preMarkdown + preservationString + (index - 1) + preservationString + splitElement[1];
    };
  
    const updatedPreMarkdown = splitOnOpen.slice(1).map(handleSplitOpen).join('');
    
    if(typeof updatedPreMarkdown === 'string') {
      const postMarkdown = marked(updatedPreMarkdown, { mangle: false, headerIds: false });
  
      const handleSplitPostMarkdown = (element, index) => {
        if (index % 2 === 1) {
          return rawHtmlStrings[(index - 1) / 2];
        }
        return element;
      };
  
      const splitPostMarkdown = postMarkdown.split(preservationString).map(handleSplitPostMarkdown);
  
      return splitPostMarkdown.join('');
    }
    
    return updatedPreMarkdown; // This would return the syntax error message, if any.
  };
  
  export default compileWithRichMarkdown;