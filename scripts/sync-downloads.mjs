import { copyFile, mkdir, readdir } from "node:fs/promises"
import path from "node:path"

const sourceDir = path.join(process.cwd(), "download")
const publicDir = path.join(process.cwd(), "public", "download")

await mkdir(publicDir, { recursive: true })

const entries = await readdir(sourceDir, { withFileTypes: true })
const files = entries.filter((entry) => entry.isFile())

await Promise.all(
  files.map((file) => copyFile(path.join(sourceDir, file.name), path.join(publicDir, file.name))),
)

console.log(`Synced ${files.length} downloadable files.`)
