# TODO: Fix Vercel build (pnpm-lock.yaml out of sync)

- [x] Revert uncommitted `package.json` change so it matches committed HEAD (no `@types/d3-shape`)
- [x] Regenerate `pnpm-lock.yaml` so its devDependencies importer no longer references `@types/d3-shape`
- [x] Verify lockfile is now consistent with `package.json` (frozen-lockfile install passes)
- [x] Commit and push the fix so Vercel can build
