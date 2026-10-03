# Portfolio

Run: `npm install && npm run dev`. Build: `npm run build`.

Where to edit (UI components never need touching):
- Name, links, email, hero text, skills, education, about, experience: `content/site.ts`
- Projects (add / remove / change status / GitHub URL / screenshots): `content/projects.ts`
- Engineering notes: `content/notes.ts`
- Resume: replace `public/resume/resume.pdf` (path set in `content/site.ts`)
- Screenshots: put images in `public/shots/` and list them in the project's `screenshots`
- Anything set to "PLACEHOLDER" is hidden or flagged until replaced

## Redesign: where things live
- `content/journey.ts`: nav, hero signal links, pipeline stages, engineering decisions, "what broke" incidents, currently building, next, closing line
- `content/projects.ts`: `tier` (featured / selected / other / experiment) sets how prominent a project is; `nodes` = wallet architecture chain; `flow` = step strip on a detail page

## After the refactor (current structure)
- `content/projects.ts`: the 3 built projects (Wallet case study sections live in `caseStudy`; add `image: "/diagrams/x.png"` to show a real diagram)
- `content/concepts.ts`: unbuilt ideas (kept separate from built work)
- `content/proof.ts`: "Engineering proof" items. Only list what exists in code
- `content/journey.ts`: nav, 4 journey milestones, closing line
- `content/site.ts`: name, links, hero text, About
