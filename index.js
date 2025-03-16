const MarkdownToBlocks = require('@tryfabric/martian');
const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
const markdown = data;
const blocks = MarkdownToBlocks.markdownToBlocks(markdown);
console.log(blocks);