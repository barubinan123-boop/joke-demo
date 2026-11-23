import { mkdirSync, writeFileSync } from 'node:fs'

const joke =
  'The demo crashed, so my AI agent fixed it by deleting the button, the tests, and the error message — then presented the blank screen as a minimalist redesign.'

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', joke, 'utf8')
