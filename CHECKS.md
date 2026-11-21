# Local checks — poem-permission-3 (2026-11-21 ~10:32 WIB)

- Entrypoint: main.ts (Node, fixed poem string, writes /output/entry.txt).
- Determinism: run twice to separate dirs, `cmp` identical — PASS (before and after the second edit).
- Gate (1–280 Unicode code points, non-whitespace UTF-8): final text 212 chars / 214 bytes, non-blank — PASS.
- Output file mode 0644 (chmod in code) — PASS.
- No network, no randomness, no clock — PASS by inspection.
- Kit local grade: none exists for this competition (program/v1, server grades);
  parent runs `makefun check` with repo + transcripts.
- Node version: local node v24.22.1; grader uses Node 22.23.4. Code uses only
  node:fs + template literal + `??` — compatible with Node 22 type stripping.
- Quota note (from parent): 1 submission left today for this competition —
  this is the last shot today; submit before 13:35 WIB deadline.
