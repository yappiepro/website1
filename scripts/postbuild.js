import { copyFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distDir = join(__dirname, '..', 'dist')
const indexHtml = join(distDir, 'index.html')
const twoHundredHtml = join(distDir, '200.html')

if (existsSync(twoHundredHtml) && !existsSync(indexHtml)) {
  copyFileSync(twoHundredHtml, indexHtml)
  console.log('✓ Copied 200.html → index.html')
} else if (existsSync(indexHtml)) {
  console.log('✓ index.html already exists')
} else {
  console.error('✗ 200.html not found in dist/')
  process.exit(1)
}
