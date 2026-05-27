import { mkdir, readFile, rename, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"

const dataDir = process.env.VERCEL ? join(tmpdir(), "christbrand-data") : join(process.cwd(), "data")

async function ensureFile(path: string, fallback: unknown) {
  await mkdir(dirname(path), { recursive: true })

  try {
    await readFile(path, "utf8")
  } catch {
    await writeJsonFile(path, fallback)
  }
}

export async function readJson<T>(filename: string, fallback: T): Promise<T> {
  const path = join(dataDir, filename)
  await ensureFile(path, fallback)
  return JSON.parse(await readFile(path, "utf8")) as T
}

export async function writeJson<T>(filename: string, value: T) {
  const path = join(dataDir, filename)
  await writeJsonFile(path, value)
}

async function writeJsonFile<T>(path: string, value: T) {
  await mkdir(dirname(path), { recursive: true })
  const tmpPath = `${path}.${Date.now()}.tmp`
  await writeFile(tmpPath, JSON.stringify(value, null, 2), "utf8")
  await rename(tmpPath, path)
}
