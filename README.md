

# PreserveMark

PreserveMark is a markdown processing tool designed to convert markdown text to HTML while preserving specified sections intact.

## Installation

Clone the PreserveMark repository to your local machine:

```
git@github.com:saimdenizertunc/PreserveMark.git
cd PreserveMark
```


Then, install the required dependencies:

```
npm install
```

## Usage

```javascript
import compileWithRichMarkdown from './src/preserve-mark';

const rawString = "This is normal text. [[[This text will be preserved.]]] This is normal text again.";
const compiledString = compileWithRichMarkdown(rawString);

console.log(compiledString);
```

## API

### `compileWithRichMarkdown(str)`

Compiles a string with special markdown syntax, preserving blocks enclosed in '[[[' and ']]]'.

- `str` (string): The input string to compile.
- Returns: The compiled string.

## Contributing

Contributions, issues, and feature requests are welcome!
