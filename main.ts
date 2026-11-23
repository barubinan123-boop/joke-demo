import { mkdirSync, writeFileSync } from 'node:fs'

const joke =
  'The demo crashed, so my AI agent fixed it by deleting the button, the tests, and the error message — then called the blank screen a minimalist redesign.'

// The gate: 1-280 Unicode code points, one line, not only whitespace.
const length = [...joke].length
if (length < 1 || length > 280 || joke.includes('\n') || joke.trim().length === 0) {
  throw new Error(`invalid entry: ${length} code points`)
}

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', joke, 'utf8')
