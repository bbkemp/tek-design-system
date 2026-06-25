# RAG inbox — drop zone for unsorted assets

Drop anything in here — PDFs, transcripts, slide decks, screen photos, vendor docs, competitive analyses. Then run `/rag-intake` and the skill will sort them into the right `rag/sources/<product>/uploads/<class>/` folders (or `audits/competitive/` for comparison material).

Everything in this folder except this README and `.gitkeep` is gitignored — drops will not appear in `git status`. After `/rag-intake` runs, this folder should be empty again.

See [`.claude/skills/rag-intake/SKILL.md`](../../.claude/skills/rag-intake/SKILL.md) for the full routing rules.
